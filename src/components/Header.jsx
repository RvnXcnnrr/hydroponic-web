export default function Header({ onSignIn, onSignUp }) {
  
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* SmarTanom title that scrolls to the top */}
          <h1
            onClick={scrollToTop}
            className="text-2xl font-bold text-green-600 cursor-pointer"
          >
            SmarTanom
          </h1>
          
          <ul className="flex gap-6 items-center font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-green-600 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-green-600 transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-600 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={onSignIn}
                className="bg-green-600 text-white py-1.5 px-4 rounded hover:bg-green-700 transition"
              >
                Sign In
              </button>
            </li>
            <li>
              <button
                onClick={onSignUp}
                className="border border-green-600 text-green-600 dark:text-white dark:border-white py-1.5 px-4 rounded hover:bg-green-100 dark:hover:bg-gray-700 transition"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  