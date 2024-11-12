import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./CompanyLogo.module.css";
import Button from "@mui/material/Button";

export const CompanyLogo = () => {
  return (
    <div className={styles.companyLogoContainer}>
      <Avatar
        src="./src/assets/logo.png"
        className={styles.companyLogo}
        sx={{ width: 50, height: 50 }}
      />
      <Button variant="text" size="larger" color="secondary" sx={{fontSize:'15px', fontWeight:'1000'}}>
        Marketing Association NZ
      </Button>
    </div>
  );
};
