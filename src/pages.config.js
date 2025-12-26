import Home from './pages/Home';
import Documentation from './pages/Documentation';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Documentation": Documentation,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};