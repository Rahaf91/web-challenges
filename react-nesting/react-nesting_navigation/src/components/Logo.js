import Image from "./Image";
import logo from "../img/logo.jpg";
import Link from "./Link";

export default function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
