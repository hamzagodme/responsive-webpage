import React from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LoginIcon from "@mui/icons-material/Login";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export const NavBar = () => {
  return (
    <div className={styles.combinedNavBar}>
      <div className={styles.navbarContainer}>
        <Button
          size="large"
          variant="text"
          endIcon={<LocationOnIcon />}
          color="secondary"
        >
          Locations
        </Button>
        <Button
          size="large"
          variant="text"
          endIcon={<InfoIcon />}
          color="secondary"
        >
          About
        </Button>
        <Tooltip title="Speak to our amazing team!">
          <Button
            size="large"
            variant="text"
            endIcon={<ContactSupportIcon />}
            color="secondary"
          >
            Contact Us
          </Button>
        </Tooltip>
        <Tooltip title="Already a user?">
          <Button
            size="large"
            variant="outlined"
            endIcon={<LoginIcon />}
            color="secondary"
          >
            Login
          </Button>
        </Tooltip>
      </div>
      <div className={styles.hamburgerNav}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <MenuIcon
                fontSize="large"
                color="secondary"
                {...bindTrigger(popupState)}
              ></MenuIcon>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                  <LocationOnIcon color="secondary" />
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <InfoIcon  color="secondary"/>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <ContactSupportIcon color="secondary" />
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                  <LoginIcon color="secondary" />
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
};
