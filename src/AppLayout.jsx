import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Newsletter from './Components/Newsletter';


const AppLayout = () => {
  return (
    <>
      <Navbar />
    
      <main>
        <Outlet />
      </main>
      <Newsletter/>
      <Footer/>
    
    </>
  );
};

export default AppLayout;