// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Props1 from './propsBlock/Props1';
import Props2 from './propsBlock/Props2';
// import Props3 from './propsBlock/Props3';
// import Props4 from './propsBlock/Props4';
import StateManage from './StateManagement';
import ClickEvent from './ClickEvent';
import EventListener from './EventListener';
import FormChange from './FormChange';
import MapMethod from './MapMethod';
import FetchData from './FetchData';
import PostMethod from './PostMethod';


const user = {
  name: 'Anand',
  mob: 7337229774,
  email: 'anand@gmail.com',
  city: 'Vizag',
  des: 'FrontEnd Developer'
}

function App() {
  return (
    <div className="App">
      {/* <Props1 name={user} />
      <Props2 name={user} /> */}
      {/* <Props3 name="Mohan" />
      <Props4 name="Kumar" /> */}
      {/* <StateManage /> */}
      {/* <ClickEvent /> */}
      {/* <EventListener/> */}
      {/* <FormChange/> */}
      {/* <MapMethod/> */}
      {/* <FetchData/> */}
      <PostMethod/>
    </div>
  );
}

export default App;
