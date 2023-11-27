import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";


const resObj =                 {
    // "card": {
    //   "card": {
    //     "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "data": {
          "id": "25620",
          "name": "KFC",
          "city": "1",
          "slugs": {
            "restaurant": "kfc-intermediate-ring-road-koramangala",
            "city": "bangalore"
          },
          "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
          "address": "Shop No:13,16 & 17, Egipura Village,Intermediate Ring Road, Koramangala, Bangalore - 5600095",
          "locality": "Intermediate Ring Road",
          "areaName": "Ejipura",
          "costForTwo": "40000",
          "costForTwoMessage": "₹400 FOR TWO",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "25620",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3900
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3900,
            "title": "Delivery Charge",
            "amount": "3900"
          },
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 16,
            "minDeliveryTime": 16,
            "maxDeliveryTime": 16,
            "lastMileTravel": 0.9,
            "serviceability": "SERVICEABLE",
            "rainMode": "RAIN_MODE_NONE",
            "slaString": "16 MINS",
            "lastMileTravelString": "0.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "opened": true,
            "restaurantClosedMeta": {
              
            }
          },
          "badges": {
            
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "ratingSlab": "RATING_SLAB_5",
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "cartOrderabilityNudgeBanner": {
            "parameters": {
              
            },
            "presentation": {
              
            }
          }
        },
        "analytics": {
          "screenName": "explore",
          "context": "{\"tid\":\"565b9425-d1f5-1551-f73a-054295ab5c3e\",\"grid\":\"1773cd9e-1866-45cc-94ab-413ee1ccc449\",\"queryUniqueId\":\"414cd0ae-3e2d-4e05-0658-27d6ca8cd6b6\",\"query\":\"kfc\"}",
          "objectValue": "25620",
          "clickObjectName": "click-restaurant"
        },
        "ctaWithParams": {
          "link": "swiggy://menu",
          "type": "DEEPLINK",
          "params": {
            "query": "kfc",
            "sourceSessionId": "akja43bc-74f4-4758-8d1b-c85c2163b65a",
            "source": "SEARCH",
            "isSld": "false",
            "sourceRequestId": "655b68fdf8f3ee6b399cf37c0a1f819a",
            "restaurant_id": "25620"
          }
        }
      }
      

const AppLayout = () => {
    return (
      <Fragment>
            {/* Header */}
            <Header/>
            <Body/>
      </Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);







  