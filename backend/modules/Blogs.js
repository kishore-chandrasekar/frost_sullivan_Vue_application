const Blog = require("../models/Blog");
exports.create = async (req, res) => {
    try {
        const { author, content } = req.body;
        const blogPost = new Blog({ author, content });
        await blogPost.save();
        res.status(201).send('Blog post created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating blog post');
    }
};

exports.blogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching blogs');
    }
};