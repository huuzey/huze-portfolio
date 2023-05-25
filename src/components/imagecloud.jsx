import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../App";

const ImageCloud = () => {
  const [photo, setphoto] = useState();
  const [imagesid, setimagesid] = useState();

  const sendimage = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/image-upload`, photo);
      if (response.data) {
        setimagesid(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputHandle = (e) => {
    if (e.target.files.length !== 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      setphoto(formData);
    }
  };
  console.log({ imageid: imagesid, photo: photo });

  return (
    <div>
      <div className="mb-2 ">
        <label className="  gap-1  border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input type="file" className="hidden" onChange={inputHandle} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
      <button onClick={sendimage}>send</button>
    </div>
  );
};

export default ImageCloud;
