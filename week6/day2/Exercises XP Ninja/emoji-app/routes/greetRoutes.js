const express = require("express");
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get("/", (req, res) => {
  let formHTML = `
  <html>
    <head>
      <title>Emoji Greeting</title>
      <style>
        body {
          font-family: Arial;
          background-color: #f2f2f2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        form {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        input, select {
          margin: 10px 0;
          padding: 8px;
          width: 100%;
        }
        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <h2>🌟 Emoji Greeting App 🌟</h2>
      <form action="/greet" method="POST">
        <label>Your Name:</label><br>
        <input type="text" name="name" placeholder="Enter your name" required><br>

        <label>Choose an Emoji:</label><br>
        <select name="emoji">
          ${emojis.map((e) => `<option value="${e}">${e}</option>`).join("")}
        </select><br>

        <button type="submit">Greet Me!</button>
      </form>
    </body>
  </html>
  `;
  res.send(formHTML);
});

router.post("/greet", (req, res) => {
  const { name, emoji } = req.body;

  if (!name) {
    return res.send("<h2 style='color:red;'>⚠️ Please enter your name!</h2>");
  }

  res.send(`
    <html>
      <head>
        <title>Greeting</title>
        <style>
          body {
            text-align: center;
            font-family: Arial;
            background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h1 {
            font-size: 2rem;
          }
          a {
            margin-top: 20px;
            text-decoration: none;
            color: #333;
            background: white;
            padding: 10px 20px;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <h1>${emoji} Hello, ${name}! ${emoji}</h1>
        <a href="/">Go back</a>
      </body>
    </html>
  `);
});

module.exports = router;
