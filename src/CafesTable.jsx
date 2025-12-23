import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes.jsx";
import "./CafesTable.css"
import {metrosMap} from "./metros.js";

const placeholder = "https://via.placeholder.com/150";

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState("All");

  useEffect(async () => {

    const { data } = await axios.get("/cafes");

    const cafes = data.cafes.map((cafe) => ({
      ...cafe,
      subwayCode: cafe.subwayCode === "Theatr" ? "Theater" : cafe.subwayCode,
      img: cafe.img || placeholder,
    }));

    setCafes(cafes);
  }, []);

  const filteredCafes = useMemo(() => {
    if (selectedSubway === "All") {
      return cafes;
    }

    return cafes.filter(({ subwayCode }) => subwayCode === selectedSubway);
  }, [cafes, selectedSubway]);

  const handleChange = (event) => {
    setSelectedSubway(event.target.value);
  };

  return (
    <div className="cafesTable">
      <FilterCafes value={selectedSubway} onChange={handleChange} />
      <ul className="cardsList">

        {
          filteredCafes.length ?
            filteredCafes.map((cafe) => (
              <li key={cafe.id} className="card">
                <img src={cafe.img} alt={cafe.name} className="card-image" />
                <h2>{cafe.name}</h2>
                <p className="desc">{cafe.desc}</p>
                <p className="address"><strong>Адрес:</strong><br/>{cafe.address}</p>
                <p className="metro">
                  {metrosMap[cafe.subwayCode]}
                </p>
                <p className="workTime">График работы: {cafe.workTime}</p>
              </li>
            )) :
            (
              <div>
                <h2>
                  У данного метро кафе нет :(
                </h2>
              </div>
            )
        }
      </ul>
    </div>
  );
};

export default CafesTable;
