import Modal from "./Modal";

export default function AuthForms({
  isSignInOpen,
  setSignInOpen,
  isSignUpOpen,
  setSignUpOpen,
}) {
  return (
    <>
      {/* Sign In Modal */}
      <Modal isOpen={isSignInOpen} onClose={() => setSignInOpen(false)}>
        <h4 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Sign In
        </h4>
        <form className="flex flex-col gap-6">
          <input
            className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500">
            Sign In
          </button>
        </form>
      </Modal>

      {/* Sign Up Modal */}
      <Modal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
        <h4 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Sign Up
        </h4>
        <form className="flex flex-col gap-6">
          <input
            className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500">
            Create Account
          </button>
        </form>
      </Modal>
    </>
  );
}
