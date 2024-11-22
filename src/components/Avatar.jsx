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
      // No file paths are working so i just tried a bunch of different ones below
    >

      {skin && <img src={`/assets/${skin}`} alt="Skin" style={{ position: "absolute" }} />}
      {shoe && <img src={`dress-up-game/assets/${shoe}`} alt="Shoe" style={{ position: "absolute" }} />}
      {outfit && <img src={`/dress-up-game/assets/${outfit}`} alt="Outfit" style={{ position: "absolute" }} />}
      {hair && <img src={`./assets/${hair}`} alt="Hair" style={{ position: "absolute" }} />}
      {accessory && (
        <img src={`./assets/${accessory}`} alt="Accessory" style={{ position: "absolute" }} />
      )}
    </div>
  );
};

export default Avatar;