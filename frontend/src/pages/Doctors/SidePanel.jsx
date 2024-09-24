import React from "react";
import convertTime from "../../utils/convertTime";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config"; // assuming BASE_URL is correctly defined

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const token = localStorage.getItem("token"); // Replace this with your auth mechanism

  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || "Something went wrong. Please try again"
        );
      }

      const data = await res.json();
      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Prices</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          Rs. {ticketPrice}
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.length ? (
            timeSlots.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {convertTime(item.startingTime)} -{" "}
                  {convertTime(item.endingTime)}
                </p>
              </li>
            ))
          ) : (
            <li>No available time slots</li>
          )}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;

// import React from "react";
// import convertTime from "../../utils/convertTime";
// import { toast } from "react-toastify";
// import { BASE_URL, token } from "../../config";

// const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
//   const bookingHandler = async () => {
//     try {
//       const res = await fetch(
//         `${BASE_URL}/bookings/checkout-success/${doctorId}`,
//         {
//           method: "post",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message + "Please try again");
//       }
//       const data = await res.json();
//       if (data.session.url) {
//         window.location.href = data.session.url;
//       }
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
//       <div className="flex items-center justify-between">
//         <p className="text__para mt-0 font-semibold">Ticket Prices</p>
//         <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
//           Rs. {ticketPrice}
//         </span>
//       </div>

//       <div className="mt-[30px]">
//         <p className="text__para mt-0 font-semibold text-headingColor">
//           Available Time Slots:
//         </p>
//         <ul className="mt-3">
//           {timeSlots?.map((item, index) => (
//             <li className="flex items-center justify-between mb-2">
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
//               </p>
//               <p className="text-[15px] leading-6 text-textColor font-semibold">
//                 {convertTime(item.startingTime)} -{" "}
//                 {convertTime(item.endingTime)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
//         Book Appointment
//       </button>
//     </div>
//   );
// };

// export default SidePanel;
