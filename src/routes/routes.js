import config from '~/config';

import Home from '~/pages/Home';
import Catalog from '~/pages/Catalog';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.product, component: Product },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.cart, component: Cart },
];
