import React from "react";
import styles from "./SearchBar.module.css";
import Button from "@mui/material/Button";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.searchInput}
      />
      <Button variant="contained" color="secondary" disableElevation>
        Search
      </Button>
    </div>
  );
}
