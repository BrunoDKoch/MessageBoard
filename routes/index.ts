import express from "express";
import ejs from 'ejs'
import {formatDistanceToNow} from 'date-fns'
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
    res.render("index", { title: "MessageBoard", messages: messages, format: formatDistanceToNow });
});


export default router;
