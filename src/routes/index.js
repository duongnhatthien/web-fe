import HomePage from '../pages/Home/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import OrderPage from '../pages/Order/OrderPage';
import ProductPage from '../pages/Product/ProductPage';
import ProductDetailPage from '../pages/ProductDetail/ProductDetailPage';
import TypeProductPage from '../pages/TypeProduct/TypeProductPage';
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/product-details',
        page: ProductDetailPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
];
