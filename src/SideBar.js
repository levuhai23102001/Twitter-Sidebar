import { useState } from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./sideBar.css";
import SideBarLink from "./SideBarLink";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import OfflineBoltOutlinedIcon from "@material-ui/icons/OfflineBoltOutlined";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import AccessibilityNewOutlinedIcon from "@material-ui/icons/AccessibilityNewOutlined";

function SideBar() {
  const menuItems = [
    { link: "Bookmarks", icon: <BookmarkBorderOutlinedIcon fontSiz0px /> },
    { link: "List", icon: <ListAltOutlinedIcon /> },
    { link: "Topic", icon: <ChatOutlinedIcon /> },
    { link: "Moments", icon: <OfflineBoltOutlinedIcon /> },
    { link: "Newsletters", icon: <PostAddOutlinedIcon /> },
    { link: "Twitter Ads", icon: <CallMadeOutlinedIcon /> },
    { link: "Analytics", icon: <BarChartOutlinedIcon /> },
    { link: "Settings", icon: <SettingsOutlinedIcon /> },
    { link: "Help Center", icon: <HelpOutlineOutlinedIcon /> },
    { link: "Display", icon: <BrushOutlinedIcon /> },
    { link: "Keyboard shortcuts", icon: <AccessibilityNewOutlinedIcon /> },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <div className="sideBar">
      <div className="logo">
        <i class="bx bxl-twitter"></i>
      </div>
      <SideBarLink text="Home" Icon={HomeIcon} />
      <SideBarLink text="Explore" Icon={SearchIcon} />
      <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
      <SideBarLink text="Messages" Icon={MailOutlineIcon} />
      <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SideBarLink text="Lists" Icon={ListAltIcon} />
      <SideBarLink text="Profile" Icon={PermIdentityIcon} />
      <Button id="moreLinks" onClick={handleOpenMenu}>
        <MoreHorizIcon /> <span>More</span>
      </Button>
      <Button id="tweet">Tweet</Button>

      <Menu id="long-menu" open={openMenu} onClose={handleCloseMenu}>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.link}>
            {menuItem.icon} {menuItem.link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default SideBar;
