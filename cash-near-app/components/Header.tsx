import HeaderOptions from "./HeaderOptions";
import SearchForm from "./SearchForm";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="px-10 py-4 space-y-4 bg-(--clr-primary) shadow-sm">
      <div className="header-top flex flex-row items-center
           justify-between">
        <Logo />
        <HeaderOptions />
      </div>
      <div className="header-bottom">
        <SearchForm />
      </div>
    </header>
  )
}