import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'

import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  // console.log("App pained");

  return (
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <ClockTime/>
    </center>
  )
}

export default App
