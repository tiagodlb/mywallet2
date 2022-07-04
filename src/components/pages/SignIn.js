import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigator = useNavigate();

  async function handleSubmits(e) {
    e.preventDefault();
    const body = { email, password };
    try {
      let response = await axios.post(
        `https://mywalletapi0133.herokuapp.com/signin`,
        body
      );
      const { token, name } = response.data;
      setUser({ name, token });
      navigator("/home");
    } catch (error) {
      alert("Deu xabu!!");
      console.log(error);
    }
  }
  return (
    <div>
      <div>
        <h1>MyWallet</h1>
        <form>
          <input
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={handleSubmits}>
            Entrar
          </button>
        </form>
      </div>
      <div>
        <Link to="/signup">Primeira vez? Cadastre-se!</Link>
      </div>
    </div>
  );
}

export default SignInPage;
