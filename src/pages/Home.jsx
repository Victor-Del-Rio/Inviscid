const Home = () => {
  return (
    <main className="home">
      <span className="badge">Inviscid</span>
      <h1>Your website's health at a glance</h1>
      <p>
        Monitor uptime, track performance, and know when something goes wrong.
      </p>
      <button className="cta" onClick={() => alert("Hello!")}>
        Get Started
      </button>
    </main>
  );
};
export default Home;
