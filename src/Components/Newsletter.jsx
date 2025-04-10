import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="bg-[#004B87] py-16 px-6 text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-medium mb-4">
        SUBSCRIBE OUR NEWSLETTER
      </h2>
      
      {/* Subtext */}
      <p className="text-md max-w-4xl mx-auto mb-8">
        We can help you provide the latest news whenever and wherever you are via email.
      </p>

      {/* Input and Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
        <div className="flex items-center bg-white rounded-[6px] px-4 py-3 w-full sm:w-[80%]">
          <Mail className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="example.@gmail.com"
            className="w-full outline-none text-black"
          />
        </div>
        <button className="bg-white text-[#004B87] font-semibold px-12 py-3 rounded-[6px] w-full sm:w-auto hover:bg-blue-500 hover:text-white transition">
  Subscribe
</button>

      </div>
    </div>
  );
};

export default Newsletter;
