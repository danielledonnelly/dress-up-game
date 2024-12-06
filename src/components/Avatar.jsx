const Avatar = ({ selectedOptions }) => {
  const { skin, shoe, outfit, hair, accessory, } = selectedOptions;

  return (
    <div
      className="avatar"
      style={{
        position: "relative",
        width: "400px", 
        height: "667px", 
        margin: "auto",
      }}

    >

      {skin && <img src={`/dress-up-game/assets/${skin}`} alt="Skin" style={{ position: "absolute" }} />}
      {shoe && <img src={`/dress-up-game/assets/${shoe}`} alt="Shoe" style={{ position: "absolute" }} />}
      {outfit && <img src={`/dress-up-game/assets/${outfit}`} alt="Outfit" style={{ position: "absolute" }} />}
      {hair && <img src={`/dress-up-game/assets/${hair}`} alt="Hair" style={{ position: "absolute" }} />}
      {accessory && (
        <img src={`/dress-up-game/assets/${accessory}`} alt="Accessory" style={{ position: "absolute" }} />
      )}
    </div>
  );
};

export default Avatar;