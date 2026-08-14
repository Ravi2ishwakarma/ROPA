import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    otp: "",
    aadhar: "",
    nomineeName: "",
    nomineeMobile: "",
    password: "",
    confirmPassword: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [gender, setGender] = useState("Male");

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">

      <h2 className="text-3xl font-bold text-gray-800">
        User Registration
      </h2>

      <p className="text-gray-500    mb-8">
        Fill in your details to create your ParcelLo account.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-3 gap-7">

          <div>
            <label className="font-medium">First Name *</label>

            <div className="   flex items-center border rounded-xl px-4 h-12">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="First Name"
                className="ml-1 w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">
              Middle Name
            </label>

            <div className="flex items-center border rounded-xl px-4 h-12">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Middle Name"
                className="ml-1 w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">
              Last Name 
            </label>

            <div className="flex items-center border rounded-xl h-12">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Last Name"
                className="ml-1 w-full outline-none"
              />
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-3">

          <div>
            <label className="font-medium">
              Date of Birth *
            </label>

            <div className="flex items-center border rounded-xl px-2 h-12">
              <Calendar size={18} className="text-gray-400" />

              <input
                type="date"
                className=" w-full outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">
              Gender *
            </label>

            <div className="flex gap-1">

              {["Male", "Female", "Other"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGender(item)}
                  className={`flex-1 h-12 rounded-xl border w-15 transition ${gender === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white" 
                    }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

        </div>

        <div>

          <label className="font-medium">
            Email Address *
          </label>

          <div className="   flex items-center border rounded-xl px-4 h-12">
            <Mail size={18} className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter Email"
              className="ml-3 w-full outline-none"
            />
          </div>

        </div>

        <div>

          <label className="font-medium">
            Mobile Number *
          </label>

          <div className="flex gap-3   ">

            <div className="flex items-center border rounded-xl px-4 h-12 flex-1">
              <Phone size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="ml-3 w-full outline-none"
              />
            </div>

            <button
              className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700"
            >
              Send OTP
            </button>

          </div>

        </div>

        <div>

          <label className="font-medium">
            OTP Verification *
          </label>

          <div className="flex gap-3   ">

            <div className="flex items-center border rounded-xl px-4 h-12 flex-1">
              <ShieldCheck size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter OTP"
                className="ml-3 w-full outline-none"
              />
            </div>

            <button
              className="border border-blue-600 text-blue-600 px-6 rounded-xl hover:bg-blue-50"
            >
              Verify
            </button>

          </div>

        </div>


        <div>

          <label className="font-medium">
            Aadhaar Number 
          </label>

          <div className="   flex items-center border rounded-xl px-4 h-12">
            <CreditCard size={18} className="text-gray-400" />

            <input
              type="text"
              maxLength={12}
              placeholder="XXXX XXXX XXXX"
              className="ml-3 w-full outline-none"
            />
          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>

            <label className="font-medium">
              Nominee Name *
            </label>

            <div className="   flex items-center border rounded-xl px-4 h-12">
              <User size={18} className="text-gray-400" />

              <input
                type="text"
                required
                placeholder="Nominee Name"
                className="ml-1 w-full outline-none"
              />
            </div>

          </div>

          <div>

            <label className="font-medium">
              Nominee Mobile *
            </label>

            <div className="   flex items-center border rounded-xl px-4 h-12">
              <Phone size={18} className="text-gray-400" />
              <input
                type="text"
                required
                placeholder="Nominee Mobile"
                className="ml-1 w-full outline-none"
              />
            </div>

          </div>

        </div>

        <button
          className="w-full h-14 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700"
        >
          Register Account
        </button>

        <p className="text-center text-gray-500">
          Already have an account?
          <span className="text-blue-600 font-semibold cursor-pointer ml-2">
            Login
          </span>
        </p>

      </form>

    </div>
  );
};

export default RegistrationForm;