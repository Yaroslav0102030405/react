import './ColorPicker.css';

const ColorPicker = ({ options }) => {
  return (
    <>
      <h2 className="ColorPicker__title">Color Picker</h2>

      <ul className="ColorPicker">
        {options.map(({ label, color }) => (
          <li key={label}>
            <span
              className="ColorPicker__options"
              style={{
                backgroundColor: color,
              }}
            >
              {/* {color} */}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColorPicker;
