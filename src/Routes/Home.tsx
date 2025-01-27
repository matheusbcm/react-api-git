import Search from "../components/Search";
import { UserProps } from "../types/UserProps";
import { useState } from "react";
import User from "../components/User";
import NoUser from "../components/NoUser";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<number | null | boolean>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (response.status === 404) {
      setUser(null);
      setError(true);
      return;
      // console.log(error);
    }

    const data = await response.json();
    console.log(data);
    const { login, avatar_url, location, followers, following } = data;

    const userData: UserProps = {
      login: login,
      avatar_url: avatar_url,
      location: location,
      followers: followers,
      following: following,
    };

    setUser(userData);
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
      <div>{user ? <User user={user} /> : error && <NoUser />}</div>
      {/* <div>{user ? <User user={user} /> : <NoUser />}</div> */}
    </div>
  );
};

export default Home;
