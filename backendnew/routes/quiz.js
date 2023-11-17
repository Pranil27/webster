import express from 'express';
const router=express.Router();
import { getAllQuizzes, createQuiz, getQuiz } from '../controllers/quizControllers.js';


router.get('/allQuizzes',getAllQuizzes);
//router.get('/createQuiz',quizController.createQuiz);
router.get('/quiz0',getQuiz);
router.post('/createQuiz',createQuiz);


export default router
