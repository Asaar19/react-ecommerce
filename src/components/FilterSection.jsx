import React from "react";
import { useFilterContext } from "../context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
import AcUnitIcon from '@mui/icons-material/AcUnit';



const FilterSection = () => {
  const {
    filters: { text, category, color, price, minPrice, maxPrice  },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  // TO GET THE UNIQUE DATA OF EACH FILEDS

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  // WE NEED UNIQUE DATA

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter--company"
            onClick={updateFilterValue}
          >
            {companyOnlyData.map((curElem, index) => {
              return (
                <option value={curElem} name="company" key={index}>
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors">
        <h3>Colors</h3>

        {colorsOnlyData.map((curColor, index) => {
          if (curColor === "all") {
            return (
              <button
                type="button"
                className="selectAllColor"
                value={curColor}
                name="color"
                key={index}
                onClick={updateFilterValue}
              >
                All
              </button>
            );
          }
          return (
            <button
              type="button"
              className={
                color === curColor ? "selectColor active" : "selectColor"
              }
              value={curColor}
              name="color"
              key={index}
              style={{ backgroundColor: curColor }}
              onClick={updateFilterValue}
            >
              {color === curColor ? "✔" : null}
            </button>
          );
        })}
      </div>

      <div className="filter-price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <button className="theme-btn" onClick={clearFilters}>
          Clear Filters
        </button>
        
      </div>
    </>
  );
};

export default FilterSection;
