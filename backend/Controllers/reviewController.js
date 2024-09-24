import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({ success: true, message: "Success", data: reviews });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error retrieving reviews" });
  }
};

// Create review and update totalRating and averageRating for the doctor
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    // Save the new review
    const savedReview = await newReview.save();

    // Update the doctor's reviews list with the new review
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    // Recalculate totalRating and averageRating for the doctor
    const doctor = await Doctor.findById(req.body.doctor).populate("reviews");

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Calculate the total rating
    const totalRating = doctor.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating =
      doctor.reviews.length > 0
        ? (totalRating / doctor.reviews.length).toFixed(1)
        : 0;

    // Update the doctor's totalRating and averageRating
    doctor.totalRating = doctor.reviews.length;
    doctor.averageRating = averageRating;
    await doctor.save();

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get reviews for a specific doctor
export const getDoctorReviews = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId).populate(
      "reviews"
    );
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Success", data: doctor.reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a review and update the doctor's ratings
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res
        .status(404)
        .json({ success: false, message: "Review not found" });
    }

    const doctor = await Doctor.findById(review.doctor);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Remove review from doctor
    doctor.reviews.pull(review._id);
    await doctor.save();

    // Delete the review
    await review.remove();

    // Recalculate totalRating and averageRating for the doctor
    const updatedDoctor = await Doctor.findById(doctor._id).populate("reviews");

    const totalRating = updatedDoctor.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    const averageRating =
      updatedDoctor.reviews.length > 0
        ? (totalRating / updatedDoctor.reviews.length).toFixed(1)
        : 0;

    updatedDoctor.totalRating = updatedDoctor.reviews.length;
    updatedDoctor.averageRating = averageRating;
    await updatedDoctor.save();

    res
      .status(200)
      .json({ success: true, message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
