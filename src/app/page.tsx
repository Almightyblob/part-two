"use client";
import InfiniteScrollList from "@/components/InfiniteScrollList";
import ListCard from "@/components/ListCard";
import SearchForm from "@/components/SearchForm";
import { fetchQueryData } from "@/helpers/fetchData";
import { TListArtObject } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { filterAtom, searchQueryAtom } from "@/store/query.atom";
import { useDebounce } from "use-debounce";
import LoadingBanner from "@/components/LoadingBanner";
import ErrorBanner from "@/components/ErrorBanner";

const HomeContent = () => {
  const [allData, setAllData] = useState<TListArtObject[]>([]);
  const [searchQuery] = useRecoilState(searchQueryAtom);
  const [filter] = useRecoilState(filterAtom);
  const currentPage = useRef(0);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const query = `q=${debouncedSearchQuery}&s=${filter}`;

  console.log(query);

  const { fetchNextPage, hasNextPage, hasPreviousPage, ...result } =
    useInfiniteQuery({
      enabled: searchQuery.length > 0,
      queryKey: [query],
      queryFn: (pageParam) => fetchQueryData(pageParam, query),
      initialPageParam: 1,
      getNextPageParam: () => {
        return currentPage.current + 1;
      },
    });

  const { data, isLoading, error } = result;

  useEffect(() => {
    if (data?.pages) {
      // reactquery automatically accumulates the fetched pages for us,
      // we just need to flatten the results
      setAllData(data.pages?.flatMap((page) => page.artObjects));
      // Since the API doesn't provid us with a way to keep track of pagination
      // we need to do it ourselves.
      currentPage.current = data.pages.length;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.pages.length]);

  // Again, the API provised no info on the current position in the pagination
  // and if here are any more pages. However, if the last fetched page has less
  // than 10 items in it, we definitely reached the end of the results.
  const hasMore = data?.pages[data.pages.length - 1].artObjects.length === 10;

  console.log(data);

  return (
    <main className="min-h-screen">
      <div className="w-full h-28 bg-orange-500 pt-3">
        <div className="grid place-content-center mb-2">
          <h1 className="saira-condensed-black text-4xl uppercase">
            <span className="text-white">Rijks</span>
            <span className="text-slate-700">Museum</span>
          </h1>
        </div>
        <SearchForm />
      </div>
      <div className="py-12 px-4 lg:px-12">
        {isLoading && <LoadingBanner />}
        {error && <ErrorBanner />}

        {allData && allData.length !== 0 && (
          <InfiniteScrollList
            length={allData.length || 0}
            handleFetchNext={fetchNextPage}
            hasMore={hasMore}
          >
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {allData.map((item) => (
                <ListCard key={item.id} item={item} />
              ))}
            </div>
          </InfiniteScrollList>
        )}
      </div>
    </main>
  );
};

export default HomeContent;
