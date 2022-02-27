import {Routes, Route} from 'react-router-dom'

import Layout from './Layout/Layout';
import Course from './Pages/Course';
import About from './Pages/About';

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/course' element={<Course/>}/>
            <Route path='/about' element={<About/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
