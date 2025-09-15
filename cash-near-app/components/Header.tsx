import HeaderOptions from "./HeaderOptions";
import SearchForm from "./SearchForm";
import Logo from "./ui/Logo";

type HeaderProps = {
  selectedImplementation: any,
  selectedPlace: any,
}

export default function Header({ selectedImplementation, selectedPlace }: HeaderProps) {
  return (
    <header className="px-10 py-4 space-y-4 bg-(--clr-primary) shadow-sm">
      <div className="header-top flex flex-row items-center
           justify-between">
        <Logo />
        <HeaderOptions />
      </div>
      <div className="header-bottom">
        <SearchForm
          selectedImplementation={selectedImplementation}
          selectedPlace={selectedPlace}
        />
      </div>
    </header>
  )
}