import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import PreferenceTile from "./components/PreferenceTile";
import ChatBubble from "./components/ChatBubble";
import Button from "./components/Button";
import FoodCardContainer from "./components/SelectionFeature/FoodCardContainer.js";

function App() {
  const preferences = ["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"];

  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState({
    Vegetarian: false,
    Vegan: false,
    "Gluten-Free": false,
    "Dairy-Free": false,
  });
  const [desiredFoodCategory, setDesiredFoodCategory] = useState(null);
  const [screen, setScreen] = useState("begin"); // Track current screen (begin, preferences, or food selection)

  const handleBeginClick = () => {
    setScreen("preferences"); // Move to preferences screen
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
    // Transition to the food selection screen after preferences are selected
    setScreen("foodSelection");
  };

  const handleSubmit = () => {
    console.log("Selected preferences:", selectedPreferences);
    console.log("Desired food category:", desiredFoodCategory);
    sendToAPI(selectedPreferences, desiredFoodCategory);
  };

  const sendToAPI = async (preferences, foodCategory) => {
    try {
      const response = await fetch("https://your-api-url.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preferences, foodCategory }),
      });
      const data = await response.json();
      console.log("Data sent to API:", data);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Phone container */}
      <div className="relative w-[375px] h-[720px] bg-[#FFF5E6] rounded-3xl shadow-lg border-8 border-gray-300 overflow-hidden mx-auto">
        {/* Fixed Top Bar */}
        <div className="absolute top-0 left-0 w-full h-14 bg-gray-200 rounded-t-3xl flex items-center justify-between px-4 z-10">
          <div className="h-2 w-8 bg-gray-400 rounded-full"></div>
          <div className="flex space-x-2">
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Content Area with Padding to Avoid Overlap with Header */}
        <div className="w-full h-full mt-16 px-4 py-6 flex flex-col justify-center items-center overflow-y-auto">
          <Header />

          {/* Begin Screen */}
          {screen === "begin" && (
            <>
              <h1 className="text-xl font-semibold text-center">
                Let's find your{" "}
                <span style={{ color: "#F36359" }}>perfect munch.</span>
              </h1>
              <Button label={"Start"} onClick={handleBeginClick} />
            </>
          )}

          {/* Dietary Preferences Screen */}
          {screen === "preferences" && (
            <>
              <h1 className="text-xl font-semibold text-center">
                Choose your dietary preferences
              </h1>

              {/* Preference Tiles Section */}
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

              {/* Next Button */}
              <Button label={"Next"} onClick={handleNext} />
            </>
          )}

          {/* Desired Food Category Screen */}
          {screen === "foodSelection" && (
            <>
              {/* Chat bubble */}
              <ChatBubble />

              {/* Food Category Selection */}
              <FoodCardContainer
                onSelectCategory={handleFoodSelection}
              />

              {/* Submit Button */}
              <Button label={"Submit"} onClick={handleSubmit} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
