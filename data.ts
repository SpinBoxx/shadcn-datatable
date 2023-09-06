import { filterType, statusType } from "./types/filters";

export const status: statusType[] = [
  { id: 1, value: "new", label: "Nouvelle" },
  { id: 1, value: "en_cours", label: "En cours" },
];

export const filters: filterType[] = [
  {
    id: 1,
    code: "data",
    label: "Data",
    backgroundColor: "#FF5733",
    status: status.at(1)!,
  },
  {
    id: 2,
    code: "bancaire",
    label: "Bancaire",
    backgroundColor: "#33FF57",
    status: status.at(0)!,
  },
  {
    id: 3,
    code: "poste_travail",
    label: "Poste de travail",
    backgroundColor: "#5733FF",
    status: status.at(0)!,
  },
  {
    id: 4,
    code: "devops",
    label: "DevOps",
    backgroundColor: "#33FFFF",
    status: status.at(1)!,
  },
];
