import { useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"
import Decrement5 from "./Decrement5"
import { decrementCount } from '../../../redux/count/action'

const Decrement = () => {
	const dispatch = useDispatch()
  return (
    <>
      <Button
        variant="dark"
        className="m-2"
        onClick={() => dispatch(decrementCount())}
      >
        Decrement
      </Button>
      <Decrement5 />
    </>
  )
}

export default Decrement;
