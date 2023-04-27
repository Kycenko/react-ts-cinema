import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import {store} from "./store/store";


function App() {
return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
)

}

export default App
