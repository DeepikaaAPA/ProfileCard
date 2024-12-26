import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import About from "./About";

const HoverCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className=" mt-16 md:mt-0 flex flex-col md:flex-row gap-5 items-center md:relative  text-gray-500 p-4 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <div className="card min-w-72  bg-teal-900 flex flex-col lg:flex-row  p-5 flex-shrink-0">
          <div className=" text-center mt-2 mb-5 md:mr-4 md:mb-0">
            <img
              className=" rounded-full border-3 border-gray-100 m-auto lg:m-2 hover:scale-125"
              src={data.picture.large}
            ></img>
          </div>
          <div className=" ps-5">
            <h2 className="text-4xl text-center border-b pb-3 lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-green-200 to-green-300 text-transparent bg-clip-text">
              {data.name.first} {data.name.last}
            </h2>
            {/* conditional styling of text color of gender */}
            <p
              className={`capitalize text-xl mt-3 mb-3 ${
                data.gender == "female" ? " text-pink-300" : "text-gray-300"
              }`}
            >
              {/* conditional rendering of person icon based on gender */}
              {data.gender == "female" ? (
                <FontAwesomeIcon icon={faPersonDress} />
              ) : (
                <FontAwesomeIcon icon={faPerson} />
              )}
              <span className="text-md"> {"   " + data.gender}</span>
            </p>
            <p className="text-gray-300">
              <FontAwesomeIcon icon={faPhone} size="sm"></FontAwesomeIcon>
              {"   " + data.phone}
            </p>
          </div>
        </div>
        {isHovered && <About data={data}></About>}
      </div>
    </>
  );
};
export default HoverCard;
