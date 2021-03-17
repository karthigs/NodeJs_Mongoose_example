const User = require('../schema/user');

const getAllUsers = async (req, res) => {

    const users = await User.find({});
    res.json({users:users});
};

const getUser = async (req, res) => {

    const users = await User.findOne({password:req.query.password});
    res.json({users:users});
};


const storeUser =  (req, res) => {

    const data = req.body;

    const user = new User(data);
    user.save((error, result) => {
        if (error) {
            res.json({status:false});
        } else {
            res.json({status:true});
        }
    });
}

module.exports = { getAllUsers, storeUser, getUser };