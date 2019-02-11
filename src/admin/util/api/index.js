const API_ENDPOINT = `${process.env.VUE_APP_ADMIN_API_ENDPOINT}`;

export const API_MEMBER = `${API_ENDPOINT}/member`;
export const API_MEMBER_ID = (id) => `${API_ENDPOINT}/member/${id}`;
export const API_TEAM = `${API_ENDPOINT}/team`;
export const API_TEAM_SEQ = (seq) => `${API_ENDPOINT}/team/${seq}`;