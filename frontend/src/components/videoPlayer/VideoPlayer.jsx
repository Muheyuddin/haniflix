import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

import io from "socket.io-client";
import { useSelector } from "react-redux";
import SocketContext from "../../context/SocketContext";

const VideoPlayer = ({ videoId, videoUrl }) => {
  const [playtime, setPlaytime] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const authReducer = useSelector((state) => state.auth);

  const { socket } = React.useContext(SocketContext);

  //time tracker for emitter
  const lastEmitTimeRef = useRef(0);

  // Load saved playtime from localStorage on component mount
  useEffect(() => {
    const savedPlaytime = parseFloat(
      localStorage.getItem(`videoPlaytime_${videoId}`)
    );
    if (!isNaN(savedPlaytime) && savedPlaytime <= duration) {
      setPlaytime(savedPlaytime);
      setSeekTime(savedPlaytime);
      playerRef.current.seekTo(savedPlaytime);
    }
  }, [videoId, duration]);

  useEffect(() => {
    if (!socket) return;

    const watchedPercentage = Math.floor((playtime / duration) * 100);

    const currentTime = Date.now();
    const timeDifference = currentTime - lastEmitTimeRef.current;

    if (!isNaN(watchedPercentage)) {
      // Check if the last emit was more than 5 seconds ago
      if (timeDifference > 5 * 1000) {
        socket?.emit("updateMovieProgress", {
          movieId: videoId,
          watchedPercentage,
          userId: authReducer?.user?._id,
        });
        // Update the last emit time
        lastEmitTimeRef.current = currentTime;
      }
    }

    return () => {
      const watchedPercentage = Math.floor((playtime / duration) * 100);

      if (!isNaN(watchedPercentage)) {
        socket?.emit("updateMovieProgress", {
          movieId: videoId,
          watchedPercentage,
          userId: authReducer?.user?._id,
        });
      }
    };
  }, [playtime, duration, socket]);

  // Set the video duration once it's available
  const handleDuration = (videoDuration) => {
    setDuration(videoDuration);
  };

  // Update playtime in state and localStorage on video progress
  const handleProgress = ({ playedSeconds }) => {
    setPlaytime(playedSeconds);

    if (!playerRef.current.isSeeking) {
      setSeekTime(playedSeconds);
      localStorage.setItem(
        `videoPlaytime_${videoId}`,
        playedSeconds.toString()
      );
    }
  };

  // Handle seeking
  const handleSeekChange = (e) => {
    setSeekTime(parseFloat(e.target.value));
  };

  const handleSeek = () => {
    playerRef.current.seekTo(seekTime);
    setPlaytime(seekTime);
    localStorage.setItem(`videoPlaytime_${videoId}`, seekTime.toString());
  };

  // Handle pause
  const handlePause = () => {
    localStorage.setItem(`videoPlaytime_${videoId}`, playtime.toString());
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        controls
        onDuration={handleDuration}
        onProgress={handleProgress}
        onPause={handlePause}
        playing
        width="100%"
        height="95vh"
        playbackRate={1.0}
        progressInterval={1000}
      />
      <input
        type="range"
        min={0}
        max={duration}
        value={seekTime}
        onChange={handleSeekChange}
        onMouseUp={handleSeek}
      />
    </div>
  );
};

export default VideoPlayer;
