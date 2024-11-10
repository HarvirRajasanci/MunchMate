// App.js
import "./App.css";
import Header from "./components/Header.js";
import FoodCardContainer from "./components/SelectionFeature/FoodCardContainer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Food Swipe App</h1>
      <FoodCardContainer />
    </div>
  );
}

export default App;
