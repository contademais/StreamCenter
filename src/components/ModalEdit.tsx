import { useRef, type Dispatch } from "react";

import type IStreaming from "../Interfaces/IStreaming";
import type IPatchStreaming from "../Interfaces/IPatchStreaming";

interface Props {
  modalInfo: IStreaming | null | undefined;
  setModalInfo: Dispatch<IStreaming | null | undefined>;
  patchStreaming: (novoStream: IPatchStreaming) => void;
}

function ModalEdit({ modalInfo, setModalInfo, patchStreaming }: Props) {
  const nomeRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);
  const dataParaCancelarRef = useRef<HTMLInputElement>(null);
  const valorRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);
  const editLinkRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={
        modalInfo != null
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 visible"
          : "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 invisible"
      }
    >
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-5 sm:p-7">
          <h1 className="text-xl sm:text-3xl font-bold text-white">
            {modalInfo?.Nome}
          </h1>

          <button
            className="cursor-pointer text-2xl font-bold text-red-500 sm:text-3xl"
            onClick={() => setModalInfo(null)}
          >
            X
          </button>
        </div>

        {/* Campos */}
        <div className="flex w-full flex-col gap-5 px-5 pb-7 text-white sm:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Nome:</h1>

            <input
              ref={nomeRef}
              type="text"
              placeholder={modalInfo?.Nome}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Senha:</h1>

            <input
              ref={senhaRef}
              type="text"
              placeholder={modalInfo?.Senha}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Data para cancelar:</h1>

            <input
              ref={dataParaCancelarRef}
              type="text"
              placeholder={modalInfo?.DataParaCancelar}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Valor:</h1>

            <input
              ref={valorRef}
              type="text"
              placeholder={modalInfo?.Valor.toString()}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Logo:</h1>

            <input
              ref={logoRef}
              type="text"
              placeholder={modalInfo?.Logo}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1>Link de config.:</h1>

            <input
              ref={editLinkRef}
              type="text"
              placeholder={modalInfo?.EditLink}
              className="w-full rounded-md bg-white px-3 py-2 text-black sm:w-[60%]"
            />
          </div>

          <button
            onClick={() =>
              patchStreaming({
                Id: modalInfo!.Id,
                Nome: nomeRef.current?.value,
                Senha: senhaRef.current?.value,
                DataParaCancelar: dataParaCancelarRef.current?.value,
                Valor: Number(valorRef.current?.value),
                Logo: logoRef.current?.value,
                EditLink: editLinkRef.current?.value,
              })
            }
            type="submit"
            className="mx-auto mt-5 h-10 w-full max-w-40 rounded-2xl bg-violet-950 font-semibold text-white cursor-pointer hover:opacity-70"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
