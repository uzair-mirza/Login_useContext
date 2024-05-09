import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-orange-500 p-4 text-white rounded-lg'>Project06</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
