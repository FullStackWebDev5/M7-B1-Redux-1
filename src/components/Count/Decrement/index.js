import { connect } from 'react-redux'
import { Button } from "react-bootstrap"
import Decrement5 from "./Decrement5"
import { decrementCount } from '../../../redux/count/action'

const Decrement = ({ decrementCount }) => {
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => decrementCount()}
      >
        Decrement
      </Button>
      <Decrement5 />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
	return {
		decrementCount: () => dispatch(decrementCount())
	}
}

export default connect(null, mapDispatchToProps)(Decrement);
