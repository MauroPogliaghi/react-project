import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro({ setUsuario }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !correo) {
      alert("Por favor completá todos los campos");
      return;
    }
    setUsuario({ nombre, correo });
    navigate("/pago");
  };

  return (
    <div className="registro">
      <h2>Registro de usuario</h2>
      <form onSubmit={manejarEnvio}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        <button type="submit">Continuar al pago</button>
      </form>
    </div>
  );
}

export default Registro;