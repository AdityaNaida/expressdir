const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Your backend app is listening at ${port}`);
});

app.get("/", (req, res) => {
  res.send("Response by home is Changed.");
});

//params
// app.get("/:username/:password", (req, res) => {
//   console.log(req.params);
//   let { username, password } = req.params;
//   res.send(
//     `Welcome to Aditya ka backend @${username}. your token is ${password}`
//   );
// });

//querry

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("Querry not found");
  }

  res.send(`Your results for querry ${q}`);
});

// app.get("/about", (req, res) => {
//   res.send("Response by about.");
// });

// app.get("/search", (req, res) => {
//   res.send("Response by search.");
// });

// app.post("/", (req, res) => {
//   res.send("Post requeste is recived by home");
// });

//for all routes
app.get("*", (req, res) => {
  res.send("404 page not found");
});
// app.use((req, res) => {
//   console.log("Request recived ha ji");
//   let helloworld = "<h1>Hello World!</h1>";
//   res.send(helloworld);
// });
