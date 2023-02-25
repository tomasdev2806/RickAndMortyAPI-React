import { useEffect, useState } from "react";
import Character from "./Character";
import { UilArrowRight, UilArrowLeft } from "@iconscout/react-unicons";

function NavPage(props) {
  const isFirstPage = props.page === 1;
  const isLastPage = props.page === 42;

  return (
    <header className="flex justify-between text-lg w-auto h-28 pl-10 pr-10">
      <button className="hover:text-gray-500 w-20 p-1 "
        onClick={() => props.setPage(props.page - 1)}
        disabled={isFirstPage}
      >
        Page {props.page} <br />
        Back <UilArrowLeft size="20" />
      </button>
      <button className="hover:text-gray-500 w-20 p-1 "
        onClick={() => props.setPage(props.page + 1)}
        disabled={isLastPage}
      >
        Page {props.page + 1} <br />
        Back <UilArrowRight size="20" />
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div>
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="mx-20 grid grid-cols-1 lg:grid-cols-4 gap-7">
          {characters.map((character) => {
            return (
              <div key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
