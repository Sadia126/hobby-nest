import React, { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubscribed(true);
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail(""); 
  };

  return (
    <div className=" py-16 mt-16">
      <div className="max-w-lg mx-auto  p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-3xl font-bold  mb-4">
          Stay Updated with Our Newsletter!
        </h2>
        <p className="text-lg  mb-6">
          Subscribe to receive the latest news and updates straight to your
          inbox.
        </p>

        {isSubscribed ? (
          <p className="text-lg text-green-500 font-semibold">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-4 py-2 text-lg border border-gray-300 rounded-md w-72 
              focus:outline-none  "
            />
            <button
              type="submit"
              className="bg-[#64aab4] text-white text-lg py-2 px-6 rounded-md
               cursor-pointer transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
