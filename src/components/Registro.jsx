import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro({ setUsuario, setModoAdmin }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (nombre === "admin" && correo === "1234@admin") {
      setUsuario({ nombre, correo });
      setModoAdmin(true);
      navigate("/");
      return;
    }

    if (!nombre || !correo) {
      alert("Por favor completá todos los campos");
      return;
    }

    setUsuario({ nombre, correo });
    setModoAdmin(false);
    navigate("/pago");
  };

  return (
    <div className="registro">
      <h2>Registro de usuario</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <button type="submit">Iniciar sesión / Registrarte</button>
      </form>
    </div>
  );
}

export default Registro;
