import{ User , Store ,Rocket ,ArrowRight,} from "lucide-react";
function Services(){
    const services= [
        {
            icon: <User size= {38}/>,
            title: "Personal Delivery",
            desc:"Send gifts, documents and parcels safely to your loved ones.",
        },
        {
            icon:<Store size={38}/>,
            title:"Business Shipping",
            desc:"Reliable logistics solution for businesses and online stores.",
        },
        {
            icon:<Rocket size={38} />,
            title:"Express Delivery",
            desc:"Urgent shipments deliverd quickly with live tracking.",
        },
    ];
    return(
        <section className="max-w-7xl mx-auto px-6 py-5 ">
            <div className="text-center">
                <h2 className="text-5xl font-bold test-slate-900">
                    Delivery for{" "}
                    <span className="text-blue-500">
                        Everyone
                    </span>
                </h2>
                <p className="text-gray-500 mt-4">
                    Fast, secure and reliable shipping solution.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {services.map((item,index)=>(
                    <div key={index}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl duration-300 group">
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center
                        text-blue-500 group-hover:bg-blue-500 group-hover:text-white duration-300">{item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mt-8">{item.title}</h3>
                        <p className="text-gray-500 mt-4 leading-7">{item.desc}</p>
                        <button className="flex items-center gap-2 text-blue-500 mt-8 font-semibold group-hover:gap-4 duration-300">Learn More
                            <ArrowRight size={18}/>
                        </button>
                    </div>
                ))}

            </div>
        </section>
    )
}
export default Services