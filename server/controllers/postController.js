import Post from "../models/post.model.js";
import User from "../models/user.model.js";

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

export const getOnePost = async (req, res) => {
  const { postID } = req.body;

  const post = await Post.findOne(postID);

  if (!post) {
    return res.status(404).json({
      message: "no post found",
    });
  }

  return res.status(200).json({});
};

export const createPost = async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({
        message: "Unauthorized, Please Login Again",
      });
    }

    const userID = req.user.id;
    const { url, caption } = req.body;

    if (userID) console.log("user id exists", userID);

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    if (!caption || caption.length > 500) {
      return res.status(400).json({
        message: "Maximum character limit exceeded",
      });
    }

    const newPost = new Post({
      user: userID,
      url,
      caption: caption?.trim(),
      likeCount: 0,
      commentCount: 0,
    });

    const savedPost = await newPost.save();
    return res.status(201).json({
      message: "Post created successfully",
      post: {
        id: savedPost._id,
        users: savedPost.user,
        url: savedPost.url,
        caption: savedPost.caption,
        likeCount: savedPost.likeCount,
        commentCount: savedPost.commentCount,
        createdAt: savedPost.createdAt,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

export const editPost = async (req, res) => {
  try {
    const userID = req.user.id;
    const postID = req.params.postID;
    const { caption } = req.body;

    console.log("Here is the user id ", userID);
    console.log("Here is the post id ", postID);

    if (!userID) {
      return res.status(404).json({
        message: "Access denied, Login Again",
      });
    }

    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        message: `No user found of id ${user}`,
      });
    }

    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).json({
        message: " No Post Found ",
      });
    }

    if (caption) post.caption = caption;

    await post.save();

    return res.status(200).json({
      message: "User Updated Successfully",
      post: {
        caption,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: " Server Error ",
      error: error.message,
    });
  }
};
