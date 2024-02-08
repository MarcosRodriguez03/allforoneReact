import logo from './logo.svg';
import './App.css';
import HomePageComponents from './components/HomePageComponents';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageTwoComponent from './components/PageTwoComponent';
import PageThreeComponent from './components/PageThreeComponent';
import PageFourComponent from './components/PageFourComponent';
import PageFiveComponent from './components/PageFiveComponent';
import PageSixComponent from './components/PageSixComponent';
import PageSevenComponent from './components/PageSevenComponent';
import PageEightComponent from './components/PageEightComponent';
import PageNineComponent from './components/PageNineComponent';
import PageTenComponent from './components/PageTenComponent';
import PageElevenComponent from './components/PageElevenComponent';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponents />} />
        <Route path="PageTwo" element={<PageTwoComponent />} />
        <Route path="PageThree" element={<PageThreeComponent />} />
        <Route path="PageFour" element={<PageFourComponent />} />
        <Route path="PageFive" element={<PageFiveComponent />} />
        <Route path="PageSix" element={<PageSixComponent />} />
        <Route path="PageSeven" element={<PageSevenComponent />} />
        <Route path="PageEight" element={<PageEightComponent />} />
        <Route path="PageNine" element={<PageNineComponent />} />
        <Route path="PageTen" element={<PageTenComponent />} />
        <Route path="PageEleven" element={<PageElevenComponent />} />

      </Routes>
    </BrowserRouter>

    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link bg-red-500"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
