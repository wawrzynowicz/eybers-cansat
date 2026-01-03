import Home from './pages/Home';
import erykFrackowiak from './pages/eryk-frackowiak';
import piotrSulikowski from './pages/piotr-sulikowski';
import maciejWawrzynowicz from './pages/maciej-wawrzynowicz';
import piotrSokolski from './pages/piotr-sokolski';
import ameliaMroz from './pages/amelia-mroz';
import lukaFrench from './pages/luka-french';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "eryk-frackowiak": erykFrackowiak,
    "piotr-sulikowski": piotrSulikowski,
    "maciej-wawrzynowicz": maciejWawrzynowicz,
    "piotr-sokolski": piotrSokolski,
    "amelia-mroz": ameliaMroz,
    "luka-french": lukaFrench,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};