
import store from './Redux /store';
import { Body } from './components/Body';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store} >
   <Body/>
   </Provider>
  );
}

export default App;
