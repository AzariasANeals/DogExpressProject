// app.js
import express from "express";
import dogFacts from './dog_facts.js';

const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/facts', (req, res) => {

  let {number} = req.query;

  if (number) {
     number = parseInt(number, 10);

     if (number <= 0){
      return res.status(400).json({ success: false, error: "Invalid number entered. Must be between 1 and 435." });
    }   
    //return res.json({ facts: dogFacts.slice(0, number).join(` `), success: true });
    return res.json({ facts: dogFacts[number - 1] || 'No fact found...', success: true });

  }

  res.json({facts: dogFacts, success:true});
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

export default app;