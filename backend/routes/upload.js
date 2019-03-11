const express = require("express");
const multer = require("multer");
const cors = require("cors");

const router = express();

router.use(express.static("public"));

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.use(cors());

router.post("/upload", upload.single("image"), (req, res) => {
  if (req.file)
    res.json({
      imageUrl: `images/uploads/${req.file.filename}`
    });
  else res.status("409").json("No Files to Upload.");
});

const PORT = 5000;

router.listen(PORT);
console.log("api runnging on port: " + PORT);

module.exports = router;


