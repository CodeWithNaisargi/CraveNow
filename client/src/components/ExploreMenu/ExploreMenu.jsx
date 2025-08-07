import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list, food_list } from "../../assets/assets";
import { useCart } from "../../context/CartContext";

const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "All" },
    { id: "burger", name: "Burgers" },
    { id: "pizza", name: "Pizza" },
    { id: "salad", name: "Salads" },
    { id: "dessert", name: "Desserts" },
    { id: "drink", name: "Drinks" }
  ];

  const filteredFoods = food_list.filter(food => {
    const matchesCategory = selectedCategory === "all" || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (food) => {
    addToCart(food);
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <div className="explore-menu-header">
        <h1>Explore Our Menu</h1>
        <p className="explore-menu-text">
          Discover a variety of delicious dishes crafted with fresh ingredients
          and authentic flavors. From appetizers to desserts, there's something to
          satisfy every craving!
        </p>
      </div>

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for your favorite food..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredFoods.map((food, index) => (
          <div key={index} className="food-card">
            <div className="food-image-container">
              <img src={food.image} alt={food.name} className="food-image" />
              <div className="food-overlay">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(food)}
                >
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
            <div className="food-info">
              <h3 className="food-name">{food.name}</h3>
              <p className="food-description">{food.description}</p>
              <div className="food-meta">
                <span className="food-price">${food.price.toFixed(2)}</span>
                <div className="food-rating">
                  <span className="rating-stars">★★★★★</span>
                  <span className="rating-text">({food.rating})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="no-results">
          <h3>No food items found</h3>
          <p>Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );
};

export default ExploreMenu;
