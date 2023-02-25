import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="p-12 bg-gradient-to-t from-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-medium flex justify-center items-center">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
