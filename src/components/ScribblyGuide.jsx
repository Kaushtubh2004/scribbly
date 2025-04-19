import React from "react";

const ScribblyGuide = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20 text-black font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How to Use Scribbly</h2>

        {/* Step 1 - Login */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img src="./images/login.png" alt="Login screen" className=" md:w-[200px] h-[200px] rounded-xl shadow-lg" />
          <div className="text-lg">
            <h3 className="text-2xl font-semibold mb-2">1. Login to Your Account</h3>
            <p>Start by logging in with your registered email and password. If you’re new, click <strong>“Sign Up”</strong> to create an account quickly.</p>
          </div>
        </div>

        {/* Step 2 - Create Note */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <img src="./images/pencil.png" alt="Create note" className="md:md:w-[200px] h-[200px] rounded-xl shadow-lg" />
          <div className="text-lg">
            <h3 className="text-2xl font-semibold mb-2">2. Create a New Note</h3>
            <p>Click the <strong>pencil icon</strong> in the corner to start a new note. A clean editor will appear where you can begin typing instantly.</p>
          </div>
        </div>

        {/* Step 3 - Organized Notes */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <img src="./images/note.png" alt="Organized notes" className="md:md:w-[200px] h-[200px] rounded-xl shadow-lg" />
          <div className="text-lg">
            <h3 className="text-2xl font-semibold mb-2">3. Organize Your Notes</h3>
            <p>All your notes are saved and listed neatly. Edit or delete them anytime with just a click. Easy to search, easy to use.</p>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-center text-lg italic text-gray-600 mb-16">
          Dark Mode Coming Soon!
        </div>

        {/* Features List */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Why Scribbly?</h3>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-800">
            <li>Minimal & elegant design</li>
            <li>Auto-save your thoughts instantly</li>
            <li>Fast, responsive & mobile-friendly</li>
            <li>Secure login and private note keeping</li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default ScribblyGuide;
