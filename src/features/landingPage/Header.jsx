import Button from "../../ui/Button";

function Header() {
  return (
    <nav className="flex items-center justify-between p-4 sm:p-8 lg:px-12 xl:px-20 xl:py-12">
      <h2 className="text-main_neon text-2xl md:text-3xl">
        {/* logo goes here */}
        EasyCollect
      </h2>

      <Button className={"hidden sm:inline-block"}>LOGIN / SIGNUP</Button>
    </nav>
  );
}

export default Header;
