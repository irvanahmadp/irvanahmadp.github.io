import Link from "next/link";

const Footer = () => {
  return (
    <footer className="inset-0 top-auto flex h-16 items-center justify-center border-t border-slate-900 bg-slate-700 text-white dark:bg-slate-800">
      Copyright &copy; {new Date().getFullYear()}
      &nbsp;
      <Link href="/">Irvan Ahmad P</Link>
    </footer>
  );
};

export default Footer;
