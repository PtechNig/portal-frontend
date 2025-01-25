import { LuMessageSquareMore } from "react-icons/lu";
import { IoIosNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import './Dashboard.css'
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { HiOutlineBellAlert } from "react-icons/hi2";
import DashboardChart from "./DashboardChart";
import DashboardPieChart from "./DashboardPieChart";


const Dashboard = () => {
 



  return (
    <div className='dashboard-wrapper'>

      <nav>



        <h3> Welcome back</h3>
        <div className="dashboard-notification">
          <LuMessageSquareMore />
          <IoIosNotifications />
          <FaUserAlt />

        </div>
      </nav>

      <div className="dashboard-cards">
        <div className="card prod">
          <div>
            <h4>Products</h4>
            <AiFillProduct />
          </div>
          <p>123</p>
        </div>

        <div className="card cat">
          <div>
            <h4>Category</h4>
            <BiSolidCategoryAlt />
          </div>
          <p>103</p>
        </div>

        <div className="card cust">
          <div>
            <h4>Customers</h4>
            <FaUsers />
          </div>
          <p>823</p>
        </div>

        <div className="card alert">
          <div>
            <h4>Alerts</h4>
            <HiOutlineBellAlert />
          </div>
          <p>793</p>
        </div>

        </div>
      <div className="charts">
        <DashboardChart />
        <DashboardPieChart/>
      </div>
    </div>
  )
}

export default Dashboard
