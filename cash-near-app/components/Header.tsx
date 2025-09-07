import HeaderOptions from "./HeaderOptions";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="px-10 py-4 bg-(--clr-primary) flex flex-row  items-center
    justify-between shadow-sm">
      <Logo />
      <HeaderOptions />
    </header>
  )
}