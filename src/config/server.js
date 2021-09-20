import axios from 'axios';

//*------------------------------  Initiate Axios  ------------------------------*//
const baseURL = 'http://192.168.1.99:5000/api/v1';

export const API = axios.create({
	baseURL,
});

export const configJSON = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const configMultiPart = {
	headers: {
		'Content-Type': 'multipart/form-data',
	},
};

//*------------------------------  Set Auth Header  ------------------------------*//
export const setAuthToken = (token) => {
	if (token) {
		API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete API.defaults.headers.common['Authorization'];
	}
};

//*------------------------------  Register User  ------------------------------*//
export async function registerUser(data) {
	try {
		const response = await API.post('/auth/register', data, configJSON);
		setAuthToken(response.data.data.token);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Login User  ------------------------------*//

export async function loginUser(data) {
	try {
		const response = await API.post('/auth/login', data, configJSON);
		setAuthToken(response.data.data.token);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Check Pin  ------------------------------*//

export async function checkPin(data) {
	try {
		const response = await API.post('/auth/checkPin', data, configJSON);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Get User Todos  ------------------------------*//
export async function getUserTodos() {
	try {
		const response = await API.get('/todos');
		return response.data.data;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Add User Todo  ------------------------------*//
export async function addUserTodo(data) {
	try {
		const response = await API.post('/todo', data, configJSON);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Update User Todo  ------------------------------*//
export async function updateUserTodo(data, id) {
	try {
		const response = await API.patch(`/todo/${id}`, data, configJSON);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Delete User Todo  ------------------------------*//
export async function deleteUserTodo(id) {
	try {
		const response = await API.delete(`/todo/${id}`);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Get User Memos  ------------------------------*//
export async function getUserMemos() {
	try {
		const response = await API.get('/memos');
		return response.data.data;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Get User Memos  ------------------------------*//
export async function getUserVMemos() {
	try {
		const response = await API.get('/Vmemos');
		return response.data.data;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Add User Memo  ------------------------------*//
export async function addUserMemo(data) {
	try {
		const response = await API.post('/memo', data, configJSON);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Update User Memo  ------------------------------*//
export async function updateUserMemo(data, id) {
	try {
		const response = await API.patch(`/memo/${id}`, data, configJSON);
		return response;
	} catch (err) {
		return err.response;
	}
}

//*------------------------------  Delete User Memo  ------------------------------*//
export async function deleteUserMemo(id) {
	try {
		const response = await API.delete(`/memo/${id}`);
		return response;
	} catch (err) {
		return err.response;
	}
}
