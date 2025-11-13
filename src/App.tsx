import React, { useState } from "react";

export default function App() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState<string>("");

  // Validar email
  const validarEmail = (correo: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

  // Validar contraseña al menos 6 caracteres, una mayúscula y un numero
  const validarPassword = (pass: string) =>
    /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(pass);

  const manejarRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usuario.trim().length < 3)
      return setAlerta("El nombre de usuario debe tener al menos 3 caracteres");

    if (!validarEmail(email))
      return setAlerta("El correo electrónico no es valido");

    if (!validarPassword(password))
      return setAlerta(
        "La contraseña debe tener al menos 6 caracteres, una mayúscula y un numero"
      );

    setAlerta(`Registro exitoso! Bienvenido, ${usuario}!`);
    setUsuario("");
    setEmail("");
    setPassword("");

    setTimeout(() => setAlerta(""), 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-400 via-blue-300 to-purple-400 p-6">
      <form
        onSubmit={manejarRegistro}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg space-y-6 border border-gray-200"
        noValidate
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Registro de Usuario
        </h1>

        {alerta && (
          <div className="p-3 text-center rounded-md bg-green-100 text-green-800 font-medium animate-pulse">
            {alerta}
          </div>
        )}

        <div>
          <label className="font-semibold text-gray-700 mb-1 block">Nombre de usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ej. Usuario123"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700 mb-1 block">Correo electronico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@dominio.com"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700 mb-1 block">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimo 6 caracteres, 1 mayúscula, 1 numero"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
