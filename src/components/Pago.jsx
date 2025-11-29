function Pago({ carrito, usuario, sumarCantidad, restarCantidad }) {
  const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const volverAProductos = () => {
    window.location.hash = "#/";
  };

  return (
    <div className="pago">
      <h2>Pago de la compra</h2>
      
      <p>Usuario: <strong>{usuario?.nombre}</strong></p>
      <p>Correo: <strong>{usuario?.correo}</strong></p>

      <h3>Resumen del carrito:</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {carrito.map((item) => (
          <li className="item-pago" key={item.id}>
            <span style={{ flexGrow: 1 }}>
              {item.name} — ${item.price}
            </span>

            <button className="btn-cantidad" onClick={() => restarCantidad(item.id)}>-</button>

            <span>{item.quantity}</span>

            <button className="btn-cantidad" onClick={() => sumarCantidad(item.id)}>+</button>

            <span>= ${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      
      <h3>Total a pagar: ${total}</h3>

      <div style={{ display: "flex", gap: "12px", marginTop: "14px" }}>
        <button className="btn-accion" onClick={volverAProductos}>Agregar más productos</button>
        <button className="btn-accion" onClick={() => alert("Pago simulado exitoso ✅")}>Pagar ahora</button>
      </div>
    </div>
  );
}

export default Pago;
