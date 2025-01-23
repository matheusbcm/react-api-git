import { UserProps } from "../types/UserProps";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className="flex flex-col bg-gray-100 shadow-lg mx-auto w-80 h-auto p-6 rounded-lg justify-center items-center gap-4">
      <img
        src={avatar_url}
        alt={login}
        className="w-24 h-24 rounded-full shadow-md"
      />
      <h2 className="text-lg font-bold text-gray-800">Usuario: {login}</h2>
      <p className="flex items-center text-sm text-gray-600 gap-1">
        <MdLocationPin className="text-blue-500" />
        <span className="flex items-center text-sm text-gray-600 gap-1">
          {location}
        </span>
      </p>
      <div className="flex justify-between w-full px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">Seguidores:</p>
          <p className="text-lg font-bold text-gray-800">{followers}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">Seguindo:</p>
          <p className="text-lg font-bold text-gray-800">{following}</p>
        </div>
      </div>
      <Link
        to={`/repos/${login}`}
        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Ver meus repositórios
      </Link>
    </div>
  );
};

export default User;
