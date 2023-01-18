import { useEffect, useState } from "react";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { FilteredResults, StyledSearchBar } from "./SearchBar.styled";
import '../../Pages/AllRestaurants/resStyle.css'
import { useSelector } from "react-redux";

const getFilteredItems = (query: string, items: any[]) => {
  if (query) {
    query= capitalizeFirstLetter(query);
    return items.filter((item) => item.name.includes(query));
}};

export default function SearchComponent() {
  const restaurants = useSelector((state:any) => state.restaurants.value);
  const chefs = useSelector((state:any) => state.chefs.value); 
  const dishes = useSelector((state:any) => state.dishes.value);

  const allDBs = restaurants.concat(chefs).concat(dishes);
  const [query, setQuery] = useState("");
  const  tracks  = allDBs;
  const items = tracks;
  const filteredItems = getFilteredItems(query, items);
  
  return (
    <>
    <StyledSearchBar className="nosubmit" type="search" placeholder="Search for restaurant cuisine, chef" onChange={(e) => setQuery(e.target.value)}/>
      <ul >
        {filteredItems&& filteredItems.map((value) => (
          <FilteredResults key={value.name}>{value.name}</FilteredResults>
        ))}
      </ul>
     
    </>
  );
}
