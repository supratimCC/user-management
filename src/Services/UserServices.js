const { api } = require("@/axios/axios");
const ROUTE_PREFIX = `${process.env.NEXT_PUBLIC_API_URL}user`;

// FIND ALL PERMISSIONS
const findAll = async (page, limit = 1) => {
  try {
    const response = await api.get(
      `${ROUTE_PREFIX}/find-all?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    throw error;
  }
};

module.exports = {
  findAll,
};
