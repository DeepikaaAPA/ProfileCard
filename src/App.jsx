import "./App.css";
import { useEffect, useState } from "react";
import instance from "./instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faPerson,faPersonDress } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    <>
   
      <div className="card  flex flex-col md:flex-row delay-100 top-4 bg-blue-600 p-5">
        <div className=" text-center ">
          <img className="rounded-full  border-gray-100 m-auto md:m-2 hover:scale-125" src="https://randomuser.me/api/portraits/women/88.jpg"></img>
        </div>
        <div className="details ps-5">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            {data.name.first} {data.name.last}
          </h2>
          <p className={`capitalize text-md mt-2 mb-9 ${data.gender=="female"?" text-pink-200":"text-gray-300"}`}>
            {data.gender=="female"?<FontAwesomeIcon icon={faPersonDress} />:<FontAwesomeIcon icon={faPerson} />}
            {"   "+data.gender}
            </p>
          <p className="phone">
            <FontAwesomeIcon icon={faPhone} size="sm"></FontAwesomeIcon>
            {"   " + data.phone}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
