import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"
import { decrementCount5 } from '../../../redux/count/action'

const Decrement5 = () => {
	const dispatch = useDispatch()
  return (
    <Button variant="dark" className="m-2" onClick={() => dispatch(decrementCount5())}>
      Decrement5
    </Button>
  )
}

export default Decrement5;

