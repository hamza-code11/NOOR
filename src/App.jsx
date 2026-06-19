import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './pages/web/Home'
import Navbar from './components/web/web_layout/Navbar'
import Footer from './components/web/web_layout/Footer'


// Collection 
import WomenCollection from './pages/collections/WomenCollection';
import MenCollection from './pages/collections/MenCollection';
import TeensCollection from './pages/collections/TeensCollection';

import JewelryCollection from './pages/collections/JewelryCollection';
import PerfumeCollection from './pages/collections/PerfumeCollection';
import LingerieCollection from './pages/collections/LingerieCollection';
import ShoesCollection from './pages/collections/ShoesCollection';
import BagsCollection from './pages/collections/BagsCollection';



// Product Page 
import MensAsianCollection from './pages/ProductPage/MensAsianCollection';
import WomenAsianCollection from './pages/ProductPage/WomenAsianCollection';
import TeensProducts from './pages/ProductPage/TeensProducts';
import JewelryProducts from './pages/ProductPage/JewelryProducts';




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
        <Route path="/men-collection" element={<MenCollection />} />
        <Route path="/women-collection" element={<WomenCollection />} />
        <Route path="/teens-collection" element={<TeensCollection />} />
        <Route path="/jewelry-collection" element={<JewelryCollection />} />
        <Route path="/perfume-collection" element={<PerfumeCollection />} />
        <Route path="/lingerie-collection" element={<LingerieCollection />} />
        <Route path="/shoes-collection" element={<ShoesCollection />} />
        <Route path="/bags-collection" element={<BagsCollection />} />

        <Route path="/mens-asian-collection" element={<MensAsianCollection />} />
        <Route path="/women-asian-collection" element={<WomenAsianCollection />} />
        <Route path="/teens-products" element={<TeensProducts />} />
        <Route path="/jewelry-products" element={<JewelryProducts />} />



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
