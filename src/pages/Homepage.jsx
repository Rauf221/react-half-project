import React , {useState} from 'react'
import {
  FaCalendarAlt,
  FaComments,
  FaFile,
  FaStore,
  FaShoppingCart,
  FaBitcoin,
  FaEnvelope,
  FaFileInvoice,
  FaBars,
  FaUserCircle,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { PiBracketsSquareBold, PiSquaresFour } from "react-icons/pi";
import { FiPlus, FiRefreshCw, FiMoreVertical } from 'react-icons/fi';
import JobTable from '../components/Table/Table';


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {isSidebarOpen && (
        <div className="bg-[#2a3042]  text-gray-200 w-64">
          <div className="p-6 pl-16 text-2xl font-semibold flex">
            <img
              className="rounded-full h-8 w-8 mr-4"
              src="https://skote-v-dark.react.themesbrand.com/static/media/logo-light.96c274dae02dae215c95d0a7ef202e3a.svg"
              alt=""
            />
            <h1>SOKET</h1>
          </div>
          <nav className="mt-10">
            <div className="flex items-center justify-between rounded hover:bg-gray-700">
            <a to='/' className="flex items-center py-2.5 px-4 rounded">
                  <AiFillDashboard className="mr-3" /> Dashboards
           </a>
              <IoIosArrowDown className="mr-2" />
            </div>
            <a
              to="/Cards"
              className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            >
              <FaFile className="mr-3" /> Customers
            </a>
          </nav>
        </div>
      )}
      <div
        className={`flex-1 bg-[#2a3042] text-gray-200 transition-all duration-300 ${
          isSidebarOpen ? "" : "ml-0"
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center">
            <FaBars
              className="text-xl mr-6 cursor-pointer"
              onClick={toggleSidebar}
            />
            <FaSearch className="text-l mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#2a3042] text-gray-200 rounded px-4 py-2 focus:outline-none"
            />
            <span className="text-lg mr-96">Mega Menu</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
              alt="Flag"
              className="h-5 w-9 mr-4 bg-slate-400"
            />
            <PiSquaresFour className="text-xl mr-4" />
            <PiBracketsSquareBold className="text-xl mr-4" />
            <FaBell className="text-xl mr-4 " />
            <img
              src="https://skote-v-dark.react.themesbrand.com/static/media/avatar-4.b23e41d9c09997efbc21.jpg"
              alt="profilepic"
              className="rounded-full h-8 w-8 mr-4 bg-slate-400"
            />
            <span>admin</span>
            <FiSettings className="text-xl ml-4" />
          </div>
        </header>
        <main className="p-6 h-[770px] overflow-auto bg-[#222736]">
          <div className='flex justify-between'>
          <h1 className="text-2xl mb-3">Customers</h1>
          <div className="flex justify-between mb-4 space-x-4">
      <div className="flex space-x-2">
        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          <FiPlus className="mr-2" /> Add New Job
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          <FiRefreshCw />
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          <FiMoreVertical />
        </button>
      </div>
    </div>
          </div>
            <JobTable/>
        </main>
        <div className="h-[70px] w-full flex items-center justify-between ">
          <h1>2024 © Skote.</h1>
          <h1 className="pr-12">Design & Develop by KYZR</h1>
        </div>
      </div>
    </div>
  );
};


export default Sidebar