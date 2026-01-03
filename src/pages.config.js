import Home from './pages/Home';
import ameliaMroz from './pages/amelia-mroz';
import erykFrackowiak from './pages/eryk-frackowiak';
import lukaFrench from './pages/luka-french';
import maciejWawrzynowicz from './pages/maciej-wawrzynowicz';
import piotrSokolski from './pages/piotr-sokolski';
import piotrSulikowski from './pages/piotr-sulikowski';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "amelia-mroz": ameliaMroz,
    "eryk-frackowiak": erykFrackowiak,
    "luka-french": lukaFrench,
    "maciej-wawrzynowicz": maciejWawrzynowicz,
    "piotr-sokolski": piotrSokolski,
    "piotr-sulikowski": piotrSulikowski,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};