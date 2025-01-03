import "./App.css";
import { useEffect, useState } from "react";
import instance from "./instance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import HoverCard from "./components/HoverCard";
import FlipCard from "./components/FlipCard";
import ExpandCard from "./components/ExpandCard";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [style, setStyle] = useState("flip");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/");
        setData(response.data.results[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <p className="text-5xl text-teal-600">
        <FontAwesomeIcon
          className="animate-spin "
          icon={faSpinner}
        ></FontAwesomeIcon>
        {" Loading"}
      </p>
    );
  if (error)
    return <p className="text-5xl text-teal-600">Error: {error.message}</p>;

  return (
    <>
      <ul className="absolute inset-0 h-16 flex flex-wrap rounded-3xl justify-center   ">
        <li>
          <button
            className={
              (style == "flip"
                ? "bg-teal-400  border-white border-2 scale-125 "
                : "hover:bg-teal-400") + " md:ms-5"
            }
            onClick={() => setStyle("flip")}
          >
            Flip
          </button>
        </li>
        <li>
          {" "}
          <button
            className={
              (style == "hover"
                ? "bg-teal-400  border-white border-2 scale-125"
                : "hover:bg-teal-400") + " md:mx-5 "
            }
            onClick={() => setStyle("hover")}
          >
            Hover
          </button>
        </li>
        <li>
          {" "}
          <button
            className={
              (style == "expand"
                ? "bg-teal-400  border-white border-2 scale-125"
                : "hover:bg-teal-400") + " md:me-5 "
            }
            onClick={() => setStyle("expand")}
          >
            Expand
          </button>
        </li>
      </ul>

      {style == "hover" && <HoverCard data={data}></HoverCard>}
      {style == "flip" && <FlipCard data={data}></FlipCard>}
      {style == "expand" && <ExpandCard data={data}></ExpandCard>}
      <p className="text-red-400 text-lg animate-pulse text-center border-2 border-white">
        {" "}
        Move mouse over the card to view details
      </p>
    </>
  );
}

export default App;
