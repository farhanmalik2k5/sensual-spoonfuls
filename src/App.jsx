import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import DessertPage from './pages/DessertPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Root layout — renders Navbar + ScrollToTop on every route.
 * The <Outlet /> renders the matched child route.
 */
function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  );
}

/**
 * Application Router
 * ──────────────────
 * Route structure:
 *
 *   /                      → HomePage  (hero + menu + contact)
 *   /desserts/:slug        → DessertPage  (dynamic, one template for all desserts)
 *   *                      → NotFoundPage (404)
 *
 * IMPORTANT:
 *   These routes use the HTML5 History API (createBrowserRouter).
 *   For direct URL access to work in production (e.g. /desserts/buttery-nipple),
 *   the hosting server MUST redirect all 404s back to index.html.
 *
 *   Netlify: public/_redirects  → /* /index.html 200
 *   Vercel:  public/vercel.json → rewrites
 *   Apache:  public/.htaccess   → mod_rewrite rules
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'nutrition/:slug',
        element: <DessertPage />,
      },
      {
        path: 'desserts/:slug',
        element: <DessertPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
