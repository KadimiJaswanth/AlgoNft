// SearchSuggestions — list of search suggestions
// TODO: populate suggestions from client-side index or API (no secrets)
import React from "react";

const SearchSuggestions: React.FC<{ items?: string[] }> = ({ items = [] }) => (
  <ul className="bg-white border">
    {items.length ? items.map((i) => <li key={i} className="p-1">{i}</li>) : <li className="p-1 text-gray-500">No suggestions</li>}
  </ul>
);

export default SearchSuggestions;
