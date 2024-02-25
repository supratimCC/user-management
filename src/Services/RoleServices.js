const { api } = require("@/axios/axios");
const ROUTE_PREFIX = `${process.env.NEXT_PUBLIC_API_URL}role`;

// FIND ALL ROLES
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

// CREATE ROLE
const create = async (name) => {
  const roleName = name.trim();
  try {
    const response = await api.post(`${ROUTE_PREFIX}/add`, {
      name: roleName,
    });
    return response.data;
  } catch (error) {
    console.error("Error while adding data:", error.message);
    return error.response.data;
  }
};

// DELETE ROLE
const drop = async (id) => {
  const roleId = id.trim();
  try {
    const response = await api.delete(`${ROUTE_PREFIX}/drop/${roleId}`, {
      id: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error while deleteing data:", error.message);
    return error.response.data;
  }
};

// UPDATE ROLE
const edit = async (id, role) => {
  const roleId = id.trim();
  try {
    const response = await api.put(`${ROUTE_PREFIX}/edit`, {
      id: roleId,
      name: role,
    });
    return response.data;
  } catch (error) {
    console.error("Error while updateing data:", error.message);
    return error.response.data;
  }
};

// FIND ONE ROLE
const findOne = async (id) => {
  const roleId = id.trim();
  try {
    const response = await api.get(`${ROUTE_PREFIX}/find-one/${roleId}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return error.response.data;
  }
};

module.exports = {
  findAll,
  create,
  drop,
  findOne,
  edit,
};
