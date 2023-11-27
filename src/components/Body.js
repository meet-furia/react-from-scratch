import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // React Variable
    // useState returns an array and we are destructuring it 
    const [listOfRestaurantsReactVariable, setListOfRestaurantsReactVariable] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);


    const[searchText, setSearchText] = useState("");

    console.log("Body Rendered")

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

       setListOfRestaurantsReactVariable(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };

    if(listOfRestaurantsReactVariable.length === 0) {
        return <Shimmer/>;
    }

    return listOfRestaurantsReactVariable.length === 0? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurantsReactVariable.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurantsReactVariable.filter((res) => {
                            return res.info.avgRating > 4.2; 
                        })
                        .sort((a, b) => b.info.avgRating - a.info.avgRating);
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>

    )
};

export default Body;






