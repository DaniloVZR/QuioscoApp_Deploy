import { useRouter } from "next/router";
import useQuiosco from "@/hooks/useQuiosco";

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' }
]

const Pasos = () => {
  const { handleChangePaso } = useQuiosco()
  const router = useRouter()

  const calcularProgreso = () => {
    let valor
    if (router.pathname === '/') {
      valor = 2
    } else if (router.pathname === '/resumen') {
      valor = 50
    } else if (router.pathname === '/total') {
      valor = 100
    }
    return valor
  }

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map(paso => (
          <button
            className="text-2xl font-bold"
            key={paso.paso}
            onClick={() => {
              router.push(paso.url)
              handleChangePaso(paso.paso)
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white transition-all"
          style={{ width: `${calcularProgreso()}%` }}>
        </div>
      </div>
    </>
  );
};

export default Pasos;