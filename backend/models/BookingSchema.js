import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
  // Populate the user and doctor fields before finding
  this.populate({
    path: "user",
    select: "name", // Adjust to select any user fields you need
  }).populate({
    path: "doctor",
    select: "name", // Select any fields you want from the doctor model
  });

  next();
});

export default mongoose.model("Booking", bookingSchema);
