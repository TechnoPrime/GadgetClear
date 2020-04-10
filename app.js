const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(3000, () => {
	console.log("We've now got a server!");
	console.log('Your routes will be running on http://localhost:3000');
});

app.get("/", async (req, res) => {
	res.render('user');
});

app.get("/home", async (req, res) => {
		res.render("user");
});

app.get("/phones", async (req, res) => {
	res.render("List");
});

app.get("/search", async (req, res) => {
	res.render("result");
});

app.get("/reviews", async (req, res) => {
	res.render("review");
});
