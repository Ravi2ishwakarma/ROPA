import homepic from "../assests/home.png";
import { PackageCheck, MapPin, ArrowRight } from "lucide-react";
import TrackCard from "./TrackCard";
function Hero() {
  return (
  <>
  <div className="bg-blue-50">
  <section className="max-w-7xl mx-auto px-6 pt-12 pb-20">
      <div className="grid lg:grid-col-2 items-center">
        <div className="">
          <span className="border border-blue-400 bg-blue-50 rounded-full px-3 py-1 text-blue-500 font-semibold">
            All-in-One Plateform 
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900">
            Everything You Need,
            <br />
            One
            <span className="text-blue-500">
              {" "}ROPA{" "}
            </span>
             Away
          </h1>

          <p className="mt-6 text-gray-600 text-lg font-medium leading-8">
            Ride, send, rent shop and explore the city - ROPA brings <br />
            transportation, delivery, rental and local services together <br />
            in one trusted platform.
          </p>

          <div className="flex gap-5 mt-8">

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 h-10 rounded-xl flex items-center gap-2">
                Book a Ride<ArrowRight size={18}/>
            </button>

            <button className="border-2 border-slate-300 flex hover:border-blue-500 hover:text-blue-500 h-10 items-center px-8 gap-2  rounded-xl">
               Ship a parcel <ArrowRight size={18}/>
            </button>
        </div>
        </div>
        <div className="flex justify-center [@media(max-width:1300px)]:hidden">
          <img
            src={homepic}
            alt="Truck"
            className="h-130 w-200 absolute top-20 right-0"
          />    
          {/* <div className="">
            <TrackCard/>
          </div> */}
          
        </div>
      </div>
    </section>
    </div>
  </>
    
  );
}

export default Hero;