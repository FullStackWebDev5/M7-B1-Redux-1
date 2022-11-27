import { SHOW, HIDE } from './action'

const initialState = {
	display: false
}

const displayReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW:
			return {
				...state,
				display: true
			}
		case HIDE:
			return {
				...state,
				display: false
			}
		default:
			return state
	}
}

export default displayReducer

