import BottomSheet from "./components/BottomSheet";
import { defaultCategory, defaultService, services } from "./lib/constants";
import { getServiceName } from "./lib/utils";

function App() {
  const [page, setPage] = useState(
    services[defaultCategory][defaultService].path,
  );
  const [sheetOpen, setSheetOpen] = useState(false);

  const selectService = (path: string) => {
    setPage(path);
    setSheetOpen(false);
  };

  const serviceInitial = (name: string) => name.charAt(0).toUpperCase();

  const fallbackLogo = (path: string) =>
    `https://www.google.com/s2/favicons?domain=${encodeURIComponent(path)}&sz=64`;

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div className="flex items-center px-3 py-2 border-b border-gray-200 bg-white">
        <span className="text-sm font-medium text-gray-700">
          {getServiceName(page)}
        </span>
      </div>
      <iframe className="border-0 w-full flex-1 pb-7.5" src={page} />
      <BottomSheet
        open={sheetOpen}
        onToggle={() => setSheetOpen(true)}
        onClose={() => setSheetOpen(false)}
      >
        {Object.entries(services).map(([category, categoryServices]) => {
          const entries = Object.entries(categoryServices).filter(
            ([, service]) => service.enabled,
          );

          if (!entries.length) return null;

          return (
            <div className="mb-3" key={category}>
              <div className="text-xs uppercase text-gray-400 tracking-wide font-medium px-1 mb-2">
                {category}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {entries.map(([name, service]) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => selectService(service.path)}
                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-colors ${
                      page === service.path
                        ? "bg-blue-100 ring-2 ring-blue-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <img
                      src={fallbackLogo(service.path)}
                      alt={`${name} logo`}
                      className="w-6 h-6 object-contain"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.classList.remove(
                          "hidden",
                        );
                      }}
                    />
                    <span className="text-xl hidden">
                      {serviceInitial(name)}
                    </span>
                    <span className="text-xs text-gray-600 truncate w-full text-center">
                      {name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </BottomSheet>
    </div>
  );
}

export default App;
