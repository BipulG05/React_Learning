import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTiime'

import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <ClockTime/>
    </center>
  )
}

export default App
