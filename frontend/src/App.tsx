import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { PagePreloader } from './components/Studio';
import HomePage from './pages/HomePage';
import MomentsPage from './pages/MomentsPage';
import MomentDetailPage from './pages/MomentDetailPage';
import AnniversariesPage from './pages/AnniversariesPage';
import AnniversaryDetailPage from './pages/AnniversaryDetailPage';
import GalleryPage from './pages/GalleryPage';
import AlbumPage from './pages/AlbumPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

// 原型页单独分块：GSAP 只在这条路由被访问时才下载，不拖累站点首屏。
const KprPrototypePage = lazy(() => import('./pages/KprPrototypePage'));

export default function App() {
  return (
    <>
      <PagePreloader />
      <Routes>
        <Route
          path="/prototype/kpr"
          element={
            <Suspense fallback={null}>
              <KprPrototypePage />
            </Suspense>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/moments" element={<MomentsPage />} />
          <Route path="/moments/:slug" element={<MomentDetailPage />} />
          <Route path="/anniversaries" element={<AnniversariesPage />} />
          <Route path="/anniversaries/:id" element={<AnniversaryDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<AlbumPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
