import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export default function BasicMenu(props) {
  const { categories } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Button
      style={{width:"50px"}} 
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <CloseIcon style={{ color: "white" }} />
        ) : (
          <MenuIcon style={{ color: "white" }} />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.map((category) => {
          return (
            <Link to={`/${category}`} key={category}>
              <MenuItem onClick={handleClose}>{category}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </div>
  );
}
