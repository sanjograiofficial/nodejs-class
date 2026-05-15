import AllUsers from "../datas/userdata.js";

const getAllUsers = (req, res) => {
  const resData = {
    message: "All users fetched successfully",
    data: AllUsers,
  };
  res.status(200).json(resData);
};
const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = AllUsers.find((item) => item.id == userId);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json({
    message: `User with id ${userId} fetched successfully `,
    user,
  });
};
const createUser = (req, res) => {};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
