import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([{
    id: 2,
    name: "Murasli"
  }]);
  const [error, setError] = useState(``);
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) =>setGames(res.data.results))
      .catch((err) => setError(err.meessage));
  },[]);
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}

      </ul>
    </>
  );
};

export default GameGrid;
