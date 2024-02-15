import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import useApiClient from "../../hooks/useApiClient";
import Swal from "sweetalert2";
import Carousel from "react-multi-carousel";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../../components/listItem/ListItem";
import { useGetContinueWatchingListQuery, useGetRandomListsQuery } from "../../store/rtk-query/listsApi";
import List from "../../components/list/List"
import { addClassNames } from "../../store/utils/functions";

const api_url = import.meta.env.VITE_APP_API_URL;

const Home = ({ type = null }) => {
  const [lists, setLists] = useState([]);
  const [genre] = useState(null);
  const client = useApiClient();
  //const [movies, setMovies] = useState([]);

  const { data: continueWatchingListData, isLoading: continueWatchingLoading, refetch: refetchContinueWatching } = useGetContinueWatchingListQuery({}, {
    refetchOnMountOrArgChange: true,
  })

  const { data: randomListData, isLoading: randomListLoading } = useGetRandomListsQuery({
    // type,
    // genre
  }, {
    refetchOnMountOrArgChange: true,
  })

  // React.useEffect(() => {

  // },[])

  // const getRandomLists = useCallback(
  //   (type: string, genre: string) => {
  //     console.log('type, genre ', { type, genre })
  //     client
  //       .getRandomLists(type, genre)
  //       .then((res) => {
  //         console.log('res ', res)
  //         //const filteredLists = res.filter((list) => !list.user);
  //         //setLists(filteredLists);
  //         setLists(res);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   },
  //   [client]
  // );

  /*const getRandomMovies = useCallback(
    (type: string) => {
      client
        .getRandomMovies(type)
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [client]
  );*/

  useEffect(() => {
    // getRandomLists(type, genre);
    // getRandomMovies(type);

    setLists(randomListData);


  }, [type, genre, randomListData]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <div className="home relative">
      <Navbar />
      <div className='fixed top-0 right-0 left-0 z-[900]'>
        <Featured type={type} />
      </div>


      <div className={addClassNames(
        'bg-black overflow-hidden mt-[65vh] relative z-[10] pt-[0px]'
      )}>
        <div
          className='fixed z-[200] top-[65vh] left-0 right-0 h-[7vh] bg-gradient-to-b from-black to-transparent'
        >

        </div>
        <Suspense
          fallback={<div style={{ backgroundColor: "black" }}>Loading...</div>}
        >
          <div className='mx-[20px] sm:mx-[50px] '>
            <div>

              {
                continueWatchingListData?.list ?
                  <List list={{
                    ...continueWatchingListData?.list,
                    title: "Continue Watching"
                  }} />
                  : undefined
              }
            </div>

            {lists?.map((list) => (
              <List key={list._id} list={list} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
