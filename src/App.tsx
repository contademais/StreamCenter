import { useState } from "react";

import "./App.css";

import Card from "./components/Card";

import type IStreaming from "./Interfaces/IStreaming";

import ModalEdit from "./components/ModalEdit";

import type IPatchStreaming from "./Interfaces/IPatchStreaming";
import ModalSubs from "./components/ModalSubs";

function App() {
  const [Streamings, setStreaming] = useState<IStreaming[]>([
    {
      Id: 1,
      Nome: "Netflix",
      Senha: "Netflix123",
      DataParaCancelar: "04/11/2026",
      Valor: 59.9,
      Logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/250px-Netflix-new-icon.png",
      EditLink: "https://www.netflix.com/account",
    },

    {
      Id: 2,
      Nome: "Spotify",
      Senha: "Spotify456",
      DataParaCancelar: "15/11/2026",
      Valor: 21.9,
      Logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
      EditLink: "https://www.spotify.com/account/",
    },

    {
      Id: 3,
      Nome: "Amazon Prime Video",
      Senha: "Prime789",
      DataParaCancelar: "22/11/2026",
      Valor: 19.9,
      Logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
      EditLink: "https://www.primevideo.com/",
    },

    {
      Id: 4,
      Nome: "Disney+",
      Senha: "Disney321",
      DataParaCancelar: "30/11/2026",
      Valor: 43.9,
      Logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
      EditLink: "https://www.disneyplus.com/",
    },
  ]);

  const [modalInfo, setModalInfo] = useState<IStreaming | null | undefined>(
    null,
  );

  const [assinaturasModal, setAssinaturasModal] = useState<Boolean>(false);

  function CancelarStreaming(Id: number) {
    setStreaming((prev) => prev.filter((s) => s.Id !== Id));

    alert("Streaming cancelado!");
  }

  function EditarStreaming(Id: number) {
    const streaming = Streamings.find((s) => s.Id === Id);

    if (streaming) {
      setModalInfo(streaming);
    }
  }

  function AddStreaming() {
    const novoStreaming: IStreaming = {
      Id:
        Streamings.length > 0
          ? Math.max(...Streamings.map((s) => s.Id)) + 1
          : 1,

      Nome: "Novo Streaming",
      Senha: "",
      DataParaCancelar: "",
      Valor: 0,
      Logo: "",
      EditLink: "",
    };

    setStreaming((prev) => [...prev, novoStreaming]);

    setModalInfo(novoStreaming);
  }

  function patchStreaming(novoStream: IPatchStreaming) {
    setStreaming((prev) =>
      prev.map((s) => {
        if (s.Id !== novoStream.Id) {
          return s;
        }

        return {
          ...s,
          ...(novoStream.Nome != null && novoStream.Nome !== ""
            ? { Nome: novoStream.Nome }
            : {}),

          ...(novoStream.Senha != null && novoStream.Senha !== ""
            ? { Senha: novoStream.Senha }
            : {}),

          ...(novoStream.DataParaCancelar != null &&
          novoStream.DataParaCancelar !== ""
            ? { DataParaCancelar: novoStream.DataParaCancelar }
            : {}),

          ...(novoStream.Valor != null ? { Valor: novoStream.Valor } : {}),

          ...(novoStream.Logo != null && novoStream.Logo !== ""
            ? { Logo: novoStream.Logo }
            : {}),

          ...(novoStream.EditLink != null && novoStream.EditLink !== ""
            ? { EditLink: novoStream.EditLink }
            : {}),
        };
      }),
    );

    setModalInfo(null);
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <div className={modalInfo != null ? "blur-xs" : ""}>
        {/* NAVBAR */}
        <nav
          id="navbar"
          className="
            min-h-[8vh]
            w-full
            bg-violet-950
            px-4
            py-4
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <h1 className="text-center text-xl sm:text-2xl font-bold text-white">
            StreamCenter - Centralize seus serviços!
          </h1>

          <div className="flex gap-10">
            <button
              onClick={() => setAssinaturasModal(true)}
              className="
                  rounded-lg
                  bg-violet-600
                  px-4
                  py-2
                  font-semibold
                  text-white
                  transition
                  hover:bg-violet-500
                  active:scale-95
                  cursor-pointer
                "
            >
              Assinaturas
            </button>
            <button
              onClick={AddStreaming}
              className="
                rounded-lg
                bg-violet-600
                px-4
                py-2
                font-semibold
                text-white
                transition
                hover:bg-violet-500
                active:scale-95
                cursor-pointer
              "
            >
              + Adicionar Streaming
            </button>
          </div>
        </nav>

        {/* CONTEÚDO */}
        <main
          id="corpo"
          className="
            w-full
            px-4
            py-8
            sm:px-6
            lg:px-10
          "
        >
          <div
            id="linha1"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
              w-full
            "
          >
            {Streamings.map((s) => (
              <Card
                key={s.Id}
                Streaming={s}
                cancelarStreaming={CancelarStreaming}
                editarStreaming={EditarStreaming}
              />
            ))}
          </div>
        </main>
      </div>

      {/* MODAL EDIT */}
      {modalInfo != null && (
        <ModalEdit
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          patchStreaming={patchStreaming}
        />
      )}
      {/* MODAL SUBSCRIPTIONS */}
      {assinaturasModal && (
        <ModalSubs setAssinaturasModal={setAssinaturasModal} />
      )}
    </div>
  );
}

export default App;
