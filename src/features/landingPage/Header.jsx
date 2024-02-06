import Button from "../../ui/Button";

function Header() {
  return (
    <nav className="flex items-center justify-between p-6 sm:p-8 md:px-8 md:py-4 lg:px-12 xl:px-16 xl:py-12">
      <h2 className="text-xl text-main_neon sm:text-2xl md:text-3xl">
        {/* logo goes here */}
        EasyCollect
      </h2>

      <Button className={"hidden sm:inline-block"}>LOGIN / SIGNUP</Button>
      <div className="flex gap-3 sm:hidden">
        <button className="cursor-pointer text-[18px] text-main_neon">
          Login
        </button>
        <Button className="cursor-pointer"> Sign Up </Button>
      </div>
    </nav>
  );
}

export default Header;
