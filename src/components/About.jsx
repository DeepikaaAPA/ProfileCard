import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBirthdayCake,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About({ data }) {
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(/ /g, " ");
  };
  return (
    <>
      {" "}
      <div className=" top-full md:-top-10 md:left-full   lg:m-0 bg-green-200 p-4 rounded-lg flex flex-col justify-center  text-left divide-y divide-gray-500 ">
        {" "}
        <h1 className="text-2xl font-bold mb-4 text-gray-600 ">About</h1>{" "}
        <div className="flex flex-col divide-y  divide-gray-400">
          {" "}
          <div className="p-4">
            <FontAwesomeIcon icon={faUser} /> {data.login.username}
          </div>
          <div className="p-4">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location.country}
          </div>
          <div className="p-4">
            <FontAwesomeIcon icon={faBirthdayCake} />
            {" " + formatDate(new Date(data.dob.date))}
          </div>
          <div className="p-4 break-words ">
            <FontAwesomeIcon icon={faEnvelope} />
            {" " + data.email}
          </div>
        </div>
      </div>
    </>
  );
}
