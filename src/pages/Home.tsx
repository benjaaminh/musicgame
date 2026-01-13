import { Link } from "react-router-dom";

const Home = () => {
return (
    <main>
      <h1>Music QR Game</h1>
      <nav>
        <ul>
          <li><Link to="/generate">Generate Cards</Link></li>
          <li><Link to="/scan">Scan Card</Link></li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;