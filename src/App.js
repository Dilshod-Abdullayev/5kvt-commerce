import './App.css';
import 'antd/dist/antd.css'
import Main from './components/common/Main/Main';
function App() {
  const style = {
    maxWidth: '1368px',
    margin: '0 auto'
  }
  return (
    <div style={style} className="App">
      <Main />
    </div>
  );
}

export default App;
