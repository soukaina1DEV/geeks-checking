import axios from "axios";

// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.
// Export the fetchPosts function.

export const fetchPosts = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};


