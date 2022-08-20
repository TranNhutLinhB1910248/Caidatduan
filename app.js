const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const ContactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", ContactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." });
});

module.exports = app;