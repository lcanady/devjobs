import { BrowserRouter as Router, Route } from "react-router-dom";
import ContextProvider from "./Context";
import Home from "./pages/Home";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </ContextProvider>
  );
}

export default App;
