import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://hobby-nest-server-side.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching groups:", err);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div className="min-h-screen  py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">All Hobby Groups</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group._id}
            className=" shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{group.groupName}</h3>
            <p className="text-sm  ">
              <strong>Category:</strong> {group.category}
            </p>
            <p className="text-sm  ">
              <strong>Location:</strong> {group.location}
            </p>
            <p className="text-sm  ">
              <strong>Start Date:</strong> {group.startDate}
            </p>
            <div className="mt-4 text-right">
              <Link
                to={`/groups/${group._id}`}
                className="text-[#64aab4] hover:underline font-semibold"
              >
                See More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
