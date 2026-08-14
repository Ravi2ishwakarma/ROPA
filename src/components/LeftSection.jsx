import {
  ShieldCheck,
  Truck,
  MapPinned,
  Headphones,
  CheckCircle,
} from "lucide-react";

const LeftSection = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full w-fit mb-6">
        <Truck size={18} />
        <span className="font-medium">
          Trusted by 50,000+ Customers
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight text-gray-900">
        Deliver
        <span className="text-blue-600"> Smarter</span>,
        <br />
        Ship Faster.
      </h1>

      {/* Description */}
      <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
        Register your ParcelLo account and enjoy secure parcel delivery,
        instant booking, live shipment tracking, and dedicated customer
        support.
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-5 mt-10">

        <div className="bg-white shadow rounded-2xl p-5">
          <ShieldCheck className="text-blue-600 mb-3" size={30} />
          <h3 className="font-semibold">
            Secure Account
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Your data is encrypted and protected.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5">
          <Truck className="text-blue-600 mb-3" size={30} />
          <h3 className="font-semibold">
            Fast Delivery
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Quick shipping across India.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5">
          <MapPinned className="text-blue-600 mb-3" size={30} />
          <h3 className="font-semibold">
            Live Tracking
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Track every shipment in real time.
          </p>
        </div>

        <div className="bg-white shadow rounded-2xl p-5">
          <Headphones className="text-blue-600 mb-3" size={30} />
          <h3 className="font-semibold">
            24/7 Support
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Our team is always here to help.
          </p>
        </div>

      </div>

      {/* Trust Banner */}
      <div className="mt-10 bg-blue-600 rounded-2xl p-5 text-white flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold">
            Safe & Verified Registration
          </h2>

          <p className="mt-2 text-blue-100">
            OTP verified • Aadhaar verified • Secure Login
          </p>
        </div>

        <CheckCircle size={48} />
      </div>

    </div>
  );
};

export default LeftSection;