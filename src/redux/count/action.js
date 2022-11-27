// ACTION TYPE CONSTANTS
export const INCREMENT_COUNT = 'INCREMENT_COUNT'
export const DECREMENT_COUNT = 'DECREMENT_COUNT'
export const INCREMENT_COUNT_5 = 'INCREMENT_COUNT_5'
export const DECREMENT_COUNT_5 = 'DECREMENT_COUNT_5'
export const INCREMENT_COUNT_X = 'INCREMENT_COUNT_X'

// ACTION CREATORS
export const incrementCount = () => ({
	type: INCREMENT_COUNT
})

export const decrementCount = () => ({
	type: DECREMENT_COUNT
})

export const incrementCount5 = () => ({
	type: INCREMENT_COUNT_5
})

export const decrementCount5 = () => ({
	type: DECREMENT_COUNT_5
})

export const incrementCountX = (x) => ({
	type: INCREMENT_COUNT_X,
	payload: x
})