const getPost = async (req, res) => {
  res.status(200).send({ message: "getPost is working well!" });
};

const createPost = async (req, res) => {
  res.status(200).send({ message: "createPost is working well!" });
};

module.exports = {
  getPost,
  createPost,
};
