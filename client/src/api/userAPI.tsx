import { UserData } from '../interfaces/UserData.js';
import auth from '../utils/auth.js'

const getAllUsers = async () {
    
}

const getUser = async (id: number) => {
    try {
        const response = await fetch(`/api/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.getToken()}`
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('invalid user API response, check network tab!')
        }
        return data;
    } catch (err: any) {
        console.error(err.message);
        return {};
    }
}

const updateUser = async (id: number, newUserData: UserData) => {
    try {
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.getToken()}`
            },
            body: JSON.stringify(newUserData)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('invalid user API response, check network tab!');
        }
        return data;
    } catch (err: any) {
        console.error(err.message);
        return Promise.reject('Update did not work')
    }
}

const createUser = async (newUserData: { username: string, email: string, password: string }) => {
    try {
        const newLoginResponse = await fetch(`/auth/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserData)
        });
        if (!newLoginResponse.ok) {
            throw new Error('Invalid new user response, check network tab!')
        }
        const { token } = await newLoginResponse.json();
        localStorage.setItem('id_token', token);
        window.location.assign('/')
        const response = await fetch(`/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newUserData)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Invalid user API response, check the network tab!')
        }
        return data;
    } catch (err: any) {
        console.error(err.message)
        return Promise.reject('User was not created')
    }
}

const deleteUser = async (id: number) => {
    try {
        const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${auth.getToken()}`
            }
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error('Invalid user API response, check the network tab!')
        }
        return data;
    } catch (err: any) {
        console.error(err.message)
        return Promise.reject('User was not created')
    }
}

export { getUser, updateUser, createUser, deleteUser };