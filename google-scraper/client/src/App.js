import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  handleSubmit = (event) => {
    event.preventdefault();
  }

  render() {
    <div className="container" onSubmit={this.handlesubmit}>
      <form id="search-form" name="searchForm">
        <section>
          <input type="text" name="searchTerm" placeholder="Type here to get results and click the button">
          </input>
        </section>
        <section>
          <button>Search!</button>
        </section>
      </form>

    </div>
  }
}
export default App;
