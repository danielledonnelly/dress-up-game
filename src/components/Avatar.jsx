const Avatar = ({ selectedOptions }) => {
  const { skin, shoe, outfit, hair, accessory } = selectedOptions;

  return (
    <div
      className="avatar"
      style={{
        position: "relative",
        width: "400px", // Enlarged to fit better on the screen
        height: "667px", // Maintain aspect ratio with 1:1.667 scale
        margin: "auto",
      }}
    >
      {skin && <img src={`./assets/${skin}`} alt="Skin" style={{ position: "absolute" }} />}
      {shoe && <img src={`./assets/${shoe}`} alt="Shoe" style={{ position: "absolute" }} />}
      {outfit && <img src={`./assets/${outfit}`} alt="Outfit" style={{ position: "absolute" }} />}
      {hair && <img src={`./assets/${hair}`} alt="Hair" style={{ position: "absolute" }} />}
      {accessory && (
        <img src={`./assets/${accessory}`} alt="Accessory" style={{ position: "absolute" }} />
      )}
    </div>
  );
};

export default Avatar;