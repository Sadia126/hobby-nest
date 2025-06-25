import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://hobby-nest-server-side.vercel.app/groups/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load group info");
        return res.json();
      })
      .then((data) => {
        setGroup(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleJoin = () => {
    toast.success("You have joined this group!");
  };

  if (loading) return <span className="loading loading-bars loading-lg"></span>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!group) return <p className="text-center mt-10">Group not found</p>;

  const today = new Date();
  const groupStart = new Date(group.startDate);
  const isJoinAvailable = groupStart > today;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{group.groupName}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {group.category}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> {group.location}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Organizer:</strong> {group.GroupOwnerName}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Start Date:</strong> {group.startDate}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Max Members:</strong> {group.maxMembers}
      </p>
      <p className="mb-6 text-xl">{group.description}</p>

      {isJoinAvailable ? (
        <button
          onClick={handleJoin}
          className="bg-[#64aab4] text-white px-6 py-2 rounded cursor-pointer 
           transition duration-300"
        >
          Join Group
        </button>
      ) : (
        <div className="text-red-500 font-semibold">
          This group is no longer active.
        </div>
      )}
    </div>
  );
};

export default GroupDetails;
