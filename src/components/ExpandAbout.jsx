import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBirthdayCake,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function ExpandAbout({ data }) {
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options).replace(/ /g, " ");
  };
  return (
    <>
      {" "}
      <div className=" w-full text-gray-200   flex flex-col   text-left  ">
        <div className="flex text-sm  justify-between">
          <div className="p-2 w-1/2">
            <FontAwesomeIcon icon={faUser} /> {data.login.username}
          </div>
          <div className="p-2 w-1/2">
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {data.location.country}
          </div>
        </div>
        <div className="flex text-sm justify-between">
          <div className="p-2 w-1/2">
            <FontAwesomeIcon icon={faBirthdayCake} />
            {" " + formatDate(new Date(data.dob.date))}
          </div>
          <div className="p-2 w-1/2 break-words ">
            <FontAwesomeIcon icon={faEnvelope} />
            {" " + data.email}
          </div>
        </div>
      </div>
    </>
  );
}
