import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "./context/useUserContext";
import { Login } from "./pages/Login";
import { Questions } from "./pages/Questions";
import { QuestionCreate } from "./pages/TeacherPages/QuestionCreate";

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/questoes" element={<Questions/>}/>
            <Route path="/turmas" element={<Login/>}/>
            <Route path="/provas" element={<Login/>}/>
            <Route path="/minhaconta" element={<Login/>}/>
            <Route path="/TeamCreate" element={<Login/>}/>
            <Route path="/TeamUpdate" element={<Login/>}/>
            <Route path="/QuizCreate" element={<Login/>}/>
            <Route path="/QuizUpdate" element={<Login/>}/>
            <Route path="/QuizAnswer" element={<Login/>}/>
            <Route path="/StudentAdd" element={<Login/>}/>
            <Route path="/QuestionCreate" element={<QuestionCreate/>}/>
            <Route path="/QuestionAnswer/:id" element={<Login/>}/>
            <Route path="/QuestionUpdate/:id" element={<Login/>}/>
            <Route path="/QuestionAdd/:id" element={<Login/>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
    
  )
}