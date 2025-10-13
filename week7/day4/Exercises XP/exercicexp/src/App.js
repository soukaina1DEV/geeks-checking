// Exercise 1 : React Router Error Boundary

import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary";

function HomeScreen() {
  return <h1 className="text-center mt-5">Home</h1>;
}

function ProfileScreen() {
  return <h1 className="text-center mt-5">Profile Screen</h1>;
}

function ShopScreen() {
  throw new Error("Something went wrong in Shop!");
}

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-3 p-3 border rounded">
        {/* Navbar */}
        <nav className="nav nav-pills justify-content-center mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Shop
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



// Exercise 2 : Display JSON Data in React JS

import React from "react";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <PostList />
    </div>
  );
}

export default App;



// Exercise 3 : Display JSON Data and parse it


import React from "react";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Example 1 Component</h2>
      <Example1 />

      <h2>Example 2 Component</h2>
      <Example2 />

      <h2>Example 3 Component</h2>
      <Example3 />
    </div>
  );
}

export default App;



// Exercise 4 : Post JSON Data with React JS

import React from "react";

function App() {
  const postData = async () => {
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://webhook.site/e508184d-2476-44f4-8be3-8bc81a871c96"
      );

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(await response.text());
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={postData}>Press me to post some data</button>
    </div>
  );
}

export default App;
