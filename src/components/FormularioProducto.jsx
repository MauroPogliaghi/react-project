import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./FormularioProducto.css";

function FormularioProducto({ productos, setProductos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const producto = location.state?.producto;

  const [name, setName] = useState(producto?.name || "");
  const [price, setPrice] = useState(producto?.price || "");
  const [image, setImage] = useState(producto?.image || "");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!name || !price || !image) return;

    const nuevoProducto = {
      id: producto?.id || Date.now(),
      name,
      price: parseFloat(price),
      image,
    };

    if (producto) {
      setProductos(prev => prev.map(p => p.id === producto.id ? nuevoProducto : p));
    } else {
      setProductos(prev => [...prev, nuevoProducto]);
    }

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>{producto ? "Editar producto" : "Nuevo producto"}</h2>

      <form onSubmit={manejarEnvio} className="formulario">
        
        <label>Nombre del producto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>URL de la imagen</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {image && (
          <div className="image-preview">
            <img src={image} alt="Vista previa" />
          </div>
        )}

        <div className="botones-form">
          <button type="submit" className="btn-guardar">Guardar</button>
          <button type="button" className="btn-cancelar" onClick={() => navigate("/")}>Cancelar</button>
        </div>

      </form>
    </div>
  );
}

export default FormularioProducto;
