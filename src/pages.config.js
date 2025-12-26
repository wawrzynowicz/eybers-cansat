import Home from './pages/Home';
import MuonInfo from './pages/MuonInfo';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "MuonInfo": MuonInfo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};