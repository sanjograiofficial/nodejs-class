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
const createUser = (req, res) => {
  const user = req.body;
  AllUsers.push(user);
  res.json({
    message: "Created user successfully",
    user,
  });
};
const updateUser = (req, res) => {
  const userId = req.params.id;
  const update = req.body;
  const user = AllUsers.find((item) => item.id == userId);
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }
  user.name = update.name;
  user.email = update.email;

  res.json({
    message: "User updated successfully",
    user,
  });
};
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const user = AllUsers.findIndex((item) => item.id == userId);
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }
  AllUsers.splice(user, 1);
  res.json({
    message: "User deleted successfully",
  });
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
