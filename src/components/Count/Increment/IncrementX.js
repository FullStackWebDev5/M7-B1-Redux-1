import { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from "react-bootstrap"
import { incrementCountX } from '../../../redux/count/action'

const IncrementX = ({ incrementCountX }) => {
	const [num, setNum] = useState(1)
  return (
    <>
      <br />
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Input any number"
        style={{ width: "300px", margin: "auto" }}
        autocomplete="off"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <Button
        variant="dark"
        className="m-2"
        onClick={() => incrementCountX(Number(num))}
      >
        Increment {num}
      </Button>
      <br />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
	return {
		incrementCountX: (x) => dispatch(incrementCountX(x))
	}
}

export default connect(null, mapDispatchToProps)(IncrementX);
