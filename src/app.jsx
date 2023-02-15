import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "./context/useUserContext";
import { Login } from "./pages/Login";
import { Questions } from "./pages/Questions";
import { QuestionCreate } from "./pages/TeacherPages/QuestionCreate";
import { Register } from "./pages/Register"
import { Teams } from "./pages/Teams";
import { Quiz } from "./pages/Quizzes";
import { QuestionUpdate } from "./pages/TeacherPages/QuestionUpdate";
import { QuestionAnswer } from "./pages/StudentPages/QuestionAnswer";


export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/questoes" element={<Questions/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/turmas" element={<Teams/>}/>
            <Route path="/provas" element={<Quiz/>}/>
            <Route path="/minhaconta" element={<Login/>}/>
            <Route path="/TeamCreate" element={<Login/>}/>
            <Route path="/TeamUpdate" element={<Login/>}/>
            <Route path="/QuizCreate" element={<Login/>}/>
            <Route path="/QuizUpdate" element={<Login/>}/>
            <Route path="/QuizAnswer" element={<Login/>}/>
            <Route path="/StudentAdd" element={<Login/>}/>
            <Route path="/QuestionCreate" element={<QuestionCreate/>}/>
            <Route path="/QuestionUpdate/:id" element={<QuestionUpdate/>}/>
            <Route path="/QuestionAnswer/:id" element={<QuestionAnswer/>}/>
            <Route path="/QuestionAdd/:id" element={<Login/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
    
  )
}