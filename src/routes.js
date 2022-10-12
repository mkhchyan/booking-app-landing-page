import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import MainHOC from './HOC';
import Rooms from './pages/Rooms';


function Router() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<MainHOC />}>
          <Route path="" element={<Home />} />
         {/* <Route path='/rooms' element={<Rooms />} /> */}

          {/* <Route path="*" element={<NotFound404 />} /> */}
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default Router;