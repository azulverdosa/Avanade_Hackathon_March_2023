import Chart from './components/Chart';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <main className="App">
      {/* <header className="App-header">
        <p>Welcome to your App 🙊 🙉 🙈</p>
        <p>Avanade Hackathon 🎉</p>
      </header> */}
      <Dashboard />
      <div>
        <NavBar />
      </div>
    </main>
  );
}

export default App;
