const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());

app.post('/predict', (req, res) => {
    const { age, smoke, medication } = req.body;
    console.log(age, smoke, medication);
    // Spawn a new child process to run the Python script
    const pythonProcess = spawn('python3', ['model/predict.py', age, Number(smoke), medication]);

    // Collect data from the Python script
    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString());
    });

    // Handle error
    // pythonProcess.stderr.on('data', (data) => {
    //     console.error(`stderr: ${data}`);
    //     res.status(500).send(data.toString());
    // });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
