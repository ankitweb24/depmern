const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const indexRouter = require("./routes/index");
const path = require("path");

app.use("/", indexRouter);

app.set('views',path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`server is the running port at http://localhost:${port}`);
});
