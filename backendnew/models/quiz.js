import mongoose from 'mongoose';

const questioSchema=new mongoose.Schema({
    text:String,
    options:[String],
    correctOption:String,
});

const quizSchema=new mongoose.Schema({
    title:String,
    category:String,
    questions:[questioSchema],
    answer:Array,
});

export default mongoose.model('Quiz',quizSchema);