import React from "react";
import RenesImage from "../assets/re.jpg";
import Marquee from "react-fast-marquee";

export default function MainPage() {
  return (
    <div className="h-screen  animate-movement bg-[length:400%_400%] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
      <div className=" max-w-[768px] mx-auto relative ">
        <div className="flex flex-col pt-10 ">
          <img
            src={RenesImage}
            alt="RenesDwiRiwantoImage"
            className="w-28 h-28 object-cover rounded-full shadow-md mx-auto"
          />
          <h1 className="text-center font-semibold text-2xl mt-3">
            RENES DWI RIWANTO
          </h1>
          <p className="text-center text-lg">Software Engineer</p>
          <div className=" flex flex-col mt-10">
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <button className="relative w-80  py-4  bg-white rounded-lg">
                INSTAGRAM
              </button>
            </div>
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <button className="relative w-80  py-4  bg-white rounded-lg">
                GITHUB
              </button>
            </div>
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <button className="relative w-80  py-4  bg-white rounded-lg">
                LINKED IN
              </button>
            </div>
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <a
                href="mailto: renesriwanto@gmail.com"
                className="relative inline-block text-center w-80  py-4  bg-white rounded-lg"
              >
                EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 bg-black text-white flex absolute w-full bottom-0 left-0">
        <Marquee gradient={false} speed={50} className="py-3 text-xl my-auto">
          <div className="flex flex-row  w-full justify-around">
            <p className=" ">You are the 1st visitor</p>
            <div className="flex flex-row ">
              <p>&#128522;</p>
              <p className=""> Thank You</p>
              <p>&#128522;</p>
            </div>
          </div>
        </Marquee>
      </footer>
    </div>
  );
}
