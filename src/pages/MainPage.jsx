import React, { useEffect, useState } from "react";
import RenesImage from "../assets/re.jpg";
import Marquee from "react-fast-marquee";
import axios from "axios";
import ReactLoading from "react-loading";
import spinningBubbles from "react-loading";

export default function MainPage() {
  let [visitor, setVisitor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://linkku-server.herokuapp.com/visitors"
        );
        setVisitor(result.data.totalVisitor);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function helper() {
    let temp = visitor.toString().split("");
    if (temp[temp.length - 1] === "1") {
      return visitor.toString() + "st";
    } else if (temp[temp.length - 1] === "2") {
      return visitor.toString() + "nd";
    } else if (temp[temp.length - 1] === "3") {
      return visitor.toString() + "rd";
    } else {
      return visitor.toString() + "th";
    }
  }

  if (visitor === 0) {
    return (
      <div className="h-screen  relative flex justify-center">
        <div className="my-auto ">
          <ReactLoading
            className="mx-auto"
            type={"spin"}
            color={`#3b82f6`}
            height={"40%"}
            width={"40%"}
          />
          <h1 className="mx-auto text-center text-xl mt-3">Wait a second</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen  animate-movement bg-[length:400%_400%] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
      <div className=" max-w-[768px] mx-auto relative ">
        <div className="flex flex-col pt-10 ">
          <img
            src={RenesImage}
            alt="RenesDwiRiwantoImage"
            className="w-28 h-28 object-cover rounded-full shadow-xl mx-auto"
          />
          <h1 className="text-center font-semibold text-2xl mt-3">
            RENES DWI RIWANTO
          </h1>
          <p className="text-center text-lg">Software Engineer</p>
          <div className=" flex flex-col mt-10">
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <a
                href="https://www.instagram.com/renessdwir/"
                className="relative inline-block text-center w-80  py-4  bg-white rounded-lg"
              >
                INSTAGRAM
              </a>
            </div>
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <a
                href="https://github.com/renesdwir"
                className="relative inline-block text-center w-80  py-4  bg-white rounded-lg"
              >
                GITHUB
              </a>
            </div>
            <div className="relative mx-auto mb-5">
              <div className="absolute -inset-0.5 blur bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg"></div>
              <a
                href="https://www.linkedin.com/in/renesdwir/"
                className="relative inline-block text-center w-80  py-4  bg-white rounded-lg"
              >
                LINKED IN
              </a>
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
        <Marquee gradient={false} speed={40} className="py-3 text-xl my-auto">
          <div className="flex flex-row  w-full justify-around">
            <p className=" ">You are the {helper()} visitor</p>
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
