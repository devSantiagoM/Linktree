
import Hero from './components/hero';
import Footer from './components/footer';
import Squares from './components/ui/square';
import './App.css'



function App() {
  return (
    <main className='relative w-full min-h-screen bg-black'>
      {/* Fondo de squares */}
      <div className="absolute inset-0 z-0 ">
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="#222"
          hoverFillColor="#ec4899"
          squareSize={50}
        />
      </div>
      <Hero />
      <Footer />
    </main>

  );
}

export default App
