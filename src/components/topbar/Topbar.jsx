import "./topbar.css";
import { Search, Person, Chat, Notifications, LocalGroceryStore, AssessmentTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import React from "react";


export default function Topbar() {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
        <img src={require('./insta.png').default} />
        </Link>
      </div>

  <div className="topbarCenter">
  <div className="image">
    
  <Link to={`/search`}>
  <span className="logo1">
  
  <img src={require('./a.png').default} />
  
  </span>
    </Link>
   
    
  </div>
</div>



      


      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{ textDecoration: "none"
 }}>
          <span className="topbarLink">Homepage</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
