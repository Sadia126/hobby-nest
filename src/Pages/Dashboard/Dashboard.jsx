import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main className="w-11/12 mx-auto ">
          <div className="grid py-5 grid-cols-12 min-h-screen">
            <div className="h-full col-span-3 flex flex-col items-center">
              <NavLink
                className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#64aab4] hover:border-none"
                to="/dashboard"
              >
                Home
              </NavLink>
              <NavLink
                className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#64aab4] hover:border-none"
                to="/dashboard/addGroup"
              >
                Add Group
              </NavLink>
              <NavLink
                className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#64aab4] hover:border-none"
                to="/dashboard/allGroup"
              >
                All Group
              </NavLink>
              <NavLink
                className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#64aab4] hover:border-none"
                to="/dashboard/myGroup"
              >
                My Group
              </NavLink>
            </div>
            <div className="col-span-9 h-full ml-28">
              <Outlet></Outlet>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
