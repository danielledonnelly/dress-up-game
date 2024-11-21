import { useState } from "react";

const categories = ["skin", "shoe", "outfit", "hair", "accessory"];

const Closet = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState("skin");

  const options = Array.from({ length: 8 }, (_, i) => `${activeCategory}-${i + 1}.png`);

  return (
    <div
      className="closet"
      style={{
        width: "300px",
        height: "100vh",
        overflowY: "auto",
        background: "#f8f9fa",
        borderLeft: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {/* Category Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
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

      {/* Options for the Active Category */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {options.map((option) => (
          <img
            key={option}
            src={`/src/assets/${option}`}
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
    </div>
  );
};

export default Closet;