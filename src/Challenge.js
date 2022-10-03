const Challenge = ({ color, setColor }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="colorBox" style={{ backgroundColor: color }}>
        {color == "" ? "Empty Value" : color}
      </div>

      <label htmlFor="addColor"></label>
      <input
        type="text"
        id="addColor"
        placeholder="Add color name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
  );
};

export default Challenge;
