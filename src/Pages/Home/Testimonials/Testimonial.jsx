import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Testimonial = () => {
  const testimonials = [
    {
      name: "Rafiq Ahmed",
      username: "@rafiq_ahmed",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "HobbyNest helped me discover a photography group in my area. Now I attend weekend photo walks and have made great friends!",
    },
    {
      name: "Sayti Rahman",
      username: "@saytirahman",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I created a knitting club on HobbyNest and got members within days. It’s so easy to manage events and stay connected!",
    },
    {
      name: "Tanvir Hossain",
      username: "@tanvirh",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Thanks to HobbyNest, I joined a local music jamming group. We now meet every Friday to make amazing tunes together!",
    },
  ];

  return (
    <section className="py-16 my-16">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle
          title="What Our Users Say"
          subtitle="Real stories from our amazing community members"
        />
      </div>

      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <p className=" italic">“{testimonial.text}”</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h4 className=" font-semibold">
                  {testimonial.name}
                </h4>
                <p className=" text-sm">{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
