import '../styles/App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/quiz' element={ <Quiz /> } />
          <Route path='/results' element={ <Result /> } />
          <Route path='*' element= { <h1>Not Found</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
