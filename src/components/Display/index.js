import { useSelector, useDispatch } from "react-redux";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { show, hide } from "../../redux/display/action";

const Display = () => {
	const display = useSelector((store) => store.displayReducer.display)
	const dispatch = useDispatch()
  return (
    <Container className="main-wrapper">
      <img
        src={
          display
            ? "https://www.w3schools.com/js/pic_bulbon.gif"
            : "https://www.w3schools.com/js/pic_bulboff.gif"
        }
        alt="Bulb"
      />
      <br />
      <br />
      <ButtonGroup>
        <Button variant="dark" onClick={() => dispatch(show())}>
          Turn ON
        </Button>
        <Button variant="dark" onClick={() => dispatch(hide())}>
          Turn OFF
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Display;
