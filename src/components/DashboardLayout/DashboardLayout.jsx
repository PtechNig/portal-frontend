import { Outlet } from "react-router-dom"
import './DashboardLayout.css'
import { useContext } from "react"
import Context from "../Context/Context"
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";


import { NavLink, useNavigate } from "react-router-dom"

import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BsJournalBookmarkFill } from "react-icons/bs";


const DashboardLayout = () => {
  const { isOpen, handleClick } = useContext(Context)

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };


  return (

    <div className="dashboardLayout-wrapper">
      <button  className= "toggle-sidebar-btn"  onClick={handleClick}>
        {isOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
      </button>

      <div className="dashboardLayout-container">


        <div id="sidebar">

          <div className={`sidebar-wrapper  ${isOpen ? "open" : "close"}`}>

            <div className="sidebar-title">
              <BsJournalBookmarkFill className="sidebar-title-icon" />
              <h3>Job portal</h3>
            </div>
            <ul className="sidebar-list">
              <li>
                <RiDashboardHorizontalFill className="sidebar-icon" />
                <NavLink to="/dashboard" exact onClick={handleClick}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <FaUserAlt className="sidebar-icon" />
                <NavLink to="users" onClick={handleClick} >Users</NavLink>
              </li>
              <li>
                <BsJournalText className="sidebar-icon" />
                <NavLink to="jobs"onClick={handleClick} >Job List</NavLink>
              </li>
              <li className="logout" onClick={handleLogout}>
                <IoIosLogOut className="sidebar-icon" />
                <NavLink >Logout</NavLink>
              </li>
            </ul>

          </div>

        </div>


        <Outlet />


      </div>
    </div>

  )
}

export default DashboardLayout
