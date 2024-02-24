import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ThumbUp,
  Check,
  ThumbDown,
} from "@mui/icons-material";
import { AiOutlinePlus } from "react-icons/ai";
import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
  useDislikeMovieMutation,
  useGetMovieQuery,
  useLikeMovieMutation,
} from "../../store/rtk-query/moviesApi";
import { useAddMovieToDefaultListMutation } from "../../store/rtk-query/listsApi";

import CircularProgress from "@mui/material-next/CircularProgress";
import { addClassNames } from "../../store/utils/functions";
import useResponsive from "../../hooks/useResponsive";

import moviePlaceHolderSvg from "../../Assets/svgs/moviePlaceholder.svg";
import { useGetGenresQuery } from "../../store/rtk-query/genresApi";

import {
  PlayIcon,
  DolbyLogo,
  HeartIcon,
  HeartIconFilled,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "../../Assets/svgs/tsSvgs";

import { debounce } from "lodash";

const api_url = import.meta.env.VITE_APP_API_URL;

type MovieListItemProps = {
  movieId: number;
  movieObj?: any;
  refetchFn?: () => {};
  onHover?: (movieId: string) => {};
  layoutType?: "carousel" | "grid";
  isActive: boolean;
};

export default function MovieListItem({
  movieId,
  movieObj,
  onHover,
  layoutType,
  refetchFn,
}: MovieListItemProps) {
  // const [isHovered, setIsHovered] = useState<boolean>(false);
  const [movie, setMovie] = useState<any>({});

  const [isLike, setIsLike] = useState<boolean | null>(null);
  const [trailer, setTrailer] = useState<string>("");
  const navigate = useNavigate();

  const [likeMovie, likeMovieState] = useLikeMovieMutation();
  const [dislikeMovie, dislikeMovieState] = useDislikeMovieMutation();
  const [addToMyList, addToMyListState] = useAddMovieToDefaultListMutation();

  // const { isMobile } = useResponsive()
  const isMobile = React.useRef(window.matchMedia("(pointer: coarse)").matches);
  const {
    data: movieData,
    isLoading: movieDataLoading,
    refetch,
    error,
  } = useGetMovieQuery(movieId, {
    //skip if movieObj is defined
    skip: movieObj,
  });

  const { data: genresData, isLoading: genresLoading } =
    useGetGenresQuery(null);

  const debouncedOnHover = React.useCallback(
    debounce((movie) => {
      onHover?.(movie);
    }, 300),
    [] // Ensure it only gets created once
  );

  const [isDivExpanded, setIsDivExpanded] = React.useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const div = entries[0].target;
      const isExpanded = div.clientWidth > 200; // Check if width is greater than 200px
      if (isExpanded !== isDivExpanded) {
        // Only update if state needs to change
        setIsDivExpanded(isExpanded);
      }
    });

    observer.observe(containerRef.current); // Observe the div

    return () => observer.disconnect(); // Clean up on unmount
  }, [isDivExpanded]);

  // const isMobile = useRef(window.matchMedia('(pointer: coarse)').matches); // Detect mobile early
  const hoverTimer = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  // Pointer events for modern devices
  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
    clearTimeout(hoverTimer.current); // Clear any potential ongoing timers
    debouncedOnHover(movie);
  }, [debouncedOnHover, movie]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    hoverTimer.current = setTimeout(() => {
      // Simulate hover end after a short delay to handle overlapping interactions
      if (isHovered) {
        // Check if the state hasn't already changed
        setIsHovered(false);
      }
    }, 300);
  }, [debouncedOnHover, movie, isHovered]);

  // Touch events as fallback
  const handleTouchStart = useCallback(
    (event) => {
      event.preventDefault(); // Prevent default touch behavior if needed
      setIsHovered(true);
      clearTimeout(hoverTimer.current);
      debouncedOnHover(movie);
    },
    [debouncedOnHover, movie]
  );

  const handleTouchEnd = useCallback(() => {
    hoverTimer.current = setTimeout(() => {
      if (isHovered) {
        setIsHovered(false);
      }
    }, 300);
  }, [debouncedOnHover, movie, isHovered]);

  const imageToshow = React.useMemo(() => {
    if (isDivExpanded) {
      return movie?.imgTitle ? movie?.imgTitle : moviePlaceHolderSvg;
    }

    // if (isHovered) {
    //     return movie?.imgTitle ? movie?.imgTitle : moviePlaceHolderSvg
    // }

    return movie?.img ? movie?.img : moviePlaceHolderSvg;
  }, [movie, isHovered, isDivExpanded]);

  useEffect(() => {
    if (movieObj) {
      setMovie(movieObj);
    }

    if (!movieData) return;
    setMovie(movieData);
  }, [movieData, movieObj]);

  const showSwal = (title, message, type) => {
    Swal.fire({
      title: title ?? "",
      text: message,
      icon: type,
    });
  };

  const applyLikeInFrontend = (action: "like" | "dislike") => {
    setIsLike((cur) => {
      if (cur == null && action == "like") return true;
      if (cur == null && action == "dislike") return false;
      if (cur == true && action == "like") return null;
      if (cur == true && action == "dislike") return false;
      if (cur == false && action == "like") return true;
      if (cur == false && action == "dislike") return null;
    });
  };

  const onLikeMovie = async () => {
    const res = await likeMovie(movie?._id);

    if (!res?.data) {
      showSwal("Error Liking movie", "", "error");
      return;
    }
    // applyLikeInFrontend("like");
    if (refetchFn) {
      refetchFn();
    } else {
      refetch?.();
    }
  };

  const onDislikeMovie = async () => {
    const res = await dislikeMovie(movie?._id);

    if (!res?.data) {
      showSwal("Error disliking movie", "", "error");
      return;
    }

    // applyLikeInFrontend("dislike");
    if (refetchFn) {
      refetchFn();
    } else {
      refetch?.();
    }
  };

  const onAddToList = async () => {
    const res = await addToMyList(movie?._id);

    if (!res?.data) {
      showSwal("Error encountered", "", "error");
      return;
    }
    if (refetchFn) {
      refetchFn();
    } else {
      refetch?.();
    }
    //  showSwal("Added to list", '', 'success')
  };

  const renderGenres = () => {
    let genreTextArr = [];

    //movie genres Array[] can be just an _id or the full mongoDb document for genre

    if (movie?.genre?.[0]?._id) {
      genreTextArr = movie?.genre
        ?.map((genreObj) => {
          return genreObj?.title;
        })
        .filter((text) => text != undefined);
    } else {
      genreTextArr = movie?.genre
        ?.map((genreId) => {
          const genreObj = genresData?.genres?.find((_genre) => {
            return genreId == _genre?._id;
          });

          return genreObj?.title;
        })
        .filter((text) => text != undefined);
    }

    return (
      <div className="flex text-[9px] flex-wrap space-x-[3px]">
        {genreTextArr?.map((text, index) => {
          return (
            <div key={index} className="flex items-center">
              <div className="capitalize">{text}</div>
              <div className="ml-[3px] font-bold">
                {index + 1 !== genreTextArr.length ? (
                  <div className="h-[2px] w-[2px] bg-[#fff] rounded-lg" />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderSideButtons = () => {
    if (layoutType == "grid") return;

    //like buttons
    return (
      <div className="side-buttons absolute right-3 top-0 bottom-0 z-[1000] flex flex-col space-x-1 space-y-[4px] justify-end items-center pb-[17px]">
        <div
          onClick={() => {
            onLikeMovie();
          }}
          className="cursor-pointer ml-[3.5px]"
        >
          {likeMovieState?.isLoading ? (
            <CircularProgress color="inherit" style={{}} size={14} />
          ) : (
            <>
              {movie?.currentUserLiked ? (
                <div className="icon-circle">
                  <ThumbUp className="!text-[10px] " />
                </div>
              ) : (
                <div className="icon-circle">
                  <div className="scale-[0.4]">
                    <ThumbsUpIcon />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div
          onClick={() => {
            onDislikeMovie();
          }}
          className="cursor-pointer"
        >
          {dislikeMovieState?.isLoading ? (
            <CircularProgress color="inherit" style={{}} size={14} />
          ) : (
            <>
              {movie?.currentUserDisliked ? (
                <div className="icon-circle">
                  <ThumbDown className="!text-[10px] " />
                </div>
              ) : (
                <div className="icon-circle">
                  <div className="scale-[0.4]">
                    <ThumbsDownIcon />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="cursor-pointer" onClick={onAddToList}>
          {addToMyListState?.isLoading ? (
            <CircularProgress color="inherit" style={{}} size={14} />
          ) : (
            <>
              {movie?.isInDefaultList ? (
                <div className="scale-[0.73]">
                  <HeartIconFilled />
                </div>
              ) : (
                <div className="scale-[0.73]">
                  <HeartIcon />
                </div>
              )}
            </>
          )}
        </div>
        {/* play button */}
        <Link
          to={`/watch/${movie._id}`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <div
            className={addClassNames(
              "h-[43px] w-[43px] bg-[#FFFFFF33] flex",
              "border border-[#FFFFFF33] rounded-[50%] items-center justify-center"
            )}
          >
            <div className="scale-75">
              <PlayIcon />
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div
        ref={containerRef}
        className={addClassNames(
          "listItem relative",
          "h-[200px] rounded-[3px]",
          // isMobile ? '' : 'hover:scale-[1.25]',
          layoutType == "grid" ? "!w-[135px] cursor-pointer" : "!w-full"
        )}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={imageToshow}
          alt=""
          className="rounded-[3px] transition-all duration-200"
        />

        <div
          style={{
            background: "rgb(0, 0, 0, 0.5)",
            position: "absolute",
          }}
          className={addClassNames(
            "top-0 bottom-0 right-0 left-0 z-[200] details "
          )}
        >
          <div
            style={{
              // background: "yellow",
              // height: "50%",
              position: "absolute",
              //   overflow: "hidden",
              bottom: 0,
              textOverflow: "ellipsis",
              fontSize: 10,
              lineHeight: 1.3,
              margin: 5,
            }}
          >
            <Link
              to={`/watch/${movie._id}`}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <div className="flex flex-col max-w-[260px] ">
                <div style={{}}>
                  <div className="font-[500] text-[11.5px] mt-[4px] mb-[1px]">
                    {movie.title}
                  </div>
                  <div
                    className={addClassNames(
                      "flex items-center space-x-[5px]",
                      layoutType == "grid" ? "!hidden" : ""
                    )}
                  >
                    <div>{movie?.year}</div>
                    <div className="h-[10px] w-[1px] bg-[#fff]" />
                    {movie?.ageRating ? (
                      <>
                        <div className="text-[9px] py-[1px] px-[2px]">
                          <div>{movie?.ageRating}</div>{" "}
                        </div>
                        <div className="h-[10px] w-[1px] bg-[#fff]" />
                      </>
                    ) : undefined}

                    {movie?.duration ? (
                      <>
                        <div>{movie?.duration}</div>
                        <div className="h-[10px] w-[1px] bg-[#fff]" />
                      </>
                    ) : undefined}

                    <div className="">
                      <DolbyLogo />
                    </div>
                    <div className="h-[10px] w-[1px] bg-[#fff]" />
                    <div className="font-[600]">4K</div>
                  </div>
                  {renderGenres()}
                </div>
              </div>
            </Link>
          </div>
        </div>
        {renderSideButtons()}
      </div>
    </>
  );
}
