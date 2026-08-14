import React from 'react'
import {
    MapPinned,
    Package,
    BadgeDollarSign,
    ClipboardCheck,
    ScanSearch,
    House,
} from "lucide-react";

function HowItWorks() {
    const steps = [
    {
      icon: <MapPinned size={32} />,
      title: "Pickup Address",
      desc: "Enter pickup and delivery location.",
    },
    {
      icon: <Package size={32} />,
      title: "Parcel Details",
      desc: "Add parcel weight and dimensions.",
    },
    {
      icon: <BadgeDollarSign size={32} />,
      title: "Instant Price",
      desc: "Get your delivery estimate instantly.",
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Confirm Booking",
      desc: "Complete your booking securely.",
    },
    {
      icon: <ScanSearch size={32} />,
      title: "Track Parcel",
      desc: "Monitor your shipment in real time.",
    },
    {
      icon: <House size={32} />,
      title: "Delivered",
      desc: "Package delivered safely to destination.",
    },
  ];
  return (
    
    <section className="max-w-7xl mx-auto px-6 py-15">
        <div className='text-center'>
            <h2 className='text-5xl font-bold text-slate-900'>
                How It <span className='text-blue-500'>
                    Works
                </span>
            </h2>
            <p className='mt-4 text-gray-500'>
                Book your shipment in just few simple steps.
            </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-8 mt-15'>
            {steps.map((step,index)=>(
              <div key={index} className='relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10 transition-all duration-300'>
                <div className='absolute -top-5 left-16 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold'>
                {index + 1}
                </div>
                <div className='w-20 ml-2 h-20 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mt-4'>
                  {step.icon}
                </div>
                <h3 className='text-2xl font-bold mt-6'>{step.title}</h3>
                <p className='text-gray-500 mt-3 leading-7'>{step.desc}</p>

              </div>
            ))}
        </div>
    </section>

  );
}

export default HowItWorks;
