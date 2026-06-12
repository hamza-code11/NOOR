import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './pages/web/Home'
import Navbar from './components/web/web_layout/Navbar'
import Footer from './components/web/web_layout/Footer'


// Collection 
import WomenCollection from './pages/collections/WomenCollection';
import MenCollection from './pages/collections/MenCollection';
import JewelryCollection from './pages/collections/JewelryCollection';
import PerfumeCollection from './pages/collections/PerfumeCollection';
import LingerieCollection from './pages/collections/LingerieCollection';
import ShoesCollection from './pages/collections/ShoesCollection';

// Product Page 
import WomenAsianCollection from './pages/ProductPage/WomenAsianCollection';
import MensAsianCollection from './pages/ProductPage/MensAsianCollection';



// ===== PUBLIC LAYOUT =====
function PublicLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


function App() {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/women-collection" element={<WomenCollection />} />
        <Route path="/women-asian-collection" element={<WomenAsianCollection />} />
        <Route path="/men-collection" element={<MenCollection />} />
        <Route path="/mens-asian-collection" element={<MensAsianCollection />} />
        <Route path="/jewelry-collection" element={<JewelryCollection />} />

        <Route path="/perfume-collection" element={<PerfumeCollection />} />
        <Route path="/lingerie-collection" element={<LingerieCollection />} />
        <Route path="/shoes-collection" element={<ShoesCollection />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} /> */}



        {/* <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route> */}

      </Route>



      {/* <Route path="/admin" element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Route> */}

    </Routes>
  )
}

export default App
