import React from "react";
import RenesImage from "../assets/re.png";

export default function MainPage() {
  return (
    <div className="">
      <div className="flex flex-col bg-green-200 pt-10">
        <img
          src={RenesImage}
          alt="RenesDwiRiwantoImage"
          className="w-28 h-28 object-cover rounded-full shadow-md mx-auto"
        />
        <h1 className="text-center font-semibold text-2xl">
          Renes Dwi Riwanto
        </h1>
        <p className="text-center text-lg">Software Engineer</p>
        <div className="bg-red-100 flex flex-col mt-4">
          {/* <h1 className="text-center py-8 text-2xl font">
            Social Media
          </h1> */}
          <button className="w-80 mb-3 py-4  bg-blue-200 mx-auto">
            Instagram
          </button>
          <button className="w-80 mb-3 py-4  bg-blue-200 mx-auto">
            Github
          </button>
          <button className="w-80 mb-3 py-4  bg-blue-200 mx-auto">
            LinkedIn
          </button>
          <button className="w-80 mb-3 py-4  bg-blue-200 mx-auto">Email</button>
        </div>
      </div>
    </div>
  );
}
