import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchCode from "../components/SearchCode";
import SearchDate from "../components/SearchDate";

const Search: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchDate />} />
      <Route path="/search/code" element={<SearchCode />} />
      <Route path="/search/date" element={<SearchDate />} />
    </Routes>
  );
};

export default Search;
