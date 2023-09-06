import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";

const useRoutes = () => {
  const pathname = usePathname();

  return [
    {
      label: "Administration",
      href: "/administration",
      icon: Settings,
      active: pathname === "/administration",
    },
  ];
};

export default useRoutes;
