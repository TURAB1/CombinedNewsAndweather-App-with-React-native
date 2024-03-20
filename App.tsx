import { Provider } from "react-redux";
import {store} from './redux/store';
import MainNews from "./MainNews";
 
 function App(){
    return(
      <Provider store={store} >
        <MainNews/>
      </Provider>
    )
  }

 export default App; 