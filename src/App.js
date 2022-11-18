import './App.css';
import { Routes, Route} from 'react-router-dom'
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import News from './components/News/News';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  return (
    <div >
      <Menu/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Table' element={<Table/>}/>

      </Routes>
    </div>
  );
}

export default App;
