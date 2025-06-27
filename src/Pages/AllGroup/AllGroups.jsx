import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("ascending"); // Default sort order
  const [filterCategory, setFilterCategory] = useState(""); // Filter by category
  const [filterLocation, setFilterLocation] = useState(""); // Filter by location

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
    return <Loading />;
  }

  // Sorting Function
  const sortGroups = (groups) => {
    const sortedGroups = [...groups];
    sortedGroups.sort((a, b) => {
      const compareValue =
        sortOrder === "ascending"
          ? a.groupName.localeCompare(b.groupName)
          : b.groupName.localeCompare(a.groupName);
      return compareValue;
    });
    return sortedGroups;
  };

  // Filter groups based on category and location
  const filteredGroups = groups.filter((group) => {
    const matchesCategory = filterCategory
      ? group.category.toLowerCase().includes(filterCategory.toLowerCase())
      : true;
    const matchesLocation = filterLocation
      ? group.location.toLowerCase().includes(filterLocation.toLowerCase())
      : true;
    return matchesCategory && matchesLocation;
  });

  // Get the sorted and filtered groups
  const displayGroups = sortGroups(filteredGroups);

  return (
    <div className="min-h-screen py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">All Hobby Groups</h2>

      {/* Sorting and Filtering Controls */}
      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          {/* Sorting Control */}
          <select
            className="px-4 py-2 border rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="ascending">Sort by Name (A-Z)</option>
            <option value="descending">Sort by Name (Z-A)</option>
          </select>

          {/* Filtering by Category */}
          <input
            type="text"
            placeholder="Filter by Category"
            className="px-4 py-2 border rounded-md"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          />

          {/* Filtering by Location */}
          <input
            type="text"
            placeholder="Filter by Location"
            className="px-4 py-2 border rounded-md"
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {displayGroups.map((group) => (
          <div
            key={group._id}
            className="shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{group.groupName}</h3>
            <p className="text-sm">
              <strong>Category:</strong> {group.category}
            </p>
            <p className="text-sm">
              <strong>Location:</strong> {group.location}
            </p>
            <p className="text-sm">
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
