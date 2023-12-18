import "./App.css";
import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <SubjectList /> */}
    </div>
  );
}

export default App;
