import { Button } from "react-bootstrap";
import Decrement5 from "./Decrement5";

const Decrement = ({ count, setCount }) => {
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </Button>
      <Decrement5 count={count} setCount={setCount} />
    </>
  );
};

export default Decrement;
