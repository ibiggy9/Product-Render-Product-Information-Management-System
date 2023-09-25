import {Routes, Route, useLocation } from 'react-router-dom'
import Login from './Components/Pages/Login';
import HomeManufacturer from './Components/Pages/HomeManufacturer'
import {AnimatePresence} from 'framer-motion'
import AddProduct from './Components/Pages/AddProduct';
import UpdateContent from './Components/Pages/UpdateContent';
import UpdateUpc from './Components/Pages/UpdateUpc';
import Catalog from './Components/Pages/Catalog';
import EditProduct from './Components/Pages/EditProduct';
import RetailSubmit from './Components/Pages/RetailSubmit';
import BrandPage from './Components/Pages/BrandPage';
import SubBrandPage from './Components/Pages/SubBrandPage';
import SystemSettings from './Components/Pages/SystemSettings';
import Help from './Components/Pages/Help';
import RHome from './RetailerPortal/Pages/RHome';
import WebhookPage from './RetailerPortal/Pages/WebhookPage';
import Trigger from './RetailerPortal/Pages/Trigger';
import Logs from './RetailerPortal/Pages/Logs'
import {AuthProvider} from './Components/Context/AuthContext';
import PrivateRoute from './Components/BasicFunctions/PrivateRoute';
import ErrorPage from './Components/Pages/ErrorPage';
import RtdbUser from './Components/devUtil/RtdbUser';
import { SupplierProvider } from './Components/Context/SupplierContext';
import { UpcProvider } from './Components/Context/VerifiyUpcContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const location = useLocation();
  const client = new QueryClient();
  return (
    <div >
      <QueryClientProvider client={client}>
      <AuthProvider>
      <UpcProvider>
      <SupplierProvider>
      
      <AnimatePresence exit> 
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<PrivateRoute><Catalog /></PrivateRoute>} />
        <Route path="/retailSelect" element={<PrivateRoute><RetailSubmit /></PrivateRoute>} />
        <Route path="/updateContent" element={<PrivateRoute><UpdateContent /></PrivateRoute>} />
        <Route path="/updateUpc" element={<PrivateRoute><UpdateUpc /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute><HomeManufacturer /></PrivateRoute>} /> 
        <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} /> 
        <Route path="/home/manufacturer" element={<PrivateRoute><HomeManufacturer /></PrivateRoute>} /> 
        <Route path="/EditProduct" element={<PrivateRoute><EditProduct /></PrivateRoute>} /> 
        <Route path="/BrandPage" element={<PrivateRoute><BrandPage/></PrivateRoute>} /> 
        <Route path="/subBrandPage" element={<PrivateRoute><SubBrandPage/></PrivateRoute>} /> 
        <Route path="/settings" element={<PrivateRoute><SystemSettings/></PrivateRoute>} /> 
        <Route path="/Help" element={<PrivateRoute><Help /></PrivateRoute>} /> 
        <Route path="/retailer/home" element={<PrivateRoute><RHome /></PrivateRoute>} /> 
        <Route path="/retailer/webhooks" element={<PrivateRoute><WebhookPage /></PrivateRoute>} /> 
        <Route path="/retailer/trigger" element={<PrivateRoute><Trigger/></PrivateRoute>} /> 
        <Route path="/retailer/logs" element={<PrivateRoute><Logs/></PrivateRoute>} /> 
        <Route path="/*" element={<PrivateRoute><ErrorPage/></PrivateRoute>} /> 
        <Route path="/utils" element={<PrivateRoute><RtdbUser/></PrivateRoute>} /> 
      </Routes>
      </AnimatePresence>
      
      </SupplierProvider>
      </UpcProvider>
      </AuthProvider>
      </QueryClientProvider>
    </div>   
    
  );
}

export default App;
