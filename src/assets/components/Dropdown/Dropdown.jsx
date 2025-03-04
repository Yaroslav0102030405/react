import React from 'react';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  hideModal = () => {
    this.setState({ visible: false });
  };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    return (
      <>
        <div>
          {/* <button type="button" onClick={this.showModal}>
            Показать
          </button>
          <button type="button" onClick={this.hideModal}>
            Скрыть
          </button> */}

          <button type="button" onClick={this.toggle}>
            {this.state.visible ? 'Cкрыть' : 'Показать'}
          </button>
        </div>
        {this.state.visible && <div>Выпадающее меню</div>}
      </>
    );
  }
}

export default Dropdown;
