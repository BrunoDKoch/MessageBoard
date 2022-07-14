"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const date_fns_1 = require("date-fns");
const router = express_1.default.Router();
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
    res.render("index", { title: "MessageBoard", messages: messages, format: date_fns_1.formatDistanceToNow });
});
exports.default = router;
