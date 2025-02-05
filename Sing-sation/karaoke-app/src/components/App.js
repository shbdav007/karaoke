import KaraokeApp from "./components/KaraokeApp";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Karaoke App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-6">Welcome to the Karaoke World!</h2>
          
          <div className="flex justify-center mb-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
              Start Singing
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Explore our extensive song catalog, record your voice, and share your performances with friends!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Karaoke App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
