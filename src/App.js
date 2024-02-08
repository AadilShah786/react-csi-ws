// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import DataFetcher from './useeffect';
import IncrementEffect from './useeffect2';
import RouteEg from './route1';
import Prop from './prop';
import Pdrill1 from './pdrill1';
import Uceg from './usecontexteg';
function App() {
  return (
    <div className="App" >
      {/* <Prop message="this is prop example"/>  props example */}
      {/* <Counter/> usestate example */}
      {/* <DataFetcher/> useeffect api example */}
      {/* <IncrementEffect/> useeffect increment example */}
      {/* <RouteEg/>  route example */}
      <Pdrill1 message="this is drilling"/>
    </div>
  );
}

export default App;











// import './App.css';
// import Counter from './Counter';
// import DataFetcher from './useeffect';
// import IncrementEffect from './useeffect2';
// import RouteEg from './route1';
// import Prop from './prop';
// import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
// import { useState } from 'react';


// function App() {
//   return (
//     <BrowserRouter className="App">
// <Routes>
//   <Route path='/' exact Component={Counter}></Route>
//   <Route path='/prop'  Component={Prop}></Route>
//   <Route path='/datafetcher'  Component={DataFetcher}></Route>
//   <Route path='/incrementeffect'  Component={IncrementEffect}></Route>
// </Routes>

//       {/* <Prop/>  props example */}
//       {/* <Counter/> usestate example */}
//       {/* <DataFetcher/> useeffect api example */}
//       {/* <IncrementEffect/> useeffect increment example */}
//       {/* <RouteEg/>  route example*/}
   
//     </BrowserRouter>
//   );
// }

// export default App;
