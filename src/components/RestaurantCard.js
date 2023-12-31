import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const{deliveryTime} = resData.info?.sla;


    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="res-name">{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <h4 className="stars"> {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;