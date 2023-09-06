import './App.css'
import HelloWorld from './components/HelloWorld'
import NameInput from './components/NameInput'

function App() {
  return (
    <div className='App'>
     <div className="container">
       <NameInput />
       {/* <HelloWorld /> */}
     </div>
    </div>
  )
}

export default App
