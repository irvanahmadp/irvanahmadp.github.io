import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="inset-0 top-auto flex h-16 items-center justify-center border-t border-slate-900 bg-slate-700 text-white dark:bg-slate-800">
      Copyright &copy; {year}
      &nbsp;
      <Link href="/">Irvan Ahmad P</Link>
    </footer>
  );
};

export default Footer;
