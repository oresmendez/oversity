'use client';

import React, { useState } from "react";
import styled from "styled-components";

export default function FormularioMaterias() {
  const [datos, setDatos] = useState({
    materia: "",
    descripcionMateria: "",
    unidades: [],
  });

  const agregarUnidad = () => {
    setDatos({
      ...datos,
      unidades: [...datos.unidades, { nombre: "", descripcion: "", contenidos: [] }],
    });
  };

  const eliminarUnidad = (unidadIndex) => {
    const nuevasUnidades = datos.unidades.filter((_, index) => index !== unidadIndex);
    setDatos({ ...datos, unidades: nuevasUnidades });
  };

  const actualizarUnidad = (index, nombre, descripcion) => {
    const nuevasUnidades = [...datos.unidades];
    nuevasUnidades[index].nombre = nombre;
    nuevasUnidades[index].descripcion = descripcion;
    setDatos({ ...datos, nuevasUnidades });
  };

  const agregarContenido = (unidadIndex) => {
    const nuevasUnidades = [...datos.unidades];
    nuevasUnidades[unidadIndex].contenidos.push({ nombre: "", descripcion: "" });
    setDatos({ ...datos, unidades: nuevasUnidades });
  };

  const eliminarContenido = (unidadIndex, contenidoIndex) => {
    const nuevasUnidades = [...datos.unidades];
    nuevasUnidades[unidadIndex].contenidos = nuevasUnidades[unidadIndex].contenidos.filter(
      (_, index) => index !== contenidoIndex
    );
    setDatos({ ...datos, unidades: nuevasUnidades });
  };

  const actualizarContenido = (unidadIndex, contenidoIndex, nombre, descripcion) => {
    const nuevasUnidades = [...datos.unidades];
    nuevasUnidades[unidadIndex].contenidos[contenidoIndex].nombre = nombre;
    nuevasUnidades[unidadIndex].contenidos[contenidoIndex].descripcion = descripcion;
    setDatos({ ...datos, unidades: nuevasUnidades });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos:", datos);
    alert("Datos guardados en consola");
  };

  return (
    <Componente>
      <div className="layout-body">
        <div className="container-body">
          <h1>Formulario de Materias</h1>
          <form onSubmit={manejarEnvio}>
            <div className="campo">
              <label htmlFor="materia">Nombre de la Materia:</label>
              <input
                type="text"
                id="materia"
                value={datos.materia}
                onChange={(e) => setDatos({ ...datos, materia: e.target.value })}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="descripcionMateria">Descripción de la Materia:</label>
              <textarea
                id="descripcionMateria"
                value={datos.descripcionMateria}
                onChange={(e) => setDatos({ ...datos, descripcionMateria: e.target.value })}
                required
              />
            </div>

            <button type="button" className="boton" onClick={agregarUnidad}>
              Agregar Unidad
            </button>

            {datos.unidades.map((unidad, unidadIndex) => (
              <div key={unidadIndex} className="unidad">
                <label>Unidad:</label>
                <input
                  type="text"
                  placeholder="Nombre de la unidad"
                  value={unidad.nombre}
                  onChange={(e) =>
                    actualizarUnidad(unidadIndex, e.target.value, unidad.descripcion)
                  }
                  required
                />
                <textarea
                  placeholder="Descripción de la unidad"
                  value={unidad.descripcion}
                  onChange={(e) =>
                    actualizarUnidad(unidadIndex, unidad.nombre, e.target.value)
                  }
                ></textarea>

                <button
                  type="button"
                  className="boton"
                  onClick={() => agregarContenido(unidadIndex)}
                >
                  Agregar Contenido
                </button>

                <button
                  type="button"
                  className="boton eliminar"
                  onClick={() => eliminarUnidad(unidadIndex)}
                >
                  Eliminar Unidad
                </button>

                {unidad.contenidos.map((contenido, contenidoIndex) => (
                  <div key={contenidoIndex} className="contenido">
                    <label>Contenido:</label>
                    <input
                      type="text"
                      placeholder="Nombre del contenido"
                      value={contenido.nombre}
                      onChange={(e) =>
                        actualizarContenido(
                          unidadIndex,
                          contenidoIndex,
                          e.target.value,
                          contenido.descripcion
                        )
                      }
                      required
                    />
                    <textarea
                      placeholder="Descripción del contenido"
                      value={contenido.descripcion}
                      onChange={(e) =>
                        actualizarContenido(
                          unidadIndex,
                          contenidoIndex,
                          contenido.nombre,
                          e.target.value
                        )
                      }
                    ></textarea>
                    <button
                      type="button"
                      className="boton eliminar"
                      onClick={() => eliminarContenido(unidadIndex, contenidoIndex)}
                    >
                      Eliminar Contenido
                    </button>
                  </div>
                ))}
              </div>
            ))}

            <button type="submit" className="boton">Guardar Materia</button>
          </form>
        </div>
      </div>
    </Componente>
  );
}

const Componente = styled.div`
  .layout-body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f9f9f9;
  }

  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .campo,
  .unidad,
  .contenido {
    margin: 15px 0;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #34495e;
  }

  input,
  textarea {
    width: calc(100% - 22px);
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 4px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #ecf0f1;
    font-size: 14px;
  }

  textarea {
    resize: none;
    height: 60px;
  }

  input:focus,
  textarea:focus {
    border-color: #3498db;
    outline: none;
    background-color: #ffffff;
  }

  .boton {
    background-color: #3498db;
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    float: right;
    margin: 5px;
    transition: background-color 0.3s ease;
  }

  .boton:hover {
    background-color: #2980b9;
  }

  .boton.eliminar {
    background-color: #e74c3c;
  }

  .boton.eliminar:hover {
    background-color: #c0392b;
  }

  .unidad,
  .contenido {
    margin-left: 20px;
    padding-left: 10px;
    border-left: 3px solid #bdc3c7;
  }

  .unidad {
    margin-top: 20px;
    padding-top: 10px;
    border-color: #8e44ad;
  }

  .contenido {
    border-color: #16a085;
  }

  .unidad label,
  .contenido label {
    color: #2c3e50;
  }

  .clear {
    clear: both;
  }
`;