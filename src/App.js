import './App.css';
import DashboardMaincontent from './components/DashboardMaincontent';
import Rightcontent from './components/Rightcontent';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <div className='dashboard-layout'>
        <Sidebar />
        <DashboardMaincontent />
        <Rightcontent />
      </div>
    </div>
  );
}

export default App;
