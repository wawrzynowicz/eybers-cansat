import Home from './pages/Home';
import FileUploader from './pages/FileUploader';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "FileUploader": FileUploader,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};