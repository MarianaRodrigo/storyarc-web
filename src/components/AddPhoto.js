import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { FiTrash } from "react-icons/fi";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const acceptStyle = {
  borderColor: "#37b780",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function Photo(props) {
  const [files, setFiles] = useState([]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 2,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  const removeImage = (i) => {
    let temp = [...files];
    temp.splice(i, 1);
    setFiles(temp);
  };

  return (
    <section className="container">
      {files.length == 0 ? (
        <div
          {...getRootProps({ className: "dropzone", style })}
          className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline"
        >
          <svg
            className="w-28 h-28 m-auto rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <p className="flex justify-center mb-6 text-sm select-none">
            Adiciona uma fotografia
          </p>
          <input
            {...getInputProps()}
            type="file"
            id="myfile"
            name="myfile"
            className="flex justify-center m-auto text-white bg-verde focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          ></input>
        </div>
      ) : (
        <aside className="flex">
          {files.map((file, i) => (
            <div
              className="grow border border-sky-500"
              onClick={() => removeImage(i)}
              key={file.name}
              style={{
                height: "12.5rem",
                backgroundImage: `url(${file.preview})`,
                backgroundSize: "120%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-40 flex justify-center items-center cursor-pointer transition duration-200 ease-out">
                <FiTrash className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </aside>
      )}
    </section>
  );
}

<Photo />;

/*
<div  {...getRootProps({className: 'dropzone'})} className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 font-light tracking-wide leading-tight focus:outline-none focus:shadow-outline">
  <svg class="w-28 h-28 m-auto rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
  <p className="flex justify-center mb-6 text-sm">Adiciona uma fotografia</p>
  <input {...getInputProps()} type="file" id="myfile" name="myfile" className="flex justify-center m-auto text-white bg-verde focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"></input>
</div>

*/
