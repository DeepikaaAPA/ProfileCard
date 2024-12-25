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
      className="flex flex-col md:flex-row gap-5 items-center relative  text-gray-500 p-4 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card bg-teal-950 flex flex-col md:flex-row  p-5 flex-shrink-0">
        <div className=" text-center ">
          <img
            className="rounded-full border-3 border-gray-100 m-auto md:m-2 hover:scale-125"
            src={data.picture.large}
          ></img>
        </div>
        <div className=" ps-5">
          <h2 className="text-4xl border-b pb-3 md:text-5xl font-extrabold bg-gradient-to-r from-yellow-100 via-green-200 to-blue-200 text-transparent bg-clip-text">
            {data.name.first} {data.name.last}
        
          </h2>
      
          <p
            className={`capitalize text-md mt-3 mb-3 ${
              data.gender == "female" ? " text-pink-300" : "text-gray-300"
            }`}
          >
            {data.gender == "female" ? (
              <FontAwesomeIcon icon={faPersonDress} />
            ) : (
              <FontAwesomeIcon icon={faPerson} />
            )}
           <span className="text-xs"> {"   " + data.gender}</span>
          </p>
          <p className="text-gray-300">
            <FontAwesomeIcon icon={faPhone} size="sm"></FontAwesomeIcon>
            {"   " + data.phone}
          </p>
        </div>
      </div>
      {isHovered && (
        <div className="lg:absolute top-full md:-top-10 md:left-full ml-4 bg-green-200 p-4 rounded-lg flex flex-col justify-center min-w-72 text-left divide-y divide-gray-500 shadow-md">
          {" "}
          <h1 className="text-2xl font-bold mb-4 text-gray-600 ">About</h1>{" "}
          <div className="flex flex-col divide-y w-auto divide-gray-400">
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
            <div className="p-4 w-auto">
              <FontAwesomeIcon icon={faEnvelope} />
              {data.email}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
