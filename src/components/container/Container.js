import '../../index.css';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
};

export { Container };
