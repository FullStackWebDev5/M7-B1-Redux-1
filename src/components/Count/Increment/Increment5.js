import { connect } from 'react-redux'
import { Button } from "react-bootstrap"

import { incrementCount5 } from '../../../redux/count/action';

const Increment5 = ({ incrementCount5 }) => {
  return (
    <Button variant="dark" className="m-2" onClick={() => incrementCount5()}>
      Increment5
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCount5: () => dispatch(incrementCount5())
	}
}

export default connect(null, mapDispatchToProps)(Increment5);
