const Search = () => (
    <form action="/" method="get">
        <input className="text-sm border rounded border-gray-200 mt-6 ml-3 p-2 pl-2 sm:w-80 md:w-60"
            type="text"
            id="header-search"
            placeholder="Pesquise por locais"
            name="s" 
        />
    </form>
);

export default Search;