                  
import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors());

app.get("", (req, res) => {
    res.json({
        message: "Удалить потом,это я тестил"
    });
});

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});


app.listen(8000, () => {
    console.log("Server running on port 8000");
})