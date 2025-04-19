import { FaMicrochip, FaSolarPanel, FaPlug, FaRecycle, FaLeaf, FaWater } from 'react-icons/fa';

export default function Features() {
    const features = [
        { text: "Essential Sensors: pH, EC, DO, TDS, Water Temp", icon: <FaMicrochip size={30} /> },
        { text: "Environmental Sensors: DHT22, BH1750, CO2", icon: <FaLeaf size={30} /> },
        { text: "Smart Water Circulation & Algae Detection", icon: <FaWater size={30} /> },
        { text: "Solar-Powered with 25W Panel & 30Ah Battery", icon: <FaSolarPanel size={30} /> },
        { text: "Plug-and-Play Reservoir System", icon: <FaPlug size={30} /> },
        { text: "Modular, Scalable, and Cost-Efficient", icon: <FaRecycle size={30} /> }
    ];

    return (
        <section id="features" className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 dark:from-gray-900 dark:to-gray-700 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-4xl font-extrabold text-white mb-12">Core Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <div className="flex justify-center mb-4 text-blue-500 dark:text-indigo-400">
                                {f.icon}
                            </div>
                            <p className="text-lg text-gray-800 dark:text-gray-300">{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
