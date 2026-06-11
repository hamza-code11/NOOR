import { Routes, Route, Outlet } from 'react-router-dom'

import Home from './pages/web/Home'
import Navbar from './components/web_layout/Navbar'
import Footer from './components/web_layout/Footer'



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
