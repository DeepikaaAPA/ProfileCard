import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPerson,
  faPersonDress,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import About from "./About";
import ExpandAbout from "./ExpandAbout";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";

const ExpandCard = ({ data }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <div className=" mt-16 md:mt-0  bg-teal-900 flex flex-col  items-center md:relative  text-gray-500 p-4 rounded-lg">
        <div className="card min-w-72 flex flex-col  md:flex-row p-5 flex-shrink-0">
          <div className=" text-center mt-2 mb-5 md:mr-4 md:mb-0">
            <img
              className=" rounded-full border-3 border-gray-100 m-auto lg:m-2 hover:scale-125"
              src={data.picture.large}
            ></img>
          </div>
          <div className=" ps-5">
            <h2 className="text-2xl md:text-4xl text-center border-b pb-3 lg:text-4xl font-extrabold bg-gradient-to-r from-yellow-300 via-green-200 to-green-300 text-transparent bg-clip-text">
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
        <div className=" text-center w-full text-white text-lg">
          <button
            className="p-0 w-32 rounded-full  bg-teal-900 text-md"
            onClick={() => {
              setTimeout(() => {
                setShowAbout(!showAbout);
              }, 200);
            }}
          >
            <FontAwesomeIcon icon={showAbout ? faCaretUp : faCaretDown}>
              {" "}
            </FontAwesomeIcon>
            {showAbout ? " Show less" : " Show more"}
          </button>

          {showAbout && <ExpandAbout data={data}></ExpandAbout>}
        </div>
      </div>
    </>
  );
};
export default ExpandCard;
