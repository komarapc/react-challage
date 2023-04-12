function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-20 flex items-center px-5 bg-white dark:bg-neutral-800">
      {children}
    </div>
  );
}

export function NavbarBrand({ children }: { children: React.ReactNode }) {
  return <div className="text-2xl font-bold">{children}</div>;
}

export default Navbar;
