import Quiz from '../Models/quiz.js';

const getAllQuizzes=async(req,res)=>{
  const {category} = req.query;
 try{
    const quizzes=await Quiz.find({category:category});
    res.json(quizzes);
 }catch(err)
 {
    res.status(500).json({message:err.message});
 }
};

const getQuiz = async(req,res) => {
  const {title,category} =req.query;
  try{
    const quiz0= await Quiz.find({title:title,category:category});
    res.json(quiz0);    
  } catch (err){
    res.status(500).json({message:err.message});
  }
}

const createQuiz=async(req,res)=>{
    const {title,category,questions,answer}=req.body;

    try{
      const newQuiz=new Quiz({title,category,questions,answer});

      const savedQuiz=await newQuiz.save();

       console.log("quiz is created");
      res.status(201).json(savedQuiz);

    }catch(err)
    {
        res.status(500).json({message:err.message});
    }

}

export { getAllQuizzes, getQuiz, createQuiz }