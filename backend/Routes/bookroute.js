import express from 'express'
import Book from '../Bookmodel/bookmodel.js'
const router=express.Router();
//Route for book save to the database
router.post('/', async (req, res) => {
    try {
        if(!req.body.title || !req.body.publisher || !req.body.publishyear){
            res.status(400).send({message:"Please fill all the field"})
        }
        const newbook=new Book(
            {
            title:req.body.title,
            publisher:req.body.publisher,
            publishyear:req.body.publishyear
        }
        )
        await newbook.save();
        res.status(201).send({message:"Book saved Successfully"})

    } catch (error) {
        console.log(error)
        res.status(401).message("Something went wrong")
    }
})
//To get all books
router.get('/allbook',async(req,res)=>{
    try {
        const books=await Book.find()
        res.send(books)
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})
//To find book by id
router.get('/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const book=await Book.findById(id)
        res.status(201).send({message:"Book find succefully",
            book:book
        })
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})
//Route for update the book
router.put('/update/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const{title,publisher,publishyear}=req.body
        const result=await Book.findByIdAndUpdate(id,{title,publisher,publishyear})
        if(!result){
            return res.status(402).send({message:"Book Not found"})
        }
        res.status(200).send({message:"Update Successfully"})
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})
//To delete a book
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id
        const result= await Book.findByIdAndDelete(id)
        res.status(200).send({message:"Book delete successfully"})
    } catch (error) {
        res.send({message:error.message})
    }
})
export default router;