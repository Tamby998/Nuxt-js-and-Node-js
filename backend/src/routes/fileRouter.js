const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const upload = require("../config/multer");
const authenticate = require('../middlewares/authenticate');

router.get("/mesdocuments", authenticate, fileController.getAllFiles);
router.post("/document", authenticate, upload.upload.single("file"), fileController.addNewFile);
router.delete("/document/:fileId", authenticate,fileController.deleteFile);

module.exports = router;