import { Container } from "react-bootstrap";
import Increment from './Increment'
import Decrement from './Decrement'
import { connect } from 'react-redux'

const Count = ({ count }) => {
  return (
    <Container className="main-wrapper">
      <h1 className="display-1 count-display">{count}</h1>
			<Increment />
			<Decrement />
    </Container>
  );
};

const mapStateToProps = (store) => {
	return {
		count: store.count
	}
}

export default connect(mapStateToProps)(Count);
