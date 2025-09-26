const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

// Simulated database

let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];


// GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if(post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// POST /posts: Create a new blog post.
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    res.status(201).json({ message: "Post created successfully", post: newPost });
});
// PUT /posts/:id: Update an existing blog post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');   
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});
// DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex < 0) return res.status(404).send('Post not found');
    posts.splice(postIndex, 1);
    res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
// Start the Express app and listen on a specified port (e.g., 3000).
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

