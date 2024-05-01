"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  function fetchData({ pageParam }) {
    console.log(pageParam);
    return fetch(
      `https://www.rijksmuseum.nl/api/nl/collection?key=FsrJSWS5&ps=10&p=${pageParam}`
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
      console.log(allPageParams, allPages);
      return firstPage.prevCursor;
    },
  });

  const { data, isLoading, error } = result;

  useEffect(() => {
    if (data?.pages) {
      setAllData(data.pages?.flatMap((page) => page.artObjects));
      setCurrentPage(data.pages.length);
    }
  }, [data?.pages.length]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  console.log(allData, currentPage);

  return (
    <main className="min-h-screen p-24">
      <Link href="/try">go to moop</Link>

      <div className="flex flex-row flex-wrap"></div>

      {allData && allData.length !== 0 && (
        <InfiniteScroll
          dataLength={allData.length || 0} //This is important field to render the next data
          next={() => {
            console.log("fetching!");
            fetchNextPage();
          }}
          hasMore={currentPage !== null}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {allData.map((item) => (
            <div
              className="flex flex-col w-64 h-auto border border-gray-600 rounded m-4"
              key={item.id}
            >
              {item.hasImage && (
                <Image
                  src={item.webImage.url}
                  alt={item.title}
                  width={item.webImage.width}
                  height={item.webImage.height}
                  placeholder="empty"
                />
              )}
              <p>{item.title}</p>
              <p>{item.principalOrFirstMaker}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </main>
  );
}
