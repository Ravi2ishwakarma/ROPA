import{
    ShieldCheck, 
    PackageCheck,
    BadgeDollarSign,
    Headphones,
    Truck,
} from "lucide-react";

function Trust()
{
    const trustItems=[
    {
      icon: <ShieldCheck size={34} />,
      title: "99.8%",
      subtitle: "Successful Deliveries",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <PackageCheck size={34} />,
      title: "Secure",
      subtitle: "Parcel Handling",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <BadgeDollarSign size={34} />,
      title: "Transparent",
      subtitle: "Pricing",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Headphones size={34} />,
      title: "Dedicated",
      subtitle: "Support Team",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Truck size={34} />,
      title: "Fast",
      subtitle: "Pickup Service",
      color: "bg-orange-100 text-orange-600",
    },
];
return (
    <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
            <h2 className="text-5xl font-bold text-slate-900">
                Why Customers{" "}
                <span className="text-blue-500">
                    Trust Us
                </span>
            </h2>
            <p className="mt-4 text-gray-500">
                Trusted by thousands for secure, reliable and fast deliveries.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
             {trustItems.map((item,index)=>(
                <div key={index} className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center group">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${item.color} group-hover:scale-100 duration-300`}>
                        {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mt-6">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 mt-2">
                        {item.subtitle}
                    </p>
                </div>
             ))}
        </div>
    </section>
);
}
export default Trust;