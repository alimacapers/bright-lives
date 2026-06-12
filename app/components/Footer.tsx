import SunMark from "./SunMark";

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ backgroundColor: "#0e2b1c", borderColor: "#1a4731" }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <SunMark size={24} color="#4a7a5a" aria-hidden={true} />
            <p
              className="text-xs"
              style={{ color: "#4a7a5a" }}
            >
              &copy; {new Date().getFullYear()} Bright Lives Community Support LLC. All rights reserved.
            </p>
          </div>

          {/* Credentials */}
          <p
            className="text-xs text-center sm:text-right"
            style={{ color: "#4a7a5a" }}
          >
            DBHDS #18771 &middot; NPI: 1609718824
          </p>
        </div>
      </div>
    </footer>
  );
}
