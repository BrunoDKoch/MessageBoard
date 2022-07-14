import express from "express";
import ejs from 'ejs'
const router = express.Router();
const messages = [
    {
        text: "Hi there!",
        user: "Paulo",
        added: new Date()
    },
    {
        text: "Hello world!",
        user: "Carlos",
        added: new Date()
    }
];

/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});

export default router;
