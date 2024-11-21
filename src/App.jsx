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
  });

  const updateSelection = (category, option) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: option }));
  };

  return (
    <div className="app" style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Avatar selectedOptions={selectedOptions} />
      <Closet onSelect={updateSelection} />
    </div>
  );
};

export default App;