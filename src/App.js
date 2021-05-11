import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./context/user";
import Routes from "./routes";
import { GlobalStyle } from "./styles/globalStyle";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </Router>
  );
}

export default App;
