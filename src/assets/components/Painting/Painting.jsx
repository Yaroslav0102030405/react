import PropTypes from 'prop-types';
import defaultImage from './images.jpg';

const MENU = [
  {
    id: 1,
    url: 'https://cdn.pixabay.com/photo/2018/10/22/17/13/background-3765811_1280.jpg',
    title: 'Hello',
    price: 500,
    quantity: 10,
  },
  {
    id: 2,
    url: 'https://cdn.pixabay.com/photo/2018/10/22/17/13/background-3765811_1280.jpg',
    title: 'Hello',
    price: 500,
    quantity: 10,
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2018/10/22/17/13/background-3765811_1280.jpg',
    title: 'Hello',
    price: 500,
    quantity: 5,
  },
];

const Painting = () => {
  const listItems = MENU.map(({ id, url, title, price, quantity }) => (
    <li style={{ padding: '10px', border: '1px solid black' }} key={id}>
      <img src={url} alt={title} width="300" />
      <h2>Автор: {title}</h2>
      <p>{price}</p>
      <p> Ціна: {quantity < 10 ? 'Закінчується' : 'Є в наявності'}</p>
    </li>
  ));

  return (
    <>
      <ul style={{ display: 'flex', gap: '30px' }}>{listItems}</ul>
    </>
  );
};

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
