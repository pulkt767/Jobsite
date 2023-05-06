import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="sidebarListItemText">Feed</span>
            </Link>
          </li>

          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <a target="_blank" href="https://www.youtube.com/">
              <span className="sidebarListItemText">Videos</span>
            </a>
          </li>



          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <a target="_blank" href="https://in.linkedin.com/">
              <span className="sidebarListItemText">Jobs</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <a target="_blank" href="https://www.google.com/search?q=events+near+me+&rlz=1C1CHBF_enIN926IN926&sxsrf=AOaemvK7-4yS_kDNhsU3D-lxqdw-uJt5DA%3A1638299077610&ei=xXWmYZbmJIufseMP94qbwAE&ved=0ahUKEwjW3LnU48D0AhWLT2wGHXfFBhgQ4dUDCA4&uact=5&oq=events+near+me+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAgAEMkDEJECMgUIABCRAjIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjELADECc6BwgAEEcQsAM6CAgAEIAEEMkDOgYIABAWEB5KBAhBGABQqwZYmBFg6xdoAXACeACAAaABiAG6CJIBAzAuOJgBAKABAcgBCcABAQ&sclient=gws-wiz">
              <span className="sidebarListItemText">Events</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <a target="_blank" href="https://www.udemy.com/">
              <span className="sidebarListItemText">Courses</span>
            </a>
          </li>
        </ul>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
