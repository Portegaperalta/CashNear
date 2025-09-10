import { Search } from "lucide-react"

export default function SearchForm() {
  return (
    <div className="search-form">
      <form className="px-2 flex flex-row-reverse gap-2 items-center bg-(--clr-white) rounded-md">
        <input
          type="text"
          placeholder="City,Zip code or Address"
          className="py-2 outline-none w-full"
        />
        <button
          type="submit"
          className="text-gray-400"
        >
          <Search />
        </button>
      </form>
    </div>
  )
}