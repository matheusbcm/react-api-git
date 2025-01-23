import { BsSearch } from "react-icons/bs";
import { useState } from "react";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState("");
  // ONKEYDOWN FUNCTION
  // const onKeyDown = (e: KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     loadUser(userName);
  //   }
  // };
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-gray-800">
        Busque por um usuário:
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Conheça seus melhores repositórios
      </p>
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => loadUser(userName)}
          className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 flex items-center justify-center"
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
