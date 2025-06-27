import express from 'express';
import path from 'path';
import { HomeController } from './controllers/HomeController';

const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize controllers
const homeController = new HomeController();

// Define routes
app.get('/', homeController.index.bind(homeController));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});