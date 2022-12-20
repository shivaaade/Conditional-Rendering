// import {Component} from 'react'

// import Welcome from './components/Welcome'

// import './App.css'

// // using Ternary Operators

// // class App extends Component {
// //   state = {
// //     isLoggedIn: false,
// //   }

// //   render() {
// //     const {isLoggedIn} = this.state
// //     return (
// //       <div className="container">
// //         <Welcome greeting="Hello" name="User" />
// //         {isLoggedIn ? <button>Login</button> : <button>Logout</button>}
// //       </div>
// //     )
// //   }
// // }

// using logical && operator

// // class App extends Component {
// //   state = {
// //     isLoggedIn: true,
// //   }

// //   render() {
// //     const {isLoggedIn} = this.state
// //     return (
// //       <div className="container">
// //         <Welcome greeting="Hello" name="User" />
// //         {isLoggedIn && <button>Login</button>}
// //         {!isLoggedIn && <button>Logout</button>}
// //       </div>
// //     )
// //   }
// // }
// // class App extends Component {
// //   state = {
// //     isLoggedIn: false,
// //   }

// using element variables

// //   render() {
// //     const {isLoggedIn} = this.state
// //     let authButton
// //     if (isLoggedIn === true) {
// //       authButton = <button>Login</button>
// //     } else {
// //       authButton = <button>Logout</button>
// //     }
// //     return (
// //       <div className="container">
// //         <Welcome greeting="Hello" name="User" />
// //         {authButton}
// //       </div>
// //     )
// //   }
// // }

// //   renderAuthButton = () => {
// //     const {isLoggedIn} = this.state
// //     if (isLoggedIn === true) {
// //       return <button>Login</button>
// //     }
// //     return <button>Logout</button>
// //   }
// class App extends Component {
//   state = {isLoggedIn: true}

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }
//   render() {
//     return (
//       <div className="container">
//         <Welcome greeting="Hello" name="User" />
//         {this.renderAuthButton()}
//       </div>
//     )
//   }
// }

// export default App

// using an if else statements

import {Component} from 'react'

import './App.css'

import Welcome from './components/Welcome'

class App extends Component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App
