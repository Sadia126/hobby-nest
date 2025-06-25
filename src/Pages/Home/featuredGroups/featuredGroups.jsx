import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const FeaturedGroup = () => {
  const [featuredGroups, setFeaturedGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch("https://hobby-nest-server-side.vercel.app/groups");
        const data = await res.json();
        const featuredOnly = data.filter((group) => group.featured === true);
        setFeaturedGroups(featuredOnly);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    fetchGroups();
  }, []);

  return (
    <>
      <SectionTitle
        title="Featured Groups"
        subtitle="Join trending hobby groups near you!"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10 justify-items-center">
        {featuredGroups.map((group) => (
          <div
            key={group._id}
            className="card bg-base-100 w-full shadow-sm cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <figure className="px-10 pt-10">
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="rounded-xl h-60 object-cover w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{group.groupName}</h2>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedGroup;
