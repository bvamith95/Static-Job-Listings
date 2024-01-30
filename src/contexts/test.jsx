

// Needs WORK
const addFilterItem = (filterItems, productToAdd) => {
    const existingFilterItem = filterItems.find(
      (filterItem) => filterItem.id === productToAdd.id
    );
  
    if (existingFilterItem) {
      return filterItems.map((filterItem) =>
        filterItem.id === productToAdd.id
          ? { ...filterItem, quantity: filterItem.quantity + 1 }
          : filterItem
      );
    }
  
    return [...filterItems, { ...productToAdd, quantity: 1 }];
  };

const removeFilterItem = (filterItems, filterItemToRemove) => {
    // find the filter item to remove
    const existingfilterItem = filterItems.find(
      (filterItem) => filterItem.id === filterItemToRemove.id
    );
  
    // check if quantity is equal to 1, if it is remove that item from the filter
    if (existingfilterItem) {
      return filterItems.filter((filterItem) => filterItem.id !== filterItemToRemove.id);
    }
  };

const clearFilterItem = (filterItems, filterItemToClear) =>
  filterItems.filter((filterItem) => filterItem.id !== filterItemToClear.id);




  
