const { api } = require("@/axios/axios");
const ROUTE_PREFIX = `${process.env.NEXT_PUBLIC_API_URL}permissions`;

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

// FIND ALL PERMISSIONS WITHOUT permission
const allPerm = async () => {
  try {
    const response = await api.get(`${ROUTE_PREFIX}/all-perm`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    throw error;
  }
};

// CREATE PERMISION
const create = async (name) => {
  const permissionName = name.trim();
  try {
    const response = await api.post(`${ROUTE_PREFIX}/add`, {
      name: permissionName,
    });
    return response.data;
  } catch (error) {
    console.error("Error while adding data:", error.message);
    return error.response.data;
  }
};

// DELETE PERMISION
const drop = async (id) => {
  const permissionId = id.trim();
  try {
    const response = await api.delete(`${ROUTE_PREFIX}/drop/${permissionId}`, {
      id: id,
    });
    return response.data;
  } catch (error) {
    console.error("Error while deleteing data:", error.message);
    return error.response.data;
  }
};

// UPDATE PERMISION
const edit = async (id, permission) => {
  const permissionId = id.trim();
  try {
    const response = await api.put(`${ROUTE_PREFIX}/edit`, {
      id: permissionId,
      name: permission,
    });
    return response.data;
  } catch (error) {
    console.error("Error while updateing data:", error.message);
    return error.response.data;
  }
};

// FIND ONE PERMISION
const findOne = async (id) => {
  const permissionId = id.trim();
  try {
    const response = await api.get(`${ROUTE_PREFIX}/find-one/${permissionId}`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching data:", error.message);
    return error.response.data;
  }
};

// ASSIGN PERMISSION
const assignPerm = async (role, perm) => {
  const roleId = role;
  const permId = perm;
  try {
    const response = await api.post(`${ROUTE_PREFIX}/assign`, {
      perm: permId,
      role: roleId,
    });
  } catch (error) {
    console.log(error)
    console.error("Error while assigning data:", error.message);
    return error.response.data;
  }
};

// REVOKE PERMISSION
const revokePerm = async (role, perm) => {
  const roleId = role;
  const permId = perm;
  try {
    const response = await api.delete(`${ROUTE_PREFIX}/revoke`, {
      perm: permId,
      role: roleId,
    });
  } catch (error) {
    console.error("Error while revoking data:", error.message);
    return error.response.data;
  }
};

module.exports = {
  findAll,
  create,
  drop,
  findOne,
  edit,
  allPerm,
  assignPerm,
  revokePerm,
};
