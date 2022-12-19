import React from 'react';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="flex items-center gap-2 text-refubookBlue hover:text-refubookRed font-roboto p-4">
      <img src={logo} alt="" className="" />
      <h2 className="text-refubookBlue font-semibold"> Refubook</h2>
    </div>
  );
}

export default App;
