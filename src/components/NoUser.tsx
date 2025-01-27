const NoUser = () => {
  return (
    <div className="flex flex-col bg-gray-100 shadow-lg mx-auto w-80 h-80 p-6 rounded-lg justify-center items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Nenhum usuário encontrado.
      </h2>
      <p className="text-center text-sm text-gray-600">
        Verifique se o nome do usuário está correto.
      </p>
    </div>
  );
};

export default NoUser;
