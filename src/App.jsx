import React from 'react';
import NavBar from './Pages/features/nav-bar/NavBar';
import Footer from './Pages/features/footer/Footer';
import './App.css'; // Make sure to import your CSS file

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
