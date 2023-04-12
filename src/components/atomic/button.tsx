import { Link } from "react-router-dom";

export function SeeMoreButton({ href }: { href: string }) {
  return (
    <div className="flex justify-end mt-2">
      <Link
        to={href}
        className="text-neutral-800 dark:text-neutral-400 font-semibold hover:underline"
      >
        See More
      </Link>
    </div>
  );
}
