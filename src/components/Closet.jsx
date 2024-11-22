import { useState } from "react";

const categories = ["skin", "hair", "outfit", "shoe", "accessory", "background"];

const Closet = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState("skin");

  const options = Array.from({ length: activeCategory === "background" ? 6 : 6 }, (_, i) =>
    `${activeCategory}-${i + 1}.png`
  );

  return (
    <div
      className="closet"
      style={{
        display: "flex",
        height: "100%",
        gap: "10px",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {/* Options Panel */}
      <div
        className="options-panel"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          width: "300px",
          height: "80vh",
          background: "#f8f9fa",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          boxSizing: "border-box",
          overflow: "hidden", // No scrolling
        }}
      >
        {options.map((option) => (
          <img
            key={option}
            src={`/assets/${option}`}
            alt={option}
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
              border: "2px solid transparent",
              borderRadius: "5px",
            }}
            onClick={() => onSelect(activeCategory, option)}
          />
        ))}
      </div>

      {/* Category Buttons */}
      <div
        className="categories-panel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "150px",
          height: "80vh",
          background: "#f8f9fa",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            style={{
              padding: "10px",
              background: category === activeCategory ? "#00beef" : "#ddd",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Closet;