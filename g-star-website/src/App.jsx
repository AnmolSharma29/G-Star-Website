import "./App.css";
import Header from "./components/Header";
import NavigationArea from "./components/NavigationArea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white mx-auto" style={{ maxWidth: 960 }}>
      <Header />
      <NavigationArea />
      <Footer />
    </div>
  );
}

export default App;
