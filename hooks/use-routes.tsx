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
      subMenu: [
        {
          label: "Tables statiques",
          description: "L'administration des tables statiques",
          href: "/administration/tables-statiques",
          active: pathname === "/administration/tables-statiques",
        },
        {
          label: "Tables utilisateurs",
          description: "L'administration des paramètres liés aux utilisateurs",
          href: "/administration/utilisateurs",
          active: pathname === "/administration/utilisateurs",
        },
      ],
    },
  ];
};

export default useRoutes;
