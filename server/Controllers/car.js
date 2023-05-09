const db = require('../connect')
var bcrypt = require('bcryptjs');
require('dotenv').config()


const add = async (req, res) => {
    //we allow single user to add multiple car 
    const q = "SELECT number FROM car WHERE number = ? AND user_id=?";
    db.query(q, [req.body.number, req.id], (err, data) => {
        if (err) return res.status(500).send(err)
        if (data.length) return res.status(409).json("user car already exists!!!")
        //New car

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.number, salt, function (err, hash) {
                if (err) return res.status(500).send(err)
                else {

                    const q =
                        "INSERT INTO car (`name`,`model`, `location`, `image`, `duration_start_date`, `duration_end_date`,`duration_start_time`,`duration_end_time`,`user_id`, `number`) VALUE (?)";
                    const values = [req.body.name, req.body.model, req.body.location, req.body.image, req.body.start_date, req.body.end_date, req.body.start_time, req.body.end_time, req.id, req.body.number];
                    db.query(q, [values], (err, data) => {
                        if (err) return res.status(500).send(err)
                        else return res.status(200).json(data)
                    })
                }
            });

        });
    })
}
const listall = async (req, res) => {
    const q = "SELECT name, model, image, duration_start_date , duration_end_date, duration_start_time, duration_end_time from car WHERE duration = ? AND location = ?"
    db.query(q, [req.body.duration, req.params.location], (data, err) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}
const show = async (req, res) => {
    const q = "SELECT * FROM car WHERE id = ?";
    db.query(q, [req.params.id], (data, err) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}


module.exports = { add, listall, show}