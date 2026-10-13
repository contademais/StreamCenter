import type { Dispatch } from "react";

interface Props {
  setAssinaturasModal: Dispatch<Boolean>;
}

function ModalSubs({ setAssinaturasModal }: Props) {
  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 visible"
      }
    >
      <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900">
        <div className="flex items-center justify-between p-5 sm:p-7">
          <h1 className="text-xl sm:text-3xl font-bold text-white">
            Assinaturas
          </h1>

          <button
            className="cursor-pointer text-2xl font-bold text-red-500 sm:text-3xl"
            onClick={() => setAssinaturasModal(false)}
          >
            X
          </button>
        </div>
        <div className="flex text-white m-5 gap-5">
          <div
            className="
            bg-gray-800
            text-center
            p-5
            rounded-xl
            flex-1
            flex
            flex-col
            items-center
            "
          >
            <div className="flex justify-between w-full">
              <h1 className="font-black text-2xl">Demo</h1>
              <h1 className="font-bold text-2xl">Grátis</h1>
            </div>
            <ul className="mt-5 text-start flex flex-col font-semibold gap-2">
              <li>Até 3 assinaturas</li>
              <li>Cadastro personalizado de serviços</li>
              <li>Visualização dos gastos mensais</li>
            </ul>
          </div>

          <div
            className="
            bg-purple-950
            text-center
            p-5
            rounded-xl
            flex-2
            flex
            flex-col
            items-center
            shadow-[0px_-2px_25px_5px_rgba(147,51,234,0.5)]
            "
          >
            <div className="flex justify-between w-full">
              <h1 className="font-black text-3xl">Plus</h1>
              <h1 className="font-bold text-3xl flex items-center gap-2">
                <p className="text-sm font-normal text-red-500">
                  de <s>R$24,90</s>
                </p>
                <p className="text-sm font-normal text-green-500 flex items-center gap-2">
                  por{" "}
                  <u className="text-green-500 text-3xl font-black">R$14,90</u>
                </p>
              </h1>
            </div>
            <ul className="mt-5 text-start flex flex-col font-semibold gap-2">
              <li>Tudo do Demo</li>
              <li>Até 10 assinaturas</li>
              <li>Alertas de vencimento e cancelamento</li>
              <li>Estatísticas e gráficos de gastos mensais</li>
              <li>Cancelamento automático de assinaturas</li>
              <li>Sincronização entre dispositivos</li>
            </ul>
          </div>

          <div
            className="
            bg-amber-600
            text-center
            p-5
            rounded-xl
            flex-1
            flex
            flex-col
            items-center
            "
          >
            <div className="flex justify-between w-full">
              <h1 className="font-black text-2xl">Premium</h1>
              <h1 className="font-bold text-2xl">R$29,90</h1>
            </div>
            <ul className="mt-5 text-start flex flex-col font-semibold gap-2">
              <li>Tudo do Plus</li>
              <li>Assinaturas ilimitadas</li>
              <li>Relatórios detalhados e histórico de preços</li>
              <li>Exportação em PDF e CSV</li>
              <li>Compartilhamento com familiares</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSubs;
