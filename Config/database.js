const mongoose = require('mongoose')
const mongooURL = 'mongodb://localhost:27017/semesterlimanpm';
mongoose.connect(mongooURL,
    err => {
        if(err) throw err;
        console.log('Berhasil Konek ke database')
    });