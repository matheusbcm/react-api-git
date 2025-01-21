import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2 className="text-2xl text-zinc-800">Busque por um usuário:</h2>
      <p className="text-gray-500">Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
