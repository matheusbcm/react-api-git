import { UserProps } from "../types/UserProps";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

interface IUserProps {
  user: UserProps;
}
const User: React.FC<IUserProps> = ({ user }) => {
  return (
    <div className="flex flex-col bg-gray-100 shadow-lg mx-auto w-80 h-80 p-6 rounded-lg justify-center items-center gap-2">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-24 h-24 rounded-full shadow-md"
      />
      <h2 className="text-lg font-bold text-gray-500">Usuário:</h2>
      <p className="text-lg font-bold text-gray-800 mt-[-10]">{user.login}</p>
      <div className="flex items-center text-sm text-gray-600 gap-1">
        {user.location === null ? (
          <div>
            <span className="flex items-center text-sm text-gray-600 gap-1">
              <p>Localização indisponível</p>
            </span>
          </div>
        ) : (
          <div>
            <span className="flex items-center text-sm text-gray-600 gap-1">
              <MdLocationPin className="text-blue-500" />
              {user.location}
            </span>
          </div>
        )}
      </div>
      <div className="flex justify-between w-full px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">Seguidores:</p>
          <p className="text-lg font-bold text-gray-800">{user.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500">Seguindo:</p>
          <p className="text-lg font-bold text-gray-800">{user.following}</p>
        </div>
      </div>
      <Link
        to={`https://github.com/${user.login}?tab=repositories`}
        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
      >
        Ver meus repositórios
      </Link>
    </div>
  );
};

export default User;
