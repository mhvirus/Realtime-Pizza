const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");

const PORT = process.env.PORT || 3000;

// Assets 
app.use(express.static('public'))

// set template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, '/resources/views'))
app.set("view engine", "ejs")

//Routes
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cart', (req, res) => {
    res.render('customers/cart')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
