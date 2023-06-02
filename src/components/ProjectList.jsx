import { Link, Tooltip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ProjectList = ({ project }) => {
  const { currentColor } = useSelector((state) => state.global);
  const { img, url, repo, title, desc } = project;
  return (
    <div className="flex  mx-4  mt-4 shadow-2xl  flex-col rounded-lg ">
      <img
        src={img}
        alt="website home page"
        className="rounded-md hover:scale-110 my-2"
      />
      <Tooltip title="Go to the website" arrow placement="top">
        <Link
          sx={{ marginLeft: "2px", marginBottom: "2px" }}
          underline="none"
          href={url}
          rel="noopener"
          color={currentColor}
          target="_blank"
        >
          {title}
        </Link>
      </Tooltip>
      <Tooltip title="Go to the github repository" arrow placement="bottom">
        <Link
          sx={{ marginLeft: "2px", marginBottom: "3px" }}
          underline="none"
          href={repo}
          rel="noopener"
          color={currentColor}
          target="_blank"
        >
          Repository
        </Link>
      </Tooltip>
      <p className="my-2 mt-2 mb-6" style={{ color: currentColor }}>
        {desc}
      </p>
    </div>
  );
};

export default ProjectList;
