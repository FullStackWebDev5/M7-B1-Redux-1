import { connect } from 'react-redux'
import { Button } from "react-bootstrap"
import { decrementCount5 } from '../../../redux/count/action'

const Decrement5 = ({ decrementCount5 }) => {
  return (
    <Button variant="dark" className="m-2" onClick={() => decrementCount5()}>
      Decrement5
    </Button>
  )
}

const mapDispatchToProps = (dispatch) => {
	return {
		decrementCount5: () => dispatch(decrementCount5())
	}
}

export default connect(null, mapDispatchToProps)(Decrement5);
