import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const addComment = async (req, res) => {
  try {
    const userID = req.user.id;
    const { postID, text } = req.body;

    if (!postID || !text) {
      return res.status(400).json({
        message: "Post ID and Comment Text is required",
      });
    }

    const post = await Post.findById(postID);
    if (!post) {
      return res.status(404).json({
        message: "Post not Found",
      });
    }
    const newComment = new Comment({
      user: userID,
      post: postID,
      text,
    });

    const savedComment = await newComment.save();

    post.comments.push(savedComment._id);
    await post.save();

    return res.status(201).json({
      message: "Comment added successfully",
      comment: savedComment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
