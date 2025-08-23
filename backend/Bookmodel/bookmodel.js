import mongoose from 'mongoose'
const bookschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    publishyear:{
        type:Number,
        required:true
    },
    },
    {
        timestamps:true
    }
)
const Book=mongoose.model("book",bookschema)
export default Book;