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

router.get('/new', (req, res, next) => {
    res.render('form')
})

router.post('/new', (req, res, next) => {
    messages.push({
        text: req.body.messageText as string,
        user: req.body.username as string,
        added: new Date()
    })
    res.redirect('/')
})

export default router;
