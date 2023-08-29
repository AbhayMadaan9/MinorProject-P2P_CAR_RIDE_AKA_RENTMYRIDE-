const db = require('../connect')


const book = async (req, res) => {
    const q = "INSERT INTO booking (`user_id_fk`, `cost`, `car_id_fk`) VALUES (?, ?, ?)";
    const values = [req.id, req.body.cost, req.params.id];
    db.query(q, values, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};


const removeCar = async(req, res)=>{
    const q = "DELETE FROM car WHERE id = ?";
    db.query(q, [req.params.id] , (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}
//I have to add middleware to extract the booked_id from car_id
const feedback = async (req, res)=>{
    //first we get the booked id from car_id in params of url by making the query and use the booking id in this 
    const q = "INSERT INTO feedback ( `rating`, `review`) VALUE (?)";
    db.query(q, [req.body.rating, req.body.review] , (err, data) => {
        if (err) return res.status(500).send(err)
        return res.status(200).json(data)
    })
}
const getCarsByUserId = async (req, res) => {
    const q = `SELECT * FROM car c JOIN booking b ON c.id = b.car_id_fk WHERE b.user_id_fk = ?
    `;
    db.query(q, [req.id], (err, data) => {
      if (err) return res.status(500).send(data);
      return res.status(200).json(data);
    });
  };

module.exports = { book, removeCar, feedback, getCarsByUserId}