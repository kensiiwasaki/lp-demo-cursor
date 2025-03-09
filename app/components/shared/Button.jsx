import Link from "next/link";

export default function Button({ children, href, className = "", ...props }) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const defaultClasses =
    "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500";
  const allClasses = `${baseClasses} ${className || defaultClasses}`;

  if (href) {
    return (
      <Link href={href} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
}
