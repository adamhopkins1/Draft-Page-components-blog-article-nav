import './index.css';
import './SCSS/footer.css';
import React from 'react';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Article from './components2/Article';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Blog/>
      <Footer/>
      <Article/>
    </div>
  );
}

export default App;