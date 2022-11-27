import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"

import { incrementCount5 } from '../../../redux/count/action';

const Increment5 = () => {
	const dispatch = useDispatch()
  return (
    <Button variant="dark" className="m-2" onClick={() => dispatch(incrementCount5())}>
      Increment5
    </Button>
  );
};

export default Increment5;
