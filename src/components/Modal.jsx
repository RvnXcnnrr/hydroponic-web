export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; 
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ease-in-out">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md relative transform transition-transform duration-300 ease-in-out">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-lg"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  