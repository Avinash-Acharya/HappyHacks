// const mongoose = require("mongoose");
import mongoose from "mongoose";

const user = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
});

export default mongoose.models.user ?? mongoose.model("user", user);
