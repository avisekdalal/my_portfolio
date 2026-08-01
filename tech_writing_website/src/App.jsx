import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import UserGuide from './pages/docs/UserGuide';
import ApiDocumentation from './pages/docs/ApiDocumentation';
import InstallationManuals from './pages/docs/InstallationManuals';
import WhitePapers from './pages/docs/WhitePapers';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact-me" element={<ContactMe />} />
        <Route path="docs" element={<Portfolio />} />
        <Route path="docs/user-guide" element={<UserGuide />} />
        <Route path="docs/api-documentation" element={<ApiDocumentation />} />
        <Route path="docs/installation-manuals" element={<InstallationManuals />} />
        <Route path="docs/white-papers" element={<WhitePapers />} />
      </Route>
    </Routes>
  );
}
