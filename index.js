import express from "express";
import routes from "./src/routes/crmroutes";

const app = express();
const PORT = 3000;

routes(app);
app.get("/", (req, res) => {
    res.send("node and express are running on port " + PORT);
    });         

app.listen(PORT, () => {
    console.log("your server is running on port " + PORT);
});

// TODO: test endpoints with Postman