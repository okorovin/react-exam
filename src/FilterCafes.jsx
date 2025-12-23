import { memo } from "react";
import metros from "./metros.js";

const FilterCafes = memo(({ value, onChange }) => (
  <div className="controls">
    <select name="subway" id="subway" value={value} onChange={onChange}>
      <option value="All">Все</option>
      {metros.map((option) => (
        <option key={option.code} value={option.code}>
          {option.name}
        </option>
      ))}
    </select>
  </div>
));

export default FilterCafes;
