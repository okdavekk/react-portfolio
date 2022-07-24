import React from 'react';
// import generatePath from 'react-router-dom';
import CreateRoot from "react-dom";
// import { BrowserRouter } from "react-router-dom";


import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"))

CreateRoot.render(<App />, document.getElementById('root'));

// root.render(
//     <React.StrictMode>
//     {/* <BrowserRouter> */}
//       <App />
//     {/* </BrowserRouter> */}
//   </React.StrictMode>
// );

// generatePath(<App />, document.getElementById('root'));
