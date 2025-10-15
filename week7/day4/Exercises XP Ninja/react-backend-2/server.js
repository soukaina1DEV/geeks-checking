const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Doe" },
    { id: 3, firstName: "Ziv", lastName: "Chen" },
    { id: 4, firstName: "Isaac", lastName: "Groisman" },
    { id: 5, firstName: "Avner", lastName: "Maman" },
    { id: 6, firstName: "Megan", lastName: "Dreyfuss" },
  ];
  res.json(customers);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
