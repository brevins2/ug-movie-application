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
        console.log('err'); 
    }
    else {
        console.log('database connected....');
    }
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

            //            res.json(qr);
        }
    });
});

// get single data

app.get('/Account/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from user where id = ${gID}`;

    db.query(qr, (err, results) => {

        if (err) {
            console.log(err);
        }
        if (results.length > 0) {
            //            res.send({
            //                Message: 'getting single data',
            //                data: results
            //            });

            res.json(qr);
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

    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirm_password;
    let allow = req.body.Allow;
    //    let file = req.body.File;

    let qr = `INSERT INTO user(email, password, confirmPassword, Allow)
                VALUES('${email}', '${password}', '${confirmPassword}', '${allow}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/update/Account/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirm_password;
    let allow = req.body.Allow;
    let file = req.body.File;

    let qr = `update user set email = '${email}', password = '${password}',
               confirm_password = '${confirmPassword}', file = '${file}', allow = '${Allow}', where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data

app.delete('/delete/Accounts/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from user where id = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


//for Messages
//get all the data

app.get('/Message', (req, res) => {

    let qr = `select * from messages`;

    db.query(qr, (err, result) => {
        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                data: result
            });
        }
    });
});

// get single data

app.get('/Message/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from messages where id = ${gID}`;

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

    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `INSERT INTO messages(email, name, message) VALUES('${email}','${name}','${message}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/update/Message/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;

    let qr = `update messages set email = '${email}', name = '${name}', message = '${message}' where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});


// delete single data

app.delete('/delete/Message/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from messages where id = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});



// for phones
//get all the data

app.get('/Movies', (req, res) => {

    let qr = `select * from movie`;

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

    let gID = req.params.id;

    let qr = `select * from movie where id = ${gID}`;

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

app.post('/add/Movie', (req, res) => {

    console.log(req.body, 'data added');

    let title = req.body.title;
    let genre = req.body.genre;
    let producer = req.body.producer;
    let file = req.body.file;
    let details = req.body.details;

    let qr = `INSERT INTO movie(title, file, genre, producer, details)
                VALUES('${title}', '${file}','${genre}','${producer}', '${details}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/update/Movies/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let title = req.body.Title;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let brand = req.body.Brand;

    let qr = `update movie set Title = '${title}', Storage = '${storage}', Battery = '${battery}',
                Price = '${Price}', File = '${file}', Brand = '${brand}'  where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data

app.delete('/delete/Movies/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from phones where id = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for computers
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

    let qr = `select * from producer where id = ${gID}`;

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

    let title = req.body.Title;
    let category = req.body.Category;
    let price = req.body.Price;
    let file = req.body.File;

    let qr = `INSERT INTO producer(Title, Category, Price, File)
                VALUES('${title}', '${category}', '${price}', '${file}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/update/Producer/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let title = req.body.Title;
    let category = req.body.Category;
    let price = req.body.Price;
    let file = req.body.File;

    let qr = `update producer set Title = '${title}', Category = '${category}',
                Price = '${Price}', File = '${file}' where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data

app.delete('/delete/Producers/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from producer where id = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});


// for orders
//get all the data

app.get('/Orders', (req, res) => {

    let qr = `select * from orders`;

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

app.get('/Orders/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `select * from orders where id = ${gID}`;

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

app.post('/add/Orders', (req, res) => {

    console.log(req.body, 'data added');

    let title = req.body.Title;
    let messages = req.body.Message;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let category = req.body.Category;
    let customerName = req.body.Customer_Name;
    let email = req.body.Email;

    let qr = `INSERT INTO orders(Title, Message, Storage, Battery, Price, File, Category, Customer_Name, email)
                VALUES('${title}', '${messages}','${storage}','${battery}', '${price}', '${file}', '${brand}',
                '${customerName}', '${email}')`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({
            message: 'data sent successfully'
        });

    });
});

// put data/ update data

app.put('/update/Orders/:id', (req, res) => {

    console.log(req.body, 'data updated');

    let gID = req.params.id;
    let title = req.body.Title;
    let messages = req.body.Message;
    let storage = req.body.Storage;
    let battery = req.body.Battery;
    let price = req.body.Price;
    let file = req.body.File;
    let category = req.body.Category;
    let customerName = req.body.Customer_Name;
    let email = req.body.Email;

    let qr = `update phones set Title = '${title}', Message = '${messages}', Storage = '${storage}',
                Battery = '${battery}', Price = '${Price}', File = '${file}', Category = '${category}',
                Customer_Name = '${customerName}', Email = '${email}' where id = ${gID}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data successfully updated'
        });
    });
});

// delete single data

app.delete('/delete/Orders/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from orders where id = '${qID}'`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({
            message: 'data delete successful'
        });
    });

});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});