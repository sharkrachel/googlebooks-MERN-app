const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001
const app = express();
const mongoose = require("mongoose");



// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./controllers/apiroutes");
apiRoutes(app);

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


//API Routes

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});