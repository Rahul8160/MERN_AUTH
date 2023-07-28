import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword){
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    // Handle the error here, e.g., log the error or throw a custom error
    console.error('Error while comparing passwords:', error);
    throw error; // Optionally, re-throw the error to propagate it to the caller
  }
}

const User = mongoose.model("User", userSchema);
export default User;
