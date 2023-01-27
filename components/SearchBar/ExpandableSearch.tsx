import React from "react";
import styles from "./ExpandableSearch.module.css";

export default function ExpandableSearch() {
  return (
    <div>
      <input
        type="text"
        className="search-click w-32 px-4 py-1 rounded-full"
        name=""
        placeholder="Search"
      />
    </div>
  );
}
