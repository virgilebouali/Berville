require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');

// Local imports
const router = require('./router');

// Body parser
app.use(express.urlencoded({ extended: true }));

// Charger les données de la session sur `req.session` et `res.locals`
app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: 'Un secret pour signer les id de sessions',
        cookie: {
            maxAge: 60000
        },
    })
);

// Setup view engine
app.set("view engine", "ejs");
app.use(express.static("public"))

// Serve static files
// Nos Routes
app.use(router);

// middleware 404

// middleware formatage et affichage des erreurs

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
