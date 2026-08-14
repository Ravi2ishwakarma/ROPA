import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-2xl text-blue-500 font-bold text-black-600">
              ROPA
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
              Fast, secure and reliable parcel delivery services across India.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer"><a href="/Rent">Rent Vehicle</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href="/ship">Ship Parcel</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href="/drive">Drive with Us</a></li>
              <li className="hover:text-blue-600 cursor-pointer"><a href="ride">Let's Ride</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="hover:text-blue-600 cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Contact
            </h3>

            <p className="text-gray-600">
              support@parcello.com
            </p>

            <p className="text-gray-600 mt-2">
              +91 0000000000
            </p>

            <div className="flex gap-3 mt-5">

              <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                <FaFacebook size={18} />
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-pink-500 hover:text-white transition">
                <FaInstagram size={18} />
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-sky-500 hover:text-white transition">
                <FaTwitter size={18} />
              </div>

              <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                <FaLinkedin size={18} />
              </div>

            </div>
          </div>

        </div>

        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            ©️ {new Date().getFullYear()} ParcelLo. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>

            <a href="#" className="hover:text-blue-600">
              Terms
            </a>

            <a href="#" className="hover:text-blue-600">
              Cookies
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;