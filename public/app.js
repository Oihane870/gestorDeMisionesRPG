app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
 res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
 next();
});