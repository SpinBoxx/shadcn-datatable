import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";

const useRoutes = () => {
  const pathname = usePathname();

  return [
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ];
};

export default useRoutes;
