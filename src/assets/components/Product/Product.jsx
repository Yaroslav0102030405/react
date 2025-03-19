// import image from './../Product/product.jpg';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { Details } from './Details';

const MENU = [{ name: 'Namefdfdfdfdfdfdf' }, { name: 'Yaroslav' }];

// const title = 'First component';
// const desc = 'Hello!';

export function Product() {
  const [details, setDetails] = useState({
    isLoading: true,
    title: 'useEffect',
    desc: 'Hello!',
    btnTitle: 'Click',
  });
  const [counter, setCounter] = useState(0);
  const [multiplier, setMultiplier] = useState(10);

  const imageRef = useRef(null);

  const onbtnClick = () => {
    imageRef.current.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
  };

  const onloading = useCallback(() => {
    setDetails((prev) => ({ ...prev, isLoading: !prev.isLoading }));
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDetails((prev) => ({ ...prev, isLoading: false }));
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setMultiplier(multiplier + 10);
  };

  const result = useMemo(() => {
    return counter * multiplier;
  }, [counter, multiplier]);

  return (
    <>
      <img ref={imageRef} src="/image.jpg" width={300} alt="" />
      <p>результат: {result}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      <button onClick={onbtnClick}>Кнопка</button>

      <ul>
        {MENU.map(({ name }) => (
          <li key={name}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
      {details.isLoading ? (
        <p>Loading...</p>
      ) : (
        <Details
          details={details}
          setDetalis={setDetails}
          onloading={onloading}
        />
      )}
    </>
  );
}
