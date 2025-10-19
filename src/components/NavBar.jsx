import { Link } from "react-router-dom";

function BarraNavegacion({ cantidadCarrito, subtotal, limpiarCarrito }) {
  return (
    <nav className="barra-navegacion">
      <h1 className="titulo-principal">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Mi Tienda
        </Link>
      </h1>

      <div className="botones-navegacion">
        <Link to="/pagina-contacto">
          <button className="boton-contacto" Link="/pagina-contacto">Contacto</button>
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
      </div>
    </nav>
  );
}

export default BarraNavegacion;