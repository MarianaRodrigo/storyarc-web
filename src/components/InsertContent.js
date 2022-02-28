/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useClickOutside } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { setAddContent } from "../features/addContent/addSlice";

export function InsertContent() {
  const dispatch = useDispatch();

  function onKeyDown(e) {
    if (e.key === "Escape") {
      dispatch(setAddContent(false));
    }
  }

  const clickedOutside = useClickOutside(
    () => dispatch(setAddContent(false)),
    ["mouseup", "touchend"]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <div
        id="defaultModal"
        aria-hidden="true"
        className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
      >
        <div
          ref={clickedOutside}
          className="relative px-4 w-full max-w-2xl h-full md:h-auto"
        >
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex justify-between items-start p-5 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                Adicionar conteúdo
              </h3>
              <button
                onClick={() => dispatch(setAddContent(false))}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline pb-12" type="text" placeholder="Adiciona uma descrição"></input>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Introduz a localização da fotografia"></input>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Seleciona uma data"></input>
              <div className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline">
                <svg class="w-28 h-28 m-auto rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p className="flex justify-center mb-6 text-sm">Adiciona uma fotografia</p>
                <label for="myfile">Selecionar</label>
                <input type="file" id="myfile" name="myfile" className="flex justify-center m-auto text-white bg-verde focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"></input>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
              <button type="button" className="text-white bg-verde focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Adicionar</button>
              <button onClick={() => dispatch(setAddContent(false))} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
    </>
  );
}
