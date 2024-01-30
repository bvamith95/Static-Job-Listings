import "./tab-filter.styles.scss";
import { useContext } from "react";

import FilterItem from "../filter-item/filter-item.component";
import { FilterContext } from "../../contexts/filter.context";



const Filter = () => {

  const{ filterItems, clearItemFromFilter} = useContext(FilterContext);
  const clearFilter = ()=>clearItemFromFilter();

    return (
    <div className="filter-container">
      <div className="filter-container__body">

      {filterItems.length?filterItems.map((filterItem, index)=> 
        <FilterItem  filter={filterItem} key={index} />
      ):null}

      </div>

      <span className="clear" onClick={clearFilter}>Clear</span>
    </div>
    
  );
};

export default Filter;
