import './App.css';
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path={"/"} element={<Main />}/>
          <Route path={"/command"} element={<ChapterList />}/>
          <Route path={"/block"} element={<ChapterList />}/>
          <Route path={"/file"} element={<ChapterList />}/>
          <Route path="/command/:id" element={<Discription />} />
          <Route path="/block/:id" element={<Discription />} />
          <Route path="/file/:id" element={<Discription />} />
        </Routes>
      </BrowserRouter>
    </>
      
  );
}

export default App;
