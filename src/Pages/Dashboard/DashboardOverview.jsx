import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaUser, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import DashboardCard from "../../Components/DashboardCard/Dashboardcard";

const DashboardOverview = () => {
  const [totalGroups, setTotalGroups] = useState(0);
  const [myGroups, setMyGroups] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const [groupsRes, myGroupsRes] = await Promise.all([
          fetch("https://hobby-nest-server-side.vercel.app/groups", { signal: controller.signal }),
          fetch(`https://hobby-nest-server-side.vercel.app/myGroups?email=${user.email}`, { signal: controller.signal })
        ]);

        const groupsData = await groupsRes.json();
        const myGroupsData = await myGroupsRes.json();

        setTotalGroups(groupsData.length);
        setMyGroups(myGroupsData.length);
      } catch (err) {
        if (err.name !== "AbortError") console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [user, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8 px-6 ">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold ">Dashboard Overview</h2>
          <p className="text-lg  mt-2">Welcome back, {user?.displayName || "User"}!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* All Groups */}
          <DashboardCard
            icon={<FaUsers className="text-center" />}
            title="Total Groups"
            value={totalGroups}
            color="blue"
            
          />

          {/* My Groups */}
          <DashboardCard
            icon={<FaUsers />}
            title="My Groups"
            value={myGroups}
            color="green"
          />

          {/* User Info */}
          <div className=" p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
            <div className="text-3xl text-purple-500"><FaUser /></div>
            <h3 className="text-xl font-semibold  mt-4">User Info</h3>
            <p className="text-lg  mt-2">{user?.displayName || "Anonymous"}</p>
            <p className="text-sm ">{user?.email || "No email"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;





