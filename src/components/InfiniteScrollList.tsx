import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollLoader from "./InfiniteScrollLoader";
import InfiniteScrollEndMessage from "./InfiniteScrollEndMessage";

type TInfinteScollProps = {
  length: number;
  handleFetchNext: () => {};
  hasMore: boolean;
  children: React.ReactNode;
};

const InfiniteScrollList: React.FC<TInfinteScollProps> = ({
  length,
  handleFetchNext,
  hasMore,
  children,
}) => {
  return (
    <InfiniteScroll
      dataLength={length || 0} //This is important field to render the next data
      next={handleFetchNext}
      hasMore={hasMore}
      loader={<InfiniteScrollLoader />}
      endMessage={<InfiniteScrollEndMessage />}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
