function Character({ character }) {
  return (
    <div className="p-4 bg-gradient-to-t from-rose-400 to-rose-300 rounded-xl h-72 text-center">
      <h3>{character.name}</h3>
      <img
        className="border-solid border-2 border-black rounded-2xl"
        src={character.image}
        alt={character.name}
      />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
