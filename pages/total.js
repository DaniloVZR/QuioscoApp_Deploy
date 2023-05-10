import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout"
import { formatearDinero } from "@/helpers";
import useQuiosco from "@/hooks/useQuiosco";

export default function Total() {

  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">Total a pagar {''}<span className="font-bold">{formatearDinero(total)}</span></p>
        </div>

        <div>
          <input
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white mt-5 text-center`}
            value={"Confirmar Pedido"}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  )
}