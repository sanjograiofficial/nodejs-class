import AllUsers from "../datas/userdata.js";

const getAllUsers = (req, res) => {
  const resData = {
    message: "All users fetched successfully",
    data: AllUsers,
  };
  res.status(200).json(resData);
};
const getUserById = (req, res) => {};
const createUser = (req, res) => {};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
