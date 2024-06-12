import Link from "next/link";

export function NavBar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="/">
          <h3 className="font-bold text-3xl">Prueba</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/customer" className="text-slate-300 hover:text-slate-200">
              Clientes
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}