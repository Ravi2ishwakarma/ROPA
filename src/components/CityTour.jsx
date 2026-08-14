import React, { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const tours = [
  {
    name: "Bhopal Heritage Tour",
    duration: "6 Hours",
    places: "4 Places",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    description:
      "Explore historical monuments, lakes and famous landmarks of Bhopal.",
  },
  {
    name: "Bhopal Nature Tour",
    duration: "5 Hours",
    places: "3 Places",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description:
      "Visit lakes, parks and natural attractions around the city.",
  },
  {
    name: "Spiritual Bhopal Tour",
    duration: "7 Hours",
    places: "4 Places",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    description:
      "Discover temples, mosques and spiritual destinations.",
  },
  {
    name: "Rivers and Temples Tour",
    duration: "10 Hours",
    places: "6 Places",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1633761729781-702328b54fe2",
    description:
      "Visit Rivers, Tamples and natural attractions around the city.",
  },
];

export default function CityTour() {
  const navigate = useNavigate();

  const [city, setCity] = useState("Bhopal, MP");
  const [date, setDate] = useState("");
  const [showCities, setShowCities] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [filteredTours, setFilteredTours] = useState(tours);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showDetails, setShowDetails] = useState(false);


  const cities = [
    "Bhopal, MP",
    "Indore, MP",
    "Ujjain, MP",
    "Jabalpur, MP",
    "Delhi, India",
    "Mumbai, Maharashtra",
  ];

  const handleSearch = () => {
    const searchCity = city.split(",")[0].toLowerCase();

    const result = tours.filter((tour) =>
      tour.name.toLowerCase().includes(searchCity)
    );

    setFilteredTours(result.length ? result : tours);
  };

  return (
    <>
      <div className="min-h-screen  bg-gray-100">

        <section className="relative">
          <div className="max-w-8xl rounded-2xl mx-4 my-2">

            <img
              src="https://images.unsplash.com/photo-1567771971104-545efaf89ddb"
              alt=""
              className="h-[450px] rounded-2xl w-full object-cover"
            />

          </div>

          <div className="absolute inset-0" />

          <div className="absolute mt-30 inset-0 flex items-center">

            <div className="max-w-7xl mx-auto px-6 w-full">

              <div>

                <div className="max-w-xl text-black">

                  <h1 className="text-5xl font-bold mb-4">
                    Explore The City
                    <br />
                    Your Way With ROPA
                  </h1>

                  <p className="text-lg mb-8">
                    Choose pre-built tours or create your own
                    custom tour and enjoy a memorable
                    experience.
                  </p>

                </div>

                <div className="w-full max-w-5xl mx-auto">

                  <div className="bg-white h-22 rounded-2xl shadow-lg p-3 flex items-center gap-2">

                    <div className="relative flex-1">

                      <button
                        onClick={() => {
                          setShowCities(!showCities);
                          setShowGuests(false);
                        }}
                        className="w-full flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-gray-50 text-left"
                      >

                        <MapPin
                          size={22}
                          className="text-orange-500"
                        />

                        <div className="flex-1">

                          <p className="text-xs text-gray-500">
                            Select City
                          </p>

                          <p className="font-semibold text-gray-800">
                            {city}
                          </p>

                        </div>

                        <ChevronDown
                          size={18}
                          className="text-gray-500"
                        />

                      </button>

                      {showCities && (

                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border z-50 overflow-hidden">

                          {cities.map((item) => (

                            <button
                              key={item}
                              onClick={() => {
                                setCity(item);
                                setShowCities(false);
                              }}
                              className="w-full text-left px-5 py-3 hover:bg-blue-50 text-gray-700"
                            >
                              {item}
                            </button>

                          ))}

                        </div>

                      )}

                    </div>

                    <div className="h-12 w-px bg-gray-200" />

                    <div className="relative flex-1">
                      <button
                        type="button"
                        onClick={() => {
                          document.getElementById("tour-date-picker").showPicker();
                        }}
                        className="w-full flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-gray-50 text-left"
                      >
                        <CalendarDays
                          size={22}
                          className="text-orange-500"
                        />

                        <div className="flex-1">
                          <p className="text-xs text-gray-500">
                            Select Date
                          </p>

                          <p className="font-semibold text-gray-800">
                            {date
                              ? new Date(date + "T00:00:00").toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )
                              : "Choose your date"}
                          </p>
                        </div>

                        <ChevronDown
                          size={18}
                          className="text-gray-500"
                        />
                      </button>


                      <input
                        id="tour-date-picker"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        className="absolute opacity-0 pointer-events-none w-0 h-0"
                      />
                    </div>

                    <div className="h-12 w-px bg-gray-200" />

                    <div className="relative flex-1">
                      <button
                        onClick={() => {
                          setShowGuests(!showGuests);
                          setShowCities(false);
                        }}
                        className="w-full flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-gray-50 text-left"
                      >
                        <Users size={22} className="text-orange-500" />

                        <div className="flex-1">
                          <p className="text-xs text-gray-500">
                            Guests
                          </p>

                          <p className="font-semibold text-gray-800">
                            {adults} Adults, {children} Child
                            {children !== 1 && "ren"}
                          </p>
                        </div>

                        <ChevronDown size={18} className="text-gray-500" />
                      </button>

                      {showGuests && (
                        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border p-5 z-50">
                          <div className="flex items-center justify-between mb-5">
                            <div>
                              <p className="font-semibold text-gray-800">
                                Adults
                              </p>
                              <p className="text-xs text-gray-500">
                                Age 13+
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                disabled={adults <= 1}
                                onClick={() =>
                                  setAdults(Math.max(1, adults - 1))
                                }
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                              >
                                <Minus size={15} />
                              </button>

                              <span className="font-semibold w-5 text-center">
                                {adults}
                              </span>

                              <button
                                onClick={() => setAdults(adults + 1)}
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                              >
                                <Plus size={15} />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-gray-800">
                                Children
                              </p>
                              <p className="text-xs text-gray-500">
                                Age 0–12
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                disabled={children <= 0}
                                onClick={() =>
                                  setChildren(Math.max(0, children - 1))
                                }
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                              >
                                <Minus size={15} />
                              </button>

                              <span className="font-semibold w-5 text-center">
                                {children}
                              </span>

                              <button
                                onClick={() =>
                                  setChildren(children + 1)
                                }
                                className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                              >
                                <Plus size={15} />
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowGuests(false)}
                            className="mt-5 w-full bg-blue-500 text-white py-2 rounded-lg font-medium"
                          >
                            Done
                          </button>
                        </div>
                      )}
                    </div>


                    {/* <button
                      onClick={handleSearch}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-4 rounded-xl flex items-center gap-2 transition"
                    >
                      Explore Tours
                      <span className="text-lg">→</span>
                    </button> */}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold">
                Available Tours
              </h2>

              <Link
                to="/customtour"
                className=" bg-gray-900 hover: bg-gray-700 text-white px-5 py-3 rounded-xl font-semibold"
              >
                Create Custom Tour
              </Link>

            </div>
            {!showDetails && (
              <div className="grid md:grid-cols-2 gap-6">

                {filteredTours.map((tour, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
                  >

                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">

                      <h3 className="font-bold text-xl mb-2">
                        {tour.name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">
                        {tour.description}
                      </p>

                      <div className="space-y-2">

                        <div className="flex justify-between">

                          <span className="text-gray-500">
                            Duration
                          </span>

                          <span className="font-semibold">
                            {tour.duration}
                          </span>

                        </div>

                        <div className="flex justify-between">

                          <span className="text-gray-500">
                            Places
                          </span>

                          <span className="font-semibold">
                            {tour.places}
                          </span>

                        </div>

                      </div>

                      <div className="flex justify-between items-center mt-6">

                        <span className="text-green-600 text-2xl font-bold">
                          {tour.price}
                        </span>

                        <button
                          onClick={() => {
                            setSelectedTour(tour);
                            setShowDetails(true);
                          }}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                          View Details
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

          <div>

            <div className="bg-white rounded-2xl shadow sticky top-6 p-6">

              <h2 className="text-2xl font-bold mb-6">
                Tour Summary
              </h2>

              <div className="space-y-5">

                <div>

                  <p className="text-gray-500 text-sm">
                    Selected City
                  </p>

                  <p className="font-semibold">
                    {city}
                  </p>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Tour Name
                  </p>

                  <p className="font-semibold">
                    {selectedTour?.name ||
                      "Select a Tour"}
                  </p>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Date
                  </p>

                  <p className="font-semibold">
                    {date || "--"}
                  </p>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Duration
                  </p>

                  <p className="font-semibold">
                    {selectedTour?.duration ||
                      "--"}
                  </p>

                </div>

                <div>

                  <p className="text-gray-500 text-sm">
                    Guests
                  </p>

                  <p className="font-semibold">
                    {adults + children}
                  </p>

                </div>

              </div>

              <hr className="my-6" />

              <div>

                <p className="text-gray-500 mb-2">
                  Estimated Price
                </p>

                <p className="text-3xl font-bold text-green-600">
                  {selectedTour?.price || "--"}
                </p>

              </div>

              <button
                onClick={() =>
                  navigate("/customtour")
                }
                className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold"
              >
                Continue To Book
              </button>

            </div>

            <div className="bg-white rounded-2xl  shadow p-6 mt-6">

              <h2 className="text-xl font-bold mb-5">
                ROPA Statistics
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <div className="text-center">

                  <h3 className="text-3xl font-bold text-blue-500">
                    500+
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Tours Completed
                  </p>

                </div>

                <div className="text-center">

                  <h3 className="text-3xl font-bold text-blue-500">
                    150+
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Captains
                  </p>

                </div>

                <div className="text-center">

                  <h3 className="text-3xl font-bold text-blue-500">
                    50+
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Cities Covered
                  </p>

                </div>

                <div className="text-center">

                  <h3 className="text-3xl font-bold text-blue-500">
                    4.8★
                  </h3>

                  <p className="text-gray-600 text-sm">
                    Avg Rating
                  </p>

                </div>

              </div>

            </div>

          </div>

          {showDetails && selectedTour && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

              <div className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl">

                <img
                  src={selectedTour.image}
                  alt={selectedTour.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8">

                  <div className="flex justify-between items-start">

                    <div>

                      <h2 className="text-3xl font-bold">
                        {selectedTour.name}
                      </h2>

                      <p className="text-gray-600 mt-3">
                        {selectedTour.description}
                      </p>

                    </div>

                    <button
                      onClick={() => setSelectedTour(null)}
                      className="text-3xl"
                    >
                      ✕
                    </button>

                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">

                    <div className="bg-gray-50 p-4 rounded-xl">

                      <p className="text-gray-500">
                        Duration
                      </p>

                      <p className="font-bold text-lg">
                        {selectedTour.duration}
                      </p>

                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">

                      <p className="text-gray-500">
                        Places Covered
                      </p>

                      <p className="font-bold text-lg">
                        {selectedTour.places}
                      </p>

                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">

                      <p className="text-gray-500">
                        Price
                      </p>

                      <p className="font-bold text-green-600 text-xl">
                        {selectedTour.price}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8">

                    <h3 className="font-bold text-xl mb-4">
                      Places Included
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      <span className="bg-blue-100 px-4 py-2 rounded-full">
                        Upper Lake
                      </span>

                      <span className="bg-blue-100 px-4 py-2 rounded-full">
                        Taj-ul-Masajid
                      </span>

                      <span className="bg-blue-100 px-4 py-2 rounded-full">
                        State Museum
                      </span>

                      <span className="bg-blue-100 px-4 py-2 rounded-full">
                        Local Market
                      </span>

                    </div>

                  </div>

                  <div className="flex gap-4 mt-10">

                    <button
                      onClick={() => {
                        setShowDetails(false);
                        setSelectedTour(tour);
                      }}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold"
                    >
                      Select
                    </button>

                    <button
                      onClick={() => setSelectedTour(null)}
                      className="px-8 border rounded-xl"
                    >
                      Close
                    </button>

                  </div>

                </div>

              </div>

            </div>
          )}

        </div>
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center mb-16">

            <span className="text-blue-600 font-semibold">
              SIMPLE PROCESS
            </span>

            <h2 className="text-5xl font-bold mt-3">
              How Your City Tour Works
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Plan, customize and enjoy your city tour with verified ROPA captains.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">


            <div className="relative bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📍
              </div>

              <span className="text-blue-600 font-bold">
                STEP 01
              </span>

              <h3 className="text-2xl font-bold mt-3">
                Select City
              </h3>

              <p className="text-gray-600 mt-3">
                Choose your city and preferred travel date.
              </p>

            </div>


            <div className="relative bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🗺️
              </div>

              <span className="text-green-600 font-bold">
                STEP 02
              </span>

              <h3 className="text-2xl font-bold mt-3">
                Build Tour
              </h3>

              <p className="text-gray-600 mt-3">
                Select places, duration and vehicle.
              </p>

            </div>


            <div className="relative bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🚗
              </div>

              <span className="text-yellow-600 font-bold">
                STEP 03
              </span>

              <h3 className="text-2xl font-bold mt-3">
                Choose Captain
              </h3>

              <p className="text-gray-600 mt-3">
                Select a verified captain based on ratings and reviews.
              </p>

            </div>

            <div className="relative bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🎉
              </div>

              <span className="text-purple-600 font-bold">
                STEP 04
              </span>

              <h3 className="text-2xl font-bold mt-3">
                Enjoy Tour
              </h3>

              <p className="text-gray-600 mt-3">
                Meet your captain and explore the city stress-free.
              </p>

            </div>

          </div>

        </section>

      </div>
    </>);
}