const db = require('../connect')


const book = async(req, res)=>{
    //on booking the car it is removed from car lists using removeCar func. below
    const q = "INSERT INTO booking (`user_id_fk`, `cost`, `status`, `car_id_fk`, `transaction_id`) VALUE (?)";
    const values = [req.id, req.body.cost, req.body.status, req.params.id, req.body.transaction_id];
    db.query(q, values, (data, err) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json("Car booked Successfully!!")
    })
}

const removeCar = async(req, res)=>{
    const q = "DELETE FROM car WHERE id = ?";
    db.query(q, [req.params.id] , (data, err) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}
//I have to add middleware to extract the booked_id from car_id
const feedback = async (req, res)=>{
    //first we get the booked id from car_id in params of url by making the query and use the booking id in this 
    const q = "INSERT INTO feedback ( `rating`, `review`) VALUE (?)";
    db.query(q, [req.body.rating, req.body.review] , (data, err) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}

module.exports = { book, removeCar, feedback}