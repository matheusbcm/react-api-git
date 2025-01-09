const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl text-white text-center mt-40">GitHub Finder</h1>
      <form
        action=""
        className="bg-slate-300 rounded-lg flex flex-col gap-3 p-5 justify-center items-center text-center w-1/3 mt-10"
      >
        <h2 className="text-2xl text-zinc-800">Busque por um usuário:</h2>
        <p className="text-gray-500">Conheça seus melhores repositórios</p>
        <div className="flex">
          <input type="text" placeholder="" className="rounded-md mr-3" />
          <button className="bg-zinc-700 p-2 rounded-lg "></button>
        </div>
      </form>
    </div>
  );
};

export default Form;
