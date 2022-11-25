import { Button } from "react-bootstrap";

const Decrement5 = ({ count, setCount }) => {
  return (
    <Button variant="dark" className="m-2" onClick={() => setCount(count - 5)}>
      Decrement5
    </Button>
  );
};

export default Decrement5;
