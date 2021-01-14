const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const formatDate = (timestamp) => {
  const time = new Date(timestamp);
  const monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = time.getFullYear();
  const month = monthArr[time.getMonth()];
  const day = time.getDate();
  return `${month} ${day}, ${year}`;
};
