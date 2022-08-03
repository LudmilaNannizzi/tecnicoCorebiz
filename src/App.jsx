import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
