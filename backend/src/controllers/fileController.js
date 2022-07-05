let mongoose = require("mongoose");
const Files = require("../models/fileModel");

exports.getAllFiles = async (req, res) => {
  try {
    let files = await Files.find();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewFile = async (req, res) => {
  try {
    const files = new Files({
      title:req.body.title,
      desc:req.body.desc,
      file:req.file
    });
     console.log(files)
    let newFile = await files.save();
   
    res.status(200).json({ data: newFile });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const id = req.params.fileId;
    let result = await Files.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

