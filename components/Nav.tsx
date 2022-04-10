import React from "react";

export default function Nav() {
  const data = ["Home", "Work", "About"];
  return (
    <div className="flex container justify-between px-4 mx-auto items-center py-3">
      <div>
        <img src="/logoipsum.png" alt="logoipsum" />
      </div>

      <div className="hidden md:block ">
        <ul className="text-white flex ">
          {data.map((n, index) => {
            return (
              <li key={index} className="mx-5 text-xl">
                {n}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="bg-white text-[#8C72FF] px-3 py-1 text-[16px] font-bold rounded-md mx-3 ">
          Sign in
        </button>
        <button className="bg-[#8C72FF] text-white px-3 py-1 text-[16px] font-bold rounded-md ">
          Create Account
        </button>
      </div>

      <div className="  md:hidden">
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
