import { createContext, useState, useEffect  } from 'react';
import '../data.json';
  
export const FilterContext = createContext({
    filterItems: [],
    listings: [],
    addItemToFilter: ()=>{},
    removeItemFromFilter: ()=>{},
    clearItemFromFilter: ()=>{}
});


export const FilterProvider = ({ children }) => {
    const [filterItems,setFilterItems] =useState([]);
    const [listings, setListings] = useState([]);

    const addItemToFilter = (filter)=>{
      if (!filterItems.includes(filter)) {
        setFilterItems(current => [...current, filter]);
      };
    };

    const removeItemFromFilter = (filter)=>{
      setFilterItems(current => current.filter((el) => el !== filter));

    };
    
    const clearItemFromFilter = ()=> {
      setFilterItems([]);

    };

    
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('data.json');
        const jsonData = await res.json();
        filterItems ?
        setListings(jsonData.filter(obj => filterItems.every(filter =>
          Object.values(obj).some(value =>
            value.toString().includes(filter)
          )
        ))) : 
        setListings(jsonData);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchListings();
    console.log(filterItems);
  }, [filterItems]);

  const value = {
    filterItems,
    listings,
    setListings,
    setFilterItems,
    addItemToFilter,
    removeItemFromFilter,
    clearItemFromFilter
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};