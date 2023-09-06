export type filterType = {
  id: number;
  code: string;
  label: string;
  backgroundColor: string;
  status: statusType;
};

export type statusType = {
  id: number;
  value: string;
  label: string;
};
