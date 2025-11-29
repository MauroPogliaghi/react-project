import { Link } from "react-router-dom";
import { useState } from "react";

function BarraNavegacion({ cantidadCarrito, subtotal, limpiarCarrito, modoAdmin, setModoAdmin }) {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");

  const handleLogin = () => {
    if (user === "admin" && mail === "1234@admin") {
      setModoAdmin(true);
      setMostrarLogin(false);
    } else {
      alert("Datos incorrectos");
    }
  };

  const handleLogout = () => {
    setModoAdmin(false);
  };

  return (
    <nav className="barra-navegacion">
      <h1 className="titulo-principal">
        <Link to="/" className="link-titulo">
          Mi Tienda
        </Link>
      </h1>

      <div className="botones-navegacion">
        <Link to="/pagina-contacto">
          <button className="boton-contacto">Contacto</button>
        </Link>

        <span className="boton-carrito">
          🛒 Carrito ({cantidadCarrito}) - ${subtotal.toFixed(2)}
        </span>

        <button className="boton-vaciar" onClick={limpiarCarrito}>
          Vaciar carrito
        </button>

        {cantidadCarrito > 0 && (
          <Link to="/pago">
            <button className="boton-pago">Ir a pagar</button>
          </Link>
        )}

        {!modoAdmin && (
          <button onClick={() => setMostrarLogin(true)} className="boton-admin">
            Admin
          </button>
        )}

        {modoAdmin && (
          <button onClick={handleLogout} className="boton-admin-on">
            Admin ON
          </button>
        )}
      </div>

      {mostrarLogin && (
        <div className="modal-login">
          <div className="modal-content">
            <h3 className="modal-titulo">Login Administrador</h3>

            <label className="modal-label">Usuario:</label>
            <input
              type="text"
              className="modal-input"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />

            <label className="modal-label">Clave/Admin:</label>
            <input
              type="password"
              className="modal-input"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <div className="modal-botones">
              <button className="modal-btn-ingresar" onClick={handleLogin}>Ingresar</button>
              <button className="modal-btn-cancelar" onClick={() => setMostrarLogin(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default BarraNavegacion;
