import { Provider } from "react-redux";
import {store} from './redux/store';
import MainApp from "./MainApp";
 
 function App(){
    return(
      <Provider store={store} >
        <MainApp/>
      </Provider>
    )
  }

 export default App; 