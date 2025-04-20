import axiosInstance from '../utils/axiosInstance';

const authService = {
  login: async ({ email, password }) => {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response;
  },

  signup: async ({ username, email, password }) => {
    const response = await axiosInstance.post('/auth/signup', {
      username,
      email,
      password,
    });
    return response;
  },
};

export default authService;
