import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import appStore from './redux/store'

function App() {

  return (
    <Provider store={appStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Post Manager
          </p>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
