import axios from "axios";
import store from "../store";

const axiosClient = axios.create({
	baseURL: "https://movienew.cybersoft.edu.vn/api/",
	headers: {
		TokenCybersoft:
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNyIsIkhldEhhblN0cmluZyI6IjI4LzAzLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3OTk2MTYwMDAwMCIsIm5iZiI6MTY0NjE1NDAwMCwiZXhwIjoxNjgwMTA5MjAwfQ.2e6OrL1-SuHZKNfdr9iq67HB3GQ_h3v8-evzYyuSIFA",
	},
});

axiosClient.interceptors.request.use((config) => {
	const { accessToken } = store.getState().auth.user || {};

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		return response.data.content;
	},
	(error) => {
		return Promise.reject(error.response?.data.content);
	}
);

export default axiosClient;
