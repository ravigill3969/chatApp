import User from "../models/user.model.js";

export  const getUsersForSidebar = async (req, res) => {
  try {
    const allUsers = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );
    res.status(200).json(allUsers);
    console.log(allUsers)
  } catch (error) {
    
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMe=async(req,res)=>{}