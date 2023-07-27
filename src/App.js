import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import Footer from './components/Footer';
import store from './constants/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Sidebar />
        <div className="content">
          <FormInput />
          <Map />
          <RegionInfo />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
