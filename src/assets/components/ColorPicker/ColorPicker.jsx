import React from 'react';

import './ColorPicker.css';

class ColorPicker extends React.Component {
  state = {
    activeOptionsIndex: 0,
  };

  setActivebtnIndex = (index) => {
    this.setState({ activeOptionsIndex: index });
  };

  makeOptionsClassName = (index) => {
    const optionClasses = ['ColorPicker__options'];

    if (index === this.state.activeOptionsIndex) {
      optionClasses.push('ColorPicker__options--active ');
    }

    return optionClasses.join(' ');
  };

  render() {
    const activeOptionsLabel =
      this.props.options[this.state.activeOptionsIndex];

    return (
      <>
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {activeOptionsLabel.label}</p>

        <ul className="ColorPicker">
          {this.props.options.map(({ label, color }, index) => {
            // const optionClasses = ['ColorPicker__options'];

            // if (index === this.state.activeOptionsIndex) {
            //   optionClasses.push('ColorPicker__options--active ');
            // }

            return (
              <li key={label}>
                <button
                  className={this.makeOptionsClassName(index)}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => {
                    this.setActivebtnIndex(index);
                  }}
                ></button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ColorPicker;
