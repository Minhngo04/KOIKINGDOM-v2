import {
    Routes,
    Route,
} from 'react-router-dom';
import App from './App';
import BookingPage from './Component/User/BookingPage.js';
import HomePage from './Component/User/HomePage.js'
import CustomTourPage from './Component/User/CustomTourPage.js';
import OrderKoiPage from './Component/User/OrderKoi.js';
const NotFound = () => {
    return (
        <div className='container mt-3 alert alert-danger'>
            404.Not found data with your current URL
        </div>
    )
}

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="available-tour" element={<BookingPage />} />
                    <Route path="custom-tour" element={<CustomTourPage />} />
                    <Route path="koiOrder" element={<OrderKoiPage />} />
                </Route>
            </Routes>
        </>
    )
}
export default Layout;