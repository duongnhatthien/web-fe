import axios from 'axios';
const customFetch = axios.create({
    baseURL: process.env.REACT_APP_API_URL_BACKEND,
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true,
    credentials: 'include',
});
customFetch.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
customFetch.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (
            error.response.data.name === 'TokenExpiredError' &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const resp = await RefreshToken();

            const access_token = resp.data.response.access_token;

            localStorage.setItem('access_token', access_token);
            customFetch.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${access_token}`;
            return customFetch(originalRequest);
        }
        return Promise.reject(error);
    }
);

export const getDetailUser = async (id, access_token) => {
    try {
        const response = await customFetch.get(`/user/detail-user/${id}`);
        return response;
    } catch (err) {
        console.error(err);
    }
};
export const SignUp = async (data) => {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-up`,
        data
    );
    return response;
};
export const SignIn = async (data) => {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL_BACKEND}/user/sign-in`,
        data
    );
    console.log(response);
    return response;
};
const RefreshToken = async () => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL_BACKEND}/user/refresh-token`,
            {
                withCredentials: true,
            }
        );
        return res;
    } catch (e) {
        console.error(e);
    }
};
