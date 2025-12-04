import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Team": Team,
    "Projects": Projects,
    "Updates": Updates,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};