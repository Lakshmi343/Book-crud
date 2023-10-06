import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Book from "./routes/Book/book";
import About from "./routes/About/about";
import SingleBook from "./routes/Book/singleBook";
import CreateBook from "./routes/Book/createBook";
import EditBook from "./routes/Book/editBook";



function App() {
 
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={ <Book/> } />
        <Route path="/books/:slug" element={<SingleBook/>}></Route>
        <Route path="/createbook" element={<CreateBook/>}></Route>
        <Route path="/editbook/:slug" element={ <EditBook/> } />
      </Routes>
     <Footer/>
    </Router>
    </>
  )
}

export default App
