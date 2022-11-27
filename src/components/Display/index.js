import { connect } from "react-redux";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { show, hide } from "../../redux/display/action";

const Display = ({ display, turnBulbOn, turnBulbOff }) => {
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
        <Button variant="dark" onClick={() => turnBulbOn()}>
          Turn ON
        </Button>
        <Button variant="dark" onClick={() => turnBulbOff()}>
          Turn OFF
        </Button>
      </ButtonGroup>
    </Container>
  );
};

const mapStateToProps = (store) => {
  return {
    display: store.displayReducer.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    turnBulbOn: () => dispatch(show()),
    turnBulbOff: () => dispatch(hide()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
