import { useState } from "react";
import Avatar from "./components/Avatar";
import Closet from "./components/Closet";

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    skin: null,
    shoe: null,
    outfit: null,
    hair: null,
    accessory: null,
    background: null, // New field for the background
  });

  const updateSelection = (category, option) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: option }));
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: selectedOptions.background
          ? `url(/src/assets/${selectedOptions.background})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Avatar selectedOptions={selectedOptions} />
      <Closet onSelect={updateSelection} />
    </div>
  );
};

export default App;