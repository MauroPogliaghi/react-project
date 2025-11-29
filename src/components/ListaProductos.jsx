import { useNavigate } from "react-router-dom";

function ListaProductos({
  productos,
  setProductos,
  agregarAlCarrito,
  carrito = [],
  usuario,
  modoAdmin,
  sumarCantidad,
  restarCantidad,
  subtotal,
  iniciarSesion,
  irAPagar,
}) {
  const navigate = useNavigate();

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  const editarProducto = (id) => {
  const producto = productos.find(p => p.id === id);
  navigate(`/producto/editar/${id}`, { state: { producto } });
};


  const agregarProductoNuevo = () => {
    navigate("/producto/nuevo");
  };

  return (
    <div className="dashboard">

      {modoAdmin && (
        <div style={{ marginBottom: 20 }}>
          <button onClick={agregarProductoNuevo} style={{ background: "green", color: "#fff" }}>
            ➕ Agregar producto
          </button>
        </div>
      )}

      <div className="lista-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="tarjeta-producto">
            <img src={producto.image} alt={producto.name} width={150} />
            <h3>{producto.name}</h3>
            <p>Precio: ${producto.price}</p>

            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al carrito
            </button>

            {modoAdmin && (
              <div style={{ marginTop: 10 }}>
                <button
                  onClick={() => editarProducto(producto.id)}
                  style={{ background: "blue", color: "#fff", marginRight: 5 }}
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                  style={{ background: "red", color: "#fff" }}
                >
                  🗑 Eliminar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <aside className="dashboard-carrito">
        <h3>Carrito</h3>
        {carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="lista-carrito">
            {carrito.map((item) => (
              <li key={item.id} className="item-carrito">
                <span className="item-nombre">{item.name}</span>
                <div className="item-control">
                  <button onClick={() => restarCantidad(item.id)} className="btn-cant">-</button>
                  <span className="item-cantidad">{item.quantity}</span>
                  <button onClick={() => sumarCantidad(item.id)} className="btn-cant">+</button>
                </div>
                <span className="item-sub">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="dashboard-footer">
          <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
          <div className="acciones">
            {!usuario ? (
              <button onClick={iniciarSesion}>Iniciar sesión y pagar</button>
            ) : (
              <button onClick={irAPagar}>Ir a pagar</button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ListaProductos;
