import "./App.css";
import { useEffect, useState } from "react";
import instance from "./instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPerson,
  faPersonDress,
  faUser,
  faBirthdayCake,
  faMessage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function formatDate(date) {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options).replace(/ /g, "-");
}
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/data-endpoint");
        setData(response.data.results[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-2xl ">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div
      className="flex flex-col md:flex-row items-center relative  text-gray-500 p-4 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card  flex flex-col md:flex-row  p-5 flex-shrink-0">
        <div className=" text-center ">
          <img
            className="rounded-full  border-gray-100 m-auto md:m-2 hover:scale-125"
            src={data.picture.large}
          ></img>
        </div>
        <div className="details ps-5">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {data.name.first} {data.name.last}
          </h2>
          <p
            className={`capitalize text-md mt-2 mb-9 ${
              data.gender == "female" ? " text-pink-200" : "text-gray-300"
            }`}
          >
            {data.gender == "female" ? (
              <FontAwesomeIcon icon={faPersonDress} />
            ) : (
              <FontAwesomeIcon icon={faPerson} />
            )}
            {"   " + data.gender}
          </p>
          <p className="phone">
            <FontAwesomeIcon icon={faPhone} size="sm"></FontAwesomeIcon>
            {"   " + data.phone}
          </p>
        </div>
      </div>
      {isHovered && (
        <div className="lg:absolute top-full md:-top-10 md:left-full ml-4 bg-green-200 p-4 rounded-lg flex flex-col justify-center w-auto text-left divide-y divide-gray-300 shadow-md">
          {" "}
          <h1 className="text-2xl font-bold mb-4">About</h1>{" "}
          <div className="flex flex-col divide-y divide-gray-300">
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
              {formatDate(new Date(data.dob.date))}
            </div>
            <div className="p-4">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} />
              {data.email}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
