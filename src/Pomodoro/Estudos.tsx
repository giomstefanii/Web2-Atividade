//Giovanna Mendonça Stefani - DSM//

import { useState, useEffect } from "react";

function Estudos() {
  const [segundos, setSegundos] = useState(25 * 60);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return;

    const intervalo = setInterval(() => {
      setSegundos((anterior) => {
        if (anterior <= 1) {
          clearInterval(intervalo);
          setRodando(false);
          alert("Tempo acabou! Hora do descanso.");
          return 0;
        }
        return anterior - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [rodando]);

  function iniciar() {
    setRodando(true);
  }

  function pausar() {
    setRodando(false);
  }

  function reiniciar() {
    setRodando(false);
    setSegundos(25 * 60);
  }

  const minutos = Math.floor(segundos / 60);
  const seg = segundos % 60;

  return (
    <div className={`flex flex-col items-center mt-10`}>
      <h1 className={`text-3xl font-bold`}>Estudos</h1>
      <h2 className={`text-xl text-gray-600 mb-4`}>Timer Pomodoro</h2>

      <p className={`text-6xl font-bold mb-6`}>
        {String(minutos).padStart(2, "0")}:{String(seg).padStart(2, "0")}
      </p>

      <div className={`flex gap-2`}>
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded`}
          onClick={iniciar}
          disabled={rodando}
        >
          Iniciar
        </button>
        <button
          className={`bg-yellow-500 text-white px-4 py-2 rounded`}
          onClick={pausar}
          disabled={!rodando}
        >
          Pausar
        </button>
        <button
          className={`bg-red-500 text-white px-4 py-2 rounded`}
          onClick={reiniciar}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Estudos;