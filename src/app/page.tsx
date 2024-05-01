"use client";
import ListCard from "@/components/ListCard";
import { TListArtObject } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type TFetchdataArg = {
  pageParam: number;
};

const Home = () => {
  const [allData, setAllData] = useState<TListArtObject[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  function fetchData({ pageParam }: TFetchdataArg) {
    return fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&q=rembrandt&ps=10&p=${pageParam}`
    ).then((res) => res.json());
  }

  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery({
    queryKey: ["base"],
    queryFn: (pageParam) => fetchData(pageParam),
    initialPageParam: 1,
    getNextPageParam: () => {
      return currentPage + 1;
    },
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams
    ) => {
      return firstPage.prevCursor;
    },
  });

  const { data, isLoading, error } = result;

  useEffect(() => {
    if (data?.pages) {
      setAllData(data.pages?.flatMap((page) => page.artObjects));
      setCurrentPage(data.pages.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.pages.length]);

  if (isLoading) return <div className="min-h-screen">Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log(data);

  return (
    <main className="min-h-screen p-24">
      {allData && allData.length !== 0 && (
        <InfiniteScroll
          dataLength={allData.length || 0} //This is important field to render the next data
          next={() => {
            console.log("fetching!");
            fetchNextPage();
          }}
          hasMore={currentPage !== null}
          loader={
            <div className="flex flex-row justify-center bg-orange-600 rounded-md">
              <h4 className="text-white saira-condensed-bold">Loading...</h4>
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-row flex-wrap">
            {allData.map((item) => (
              <ListCard key={item.id} item={item} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </main>
  );
};

export default Home;
