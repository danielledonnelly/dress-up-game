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
      {skin && <img src={`/src/assets/${skin}`} alt="Skin" style={{ position: "absolute" }} />}
      {shoe && <img src={`/src/assets/${shoe}`} alt="Shoe" style={{ position: "absolute" }} />}
      {outfit && <img src={`/src/assets/${outfit}`} alt="Outfit" style={{ position: "absolute" }} />}
      {hair && <img src={`/src/assets/${hair}`} alt="Hair" style={{ position: "absolute" }} />}
      {accessory && (
        <img src={`/src/assets/${accessory}`} alt="Accessory" style={{ position: "absolute" }} />
      )}
    </div>
  );
};

export default Avatar;