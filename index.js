const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data.json');

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/course', (req, res) =>{
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id == id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Server running on port', port);
})