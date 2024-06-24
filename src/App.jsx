import "./App.css";
import { AppProvider } from "./AppContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <div className="px-4">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
