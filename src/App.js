import Login from './routes/Login'
// import Register from './views/Register'
// import Index from './views/Index'
// import Anchormachines from './views/anchormachines'
import Dashboard from './routes/Dashboard'
import Machines from './routes/Machines'
import AddMachines from './routes/AddMachine'
import { Router, Switch, Route } from 'react-router-dom'
import { AuthProtectedRoute, NonAuthProtectedRoute } from './services/protectRoutes'
import { appHistory } from './services/routeHistory'

function App () {
  return (
    <Router history={appHistory}>
      <section>
        <Switch>
          <Route path='/login' exact component={Login} />
          {/* <NonAuthProtectedRoute path='/register' exact component={Register} />
          <AuthProtectedRoute path='/' exact component={Index} />
          <AuthProtectedRoute path='/anchormachines' exact component={Anchormachines} />
          <AuthProtectedRoute path='/dashboard' exact component={Dashboard} />
          <AuthProtectedRoute path='/machines' exact component={Machines} />
          <AuthProtectedRoute path='/addmachine' exact component={AddMachines} /> */}
          <AuthProtectedRoute path='/dashboard' exact component={Dashboard} />
          <AuthProtectedRoute path='/machines' exact component={Machines} />
          <AuthProtectedRoute path='/addmachine' exact component={AddMachines} />
          <Route path='*' component={Login} />
        </Switch>
      </section>
    </Router>
  )
}

export default App