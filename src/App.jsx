// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';

const App = () => {
  const styles = {
    container: {
      backgroundColor: '#FFF0F5',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: "'Arial', sans-serif",
    },
    header: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#FFB6C1',
      borderRadius: '10px',
      marginBottom: '2rem',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      listStyle: 'none',
      padding: '1rem 0',
    },
    section: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '10px',
      margin: '2rem 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    projectCard: {
      backgroundColor: '#FFE4E1',
      padding: '1.5rem',
      borderRadius: '8px',
      margin: '1rem 0',
    },
    footer: {
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#FFB6C1',
      borderRadius: '10px',
      marginTop: '2rem',
    },
    link: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontWeight: '600',
      padding: '0.5rem 1rem',
    },
    heading: {
      color: '#FF69B4',
      margin: '1rem 0',
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={{ color: 'white', margin: 0, fontSize: '2.5rem' }}>Sarita Sapkota</h1>
        <nav>
          <ul style={styles.nav}>
            <li><a href="#about" style={styles.link}>About</a></li>
            <li><a href="#projects" style={styles.link}>Projects</a></li>
            <li><a href="#contact" style={styles.link}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          Hello! I'm a creative developer passionate about building beautiful web experiences. 
          With 2 years of experience in front-end development, I love turning ideas into reality.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>My Work</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={styles.projectCard}>
            <h3 style={{ color: '#FF69B4', margin: '0 0 0.5rem 0' }}>E-Commerce Platform</h3>
            <p style={{ color: '#666' }}>A full-stack shopping platform built with React and Node.js</p>
          </div>
          <div style={styles.projectCard}>
            <h3 style={{ color: '#FF69B4', margin: '0 0 0.5rem 0' }}>Portfolio Builder</h3>
            <p style={{ color: '#666' }}>Interactive tool for creating professional portfolios</p>
          </div>
          <div style={styles.projectCard}>
            <h3 style={{ color: '#FF69B4', margin: '0 0 0.5rem 0' }}>Task Manager</h3>
            <p style={{ color: '#666' }}>Productivity app with real-time collaboration features</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <h2 style={{ ...styles.heading, color: 'white', margin: 0 }}>Let's Connect</h2>
        <div style={{ marginTop: '1rem' }}>
          <p style={{ color: 'white', margin: '0.5rem 0' }}>📧 hello@example.com</p>
          <p style={{ color: 'white', margin: '0.5rem 0' }}>📱 +1 (234) 567-890</p>
        </div>
      </footer>
    </div>
  );
};

export default App;