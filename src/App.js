import { GlobalStyle } from "./style/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import UserProvider from "./context/user";

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </UserProvider>
  );
}

export default App;
