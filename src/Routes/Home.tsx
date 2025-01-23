import Search from "../components/Search";
import { UserProps } from "../types/UserProps";
import { useState } from "react";
import User from "../components/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();

    const { login, avatar_url, location, followers, following } = data;

    const userData: UserProps = {
      login,
      avatar_url,
      location,
      followers,
      following,
    };
    setUser(userData);
    // console.log(user);
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-5xl text-white font-bold mb-6">Git Hub Finder</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col bg-gray-100 shadow-lg mx-auto w-80 p-6 rounded-lg justify-center items-center gap-4 mb-6"
      >
        <Search loadUser={loadUser} />
      </form>
      <div className="bg-white w-80 h-80 mx-auto rounded-lg">
        {user && <User {...user} />}
      </div>
    </div>
  );
};

export default Home;
