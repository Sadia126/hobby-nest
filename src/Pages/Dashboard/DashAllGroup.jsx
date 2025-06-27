import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const DashAllGroup = () => {
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
    <div className="flex flex-wrap justify-between gap-4 mb-6">
      <select
        className="px-4 py-2 border rounded-md"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="ascending">Sort by Name (A-Z)</option>
        <option value="descending">Sort by Name (Z-A)</option>
      </select>

      <input
        type="text"
        placeholder="Filter by Category"
        className="px-4 py-2 border rounded-md"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by Location"
        className="px-4 py-2 border rounded-md"
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
      />
    </div>

    {/* Table View */}
    <div className="overflow-x-auto rounded border border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">#</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Image</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Category</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Location</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Start Date</th>
            <th className="px-4 py-2 text-left text-sm font-semibold  ">Action</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {displayGroups.map((group, index) => (
            <tr key={group._id}>
              <td className="px-4 py-2 text-sm">{index + 1}</td>
              <td className="px-4 py-2">
                <img
                  src={group.imageUrl}
                  alt={group.groupName}
                  className="w-20 h-14 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2 text-sm">{group.groupName}</td>
              <td className="px-4 py-2 text-sm">{group.category}</td>
              <td className="px-4 py-2 text-sm">{group.location}</td>
              <td className="px-4 py-2 text-sm">{group.startDate}</td>
              <td className="px-4 py-2 text-sm">
                <Link
                  to={`/groups/${group._id}`}
                  className="text-[#64aab4] hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

};

export default DashAllGroup;
