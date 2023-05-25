import React from "react";
import { BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setTheme } from "./state";
import "./themsetting.css";

const ThemeSetting = () => {
  const { currentColor, mode } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const themeColors = [
    {
      color: "#1A97F5",
    },
    {
      color: "#03C9D7",
    },
    {
      color: "#7352FF",
    },
    {
      color: "#FF5C8E",
    },
    {
      color: "#1E4DB7",
    },
    {
      color: "#FB9678",
    },
  ];
  return (
    <div
      className={`fixed top-0 right-0 upper ${
        mode === "dark" ? "bg-[#20232A]" : "bg-[#f1f7f7]"
      }`}
    >
      <button
        onClick={() => dispatch(setTheme())}
        style={{ backgroundColor: currentColor }}
        className="rounded-full flex p-1 mt-8 text-black "
      >
        Close
      </button>

      <div className="flex  items-center justify-between w-400 h-screen">
        {themeColors.map((item, index) => (
          <div
            className="relative mt-2 cursor-pointer flex  gap-5 items-center"
            key={index}
          >
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer"
              style={{ backgroundColor: item.color }}
              onClick={() => {
                dispatch(setColor(item.color));
              }}
            >
              <BsCheck
                className={`ml-2 text-2xl text-white ${
                  item.color === currentColor ? "block" : "hidden"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSetting;
