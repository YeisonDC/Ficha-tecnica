import React from "react";

export default function FichaTecnica() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="w-full max-w-4xl bg-gray-900 shadow-xl rounded-xl p-8 border border-gray-700 text-white flex flex-col justify-center">
        {/* Encabezado */}
        <header className="text-center mb-10">
          <img
            src="https://res.cloudinary.com/dvj1tw3ui/image/upload/v1754268444/logoSenaNaranja_eimdte.png"
            alt="Logo SENA"
            className="w-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-extrabold text-[#00AF00] uppercase tracking-wide">
            Ficha Técnica de Recolección de Información
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Ficha técnica. GA2-220501094-AA2-EV01.
          </p>
        </header>

        {/* Información General del Proyecto */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Información General del Proyecto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              {
                label: "Nombre del Proyecto",
                type: "text",
                placeholder: "Ej. Sistema de Facturación Electrónica",
              },
              { label: "Fecha", type: "date" },
              {
                label: "Cliente/Empresa",
                type: "text",
                placeholder: "Ej. Empresa XYZ S.A.S.",
              },
              {
                label: "Responsables Técnicos",
                type: "text",
                placeholder: "Ej. Yeison Ramírez",
              },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="block font-medium mb-1">{label}:</label>
                <input
                  type={type}
                  placeholder={placeholder || ""}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Tipo de Software a Desarrollar */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Tipo de Software a Desarrollar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Aplicación Web",
              "Aplicación Móvil",
              "Aplicación Escritorio",
              "API/Servicios Web",
              "Sistema de Base de Datos",
              "Otro",
            ].map((label) => (
              <label key={label} className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-400" /> {label}
              </label>
            ))}
          </div>
        </section>

        {/* Información del Cliente */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Información del Cliente
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="block font-medium mb-1">
                Nombre completo o razón social:
              </label>
              <input
                type="text"
                placeholder="Ej. Industrias ABC LTDA."
                className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Tipo de identificación:
              </label>
              <div className="space-y-1">
                {["NIT", "Cédula de ciudadanía", "Cédula de extranjería"].map(
                  (tipo) => (
                    <label key={tipo} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="tipoIdentificacion"
                        value={tipo}
                        className="accent-green-400"
                      />{" "}
                      {tipo}
                    </label>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">
                Número de identificación:
              </label>
              <input
                type="text"
                placeholder="Ej. 1094976352"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Correo electrónico:
              </label>
              <input
                type="email"
                placeholder="Ej. contacto@empresa.com"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Ubicación:</label>
              <select className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2">
                <option value="">Selecciona</option>
                {["Bucaramanga", "Bogota", "Medellin", "Cali"].map(
                  (city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Tipo de cliente:</label>
              <div className="space-y-1">
                {["Jurídico", "Natural"].map((tipo) => (
                  <label key={tipo} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="tipoCliente"
                      value={tipo}
                      className="accent-green-400"
                    />{" "}
                    {tipo}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Producto */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Producto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              {
                label: "Nombre del producto",
                type: "text",
                placeholder: "Ej. App de gestión de inventario",
              },
              {
                label: "Cantidad",
                type: "number",
                placeholder: "Ej. 1",
              },
              {
                label: "Precio unitario",
                type: "text",
                placeholder: "Ej. $1.500.000",
              },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="block font-medium mb-1">{label}:</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
                />
              </div>
            ))}
            <div>
              <label className="block font-medium mb-1">IVA:</label>
              <div className="space-y-1">
                {["Gravado", "Exento"].map((iva) => (
                  <label key={iva} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={iva.toLowerCase()}
                      className="accent-green-400"
                    />{" "}
                    {iva}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Medio de pago:</label>
              <select className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2">
                <option value="">Selecciona</option>
                {["Transferencia", "Efectivo", "Tarjeta"].map((medio) => (
                  <option key={medio} value={medio.toLowerCase()}>
                    {medio}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Herramientas de Desarrollo */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Herramientas de Desarrollo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              {
                label: "IDE utilizado",
                placeholder: "Ej. Visual Studio Code",
              },
              {
                label: "Lenguaje(s) de programación",
                placeholder: "Ej. JavaScript, Node.js",
              },
              {
                label: "Framework o librerías",
                placeholder: "Ej. React, Tailwind CSS",
              },
              {
                label: "Base de datos",
                placeholder: "Ej. MongoDB, PostgreSQL",
              },
              {
                label: "Servicios de hosting",
                placeholder: "Ej. Vercel, Render, Netlify",
              },
            ].map(({ label, placeholder }) => (
              <div key={label}>
                <label className="block font-medium mb-1">{label}:</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Costos por Soporte */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white border-b border-gray-500 pb-2 mb-4">
            Costos por Soporte
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="block font-medium mb-1">Tipo de Soporte:</label>
              <select className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2">
                <option value="">Selecciona</option>
                <option value="mensual">Mensual</option>
                <option value="trimestral">Trimestral</option>
                <option value="anual">Anual</option>
                <option value="único">Pago Único</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">Costo del soporte:</label>
              <input
                type="text"
                placeholder="Ej. $250.000"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block font-medium mb-1">Observaciones adicionales:</label>
              <textarea
                rows={4}
                placeholder="Ej. El soporte cubre mantenimiento mensual, actualizaciones y respuesta a errores."
                className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2"
              ></textarea>
            </div>
          </div>
        </section>

        {/* Botón para imprimir */}
        <div className="text-center mt-6 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Generar Documento
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10 text-gray-400 text-sm">
          <p>
            Entregado por{" "}
            <span className="font-medium text-white">
              Yeison, Diego y Andrés
            </span>{" "}
            como parte del proyecto técnico – {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
