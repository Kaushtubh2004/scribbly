import React from "react";

const Landing = () => {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-500 ">
            Organize your thoughts, one <span className="text-black">scribble</span> at a time.
          </h1>
          <p className="text-lg text-gray-700">
            Scribbly helps you capture ideas, plan your day, and stay productive — beautifully simple and always with you.
          </p>
          <blockquote className="border-l-4 border-black pl-4 italic text-gray-600">
            “The faintest ink is more powerful than the strongest memory.”
          </blockquote>
          <div>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="./images/landing.jpg"
            alt="Scribbly illustration"
            className="w-80 max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
