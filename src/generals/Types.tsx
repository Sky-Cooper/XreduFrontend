export type UserRole = "SuperAdmin" | "Admin" | "Student" | "Teacher";
export type ModeState = "light" | "dark";
export type SizeState = "small" | "mid" | "large" | "largemid";
export type State = "enabled" | "disabled";

export type LanguageOptions = "eng" | "fr";

export type SubSectionsProps = {
  textPaths: TextPath;
  state: State;
};

export type ImageText = {
  text: string;
  image: string;
};

export type TextPath = {
  text: string;
  path: string;
};

export type Section = {
  label: string;
  subsections: TextPath[];
};

export type RoleSections = {
  role: UserRole;
  sections: Section[];
};

export type DataSetsProps = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: boolean;
  pointRadius?: number;
};

export type LabelsAndDataSetsProps = {
  labels: string[];
  datasets: DataSetsProps[];
};

export type ContainerContentProps = {
  size: SizeState;
  icon: string;
  title: string;
  main?: string;
  reference?: string;
  percentage?: number;
  labelsDatasets?: LabelsAndDataSetsProps;
  percentageLines?: PercentageLinesProps[];
};

export type PercentageLinesProps = {
  institutionImage: string;
  institutionName: string;
  percentage: number;
};

export type RoleTextImage = {
  role: UserRole;
  textIcon: ImageText[];
};

export type ProfileData = {
  role: UserRole;
  fullNameImage: ImageText;
};

export type ProtectedRouteProps = {
  allowedRoutes: string[];
};

export type PercentageProps = {
  enabledFilledPercentage: number;
  className?: string;
  width?: number;
};

export type FaqsProps = {
  question: string;
  answer: string;
};
