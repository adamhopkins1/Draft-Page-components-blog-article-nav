import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import React, {Component} from 'react';
import './index.css';
import './SCSS/footer.css';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Article from './components2/Article';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="header">
              <li>
                <Link to="Nav">Nav</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/footer">Footer</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='Nav' element={< Nav />}></Route>
                 <Route exact path='/blog' element={< Blog />}></Route>
                 <Route exact path='/footer' element={< Footer />}></Route>
                 <Route exact path='/article' element={< Article />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}

export default App;