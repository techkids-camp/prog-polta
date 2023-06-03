import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Main from './components/Main';
import ChapterList from './components/ChapterList';
import Discription from './components/Discription';

function App() {
  return (
    <>
      <header className="w-100 shadow p-3">
          <h1 className="title-3">ぷろじーぽるた</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path={"/prog-polta"} element={<Main />}/>
          <Route path={"/prog-polta/command"} element={<ChapterList />}/>
          <Route path={"/prog-polta/block"} element={<ChapterList />}/>
          <Route path={"/prog-polta/file"} element={<ChapterList />}/>
          <Route path="/prog-polta/command/:id" element={<Discription />} />
          <Route path="/prog-polta/block/:id" element={<Discription />} />
          <Route path="/prog-polta/file/:id" element={<Discription />} />
        </Routes>
      </BrowserRouter>
    </>
      
  );
}

export default App;
