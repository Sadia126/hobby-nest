import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Dialog } from "@headlessui/react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";

const MyGroups = () => {
  const { user } = useAuth();
  const [myGroups, setMyGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobby-nest-server-side.vercel.app/myGroups?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyGroups(data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load your groups.");
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-nest-server-side.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
              setMyGroups((prev) => prev.filter((group) => group._id !== id));
            } else {
              toast.error("Failed to delete the group.");
            }
          })
          .catch(() => {
            toast.error("An error occurred. Please try again.");
          });
      }
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: form.maxMembers.value,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
    };

    try {
      const res = await fetch(`https://hobby-nest-server-side.vercel.app/groups/${selectedGroup._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGroup),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Group updated successfully");
        setMyGroups((prev) =>
          prev.map((g) => (g._id === selectedGroup._id ? { ...g, ...updatedGroup } : g))
        );
        setSelectedGroup(null);
      } else {
        toast.error("Failed to update group.");
      }
    } catch {
      toast.error("Something went wrong.");
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      {myGroups.length === 0 ? (
        <p>You haven't created any groups yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="">
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>Max Members</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myGroups.map((group, index) => (
                <tr key={group._id}>
                  <td>{index + 1}</td>
                  <td>{group.groupName}</td>
                  <td>{group.category}</td>
                  <td>{group.location}</td>
                  <td>{group.startDate}</td>
                  <td>{group.maxMembers}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => setSelectedGroup(group)}
                      className="px-3 py-1 bg-[#64aab4] text-white rounded cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {selectedGroup && (
        <Dialog open={true} onClose={() => setSelectedGroup(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center">
            <Dialog.Panel className="bg-[#6fa7af] p-6 rounded max-w-md w-full space-y-4">
              <Dialog.Title className="text-xl font-bold">Update Group</Dialog.Title>
              <form onSubmit={handleUpdateSubmit} className="space-y-3">
                <input
                  name="groupName"
                  defaultValue={selectedGroup.groupName}
                  className="input-style"
                />
                <select name="category" defaultValue={selectedGroup.category} className="input-style">
                  <option value="">Select Category</option>
                  {[
                    "Drawing & Painting",
                    "Photography",
                    "Video Gaming",
                    "Fishing",
                    "Running",
                    "Cooking",
                    "Reading",
                    "Writing",
                    "Gardening",
                    "Music",
                    "Tech & Coding",
                  ].map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <textarea
                  name="description"
                  defaultValue={selectedGroup.description}
                  rows="3"
                  className="input-style"
                />
                <input
                  name="location"
                  defaultValue={selectedGroup.location}
                  className="input-style"
                />
                <input
                  name="maxMembers"
                  type="number"
                  defaultValue={selectedGroup.maxMembers}
                  className="input-style"
                />
                <input
                  name="startDate"
                  type="date"
                  defaultValue={selectedGroup.startDate}
                  className="input-style"
                />
                <input
                  name="imageUrl"
                  defaultValue={selectedGroup.imageUrl}
                  className="input-style"
                />
                <input
                  readOnly
                  value={user?.displayName || ""}
                  className="input-style  cursor-not-allowed"
                />
                <input
                  readOnly
                  value={user?.email || ""}
                  className="input-style  cursor-not-allowed"
                />

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedGroup(null)}
                    className="bg-gray-300 px-4 py-2 rounded cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#64aab4] text-white px-4 py-2 rounded cursor-pointer"
                  >
                    Update
                  </button>
                </div>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default MyGroups;
