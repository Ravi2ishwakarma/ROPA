import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const captains = [
  {
    id: 1,
    name: "Aman Sharma",
    rating: 4.9,
    trips: 1240,
    experience: "5 Years",
    vehicle: "Car",
    vehicleNumber: "MP 04 AB 2456",
    languages: ["Hindi", "English"],
    price: 800,
    initial: "AS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    rating: 4.8,
    trips: 980,
    experience: "4 Years",
    vehicle: "Car",
    vehicleNumber: "MP 04 CD 7832",
    languages: ["Hindi", "English"],
    price: 750,
    initial: "RV",
  },
  {
    id: 3,
    name: "Vikas Patel",
    rating: 4.9,
    trips: 1560,
    experience: "6 Years",
    vehicle: "Premium Car",
    vehicleNumber: "MP 04 EF 9123",
    languages: ["Hindi", "English"],
    price: 1200,
    initial: "VP",
  },
  {
    id: 4,
    name: "Mohit Yadav",
    rating: 4.7,
    trips: 760,
    experience: "3 Years",
    vehicle: "Auto",
    vehicleNumber: "MP 04 GH 4567",
    languages: ["Hindi"],
    price: 500,
    initial: "MY",
  },
  {
    id: 5,
    name: "Sandeep Singh",
    rating: 4.8,
    trips: 1100,
    experience: "5 Years",
    vehicle: "Car",
    vehicleNumber: "MP 04 JK 3344",
    languages: ["Hindi", "English"],
    price: 850,
    initial: "SS",
  },
  {
    id: 6,
    name: "Arjun Khan",
    rating: 4.9,
    trips: 1870,
    experience: "7 Years",
    vehicle: "Premium Car",
    vehicleNumber: "MP 04 LM 8899",
    languages: ["Hindi", "English"],
    price: 1400,
    initial: "AK",
  },
];

const StepTitle = ({ title, subtitle }) => (
  <div className="flex items-start gap-4 mb-6">

    <div>
      <h2 className="text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {subtitle}
      </p>
    </div>
  </div>
);

export default function SelectCaptain() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};
  const {
    city,
    date,
    adults,
    children,
  } = bookingData;
  const {
    selectedPlaces = [],
    duration = "",
    customHours = "",
    selectedVehicle = null,
    pickupLocation = "",
    placesCharge = 0,
    vehicleCharge = 0,
    durationCharge = 0,
  } = location.state || {};

  const [selectedCaptain, setSelectedCaptain] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCaptains = showAll
    ? captains
    : captains.slice(0, 4);

  const progress = selectedCaptain ? 100 : 0;

  const handleContinue = () => {
    if (!selectedCaptain) return;

    const tourData = {
      ...bookingData,
      places: selectedPlaces,
      duration,
      customHours,
      vehicle: selectedVehicle,
      captain: selectedCaptain,
      pickupLocation,
      placesCharge: selectedPlaces.length * 150,
      vehicleCharge: selectedVehicle?.price || 0,
      durationCharge:
        duration === "Custom"
          ? Number(customHours || 0) * 200
          : durationCharge[duration] || 0,
      total:
        placesCharge +
        vehicleCharge +
        durationCharge +
        (selectedCaptain?.price || 0),
    };

    navigate("/tour-payment", {
      state: tourData,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto bg-gray-100 px-4 py-8"
    >


      <div className="mb-8">
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
          ROPA City Tour
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Choose Your Captain
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          Choose a captain who will make your city tour comfortable,
          safe and enjoyable.
        </p>
      </div>
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">

          <StepTitle
            title="Select Captain"
            subtitle="Choose from our verified and highly-rated captains."
          />
          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-100">

            <div>
              <p className="font-semibold text-gray-900">
                {captains.length} captains available
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Verified captains near your tour route
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-gray-600">
                Available now
              </span>
            </div>

          </div>

          <div className="space-y-4">

            {visibleCaptains.map((captain) => {

              const selected =
                selectedCaptain?.id === captain.id;

              return (
                <motion.div
                  key={captain.id}
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedCaptain(captain)}
                  className={`relative cursor-pointer rounded-3xl border p-5 transition-all ${selected
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                    }`}
                >

                  {selected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-4 top-4 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
                    >
                      ✓
                    </motion.div>
                  )}

                  <div className="flex flex-col md:flex-row gap-5">

                    <div className="relative shrink-0">

                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                        {captain.initial}
                      </div>

                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white" />

                    </div>

                    <div className="flex-1">

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">

                        <h3 className="text-lg font-bold text-gray-900">
                          {captain.name}
                        </h3>

                        <span className="w-fit px-2 py-1 rounded-lg bg-green-100 text-green-700 text-xs font-semibold">
                          Verified
                        </span>

                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">

                        <span className="font-semibold text-gray-800">
                          ⭐ {captain.rating}
                        </span>

                        <span className="text-gray-500">
                          {captain.trips.toLocaleString()} trips
                        </span>

                        <span className="text-gray-500">
                          {captain.experience} experience
                        </span>

                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-4">

                        <span className="px-3 py-1.5 rounded-xl bg-gray-100 text-sm font-medium">
                          🚗 {captain.vehicle}
                        </span>

                        <span className="text-sm text-gray-500">
                          {captain.vehicleNumber}
                        </span>

                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">

                        {captain.languages.map((language) => (
                          <span
                            key={language}
                            className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 border text-gray-600"
                          >
                            {language}
                          </span>
                        ))}

                      </div>

                    </div>

                    <div className="md:text-right md:min-w-[110px]">

                      <p className="text-xs text-gray-400">
                        Starting from
                      </p>

                      <p className="text-xl font-bold text-gray-900 mt-1">
                        ₹{captain.price}
                      </p>

                      <p className="text-xs text-gray-400">
                        tour fare
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCaptain(captain);
                        }}
                        className={`mt-4 px-4 py-2 rounded-xl text-sm font-semibold transition ${selected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-900 text-white hover:bg-blue-600"
                          }`}
                      >
                        {selected
                          ? "Selected ✓"
                          : "Select"}
                      </button>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {captains.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full mt-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              {showAll
                ? "Show Less ↑"
                : `View ${captains.length - 4} More Captains ↓`}
            </button>
          )}

        </div>

        <div className="lg:sticky lg:top-6">

          <div className="bg-gray-900 text-white rounded-3xl overflow-hidden shadow-xl">

            <div className="p-6 border-b border-white/10">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-gray-400 text-sm">
                    TOUR BOOKING
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    Captain
                  </h2>
                </div>


                <div className="relative w-16 h-16">

                  <svg
                    className="-rotate-90 w-16 h-16"
                    viewBox="0 0 64 64"
                  >

                    <circle
                      cx="32"
                      cy="32"
                      r="27"
                      fill="none"
                      stroke="white"
                      strokeOpacity="0.1"
                      strokeWidth="6"
                    />

                    <motion.circle
                      cx="32"
                      cy="32"
                      r="27"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      className="text-blue-500"
                      strokeDasharray="169.6"
                      animate={{
                        strokeDashoffset:
                          169.6 -
                          (169.6 * progress) / 100,
                      }}
                    />

                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                    {progress}%
                  </span>

                </div>

              </div>

            </div>

            <div className="p-6">

              <p className="text-gray-400 text-sm">
                SELECTED CAPTAIN
              </p>

              <AnimatePresence mode="wait">

                {selectedCaptain ? (

                  <motion.div
                    key={selectedCaptain.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >

                    <div className="mt-4 flex items-center gap-4">

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg">
                        {selectedCaptain.initial}
                      </div>

                      <div>
                        <h3 className="font-bold text-lg">
                          {selectedCaptain.name}
                        </h3>

                        <p className="text-sm text-gray-400 mt-1">
                          ⭐ {selectedCaptain.rating} ·{" "}
                          {selectedCaptain.trips} trips
                        </p>
                      </div>

                    </div>

                    <div className="mt-6 space-y-4">

                      <div className="flex justify-between">
                        <span className="text-gray-400">
                          Vehicle
                        </span>

                        <span className="font-semibold">
                          {selectedCaptain.vehicle}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-400">
                          Experience
                        </span>

                        <span className="font-semibold">
                          {selectedCaptain.experience}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-400">
                          Languages
                        </span>

                        <span className="font-semibold text-right">
                          {selectedCaptain.languages.join(", ")}
                        </span>
                      </div>

                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-white/5">

                      <p className="text-gray-400 text-sm">
                        Captain fare
                      </p>

                      <p className="text-3xl font-bold mt-1">
                        ₹{selectedCaptain.price}
                      </p>

                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5 p-4 rounded-2xl bg-green-500/10 border border-green-500/20"
                    >

                      <div className="flex items-center gap-3">

                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          ✓
                        </div>

                        <div>
                          <p className="font-semibold text-sm">
                            Captain selected
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Your tour is ready for booking.
                          </p>
                        </div>

                      </div>

                    </motion.div>

                    <button
                      onClick={() =>
                        alert(
                          `Booking with ${selectedCaptain.name}`
                        )
                      }
                      className="w-full mt-5 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-bold transition"
                    >
                      Continue to Booking →
                    </button>

                  </motion.div>

                ) : (

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center"
                  >

                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center text-2xl">
                      👤
                    </div>

                    <h3 className="font-semibold mt-4">
                      No captain selected
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      Select a captain from the list to continue.
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>

      <AnimatePresence>

        {selectedCaptain && (

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-3xl p-6"
          >

            <div className="flex flex-col md:flex-row items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl">
                ✓
              </div>

              <div className="flex-1 text-center md:text-left">

                <p className="text-green-600 text-sm font-semibold">
                  TOUR READY
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {selectedCaptain.name} will be your captain
                </h2>

                <p className="text-gray-500 mt-1">
                  Your captain has been selected. Continue to
                  confirm your tour booking.
                </p>

              </div>

              <button
                onClick={handleContinue}
                className="px-7 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-blue-600 transition"
              >
                Confirm Tour →
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </motion.div>
  );
}