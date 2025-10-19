const productosLocales = [
  { id: 1, name: "Auriculares Bluetooth", price: 100, image: "https://cdn.pixabay.com/photo/2017/03/06/22/41/headphones-2121017_1280.jpg" },
  { id: 2, name: "Teclado Mecánico", price: 98, image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/keyboard-1869230_1280.jpg" },
  { id: 3, name: "Mouse Gamer", price: 38, image: "https://cdn.pixabay.com/photo/2016/11/29/09/18/mouse-1869780_1280.jpg" },
  { id: 4, name: "Monitor 24''", price: 66, image: "https://cdn.pixabay.com/photo/2015/05/31/13/33/monitor-791898_1280.jpg" },
  { id: 5, name: "Webcam HD", price: 66, image: "https://cdn.pixabay.com/photo/2016/11/29/08/04/webcam-1869544_1280.jpg" },
  { id: 6, name: "Micrófono USB", price: 92, image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/microphone-1996490_1280.jpg" },
  { id: 7, name: "Mousepad Gamer", price: 39, image: "https://cdn.pixabay.com/photo/2017/06/06/21/55/mousepad-2384843_1280.jpg" },
  { id: 8, name: "Gabinete PC", price: 39, image: "https://cdn.pixabay.com/photo/2015/05/31/12/44/computer-791846_1280.jpg" },
  { id: 9, name: "Placa de Video", price: 16, image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/video-card-336679_1280.jpg" },
  { id: 10, name: "Fuente de Poder", price: 55, image: "https://cdn.pixabay.com/photo/2014/04/03/00/41/power-supply-311342_1280.jpg" }
];

import { useState, useEffect } from "react";

function ListaProductos({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosLocales);
  }, []);

  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        <div key={producto.id} className="tarjeta-producto">
          <img src={producto.image} alt={producto.name} width={150} />
          <h3>{producto.name}</h3>
          <p>Precio: ${producto.price}</p>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;