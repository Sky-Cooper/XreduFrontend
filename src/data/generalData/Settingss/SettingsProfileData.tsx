import { UserRole, LanguageOptions } from "../../../generals/Types";
import proImageTest from "../../../assets/Users/profileImages/profimage.webp";

type UserRoleDescription = {
  role: UserRole;
  description: string;
};

type UserRolePermissions = {
  role: UserRole;
  permissions: string[];
};

export const UserRoleDescriptionContent: UserRoleDescription[] = [
  {
    role: "SuperAdmin",
    description:
      "The Super Admin oversees system operations, manages users, and ensures platform security, playing a crucial role in maintaining efficient and smooth functionality.",
  },
  {
    role: "Admin",
    description:
      "The Super Admin oversees system operations, manages users, and ensures platform security, playing a crucial role in maintaining efficient and smooth functionality.",
  },
  {
    role: "Teacher",
    description:
      "The Super Admin oversees system operations, manages users, and ensures platform security, playing a crucial role in maintaining efficient and smooth functionality.",
  },
  {
    role: "Student",
    description:
      "The Super Admin oversees system operations, manages users, and ensures platform security, playing a crucial role in maintaining efficient and smooth functionality.",
  },
];

export const UserRolePermissionsContent: UserRolePermissions[] = [
  {
    role: "SuperAdmin",
    permissions: [
      "Manage all users and roles",
      "Configure system-wide settings and themes",
      "Access all reports and analytics",
      "Create and delete all platform content.",
    ],
  },
  {
    role: "Admin",
    permissions: [
      "Manage users within assigned groups",
      "Organize and edit course materials",
      "Monitor student and teacher interactions",
      "View reports for managed groups",
    ],
  },
  {
    role: "Teacher",
    permissions: [
      "Create and manage personal courses",
      "Track and manage student attendance",
      "View student performance analytics",
      "Grade assignments and provide feedback",
    ],
  },
  {
    role: "Student",
    permissions: [
      "Access assigned course content",
      "Submit assignments and take quizzes",
      "Join discussions with peers",
      "View grades and performance feedback",
    ],
  },
];

type UserProfileDataProps = {
  email: string;
  firstName: string;
  lastName: string;
  institution: string;
  profileImage: string;
  language: LanguageOptions;
  phoneNumber: string;
  password: string;
  status: "Active" | "Inactive";
  timeZone: string;
  joinDate: string;
  emailRecovery: string;
};

export const UserDataTest: UserProfileDataProps = {
  email: "mouadhoumada@gmail.com",
  firstName: "mouad",
  lastName: "houmada",
  institution: "Emsi",
  profileImage: proImageTest,
  language: "eng",
  phoneNumber: "+212628436082",
  password: "mouadhoumada1212",
  status: "Active",
  timeZone: "Morocco / Casablanca(GMT + 1)",
  joinDate: "September 14, 2024",
  emailRecovery: "mouadprr12@gmail.com",
};

export type TextNotificationProps = {
  text: string;
  state: boolean;
};

export const UserNotificationData: TextNotificationProps[] = [
  {
    text: "Teachers uploads",
    state: true,
  },

  {
    text: "New users",
    state: true,
  },
  {
    text: "Cours uploads",
    state: false,
  },
  {
    text: "System updates",
    state: true,
  },

  {
    text: "User role updates",
    state: true,
  },
  {
    text: "Cours uploads",
    state: false,
  },
  {
    text: "Support requests",
    state: true,
  },

  {
    text: "Storage",
    state: true,
  },
  {
    text: "User feedback",
    state: false,
  },
  {
    text: "Account updates",
    state: true,
  },

  {
    text: "Login attemps",
    state: true,
  },
  {
    text: "Courses updates",
    state: false,
  },
];
