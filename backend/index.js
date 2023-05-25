const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const imagesch = require("./model/image");
const formidable = require("formidable");
const cloudy = require("./cloudinary");

const app = express();

const corsoptions = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/image-upload", (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, field, files) => {
    try {
      const response = await cloudinary.uploader.upload(
        files.image.filepath,

        {
          cloud_name: process.env.CLOUD_NAME,
          api_key: process.env.CLOUD_KEY,
          api_secret: process.env.CLOUD_SECRET,
          secure: true,
          folder: "traveler",
        }
      );
      res.status(200).json(response.secure_url);
    } catch (error) {
      console.log(error);
    }
  });
});
app.get("/imageret", async (req, res) => {
  try {
    const image = await imagesch.find();
    res.status(200).send(image);
  } catch (error) {
    res.status(500).send(error);
  }
});
PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, console.log("connected successfully"))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
