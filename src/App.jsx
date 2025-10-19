
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductos from "./components/ListaProductos";
import BarraNavegacion from "./components/NavBar";
import PaginaContacto from "./components/Contacto";
import Registro from "./components/Registro";
import Pago from "./components/Pago";
import RutaProtegida from "./components/RutaProtegida";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const encontrado = prev.find((item) => item.id === producto.id);
      if (encontrado) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, quantity: 1 }];
      }
    });
  };

  const vaciarCarrito = () => setCarrito([]);
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = carrito.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Router>
      <BarraNavegacion
        cantidadCarrito={cantidadTotal}
        subtotal={subtotal}
        limpiarCarrito={vaciarCarrito}
      />

      <Routes>
        <Route
          path="/"
          element={<ListaProductos agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/pagina-contacto" element={<PaginaContacto />} />
        <Route path="/registro" element={<Registro setUsuario={setUsuario} />} />
        <Route
          path="/pago"
          element={
            <RutaProtegida usuario={usuario}>
              <Pago carrito={carrito} usuario={usuario} />
            </RutaProtegida>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;