import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
	isLogin: false,
	isLocked: true,
	user: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'REGISTER':
			return {
				...state,
				isLogin: true,
				user: {
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
					avatar: null,
				},
			};

		case 'LOGIN':
			return {
				...state,
				isLogin: true,
				user: {
					id: action.payload.id,
					name: action.payload.name,
					email: action.payload.email,
					avatar: null,
				},
			};

		case 'LOCK':
			return {
				...state,
				isLocked: true,
			};

		case 'UNLOCK':
			return {
				...state,
				isLocked: false,
			};

		case 'LOGOUT':
			return {
				...initialState,
			};
	}
};

export const AppContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};
