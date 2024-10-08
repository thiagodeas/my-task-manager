import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Popup } from "../../components/Popup";

export const Register = () => {
  const [newUser, setNewUser] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/user", {
        username: newUser,
        password: newPassword,
      });

      setNewUser("");
      setNewPassword("");
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Erro ao cadastrar novo usuário", error);
    }
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-full w-full bg-cover bg-[url('/assets/bg-galaxy.jpeg')]">
      <div className="flex flex-col items-center justify-center w-[400px] h-[550px] rounded-l-2xl bg-white">
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <h1 className="text-main-title font-extrabold text-space-blue text-center">
            CygniTasks 🚀
          </h1>
          <h1 className="text-sec-title font-light text-cloudy-rose text-center">
            Cadastre-se
          </h1>
        </div>

        <div className="mb-6">
          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleRegister}
          >
            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">Usuário</p>
              <input
                type="text"
                name="newuser"
                required
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 mb-3 w-60"
              ></input>
            </div>

            <div>
              <p className="text-space-blue text-[1.3rem] pb-1">
                Crie sua senha
              </p>
              <input
                type="password"
                name="newpassword"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border border-cloudy-rose rounded-md outline-none bg-transparent px-2 py-3 h-8 w-60"
              ></input>
            </div>

            <button
              type="submit"
              className="bg-cloudy-rose w-28 h-10 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700 mt-4 text-[1.2rem] "
            >
              Cadastrar
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 text-center">
          <p className="text-space-blue text-[1.2rem] pb-2 font-light">
            Já possui cadastro?
          </p>
          <Link
            to="/"
            className="bg-stellar-lavender w-28 h-8 rounded-lg text-center text-white font-semibold flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-700"
          >
            Faça login
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#290D34] bg-stars-pattern2 w-[400px] h-[550px] rounded-r-2xl gap-4">
        <img src="/assets/myu.gif" className="h-72 w-72 rounded-full"></img>
      </div>

      <Popup
        message="Usuário cadastrado com sucesso!"
        buttonMessage="Ir para página de Login"
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};
