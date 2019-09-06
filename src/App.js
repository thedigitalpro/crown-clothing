import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Monitor for auth state change
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // If user signs in, check if they are signing in
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Get back userRef

        // If document, listen for changes
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });

      }

      this.setState({currentUser: userAuth});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
