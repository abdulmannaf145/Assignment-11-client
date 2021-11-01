import { BrowserRouter ,Switch, Route} from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AddService from './components/AddService/AddService';
import BookingShows from './components/BookingShows/BookingShows';
import Contact from './components/Contact/Contact';
import DashBord from './components/DashBoard/DashBord';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import UserUpdate from './components/UserUpdate/UserUpdate';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBord></DashBord>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/addservice'>
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/users/update/:id">
              <UserUpdate></UserUpdate>
          </PrivateRoute>
          <PrivateRoute path="/booking">
              <BookingShows></BookingShows>
          </PrivateRoute>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
