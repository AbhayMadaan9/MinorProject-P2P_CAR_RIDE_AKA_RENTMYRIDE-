const db = require('../connect')
var bcrypt = require('bcryptjs');
require('dotenv').config()

const add = async (req, res) => {
    //we allow single user to add multiple car 
    const q = "SELECT number FROM car WHERE number = ?";
    db.query(q, [req.body.number, req.id], (err, data) => {
        if (err) return res.status(500).send(err)
        if (data.length) return res.status(409).json("user car already exists!!!")
        //New car

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.number, salt, function (err, hash) {
                if (err) return res.status(500).send(err)
                else {

                    const q =
                        "INSERT INTO car (`name`,`model`, `location`, `image`, `duration_start_date`, `duration_end_date`,`duration_start_time`,`duration_end_time`,`user_id`, `number`, `price`, `seats`, `gear`, `transmission`, `duration`) VALUES (?)";
                    const values = [req.body.name, req.body.model, req.body.location, req.body.image, req.body.duration_start_date, req.body.duration_end_date, req.body.duration_start_time, req.body.duration_end_time, req.id, req.body.number, req.body.price,req.body.seats,req.body.gear,req.body.transmission, req.body.duration];
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
    let q = "SELECT * FROM car WHERE duration_start_date = ? AND duration_end_date = ? AND duration_start_time = ? AND duration_end_time = ? AND location = ?";
    const queryParams = [req.query.location, req.query.duration_start_date, req.query.duration_end_date, req.query.duration_end_date, req.query.duration_end_time];

    // Check if any query parameters are present
    if (req.query.transmission) {
        q += " AND transmission = ?";
        queryParams.push(req.query.transmission);
    }
    if (req.query.brand) {
        q += " AND brand = ?";
        queryParams.push(req.query.brand);
    }
    if (req.query.gear) {
        q += " AND gear = ?";
        queryParams.push(req.query.gear);
    }
    if (req.query.seats) {
        q += " AND seats = ?";
        queryParams.push(req.query.seats);
    }

    // Check if the `price` query parameter is present and has a value of "LH"
    if (req.query.price === "LH") {
        q += " ORDER BY price ASC"; // Sort by price low to high
    } else if (req.query.price === "HL") {
        q += " ORDER BY price DESC"; // Sort by price high to low
    }

    db.query(q, queryParams, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};



const show = async (req, res) => {
    const q = "SELECT * FROM car WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
}

const UserCar = async (req, res) => {
    const q = "SELECT * FROM car WHERE user_id = ?";
    db.query(q, [req.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

//get user from car id
const CarOwner = (req, res)=>{
    const q = "SELECT * FROM user WHERE id = ?";
    db.query(q, [req.user_id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}
module.exports = { add, listall, show, UserCar, CarOwner }
