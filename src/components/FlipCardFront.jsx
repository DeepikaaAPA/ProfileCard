import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";

export default function FlipCardFront({ data }) {
  return (
    <>
     
        <div className=" text-center mt-2 mb-5">
          <img className=" rounded-full m-auto " src={data.picture.large}></img>
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
     
    </>
  );
}
