import Logo from "../assets/logo.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-600 bg-emerald-100 rounded-full mb-4">
          OUR EVOLUTION
        </span>
        <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent">
          A New Direction
        </h3>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <img
            src={Logo}
            alt="SmarTanom Logo"
            className="rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          />
        </div>

        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            SmarTanom has evolved from a fixed 4-tower vertical system into a
            flexible, modular solution for any hydroponic setup—NFT, DWC,
            vertical, or hybrid. The system consists of:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-gray-700 dark:text-gray-200">
                <span className="font-bold text-emerald-600">
                  SmarTanom Tower:
                </span>{" "}
                Solar-powered unit with ESP32 controller featuring real-time
                monitoring and automated adjustments.
              </p>
            </li>

            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="ml-3 text-gray-700 dark:text-gray-200">
                <span className="font-bold text-emerald-600">
                  Smart Reservoir:
                </span>{" "}
                Compact module with advanced sensors for pH, EC, TDS, DO, and
                temperature monitoring with cloud connectivity.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
