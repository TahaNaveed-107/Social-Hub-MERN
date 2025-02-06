import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const userID = req.user.id;

    const posts = await Post.find({ user: userID });

    if (posts.length === 0) {
      return res.status(404).json({
        message: "no posts were found",
      });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const userID = req.user.id;
    const { url, caption } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    const newPost = new Post({
      user: userID,
      url,
      caption,
      likeCount: 0,
      commentCount: 0,
    });

    const savedPost = await newPost.save();
    return res.status(201).json({
      message: "Post created successfully",
      savedPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
