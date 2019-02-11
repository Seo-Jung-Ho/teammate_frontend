const API_ENDPOINT = `${process.env.VUE_APP_USER_API_ENDPOINT}`;
export const API_MEMBER = `${API_ENDPOINT}/member`;
export const API_MEMBER_ID = (id) => `${API_ENDPOINT}/member/${id}`;
// export const API_MAIN = `${process.env.VUE_APP_API_ENDPOINT}`;
// export const API_MAIN = `${process.env.VUE_APP_API_ENDPOINT}`;