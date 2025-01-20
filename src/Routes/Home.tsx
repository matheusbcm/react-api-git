import Search from "../components/Search";
import { useState } from "react";
import User from "../types/Types";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white text-center mt-40">GitHub Finder</h1>
      <form
        action=""
        className="bg-slate-300 rounded-lg flex flex-col gap-3 p-5 justify-center items-center text-center w-1/3 mt-10"
      >
        <Search loadUser={loadUser} />
      </form>
    </div>
  );
};

export default Home;
