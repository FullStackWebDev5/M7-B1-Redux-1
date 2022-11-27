import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"
import Increment5 from "./Increment5"
import IncrementX from './IncrementX'
import { incrementCount } from '../../../redux/count/action'

const Increment = () => {
	const dispatch = useDispatch()
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => dispatch(incrementCount())}
      >
        Increment
      </Button>
      <Increment5 />
			<IncrementX />
    </>
  );
};

export default Increment
