import './Container.css';

const Container = ({ children }) => {
  return (
    <>
      <main className="Container">{children}</main>
    </>
  );
};

export default Container;
