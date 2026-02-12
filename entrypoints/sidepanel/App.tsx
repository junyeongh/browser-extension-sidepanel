import BottomSheet from "./components/BottomSheet";

type Service = {
  enabled: boolean;
  logo: string;
  path: string;
  category: string;
};

const services: Record<string, Service> = {
  // google
  keep: {
    enabled: true,
    logo: "",
    path: "https://keep.google.com",
    category: "productivity",
  },
  tasks: {
    enabled: true,
    logo: "",
    path: "https://tasks.google.com/embed/list/",
    category: "productivity",
  },
  // LLM
  claude: {
    enabled: true,
    logo: "",
    path: "https://claude.ai/",
    category: "LLM",
  },
  gemini: {
    enabled: true,
    logo: "",
    path: "https://gemini.google.com/app",
    category: "LLM",
  },
  chatGPT: {
    enabled: false,
    logo: "",
    path: "https://gemini.google.com/app",
    category: "LLM",
  },
} as const;

const defaultService = "keep";

function getServiceName(path: string): string {
  const entry = Object.entries(services).find(([, s]) => s.path === path);
  return entry ? entry[0].charAt(0).toUpperCase() + entry[0].slice(1) : "";
}

function App() {
  const [page, setPage] = useState(services[defaultService].path);

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center px-3 py-2 border-b border-gray-200 bg-white">
        <span className="text-sm font-medium text-gray-700">
          {getServiceName(page)}
        </span>
      </div>
      <iframe className="border-0 w-full flex-1" src={page} />
      <BottomSheet>
        {Object.entries(
          Object.entries(services)
            .filter(([, service]) => service.enabled)
            .reduce<Record<string, [string, Service][]>>((groups, entry) => {
              const category = entry[1].category;
              (groups[category] ??= []).push(entry);
              return groups;
            }, {}),
        ).map(([category, entries]) => (
          <div className="mb-3" key={category}>
            <div className="text-xs uppercase text-gray-400 tracking-wide font-medium px-1 mb-2">
              {category}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {entries.map(([name, service]) => (
                <button
                  type="button"
                  key={name}
                  onClick={() => setPage(service.path)}
                  className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-colors ${
                    page === service.path
                      ? "bg-blue-100 ring-2 ring-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-xl">
                    {name[0].toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-600 truncate w-full text-center">
                    {name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </BottomSheet>
    </div>
  );
}

export default App;
