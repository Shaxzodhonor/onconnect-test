import "./style.scss";

// components
import Badge from "../Badge"
// images
import Task from "../../assets/images/task.svg"
import Description from "../../assets/images/description.svg"
import Right_menu from "../../assets/images/navigate_right_menu.svg"
import { Link, NavLink } from "react-router-dom";
// import  from "../../assets/images/"
// import  from "../../assets/images/"
// import  from "../../assets/images/"
// import  from "../../assets/images/"
// import  from "../../assets/images/"


function Menu() {
  
  return(
    <div   className="Menu">
      <ul className="menu">
        <li className="item">
          <NavLink exact to={"/admin"} className={"navlink"} activeClassName={"navlink--active"}>
              <img src={Task} alt="" />
              Руйхатга олиш
              <img src={Right_menu} alt="" style={{marginRight: "0px", marginLeft: "auto"}} />
          </NavLink>
        </li>
        <li className="item">
          <NavLink to={"/admin/main"} className={"navlink"} activeClassName={"navlink--active"}>
            <img src={Description} alt="" />
            Маъмурий иш
            <Badge>13</Badge>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu;