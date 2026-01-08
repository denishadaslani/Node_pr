const express = require("express");
const port = 8888;
const dbconnect = require("./config/db.connect");
const router = require("./routes/admin.routes");
const app = express();

dbconnect();

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use("/", router);
app.use("/add-blog", router);
app.use("/view-blog", router);
app.use("/delete-blog", router);
app.use("/edit-blog", router);
app.use("/update-blog", router);
app.use("/view", router);


app.listen(port, () => {
    console.log(`server is starting at http://localhost:${port}`);
})

