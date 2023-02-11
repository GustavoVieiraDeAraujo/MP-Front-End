import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./pages/Login";

export function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/questoes" element={<Login/>}/>
            <Route path="/turmas" element={<Login/>}/>
            <Route path="/provas" element={<Login/>}/>
            <Route path="/minhaconta" element={<Login/>}/>
            <Route path="/TeamCreate" element={<Login/>}/>
            <Route path="/TeamUpdate" element={<Login/>}/>
            <Route path="/QuizCreate" element={<Login/>}/>
            <Route path="/QuizUpdate" element={<Login/>}/>
            <Route path="/StudentAdd" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}