const MyUsersProfileCard = ({ user, onClose }) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("pt-PT", dateOptions).format(
    new Date(user.createdAt)
  );
  return (
    <div className="fixed inset-0 flex items-center justify-center px-4 py-6 bg-gray-900 bg-opacity-75">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-600 rounded-lg shadow-xl p-6">
        <div className="flex items-center justify-between pb-3">
          <h2 className="text-2xl font-bold text-gray-200">{user.username}</h2>
          <button className="text-gray-600 font-bold text-xl" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Função:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.roles}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Email:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.email}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Idade:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.idade}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Peso:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.peso}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Altura:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.altura}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">Sexo:</label>
          <p className="text-gray-400 font-bold text-lg my-2">{user.sexo}</p>
        </div>
        <div className="py-3 border-b border-gray-400">
          <label className="text-gray-300 font-bold text-lg">
            Data de Assinatura:
          </label>
          <p className="text-gray-400 font-bold text-lg my-2">
            {formattedDate}
          </p>
        </div>
        <div className="py-3">
          <button
            className="bg-red-500 opacity-70 py-1 px-4 rounded-full hover:opacity-100 hover:scale-105 transition ease-in-out duration-300 text-white font-bold"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyUsersProfileCard;
