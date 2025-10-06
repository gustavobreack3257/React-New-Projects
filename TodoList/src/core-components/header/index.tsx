import Logo from "../../assets/image/Logo.svg?react";
import Container from "../../components/container";

export default function HeaderCore() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <Logo className="h-9 md:h-12" />
    </Container>
  );
}
