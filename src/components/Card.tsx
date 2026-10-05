import { Bolt } from "lucide-react";

import type IStreaming from "../Interfaces/IStreaming";

interface PropStreaming {
  Streaming: IStreaming;
  cancelarStreaming: (Id: number) => void;
  editarStreaming: (Id: number) => void;
}

function Card({
  Streaming,
  cancelarStreaming,
  editarStreaming,
}: PropStreaming) {
  return (
    <div
      className="
        w-full
        min-h-50
        rounded-2xl
        bg-slate-900
        text-white
        flex
        flex-col
        gap-3
        items-center
        p-4
        overflow-hidden
      "
    >
      {/* LOGO + NOME */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          w-full
          font-bold
          text-xl
          sm:text-2xl
          text-center
        "
      >
        <img
          className="
            w-10
            h-10
            rounded-2xl
            object-cover
            shrink-0
          "
          src={Streaming.Logo}
          alt={`Logo do ${Streaming.Nome}`}
        />

        <h1 className="wrap-break-word">{Streaming.Nome}</h1>
      </div>

      {/* INFORMAÇÕES */}
      <div className="w-full flex flex-col gap-1 text-center">
        <div className="font-semibold wrap-break-word">
          Senha: {Streaming.Senha}
        </div>

        <div className="font-semibold wrap-break-word">
          Cancelamento: {Streaming.DataParaCancelar}
        </div>

        <div className="font-semibold wrap-break-word">
          Valor mensal:{" "}
          {Streaming.Valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>

      {/* BOTÕES */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-2
          w-full
          mt-auto
        "
      >
        <a
          className="
            flex
            items-center
            justify-center
            bg-gray-500
            p-2
            rounded-xl
            cursor-pointer
            transition
            hover:bg-gray-400
          "
          href={Streaming.EditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Bolt size={20} />
        </a>

        <button
          className="
            font-semibold
            cursor-pointer
            bg-violet-950
            px-3
            py-2
            rounded-xl
            transition
            hover:bg-violet-900
            active:scale-95
          "
          onClick={() => editarStreaming(Streaming.Id)}
        >
          Editar
        </button>

        <button
          className="
            font-semibold
            cursor-pointer
            bg-red-950
            px-3
            py-2
            rounded-xl
            transition
            hover:bg-red-900
            active:scale-95
          "
          onClick={() => cancelarStreaming(Streaming.Id)}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Card;
