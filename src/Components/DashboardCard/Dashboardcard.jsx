import React from 'react';

const DashboardCard = ({ icon, title, value, color }) => (
  <div className=" p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
    <div className={`text-3xl text-${color}-500`}>{icon}</div>
    <h3 className="text-xl font-semibold  mt-4">{title}</h3>
    <p className="text-2xl font-bold ">{value}</p>
  </div>
);
export default DashboardCard;