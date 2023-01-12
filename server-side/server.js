const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ug_movie_application_db',
    port: 3306
});

// check database connection
db.connect(err => {
    if (err) { 
        console.log("database not connected");
        console.log(err); 
    }
    else {
        console.log('database connected....');
    }
});


// for genre
// get data
app.get('/Genre', (req, res) => {

    let qr = `select * from genre`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});


// for Accounts/registration
//get all the data
app.get('/Accounts', (req, res) => {

    let qr = `select * from user`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

//login data
app.get('/Accounts/login', (req, res) => {

    let qr = `select Email, Password from user`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });

            // res.json(result);
        }
    });
});

// get single data
app.get('/Accounts/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from user where ID = '${gID}'`;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                Message: 'getting single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data

app.post('/add/Account', (req, res) => {

    console.log(req.body, 'data added');

    let email = req.body.Email;
    let password = req.body.Password;
    let confirmPassword = req.body.CPassword;
    let name = req.body.Name;
    let file = req.body.File;
    let username = req.body.Username;

    let qr = `INSERT INTO user(Name, Username, Email, File, Password, CPassword)
                VALUES('${name}', '${username}', '${email}', '${file}', '${password}', '${confirmPassword}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/Accounts/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let email = req.body.Email;
    let password = req.body.Password;
    let confirmPassword = req.body.CPassword;
    let name = req.body.Name;
    let file = req.body.File;
    let username = req.body.Username;

    let qr = `update user set Name = '${name}', Username = '${username}', Email = '${email}', File = '${file}',
                Password = '${password}', CPassword = '${confirmPassword}' where ID = '${gID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data

app.delete('/Accounts/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `delete from user where ID = '${gID}'`

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for movies
//get all the data
app.get('/Movies', (req, res) => {

    let qr = `select * from movies`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Movies/:id', (req, res) => {

    const gID = req.params.id;

    let qr = `select * from movies where ID = '${gID}'`;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'getting single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// get movue data
app.get('/Movies/name', (req, res) => {

    const gname = req.Name;

    let qr = `select * from movies where Producer = '${gname}'`;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
        if (result.length > 0) {
            res.send({
                message: 'getting single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Movie', (req, res) => {

    console.log(req.body, 'data added');

    let title = req.body.Title;
    let genre = req.body.Genre;
    let producer = req.body.Producer;
    let file = req.body.File;
    let details = req.body.Details;

    let qr = `INSERT INTO movies(Title, File, Genre, Producer, Details)
                VALUES('${title}', '${file}','${genre}','${producer}', '${details}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data
app.put('/Movies/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let title = req.body.Title;
    let genre = req.body.Genre;
    let producer = req.body.Producer;
    let file = req.body.File;
    let details = req.body.Details;

    let qr = `update movies set Title = '${title}', File = '${file}', Genre = '${genre}',
                Producer = '${producer}', Details = '${details}'  where ID = '${gID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log('error occured: ', err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Movies/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from movies where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for Producer
//get all the data
app.get('/Producers', (req, res) => {

    let qr = `select * from producer`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data
app.get('/Producers/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from producer where ID = '${gID}'`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Producer', (req, res) => {

    console.log(req.body, 'data added');

    let name = req.body.Name;
    let email = req.body.Email;
    let genre = req.body.Genre;
    let file = req.body.File;

    let qr = `INSERT INTO producer(Name, Email, Genre, File)
                VALUES('${name}', '${email}', '${genre}', '${file}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data stored successfully'
        });

    });
});

// put data/ update data

app.put('/Producers/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let name = req.body.Name;
    let email = req.body.Email;
    let genre = req.body.Genre;
    let file = req.body.File;
    let password = req.body.Password;
    let confirmPassword = req.body.CPassword;

    let qr = `update producer set Name = '${name}', Email = '${email}',
                Genre = '${genre}', File = '${file}', Password = '${password}', CPassword = '${confirmPassword}'
                where ID = '${gID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Producers/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from producer where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for messages/question
//get all the data
app.get('/Message', (req, res) => {

    let qr = `select * from message`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});

// get single data

app.get('/Message/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from message where ID = '${gID}'`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            res.send({
                Message: 'getting single data',
                data: results
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    });
});

// adding data
app.post('/add/Message', (req, res) => {

    console.log(req.body, 'data added');

    let name = req.body.Name;
    let email = req.body.Email;
    let message = req.body.Message;

    let qr = `INSERT INTO message(Name, Email, Message)
                VALUES('${name}', '${email}', '${message}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data stored successfully'
        });

    });
});

// put data/ update data

app.put('/Message/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let name = req.body.Name;
    let message = req.body.Message;

    let qr = `update message set Name = '${name}', Email = '${email}',
                Message = '${genre}' where ID = '${gID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data
app.delete('/Message/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from message where ID = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});

// for images
// adding image
app.post('/add/Image', (req, res) => {

    console.log(req.body, 'data added');

    let name = req.body.Name;
    let url = req.body.URL;

    let qr = `INSERT INTO images(Name, URL)
                VALUES('${name}', '${url}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data stored successfully',
            data: result
        });

    });
});

//get all the Image
app.get('/files', (req, res) => {

    let qr = `select * from images`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all data available',
                data: result
            });
        }
    });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});