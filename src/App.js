import {Route, Switch} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <div className="bg-container">
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
