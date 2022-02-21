import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex-1">
      <div className="flex flex-col items-center">
        <h1 className="flex justify-center font-semibold tracking-widest text-xl" style={{ color: "#37b780" }}>Pareces estar perdido na historia</h1>
        <img className="flex m-auto w-64 mt-6" src="./images/ampulheta.png" alt="ampulheta erro 404" />
        <div className="flex justify-center mt-6">
          <h3 className="font-normal tracking-widest mr-2 text-gray-500">Clica </h3>
          <Link href="/"  passHref>
          <button className="rounded px-5 py-1 tracking-widest font-semibold" style={{ backgroundColor: "#37b780", color: "white" }} type="button"> aqui </button>
          </Link>
          <h3 className="font-normal tracking-widest ml-2 text-gray-500">para voltares ao presente.</h3>
        </div>
      </div>
    </div>
  )
}
