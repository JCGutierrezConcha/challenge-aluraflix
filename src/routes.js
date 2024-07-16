import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Inicio from './pages/Inicio';
import NuevoVideo from './pages/NuevoVideo';
import NoEncontrada from './pages/NoEncontrada';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="nuevo-video" element={<NuevoVideo />} />
                    <Route path="*" element={<NoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;