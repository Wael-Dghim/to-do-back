const Mongoose = require("mongoose");

const userSchema = Mongoose.Schema({
  name: String,
  password: String,
  todos: {
    task: String,
    dateAdded: Date,
    dueDate: Date,
  },
  token: String,
});

export default Mongoose.model("User", userSchema);
