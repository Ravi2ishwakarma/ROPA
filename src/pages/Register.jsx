import RegistrationForm from "../components/RegistrationForm";
import LeftSection from "../components/LeftSection";
import truck from "../assests/rtruck.jpg";
import {
  FaShieldAlt,
  FaShippingFast,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";
const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3  gap-10 items-center">

          <div className="space-y-9 md:col-span-1">

            <div>
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
                Create Your
                <span className="text-blue-600"> Account</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600">
                Join ParcelLo and enjoy secure, fast and reliable parcel
                delivery services across India.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue text-2xl">
                  <FaShieldAlt size={30} className="w-9 h-9 text-blue-600"/>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Secure Registration
                  </h3>

                  <p className="text-gray-500">
                    Your information is encrypted and protected.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  <FaShippingFast size={30} className="w-9 h-9 text-blue-600"/>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Fast Delivery
                  </h3>

                  <p className="text-gray-500">
                    Ship parcels quickly with live tracking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  <FaMapMarkedAlt size={30} className="w-9 h-9 text-blue-600"/>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Live Tracking
                  </h3>

                  <p className="text-gray-500">
                    Track your shipment anytime from anywhere.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  <FaHeadset size={30} className="w-9 h-9 text-blue-600"/>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    24/7 Support
                  </h3>

                  <p className="text-gray-500">
                    Dedicated support team for every delivery.
                  </p>
                </div>
              </div>

            </div>
            <div>
              <img
                src={truck}
                alt="Truck"
                className="w-full max-w-lg mx-auto"
              />
            </div>

          </div>
          <div className="col-span-2">
            <RegistrationForm/>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Register;