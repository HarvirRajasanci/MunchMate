function RestaurantList({ restaurants }) {
    return (
      <div className="w-full mt-6">
        <h2 className="text-xl font-semibold text-center mb-4">Here are your restaurant options:</h2>
        <div className="grid grid-cols-1 gap-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={restaurant.icon}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-medium">{restaurant.name}</h3>
              <p className="text-gray-600">{restaurant.address}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default RestaurantList;