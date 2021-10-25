import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import './index.css'

class App extends React.Component {
  render() {
    return (
    <div>
     <Header />
     <Content />
     <Footer />
     </div>
  );
 }
}

export default App;
