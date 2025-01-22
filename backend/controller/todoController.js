const todoModel = require("../model/todoModel");
const  fs = require( "fs");
const path = require("path");

module.exports.getTodo = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  try {
    const {name,summary} = req.body
    const imagepath=`${req.file.filename}`

    const Create = new todoModel({
        name,summary,img:imagepath,
    })
   await Create.save()
   return res.status(200).json({success:true,message:" Created Succcessfully",todoModel:Create})
  } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,message:"Internal server Error"})
  }

};


module.exports.updateTodo = async (req, res) => {
    const {_id,name ,summary} = req.body;

    await todoModel.findByIdAndUpdate(_id,{ name ,summary }).then(() => {
        res.set(201).send("Updated Successfully");
      }).catch((err)=>{console.log(err)})
  };


  module.exports.deleteTodo = async (req, res) => {
    const {_id} = req.body;

    await todoModel.findByIdAndDelete(_id).then(() => {
        res.set(201).send("Deleted Successfully");
      }).catch((err)=>{console.log(err)})
  };
