import Search from "../components/Search";
import { User } from "../types/User";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    const data = await response.json();

    const { login, avatar_url, location, followers, following } = data;

    const userData = {
      login,
      avatar_url,
      location,
      followers,
      following,
    };
    setUser(userData);
    console.log(user);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  );
};

export default Home;
