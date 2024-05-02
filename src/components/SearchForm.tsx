import React from "react";
import { useRecoilState } from "recoil";
import { filterAtom, searchQueryAtom } from "@/app/store/query.atom";

const SearchForm: React.FC<{}> = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);

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
          <option value="artist">Name (asc)</option>
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
