import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import bike from "../assests/bike.png";
import scooter from "../assests/scooter.png";
import auto from "../assests/auto.png";
import car from "../assests/car.png";
import pcar from "../assests/pcar.png";

const vehicles = [
  { name: "Bike", image: bike, price: 200 },
  { name: "Scooter", image: scooter, price: 300 },
  { name: "Auto", image: auto, price: 500 },
  { name: "Car", image: car, price: 800 },
  { name: "Premium Car", image: pcar, price: 1500 },
];

const places = [
  "Upper Lake",
  "Lakshminarayan Mandir",
  "State Museum",
  "Van Vihar",
  "Local Market",
  "Birla Mandir",
];

const durationPrice = {
  "Half Day": 500,
  "Full Day": 1000,
};

const StepTitle = ({ number, title, subtitle }) => (
  <div className="flex items-start gap-4 mb-5">
    <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
      {number}
    </div>

    <div>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  </div>
);

const SectionCard = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-gray-100 rounded-3xl p-6 shadow-sm ${className}`}
  >
    {children}
  </div>
);

export default function CustomTourBuilder() {
  const [duration, setDuration] = useState("Full Day");
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [customHours, setCustomHours] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const navigate = useNavigate();


  const handlePlaceSelect = (place) => {
    setSelectedPlaces((prev) =>
      prev.includes(place)
        ? prev.filter((item) => item !== place)
        : [...prev, place]
    );
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPickupLocation(`${coords.latitude}, ${coords.longitude}`);
      },
      () => alert("Unable to get location")
    );
  };

  const durationCharge =
    duration === "Custom"
      ? Number(customHours || 0) * 20
      : durationPrice[duration] || 0;

  const placesCharge = selectedPlaces.length * 15;
  const vehicleCharge = selectedVehicle?.price || 0;

  const estimatedPrice =
    placesCharge + vehicleCharge + durationCharge;


  const completedSteps = [
    selectedPlaces.length > 0,
    selectedVehicle,
    pickupLocation,
    duration !== "Custom" || Number(customHours) > 0,
  ].filter(Boolean).length;

  const progress = Math.round((completedSteps / 4) * 100);

  const tourComplete = completedSteps === 4;

  const handleSelectCaptain = () => {
    if (selectedPlaces.length === 0) {
      alert("Please select at least one place.");
      return;
    }

    if (!selectedVehicle) {
      alert("Please select a vehicle.");
      return;
    }

    if (!pickupLocation) {
      alert("Please select pickup location.");
      return;
    }

    if (duration === "Custom" && !customHours) {
      alert("Please enter custom hours.");
      return;
    }

    navigate("/select-captain", {
      state: {
        selectedPlaces,
        duration,
        customHours,
        selectedVehicle,
        pickupLocation,
        placesCharge: selectedPlaces.length * 150,
        vehicleCharge: selectedVehicle.price,
        durationCharge:
          duration === "Custom"
            ? Number(customHours) * 200
            : durationPrice[duration],
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto bg-gray-200 px-4 py-8"
    >
      <div className="mb-8">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          ROPA City Tours
        </p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Build Your Tour
            </h1>

            <p className="text-gray-500 mt-3 max-w-xl">
              Choose the places you want to explore, select your ride,
              and create a tour that fits your day.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            {completedSteps}/4 steps completed
          </div>
        </div>
      </div>


      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

        <div className="space-y-6">

          <SectionCard>
            <StepTitle
              number="01"
              title="Where do you want to go?"
              subtitle="Pick the attractions you want to include."
            />

            <div className="grid sm:grid-cols-2 gap-3">
              {places.map((place) => {
                const selected = selectedPlaces.includes(place);

                return (
                  <motion.button
                    key={place}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePlaceSelect(place)}
                    className={`text-left p-4 rounded-2xl border transition-all ${selected
                        ? "border-blue-500 bg-blue-50 shadow-sm"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">
                        {place}
                      </span>

                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${selected
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300"
                          }`}
                      >
                        {selected ? "✓" : ""}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedPlaces.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-5 border-t"
                >
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    YOUR ITINERARY
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedPlaces.map((place, index) => (
                      <motion.button
                        key={place}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        onClick={() => handlePlaceSelect(place)}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 px-3 py-2 rounded-xl text-sm"
                      >
                        <span className="w-5 h-5 bg-blue-600 text-white rounded-full text-xs flex items-center justify-center">
                          {index + 1}
                        </span>

                        {place}

                        <span>×</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SectionCard>

          <SectionCard>
            <StepTitle
              number="02"
              title="How long is your tour?"
              subtitle="Choose a duration that works for you."
            />

            <div className="grid grid-cols-3 gap-3">
              {["Half Day", "Full Day", "Custom"].map((item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setDuration(item)}
                  className={`py-4 rounded-2xl border font-semibold transition ${duration === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-200 hover:border-blue-300"
                    }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {duration === "Custom" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4"
                >
                  <input
                    type="number"
                    min="1"
                    value={customHours}
                    onChange={(e) => setCustomHours(e.target.value)}
                    placeholder="Enter number of hours"
                    className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </SectionCard>

          <SectionCard>
            <StepTitle
              number="03"
              title="Choose your ride"
              subtitle="Select the vehicle you want for your tour."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {vehicles.map((vehicle) => {
                const selected =
                  selectedVehicle?.name === vehicle.name;

                return (
                  <motion.button
                    key={vehicle.name}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={`relative p-3 rounded-2xl border transition ${selected
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                  >
                    {selected && (
                      <span className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                        ✓
                      </span>
                    )}

                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-24 object-contain"
                    />

                    <p className="font-bold text-sm mt-2">
                      {vehicle.name}
                    </p>

                    <p className="text-green-600 font-semibold text-sm mt-1">
                      ₹{vehicle.price}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </SectionCard>

          <SectionCard>
            <StepTitle
              number="04"
              title="Where should we pick you up?"
              subtitle="Enter your hotel, airport, station or current location."
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={pickupLocation}
                onChange={(e) =>
                  setPickupLocation(e.target.value)
                }
                placeholder="Hotel, Airport, Railway Station..."
                className="flex-1 border border-gray-200 rounded-2xl p-4 outline-none focus:border-blue-500"
              />

              <button
                onClick={getCurrentLocation}
                className="px-5 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition"
              >
                📍 Current Location
              </button>
            </div>

            {pickupLocation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 border border-green-100 rounded-2xl"
              >
                <p className="text-xs text-green-600 font-semibold uppercase">
                  Pickup selected
                </p>

                <p className="text-sm mt-1 text-gray-700 break-all">
                  {pickupLocation}
                </p>
              </motion.div>
            )}
          </SectionCard>

          <AnimatePresence>
            {tourComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative overflow-hidden rounded-3xl bg-gray-900 text-white p-7"
              >
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-blue-500/20" />

                <div className="relative flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-lg">
                    ✓
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-green-400 font-semibold text-sm">
                      TOUR ALMOST READY
                    </p>

                    <h2 className="text-2xl font-bold mt-1">
                      Your custom tour is one step remains!
                    </h2>

                    <p className="text-gray-400 mt-1">
                      Everything is selected. You're ready to continue
                      with your booking.
                    </p>
                  </div>

                  <button
                    onClick={handleSelectCaptain}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition whitespace-nowrap"
                  >
                    Continue →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:sticky lg:top-6">
          <div className="rounded-3xl bg-gray-900 text-white overflow-hidden shadow-xl">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">
                    YOUR TOUR
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    Live Preview
                  </h2>
                </div>

                <div className="relative w-16 h-16">
                  <svg
                    className="w-16 h-16 -rotate-90"
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
                      strokeDasharray={169.6}
                      animate={{
                        strokeDashoffset:
                          169.6 - (169.6 * progress) / 100,
                      }}
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">
                    Places
                  </span>

                  <span className="font-semibold">
                    {selectedPlaces.length}
                  </span>
                </div>

                {selectedPlaces.length > 0 ? (
                  <div className="space-y-2">
                    {selectedPlaces.map((place, index) => (
                      <motion.div
                        key={place}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs">
                          {index + 1}
                        </span>

                        <span className="text-sm">
                          {place}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No places selected
                  </p>
                )}
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Duration
                </span>

                <span className="font-semibold">
                  {duration === "Custom"
                    ? `${customHours || 0} hrs`
                    : duration}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">
                  Vehicle
                </span>

                {selectedVehicle ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedVehicle.image}
                      alt=""
                      className="w-12 h-8 object-contain"
                    />

                    <span className="font-semibold">
                      {selectedVehicle.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-gray-500">
                    Not selected
                  </span>
                )}
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Pickup
                </p>

                <p className="font-medium mt-1 text-sm break-all">
                  {pickupLocation || "Not selected"}
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div className="bg-white/5 rounded-2xl p-4">
                <p className="text-gray-400 text-sm">
                  Estimated total
                </p>

                <motion.p
                  key={estimatedPrice}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold mt-1"
                >
                  ₹{estimatedPrice}
                </motion.p>

                <p className="text-xs text-gray-500 mt-1">
                  Final price may vary based on actual trip details.
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 ${tourComplete
                    ? "bg-green-500/10"
                    : "bg-blue-500/10"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-3 h-3 rounded-full ${tourComplete
                        ? "bg-green-400"
                        : "bg-blue-400 animate-pulse"
                      }`}
                  />

                  <div>
                    <p className="font-semibold text-sm">
                      {tourComplete
                        ? "Tour ready to book"
                        : "Build your tour"}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {tourComplete
                        ? "All required details are complete."
                        : `${4 - completedSteps} step${4 - completedSteps > 1 ? "s" : ""
                        } remaining`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}