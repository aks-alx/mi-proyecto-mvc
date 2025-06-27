"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const HomeController_1 = require("./controllers/HomeController");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Initialize controllers
const homeController = new HomeController_1.HomeController();
// Define routes
app.get('/', homeController.index.bind(homeController));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
