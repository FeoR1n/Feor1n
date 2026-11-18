import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import { PagePreloader } from './components/layout/PagePreloader';
import HomePage from './features/home/HomePage';
import MomentsPage from './features/moments/MomentsPage';
import MomentDetailPage from './features/moments/MomentDetailPage';
import GalleryPage from './features/gallery/GalleryPage';
import AlbumPage from './features/gallery/AlbumPage';
import AnniversariesPage from './features/anniversaries/AnniversariesPage';
import AnniversaryDetailPage from './features/anniversaries/AnniversaryDetailPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <PagePreloader />
      <Routes>
        <Route element={<SiteLayout />}>
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
