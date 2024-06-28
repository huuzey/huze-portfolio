import React, { useEffect } from "react";
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
import mee from "../assets/murid.jpg";
import grad from "../assets/grad.jpg";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { mode, currentColor, me } = useSelector((state) => state.global);
  const [searchvalue, setSearchvalue] = useState("");
  const dispatch = useDispatch();
  const searchedresult = searchvalue
    ? projects.filter((project) =>
        project.desc.toLowerCase().includes(searchvalue.toLowerCase())
      )
    : projects;
  return (
    <div className={`flex flex-col realto  `} style={{ color: currentColor }}>
      {/* image preview  */}
      <div className="flex ml-4 relative   ">
        <div
          className={`flex flex-col mt-16 md:w-4/6  sm:w-5/6
           items-center   h-full shadow-teal-500 shadow-inner `}
        >
          {/* <img
            data-aos="fade-right"
            alt="title"
            src={title}
            className="w-[50%] h-[50%] mt-4 rounded-full shadow-2xl hover:scale-110"
          /> */}
          <h className={`text-2xl mb-2 mt-2 ml-2  rounded-md px-2 py-1`}>
            ✅HUZEYFA WELELA
          </h>
          <h className={`text-2xl mb-2 mt-2 ml-2  rounded-md px-2 py-1`}>
            ✅Full-Stack Web Developer
          </h>
          <img
            data-aos="fade-right"
            alt="mine"
            src={grad}
            className="w-[50%] h-[50%] mt-2  rounded-full"
          />

          <h className={`text-2xl mb-2 mt-2 ml-2  rounded-md px-2 py-1`}>
            ✅TOP RATED Professional Developer✅
          </h>
          <h className={`text-2xl mb-2 mt-2 ml-2 bgb   rounded-md px-2 py-1`}>
            ✅. I offer you the best solutions for your problem as you choose
            the right and comfortable service.
          </h>
          <p className="flex self-start ml-3  px-2 py-1 rounded-md mt-6">
            ✅.A real-world problem-solving with an experience of more than 2
            year.An excellent debugging skill of all error types.Stand by my
            self and deliver the given responsibility on time.
          </p>
          <div className={`sm:ml-0  md:ml-28 rounded-b-lg  `}>
            <h className={`text-xl mb-2 mt-2   rounded-md px-2 py-1`}>
              ✅.Frontend Development:
            </h>

            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Responsive design for all devices.
            </p>
            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Cross-browser development.
            </p>
            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Elegant color combination and page look structure.
            </p>
            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Convenient for SEO ranking.
            </p>
          </div>
          <div className={` border-b-2 ml-1 pt-2 rounded-b-lg  `}>
            <h className={`text-xl mb-2 mt-2   rounded-md px-2 py-1`}>
              ✅.Backend Development:
            </h>

            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Fast forward request and response.
            </p>
            <p className="  px-2 py-1 rounded-md mt-3">
              ✔️.Both SQL and NO-SQL databases.
            </p>
          </div>

          <p className="flex self-start ml-3 gap-2 max-w-prose  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            ✅.Frontend technologies: Html , Css ,Javascript, Bootstrap, Jquery,
            Apollo Client, Shadcn UI, Typescript, React, Tailwind css, Chart JS,
            Canvas JS, Svelte, Radix UI, Material Ui, Next js, Rtk query,RESTful
            API.
          </p>
          <p className="flex self-start ml-5 gap-2 sm:break-all  px-2 py-1 rounded-md mt-2 mb-2 ">
            <ThumbUpOffAltIcon color="success" />
            ✅.Backend technologies: Node js,Express js,Sveltekit, Mongoose,
            Mongo db, Socket.io,Firebase, Supabase, GraphQL, Postgresql,Mysql,
            Prisma, RESTful APIs.
          </p>
          <p className="flex self-start ml-5 gap-2  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            ✅.Design: Figma.
          </p>
          <p className="flex self-start ml-5 gap-2  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            State Management :Redux toolkit , Recoil.
          </p>
          <p className="flex self-start ml-5 gap-2  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            ✅.Cms :Wordpress.
          </p>
          <p className="flex self-start ml-5 gap-2  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            ✅.SEO :Google keyword planner, Google search console, Google
            analytics, Google trends, Moz, Pagespeed insights, Keyworddit.
          </p>
          <p className="flex self-start ml-5 gap-2  px-2 py-1 rounded-md mt-2 mb-2">
            <ThumbUpOffAltIcon color="success" />
            ✅.Test and Automation:Selenium, Jest,Enzyme.
          </p>
          <p className="flex self-start ml-5 gap-2 sm:break-all mb-5  px-2 py-1 rounded-md mt-2 ">
            <ThumbUpOffAltIcon color="success" />
            ✅.When you visit the projects for the first time they are very slow
            to display and fetch data from the database as I use the free plan
            to host the websites. Some of the websites are not responsive not
            because unable to make them responsive but I focused on the backend
            and the logical part of the coding.
          </p>
        </div>

        <div
          className="fixed top-0 right-0 sm:w-l/6  mt-2 ml-2 items-start justify-start h-12"
          data-aos="fade-left"
        >
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
        <input
          style={{ background: currentColor }}
          className={`ml-4 mt-2 py-1 rounded-full  px-4 outline-none text-black placeholder:text-black sm:w-5/6 lg:w-1/2 `}
          placeholder="Search for a Language, Framework..."
          type="text"
          onChange={(e) => setSearchvalue(e.target.value)}
          value={searchvalue}
        />
      </div>
      <h className={`text-xl mb-2 mt-2   rounded-md px-2 py-1`}>
        ✅.Some Projects:
      </h>
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
