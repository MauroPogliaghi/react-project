import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ListaProductos from "./components/ListaProductos";
import BarraNavegacion from "./components/NavBar";
import PaginaContacto from "./components/Contacto";
import Registro from "./components/Registro";
import Pago from "./components/Pago";
import RutaProtegida from "./components/RutaProtegida";
import FormularioProducto from "./components/FormularioProducto";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [modoAdmin, setModoAdmin] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos([
      { id: 1, name: "Auriculares Bluetooth", price: 100, image: "https://http2.mlstatic.com/D_NQ_NP_2X_618365-MLA96102959409_102025-F.webp" },
      { id: 2, name: "Teclado Mecánico", price: 98, image: "https://http2.mlstatic.com/D_NQ_NP_2X_795484-MLA95942524147_102025-F.webp" },
      { id: 3, name: "Mouse Gamer", price: 38, image: "https://http2.mlstatic.com/D_NQ_NP_2X_649939-MLA96146349297_102025-F.webp" },
      { id: 4, name: "Monitor 24''", price: 66, image: "https://http2.mlstatic.com/D_NQ_NP_2X_612276-MLA91374728761_082025-F.webp" },
      { id: 5, name: "Webcam HD", price: 66, image: "https://http2.mlstatic.com/D_NQ_NP_2X_745352-MLA96867457070_112025-F.webp" },
      { id: 6, name: "Micrófono USB", price: 92, image: "https://http2.mlstatic.com/D_NQ_NP_2X_710383-MLA99849753669_112025-F.webp" },
      { id: 7, name: "Mousepad Gamer", price: 39, image: "https://http2.mlstatic.com/D_NQ_NP_2X_677460-MLA95392989934_102025-F.webp" },
      { id: 8, name: "Gabinete PC", price: 39, image: "https://http2.mlstatic.com/D_NQ_NP_2X_874527-MLA95665110150_102025-F.webp" },
      { id: 9, name: "Placa de Video", price: 16, image: "https://http2.mlstatic.com/D_NQ_NP_2X_746451-MLA96094071045_102025-F.webp" },
      { id: 10, name: "Fuente de Poder", price: 55, image: "https://http2.mlstatic.com/D_NQ_NP_2X_671608-MLA95935727739_102025-F.webp" }
    ]);
  }, []);

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

  const sumarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const restarCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((item) => item.id !== id));
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
        carrito={carrito}
        sumarCantidad={sumarCantidad}
        restarCantidad={restarCantidad}
        usuario={usuario}
        modoAdmin={modoAdmin}
        setModoAdmin={setModoAdmin}
      />

      <Routes>
        <Route
          path="/"
          element={
            <ListaProductos
              productos={productos}
              setProductos={setProductos}
              agregarAlCarrito={agregarAlCarrito}
              carrito={carrito}
              usuario={usuario}
              sumarCantidad={sumarCantidad}
              restarCantidad={restarCantidad}
              subtotal={subtotal}
              iniciarSesion={() => (window.location.hash = "#/registro")}
              irAPagar={() => (window.location.hash = "#/pago")}
              modoAdmin={modoAdmin}
              eliminarProducto={eliminarProducto}
            />
          }
        />

        <Route path="/pagina-contacto" element={<PaginaContacto />} />

        <Route
          path="/registro"
          element={<Registro setUsuario={setUsuario} setModoAdmin={setModoAdmin} />}
        />

        <Route
          path="/pago"
          element={
            <RutaProtegida usuario={usuario}>
              <Pago carrito={carrito} usuario={usuario} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad} />
            </RutaProtegida>
          }
        />

        <Route
          path="/producto/nuevo"
          element={<FormularioProducto setProductos={setProductos} />}
        />

        <Route
          path="/producto/editar/:id"
          element={<FormularioProducto setProductos={setProductos} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
