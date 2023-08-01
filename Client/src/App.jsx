import { BrowserRouter, Routes, Route } from "react-router-dom";

import EvaluationPage from "./pages/evaluation/evaluationPage.jsx";
import RecordPage from "./pages/record/RecordPage";
import NotificationPage from "./pages/notification/NotificationPage";
import InventoryPage from "./pages/inventory/inventory.jsx";
import HomePage from "./pages/home/homePage";


function App(){
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<HomePage/>} />
        <Route path='/evaluation' element={<EvaluationPage/>} />
        <Route path='/inventory' element={<InventoryPage />} />
        <Route path='/notification' element={<NotificationPage />} />
        <Route path='/record' element={<RecordPage />} />
        <Route path='/user' element={<h1> Usuario </h1>} />
        <Route path='/analysis' element={<h1> Analisis </h1>} />
        <Route path='/supportAlert' element={<h1> Solicitud de equipo extra </h1>} />
      </Routes>
    </BrowserRouter>  
  );
}     

export default App;
