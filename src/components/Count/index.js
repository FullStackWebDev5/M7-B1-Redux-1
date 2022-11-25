import { Container } from "react-bootstrap";
// import Increment from './Increment'
// import Decrement from './Decrement'
import { connect } from 'react-redux'
// import { incrementCount } from '../../redux/count/action'

const Count = ({ count }) => {
  return (
    <Container className="main-wrapper">
      <h1 className="display-1 count-display">{count}</h1>
			{/* <Increment count={count} setCount={setCount} />
			<Decrement count={count} setCount={setCount} /> */}
    </Container>
  );
};

const mapStateToProps = (store) => {
	return {
		count: store.count
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		incrementCount: dispatch(incrementCount())
// 	}
// }

export default connect(mapStateToProps)(Count);
