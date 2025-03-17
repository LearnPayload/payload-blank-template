import Link from "next/link";

export const VisitSite = () => {
  return (
    <Link
      className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-secondary btn--withoutPopup"
      href="/"
    >
      <span>Visit Site</span>
    </Link>
  );
};
