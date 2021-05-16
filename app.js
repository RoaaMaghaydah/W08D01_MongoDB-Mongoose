const express = require("express");
const todoModel = require("./schema");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
    todoModel.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => { res.json(err) })

});

app.get("/todos/complete", (req, res) => {
    todoModel.find({ isCompleted: true })
        .then((result) => {
            res.json(result);
        }).catch((err) => { res.json(err) })
})

app.post("/create/todo", (req, res) => {
    const { task, description, deadline, isCompleted, priority } = req.body;

    const todos = new todoModel(
        { task, description, deadline, isCompleted, priority }
    )
    todos.save().then(result => { res.json(result) }).catch(err => { res.send(err) })
});



app.put("/update/todo", (req, res) => {
    const query = { task: "roaamagaydah" };
    todoModel.findOneAndUpdate(query, { task, description, deadline, isCompleted, priority } = req.body
    )
        .then(result => { res.json(result) }).catch(err => { res.send(err) })
});


app.delete("/delete/todo", (req, res) => {
    const query = { task: "sport_1" };
    todoModel.deleteOne(query)
        .then(result => { res.json("done") }).catch(err => { res.send(err) })

});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

