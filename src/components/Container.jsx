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
import mee from "../assets/mee.jpg";
import { useState } from "react";

const Container = () => {
  const { mode, currentColor, me } = useSelector((state) => state.global);
  const [searchvalue, setSearchvalue] = useState("");
  const dispatch = useDispatch();
  const searchedresult = searchvalue
    ? projects.filter((project) =>
        project.desc.toLowerCase().includes(searchvalue.toLowerCase())
      )
    : projects;
  return (
    <div className={`flex flex-col  `} style={{ color: currentColor }}>
      {/* image preview  */}
      <div className="flex ml-4 relative  ">
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
            src={mee}
            className="w-[50%] h-[50%] mt-2  rounded-full"
          />
          <h className={`text-2xl mb-4 mt-4 ml-2`}>
            {" "}
            Where Code cracking shines out.
          </h>
          <h className={`text-2xl mb-2 mt-2 ml-2`}>
            Passionated, bright minded and hard + smart worker.
          </h>
          <h className={`text-2xl mb-2 mt-2 ml-2`}>
            Going to become an empitome on web app dev't arena!
          </h>
          <p className="flex self-start ml-3">
            A real world solution finding with an experience of more than 6
            months.An excellent debugging skill of all types.Stand by my self
            and deliver the given responsibility at least on time or in time .
            Cross-browser design.
          </p>
          <p className="flex self-start ml-3">MERN stack specialized:</p>
          <p className="flex self-start ml-5 gap-2 max-w-prose">
            <ThumbUpOffAltIcon color="success" />
            Frontend : Html , Css ,Javascript,Typescript, React, Tailwind css,
            Svelte, Radix UI, Material Ui, Next js, Rtk query,RESTful API.
          </p>
          <p className="flex self-start ml-5 gap-2 sm:break-all ">
            <ThumbUpOffAltIcon color="success" />
            Backend : Node js,Express js,Sveltekit, Mongoose, Mongo db,
            Socket.io,Firebase, Supabase, Postgresql,Mysql, Prisma, RESTful
            APIs.
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
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            SEO :Google keyword planner, Google search console, Google
            analytics, Google trends, Moz, Pagespeed insights, Keyworddit.
          </p>
          <p className="flex self-start ml-5 gap-2">
            <ThumbUpOffAltIcon color="success" />
            Test and Automation:Selenium, Jest,Enzyme.
          </p>
          <p className="flex self-start ml-5 gap-2 sm:break-all mb-3 ">
            <ThumbUpOffAltIcon color="success" />
            When you visit the projects for the first time they are very slow to
            display and fetch data from the database as I use the free plan to
            host the websites. Some of the websites are not responsive not
            because unable to make them responsive but I focused on the backend
            and the logical part of the coding.
          </p>
        </div>

        <div className="fixed top-0 right-0 sm:w-l/6  mt-2 ml-2 items-start justify-start h-12">
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
      <div>
        {" "}
        <input
          style={{ background: currentColor }}
          className={`ml-4 mt-2 py-1 rounded-full  px-4 outline-none text-black placeholder:text-black sm:w-full lg:w-1/3 `}
          placeholder="Search for a Language, Framework..."
          type="text"
          onChange={(e) => setSearchvalue(e.target.value)}
          value={searchvalue}
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  w-full gap-2 h-full mt-4">
        {searchedresult.map((project, index) => (
          <ProjectList project={project} key={index} />
        ))}
      </div>
      {/* footer  */}
      <div className="flex items-center justify-center my-4">
        <p className=""> Welcome , it's my pleasure to see you here!</p>
      </div>
    </div>
  );
};

export default Container;
