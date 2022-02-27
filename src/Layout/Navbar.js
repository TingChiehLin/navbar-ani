import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [currentState, setCurrentState] = useState(false);

  const toggleHandler = () => {
    setCurrentState(!currentState);
  };

  return (
    <>
      <nav
        className={`w-64 min-h-screen bg-gray-900 flex justify-center items-center fixed top-0 left-0 
                      transition ease-in-out duration-300 ${
                        currentState ? "translate-x-0" : "-translate-x-3/4"
                      }`}
      >
        {currentState ? (
          <div className="absolute top-4 right-4 cursor-pointer">
            <FiX size={"2.5rem"} color="white" onClick={toggleHandler} />
          </div>
        ) : (
          <div className="absolute top-4 right-4 cursor-pointer">
            <FiAlignJustify
              size={"2.5rem"}
              color="white"
              onClick={toggleHandler}
            />
          </div>
        )}
        <ul>
          <li className="text-white font-bold mb-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-white font-bold mb-4">
            <Link to={"/course"}>Course</Link>
          </li>
          <li className="text-white font-bold mb-4">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
