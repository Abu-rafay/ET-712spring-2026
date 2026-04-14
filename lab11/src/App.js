import './App.css';
import lake from "./images/for.jpg"
function App() {
  return (
    <div>
      <h1 style={{color: "olive", textAlign: 'center'}}>Aburafay</h1>
      <h2 className='subtitle'>Javascript XML</h2>
      <p>There is teo types of components in ReactJS:</p>
      <ul>
        <li>functions</li>
        <li>Class</li>
      </ul>
      <figure className='introimg'>
        <img src={lake} />
      </figure>
      <footer className='footer'>
        Introduction to ReactJS @ Aburafay - 2026

      </footer>

    </div>
  );
}

export default App;
