import { connect } from 'react-redux'
import { Button } from "react-bootstrap"
import Increment5 from "./Increment5"
import { incrementCount } from '../../../redux/count/action'

const Increment = ({ incrementCount }) => {
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => incrementCount()}
      >
        Increment
      </Button>
      <Increment5 />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCount: () => dispatch(incrementCount())
	}
}

export default connect(null ,mapDispatchToProps)(Increment)
