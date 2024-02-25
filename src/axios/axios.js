const { default: axios } = require("axios");

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 100000,
  headers: { "X-Custom-Header": "foobar" },
});

module.exports = {
  api,
};
