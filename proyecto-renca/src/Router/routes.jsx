import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute';


import RutaAprendizaje from "../Views/RutaAprendizaje";
import InformacionCursos from "../Views/InformacionCursos";
import CursosDispo from "../Views/CursosDispo";
import PreguntasFrecuentes from "../Views/PreguntasFrecuentes";
import LoginRegistro from "../Views/LoginRegistro";
import ContactoPag from "../Views/ContactoPag";
import AdmiPanelView from "../Views/AdmiPanelView";
import MiCursito from "../Views/MiCursito";
import AdmiPanelCurso from "../Views/AdmiPanelCurso";
import NavBarUser from "../Views/NavBarUser";
import AdmiPanelUsuarios from "../Views/AdmiPanelUsuarios";
import PerfilUser from "../Views/PerfilUser";






const router = createBrowserRouter([
  { path: "/", element: <RutaAprendizaje /> },
  { path: "/CursosDispo", element: <CursosDispo /> },
  { path: "/InformacionCursos", element: <InformacionCursos /> },
  { path: "/PreguntasFrecuentes", element: <PreguntasFrecuentes /> },
  { path: "/LoginRegistro", element: <LoginRegistro /> },
  { path: "/Contactopag", element: <ContactoPag /> },
  { path: "/AdmiPanelView", element: <AdmiPanelView /> },
  { path: "/MiCursito", element: <MiCursito /> },
  { path: "/AdmiPanelCurso", element: <AdmiPanelCurso /> },
  { path: "/AdmiPanelCurso", element: <AdmiPanelCurso /> },
  { path: "/NavBarUser", element: <NavBarUser /> },
  { path: "/AdmiPanelUsuarios", element: <AdmiPanelUsuarios/> },
  { path: "/PerfilUser", element: <PerfilUser/> },

  // { path: "/AdmiPanelCurso", element: <AdmiPanelCurso /> },
  


  // Utiliza ProtectedRoute para la ruta de Contactopag
  { path: "/Contactopag", element: <ProtectedRoute path="/Contactopag" element={<ContactoPag />} /> },
]);

export default router;
