import Main from "./pages/main";

import Add_pet from "./pages/add_pet";


import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={'add_pet'} element={<Add_pet/>}/>



      </Routes>
    </div>
  );
}

export default App;
