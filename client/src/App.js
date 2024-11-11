import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import PreferenceTile from "./components/PreferenceTile";
import ChatBubble from "./components/ChatBubble";
import Button from "./components/Button";
import FoodCardContainer from "./components/SelectionFeature/FoodCardContainer.js";
import axios from "axios";
import RestaurantList from "./components/RestaurantList.js";

function App() {
  const preferences = ["Vegetarian", "Vegan", "Gluten-Free", "None"];

  const [selectedPreferences, setSelectedPreferences] = useState({
    Vegetarian: false,
    Vegan: false,
    "Gluten-Free": false,
    "None": false,
  });
  const [desiredFoodCategory, setDesiredFoodCategory] = useState(null);
  const [screen, setScreen] = useState("begin");
  const [restaurants, setRestaurants] = useState([]);

  const handleBeginClick = () => {
    setScreen("preferences");
  };

  const handleTogglePreference = (preference) => {
    setSelectedPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  const handleFoodSelection = (category) => {
    setDesiredFoodCategory(category);
  };

  const handleNext = () => {
    setScreen("foodSelection");
  };

  const handleSubmit = () => {
    console.log("Selected preferences:", selectedPreferences);
    console.log("Desired food category:", desiredFoodCategory);
    sendToAPI(selectedPreferences, desiredFoodCategory);
  };

  const sendToAPI = async (preferences, category) => {
    const backendUrl = "http://localhost:5000/api/restaurants";

    const preferenceKeywords = Object.keys(preferences)
      .filter(preference => preferences[preference])
      .join(", ");

    const keyword = `${preferenceKeywords} ${category}`;

    try {
      const response = await axios.get(backendUrl, {
        params: { keyword },
      });

      const restaurantResults = response.data.results;

      const restaurantDetails = restaurantResults.map((restaurant) => ({
        name: restaurant.name,
        address: restaurant.vicinity,
        icon: restaurant.photos && restaurant.photos.length > 0 
          ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${restaurant.photos[0].photo_reference}&key=AIzaSyBd2BfuaPYKS4fHN1kS86JBC8GFu2Z9fEI`
          : '',
      }));

      setRestaurants(restaurantDetails);
      setScreen("restaurantResults");

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-[375px] h-[720px] bg-[#FFF5E6] rounded-3xl shadow-lg border-8 border-gray-300 overflow-hidden mx-auto">
        <div className="absolute top-0 left-0 w-full h-14 bg-gray-200 rounded-t-3xl flex items-center justify-between px-4 z-10">
          <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
          <div className="flex space-x-2">
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        <div className="w-full h-full mt-16 px-4 py-6 flex flex-col justify-center items-center overflow-y-auto">
          <Header />

          {screen === "begin" && (
            <>
              <h1 className="text-xl font-semibold text-center mb-5">
                Let's find your <span style={{ color: "#F36359" }}>perfect munch.</span>
              </h1>
              <Button label={"Start"} onClick={handleBeginClick} />
            </>
          )}

          {screen === "preferences" && (
            <>
              <ChatBubble heading={"Hello!"} text={"Let's set up your preferences"} />
              <h1 className="text-xl font-semibold text-center mb-4">What are your dietary restrictions?</h1>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {preferences.map((preference) => (
                  <PreferenceTile
                    key={preference}
                    label={preference}
                    selected={selectedPreferences[preference]}
                    onToggle={() => handleTogglePreference(preference)}
                  />
                ))}
              </div>
              <Button label={"Next"} onClick={handleNext} />
            </>
          )}

          {screen === "foodSelection" && (
            <>
              <FoodCardContainer
                setDesiredFoodCategory={handleFoodSelection}
                handleSubmit={handleSubmit}
              />
            </>
          )}

          {screen === "restaurantResults" && (
            <RestaurantList restaurants={restaurants} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
