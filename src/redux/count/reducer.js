import { INCREMENT_COUNT, DECREMENT_COUNT, INCREMENT_COUNT_5, DECREMENT_COUNT_5 } from './action'

const initialState = {
	count: 0
}

const countReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1
			}
		case INCREMENT_COUNT_5:
			return {
				...state,
				count: state.count + 5
			}
		case DECREMENT_COUNT_5:
			return {
				...state,
				count: state.count - 5
			}
		default:
			return state
	}
}

export default countReducer