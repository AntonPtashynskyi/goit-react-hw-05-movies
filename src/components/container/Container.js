import '../../index.css';

const Container = ({ mainStyle, children }) => {
  return (
    <div className={mainStyle}>
      <div>{children}</div>
    </div>
  );
};

export { Container };
