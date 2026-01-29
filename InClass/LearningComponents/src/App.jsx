// export default function App() {
//   return (
//     <div>
//       <h1>First Component</h1>
//       <Fruits />     {/*self-closing tag */}
//       <Color />      {/*normal tag */}
//       <h1>Title</h1>
//       <p>Description</p>
//     </div>
//   );
// }

// function Fruits() {
//   return <h1>Apple</h1>;
// }

// function Color() {
//   return <h1>Red Color</h1>;
// }

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", gap: "20px" }}>
        <Home />
        <About />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
