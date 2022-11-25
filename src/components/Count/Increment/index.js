import { Button } from "react-bootstrap";
import Increment5 from "./Increment5";

const Increment = ({ count, setCount }) => {
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Increment5 count={count} setCount={setCount} />
    </>
  );
};

export default Increment;
