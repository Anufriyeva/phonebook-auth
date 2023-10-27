import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


// const setToken = (token) => {
//     axios.defaults.headers.common['Authorization'] = token;
// };

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


// export const deleteToken = (token) => {
//     delete axios.defaults.headers.common['Authorization']
// };

export const deleteToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
    "authUser/signUp",
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", user);
            setToken(data.token)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const signIn = createAsyncThunk(
    "authUser/signIn",
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/login", user);
            setToken(data.token)
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const logOut = createAsyncThunk(
    "authUser/logOut",
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/logout");
            deleteToken();
            return data;
        } catch (e) {
            // console.error("Logout error:", e.response.data);

            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

// export const getCurrent = createAsyncThunk(
//     "authUser/getCurrent",
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState();

//         setToken(state.authUser.token);
//         try {
//             const { data } = await axios.get("/users/current");
//             return data;
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.message);
//         }
//     }
// )

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.authUser.token;
  if (!token) {
    return thunkAPI.rejectWithValue('User not found');
  }

  try {
    setToken(token);
    const { data } = await axios.get(`/users/current`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();

        setToken(state.authUser.token);
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name: name, number: number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactsId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactsId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);