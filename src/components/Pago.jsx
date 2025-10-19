function Pago({ carrito, usuario }) {
  const total = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="pago">
      <h2>Pago de la compra</h2>
      <p>Usuario: <strong>{usuario.nombre}</strong></p>
      <p>Correo: <strong>{usuario.correo}</strong></p>

      <h3>Resumen del carrito:</h3>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>{item.name} × {item.quantity} = ${item.price * item.quantity}</li>
        ))}
      </ul>

      <h3>Total a pagar: ${total}</h3>
      <button onClick={() => alert("Pago simulado exitoso ✅")}>Pagar ahora</button>
    </div>
  );
}

export default Pago;