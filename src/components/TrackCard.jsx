import { CircleCheckBig, Circle } from "lucide-react";

function TrackCard() {
  return (
    <div className="bg-white  rounded-3xl shadow-2xl p-6 w-full max-w-md">

      <h2 className="text-3xl font-bold">
        Track <span className="text-blue-500">Your Parcel</span>
      </h2>
      <p className="text-gray-500 mt-2">
        Enter your tracking ID to get real-time updates.
      </p>
      <div className="flex mt-6 gap-3">
        <input
          type="text"
          placeholder="Enter Tracking ID"
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
        <button className="bg-slate-900 text-white px-6 rounded-xl hover:bg-blue-500 duration-300">
          Track
        </button>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div>
             <p className="text-gray-500 text-sm">
              Tracking ID
            </p>
            <h3 className="font-bold">
              PL123456789
            </h3>
          </div>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            In Transit
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-6">

        <div className="flex gap-4">

          <CircleCheckBig className="text-green-500"/>

          <div>
            <h4 className="font-semibold">
              Order Placed
            </h4>
            <p className="text-gray-500 text-sm">
              20 May 2026 • 10:30 AM
            </p>
          </div>

        </div>

        <div className="flex gap-4">
          <CircleCheckBig className="text-green-500"/>
          <div>
            <h4 className="font-semibold">
              Picked Up
            </h4>
            <p className="text-gray-500 text-sm">
              21 May 2026 • 02:15 PM
            </p>
          </div>
         </div>

        <div className="flex gap-4">
          <CircleCheckBig className="text-green-500"/>
          <div>
            <h4 className="font-semibold">
              In Transit
            </h4>
            <p className="text-gray-500 text-sm">
              Bhopal Sorting Hub
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Circle className="text-gray-400"/>
          <div>
            <h4 className="font-semibold text-gray-400">
              Out For Delivery
            </h4>
          </div>
        </div>
        <div className="flex gap-4">
          <Circle className="text-gray-400"/>
          <div>
            <h4 className="font-semibold text-gray-400">
              Delivered
            </h4>
          </div>
        </div>
      </div>
      <button className="w-full mt-8 border rounded-xl py-3 font-semibold hover:bg-slate-900 hover:text-white duration-300">
        View Full Details →
      </button>
    </div>
  );
}

export default TrackCard;