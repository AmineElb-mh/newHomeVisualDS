import { useNavigate } from "react-router";

// Simple brand chooser landing page: pick De Standaard (/ds) or
// De Telegraaf (/tel). Logos are served from /public (copied from the
// chameleon theme packages, since deep svg imports from those packages
// are blocked by their "exports" field).
export default function StartRoute() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-100 px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold text-neutral-900">Kies een prototype</h1>
        <p className="mt-2 text-neutral-500">Selecteer een merk om verder te gaan</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <button
          type="button"
          onClick={() => navigate("/ds")}
          className="group flex flex-col items-center justify-center gap-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all p-10 cursor-pointer"
        >
          <img src="/logo-ds-main.svg" alt="De Standaard" className="h-9 w-auto" />
        </button>

        <button
          type="button"
          onClick={() => navigate("/tel")}
          className="group flex flex-col items-center justify-center gap-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all p-10 cursor-pointer"
        >
          <img src="/logo-tel-main.svg" alt="De Telegraaf" className="h-9 w-auto" />
        </button>
      </div>
    </div>
  );
}
