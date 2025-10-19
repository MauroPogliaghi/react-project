import { Navigate } from "react-router-dom";

function RutaProtegida({ usuario, children }) {
  if (!usuario) {
    return <Navigate to="/registro" replace />;
  }
  return children;
}

export default RutaProtegida;