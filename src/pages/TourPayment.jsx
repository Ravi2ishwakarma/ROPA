import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function TourPayment() {

    const bookingData = location.state || {};
    const { state } = useLocation();
    const navigate = useNavigate();
    if (!state) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">
                        Tour details not found
                    </h2>

                    <button
                        onClick={() => navigate("/custom-tour")}
                        className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl"
                    >
                        Create Tour
                    </button>
                </div>
            </div>
        );
    }
    const {
        city,
        date,
        adults,
        children
    }= bookingData; 
  
    const {
        places = [],
        duration,
        customHours,
        vehicle,
        captain,
        pickupLocation,
        placesCharge,
        vehicleCharge,
        durationCharge,
        total,
    } = state;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">

            <div className="max-w-7xl mx-auto">

                <div className="mb-8">

                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                        ROPA City Tour
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        Review & Payment
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Review your complete tour details before making payment.
                    </p>

                </div>

                <div className="grid lg:grid-cols-[1fr_380px] gap-8">

                    <div className="space-y-6">


                        <div className="bg-green-50 border border-green-200 rounded-3xl p-5">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-xl">
                                    ✓
                                </div>

                                <div>
                                    <h2 className="font-bold text-gray-900">
                                        Your tour is ready
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Everything has been selected successfully.
                                    </p>
                                </div>

                            </div>

                        </div>


                        <div className="bg-white rounded-3xl border p-6">

                            <div className="flex justify-between items-center mb-5">

                                <div>
                                    <p className="text-sm text-gray-400">
                                        STEP 01
                                    </p>

                                    <h2 className="text-xl font-bold">
                                        Your Tour City and Places
                                    </h2>
                                    <h3>{city}</h3>
                                </div>

                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                    {places.length} Places
                                </span>

                            </div>

                            <div className="space-y-3">

                                {places.map((place, index) => (

                                    <div
                                        key={place}
                                        className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl"
                                    >

                                        <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>

                                        <span className="font-medium">
                                            {place}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>


                        <div className="bg-white rounded-3xl border p-6">

                            <p className="text-sm text-gray-400">
                                STEP 02
                            </p>

                            <h2 className="text-xl font-bold mt-1 mb-5">
                                Tour Details
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-4">

                                <Detail
                                    label="Duration"
                                    value={
                                        duration === "Custom"
                                            ? `${customHours} Hours`
                                            : duration
                                    }
                                />

                                <Detail
                                    label="Pickup Location"
                                    value={pickupLocation}
                                />

                            </div>

                        </div>

                        <div className="bg-white rounded-3xl border p-6">

                            <p className="text-sm text-gray-400">
                                STEP 03
                            </p>

                            <h2 className="text-xl font-bold mt-1 mb-5">
                                Selected Vehicle
                            </h2>

                            {vehicle && (

                                <div className="flex items-center gap-5 p-4 bg-blue-50 rounded-2xl">

                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        className="w-28 h-20 object-contain"
                                    />

                                    <div className="flex-1">

                                        <h3 className="font-bold text-lg">
                                            {vehicle.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Vehicle charge
                                        </p>

                                        <p className="text-green-600 font-bold mt-1">
                                            ₹{vehicleCharge}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>


                        <div className="bg-white rounded-3xl border p-6">

                            <p className="text-sm text-gray-400">
                                STEP 04
                            </p>

                            <h2 className="text-xl font-bold mt-1 mb-5">
                                Your Captain
                            </h2>

                            {captain && (

                                <div className="flex items-center gap-5">

                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                                        {captain.initial}
                                    </div>

                                    <div className="flex-1">

                                        <div className="flex items-center gap-2">

                                            <h3 className="font-bold text-lg">
                                                {captain.name}
                                            </h3>

                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-lg">
                                                Verified
                                            </span>

                                        </div>

                                        <p className="text-sm text-gray-500 mt-1">
                                            ⭐ {captain.rating} ·{" "}
                                            {captain.trips} trips
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1">
                                            {captain.experience} experience
                                        </p>

                                    </div>

                                    <div className="text-right">

                                        <p className="text-xs text-gray-400">
                                            Captain fare
                                        </p>

                                        <p className="font-bold text-lg">
                                            ₹{captain.price}
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>

                        <div className="bg-white rounded-3xl border p-6">

                            <p className="text-sm text-gray-400">
                                PICKUP
                            </p>

                            <div className="flex gap-4 items-center mt-3">

                                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                                    📍
                                </div>

                                <div>

                                    <p className="font-semibold">
                                        Pickup Location
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1 break-all">
                                        {pickupLocation}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="lg:sticky lg:top-6 h-fit">

                        <div className="bg-gray-900 text-white rounded-3xl overflow-hidden shadow-xl">

                            <div className="p-6 border-b border-white/10">

                                <p className="text-gray-400 text-sm">
                                    BOOKING SUMMARY
                                </p>

                                <h2 className="text-2xl font-bold mt-1">
                                    Payment
                                </h2>

                            </div>


                            <div className="p-6">

                                <div className="space-y-4">

                                    <PriceRow
                                        label={`Places (${places.length})`}
                                        value={placesCharge}
                                    />

                                    <PriceRow
                                        label="Vehicle"
                                        value={vehicleCharge}
                                    />

                                    <PriceRow
                                        label="Duration"
                                        value={durationCharge}
                                    />

                                    <PriceRow
                                        label="Captain"
                                        value={captain?.price || 0}
                                    />

                                    <div className="border-t border-white/10 pt-5 mt-5">

                                        <div className="flex justify-between items-end">

                                            <span className="text-gray-400">
                                                Total Amount
                                            </span>

                                            <motion.span
                                                initial={{ scale: 1.1 }}
                                                animate={{ scale: 1 }}
                                                className="text-3xl font-bold"
                                            >
                                                ₹{total + (captain?.price || 0)}
                                            </motion.span>

                                        </div>

                                    </div>

                                </div>

                                <div className="mt-7">

                                    <p className="text-sm text-gray-400 mb-3">
                                        PAYMENT METHOD
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">

                                        <button className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                                            UPI
                                        </button>

                                        <button className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                                            Card
                                        </button>

                                        <button className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                                            Net Banking
                                        </button>

                                        <button className="p-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
                                            Wallet
                                        </button>

                                    </div>

                                </div>

                                <button
                                    onClick={() =>
                                        alert("Payment gateway will open here")
                                    }
                                    className="w-full mt-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 font-bold text-lg transition"
                                >
                                    Pay ₹
                                    {total + (captain?.price || 0)}
                                    {" "}→
                                </button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    🔒 Secure payment powered by ROPA
                                </p>

                            </div>

                        </div>

                        <button
                            onClick={() => navigate(-1)}
                            className="w-full mt-4 py-3 rounded-2xl border border-gray-200 bg-white font-semibold text-gray-700 hover:bg-gray-50"
                        >
                            ← Go Back & Edit Tour
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

function Detail({ label, value }) {
    return (
        <div className="p-4 bg-gray-50 rounded-2xl">
            <p className="text-xs text-gray-400 uppercase">
                {label}
            </p>

            <p className="font-semibold mt-1 break-all">
                {value || "Not selected"}
            </p>
        </div>
    );
}

function PriceRow({ label, value }) {
    return (
        <div className="flex justify-between text-sm">
            <span className="text-gray-400">
                {label}
            </span>

            <span className="font-semibold">
                ₹{value}
            </span>
        </div>
    );
}