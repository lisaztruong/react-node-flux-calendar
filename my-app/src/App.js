// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
// export default App;

var React = require('react');
var SlotApp=require('./components/SlotApp.js');

var App = React.createClass({
    render: function() {
        return (
            <html>
                <head lang="en">
                    <base href="/"/>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>React Slot app</title>
                    <link href="css/bootstrap.css" rel="stylesheet"/>
                    <link href="css/app.css" rel="stylesheet"/>
                </head>
                <body>
                    <SlotApp/>
                    <script type="text/javascript" src="/js/browserify/bundle.js"></script>
                    <script src="js/bootstrap.js"></script>
                </body>
            </html>
        )
    }
});

module.exports=App;
