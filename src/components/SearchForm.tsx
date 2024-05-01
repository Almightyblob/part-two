import { QueryClient } from "@tanstack/react-query";
import React, { Dispatch, SetStateAction } from "react";
import { queryClient } from "./QCProvider";

type TSearchFormProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const SearchForm: React.FC<TSearchFormProps> = ({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
}) => {
  return (
    <form
      className="w-full flex flex-row justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="h-8 w-64 border-0 rounded ml-4 mr-2 px-2"
        value={searchQuery}
        name="search-query"
        type="text"
        placeholder="Start Searchin'!"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        <label
          className="text-sm saira-condensed-bold text-white uppercase mr-2"
          htmlFor="filter"
        >
          Filter By
        </label>
        <select
          className="h-8 rounded border-0"
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="artist">Name (ask)</option>
          <option value="artistdesc">Name (desc)</option>
          <option value="relevance">relevance</option>
          <option value="objecttype">objecttype</option>
          <option value="chronologic">chronologic</option>
          <option value="achronologic">achronologic</option>
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
