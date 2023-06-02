import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { setMode, setTheme } from "./state";
import ProjectList from "./ProjectList";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { projects } from "../assets/datafiles";
import title from "../assets/Untitled.png";

const Container = () => {
  const { mode, currentColor, me } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  console.log(me);
  return (
    <div className={` w-full flex flex-col   `} style={{ color: currentColor }}>
      {/* image preview  */}
      <div className="flex ">
        <div className="flex md:w-1/6 sm:w-0  "></div>

        <div
          className={`flex flex-col mt-16 md:w-4/6  sm:w-5/6
           items-center   h-full shadow-teal-500 shadow-inner `}
        >
          <img
            alt="title"
            src={title}
            className="w-[50%] h-[50%] mt-4 rounded-full shadow-2xl hover:scale-110"
          />
          <img
            alt="mine"
            src={me}
            className="w-[50%] h-[50%] mt-2  rounded-full"
          />
          <h className={`text-2xl mb-4 mt-4 ml-2`}>
            {" "}
            Where Code cracking shines out.
          </h>
          <h className={`text-2xl mb-2 mt-2 ml-2`}>
            {" "}
            Passionated, bright minded and hard worker.
          </h>
          <p className="flex self-start ml-3">
            A real world solution finding with an experience of more than 6
            months.An excellent debugging skill of all types.Stand by my self
            and deliver the given responsibility at least on time or in time .
          </p>
          <p className="flex self-start ml-3">MERN stack specialized:</p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            Fronend : Html , Css ,Javascript, React, Tailwind css, Material
            Ui,Next js , Rtk query.
          </p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            Backend : Node js,Express js, Mongoose, Mongo db,Socket.io,Firebase.
          </p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            Design :Figma.
          </p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            State Management :Redux toolkit , Recoil.
          </p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            Cms :Wordpress.
          </p>
        </div>
        <div className="fixed top-0 right-0 w-1/6 mt-2 ml-2 items-start justify-start h-12">
          <Button className="" onClick={() => dispatch(setMode())}>
            {mode === "dark" ? (
              <WbSunnyOutlinedIcon sx={{ color: currentColor }} />
            ) : (
              <WbSunnyIcon sx={{ color: currentColor }} />
            )}
          </Button>
          <Button onClick={() => dispatch(setTheme())}>
            <SettingsIcon sx={{ color: currentColor }} />
          </Button>
        </div>
      </div>
      {/* projects  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  w-full gap-2 h-full mt-4">
        {projects.map((project, index) => (
          <ProjectList project={project} key={index} />
        ))}
      </div>
      {/* footer  */}
      <div className="flex items-center justify-center my-4">
        <p className=""> Welcome , it's my pleasure to see you there!</p>
      </div>
    </div>
  );
};

export default Container;
