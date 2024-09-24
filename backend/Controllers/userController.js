import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

// -----updating the user---------
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User successfully updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// -----deleting the user---------
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// -----getting single user---------
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// -----getting all the users---------
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// -----getting user profile---------
export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile info retrieved successfully",
      data: { ...rest },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// -----getting user's appointments---------
export const getMyAppointments = async (req, res) => {
  try {
    console.log("User ID:", req.userId); // Add this to check if the user ID is available

    // Retrieve appointments for the specific user
    // const bookings = await Booking.find({ user: req.userId });
    const bookings = await Booking.find({ user: req.userId }).populate(
      "doctor"
    );

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ success: true, message: "No appointments found" });
    }

    // Extract doctor IDs from appointment bookings
    const doctorIds = bookings.map((el) => el.doctor);

    // Retrieve doctors using doctor IDs
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: doctors,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error found" });
  }
};
