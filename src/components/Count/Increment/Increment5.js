import { Button } from "react-bootstrap";

const Increment5 = ({ count, setCount }) => {
  return (
    <Button variant="dark" className="m-2" onClick={() => setCount(count + 5)}>
      Increment5
    </Button>
  );
};

export default Increment5;
