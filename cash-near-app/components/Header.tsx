import HeaderOptions from "./HeaderOptions";
import SearchForm from "./SearchForm";
import Logo from "./ui/Logo";

type HeaderProps = {
  onSearchFormSubmit: (placeID: string | null) => void;
}

export default function Header({ onSearchFormSubmit }: HeaderProps) {
  return (
    <header className="px-10 py-4 space-y-4 bg-(--clr-primary) shadow-sm">
      <div className="header-top flex flex-row items-center
           justify-between">
        <Logo />
        <HeaderOptions />
      </div>
      <div className="header-bottom">
        <SearchForm onSuggestionClick={onSearchFormSubmit} />
      </div>
    </header>
  )
}