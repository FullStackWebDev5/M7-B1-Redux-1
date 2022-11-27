import { Container } from "react-bootstrap";
import Increment from './Increment'
import Decrement from './Decrement'
import { useSelector } from 'react-redux'

const Count = () => {
	const count = useSelector((store) => store.countReducer.count)
  return (
    <Container className="main-wrapper">
      <h1 className="display-1 count-display">{count}</h1>
			<Increment />
			<Decrement />
    </Container>
  );
};

export default Count
