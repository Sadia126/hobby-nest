
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const categories = [
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
];

const CreateGroup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  // 5 years from today
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 5);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const group = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: form.maxMembers.value,
      members: [],
      featured: false,
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      GroupOwnerName: user?.displayName || "N/A",
      GroupOwnerEmail: user?.email || "N/A",
    };

     // Check for empty fields
  if (!group.groupName || !group.category || !group.description || !group.location || !group.maxMembers || !group.startDate || !group.imageUrl) {
    return setError("All fields are required.");
  }
  try {
    const res = await fetch("https://hobby-nest-server-side.vercel.app/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(group),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Group created successfully!");
      
      setError("");
      navigate("/allGroups");
    } else {
      throw new Error(data.error || "Failed to create group");
    }
  } catch (err) {
    console.error("Error:", err);
    toast.error("Failed to create group");
  }
    
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-lg shadow-md max-w-xl w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Create Hobby Group</h2>

        <input
          name="groupName"
          placeholder="Group Name"
          className="input-style"
        />
        <select name="category" className="input-style bg-[#6fa7af]">
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          className="input-style"
        />
        <input
          name="location"
          placeholder="Meeting Location"
          className="input-style"
        />
        <input
          name="maxMembers"
          type="number"
          placeholder="Max Members"
          className="input-style"
        />
        <input
          name="startDate"
          type="date"
          className="input-style"
          min={today}
          max={maxDateStr}
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-[#64aab4] text-white py-2 px-4 rounded-md w-full cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
