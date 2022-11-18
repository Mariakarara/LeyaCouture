require("dotenv").config();
const app = require("./app");

const port = parseInt(process.env.APP_PORT ?? "5000", 30);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
