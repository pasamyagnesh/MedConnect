import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

// ----- Updating the Doctor ---------
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Doctor successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update doctor" });
  }
};

// ----- Deleting the Doctor ---------
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Doctor successfully deleted",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete doctor" });
  }
};

// ----- Getting Single Doctor ---------
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Doctor details retrieved",
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "No doctor found" });
  }
};

// ----- Getting All Doctors ---------
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: doctors.length > 0 ? "Doctors retrieved" : "No doctors found",
      data: doctors,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving doctors" });
  }
};

// ----- Getting Doctor Profile ---------
export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Profile information retrieved",
      data: { ...rest, appointments },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error retrieving profile information",
    });
  }
};
