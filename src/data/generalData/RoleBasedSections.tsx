import { RoleSections } from "../../generals/Types";

export enum UserRoleEnum {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export type UserAuthoritiesProps = {
  [key in UserRoleEnum]: UserRoleEnum[];
};

export const UserRoleAuthorities: UserAuthoritiesProps = {
  [UserRoleEnum.SUPER_ADMIN]: [
    UserRoleEnum.ADMIN,
    UserRoleEnum.TEACHER,
    UserRoleEnum.STUDENT,
  ],
  [UserRoleEnum.ADMIN]: [UserRoleEnum.TEACHER, UserRoleEnum.STUDENT],
  [UserRoleEnum.TEACHER]: [UserRoleEnum.STUDENT],
  [UserRoleEnum.STUDENT]: [UserRoleEnum.TEACHER],
};

export const RoleBasedSections: RoleSections[] = [
  {
    role: "SuperAdmin",
    sections: [
      {
        label: "Dashboard",
        subsections: [
          { text: "Overview", path: "/dashboard/overview" },
          { text: "Recent Activities", path: "/dashboard/recentactivities" },
        ],
      },
      {
        label: "Users",
        subsections: [
          { text: "Admins", path: "/users/admins" },
          { text: "Teachers", path: "/users/teachers" },
          { text: "Students", path: "/users/students" },
        ],
      },
      {
        label: "Courses",
        subsections: [
          { text: "Overview", path: "/courses/overview" },
          { text: "Details", path: "/courses/details" },
        ],
      },
      {
        label: "Report",
        subsections: [
          { text: "User Activity Report", path: "/reports/activity" },
          { text: "Performance", path: "/reports/performance" },
        ],
      },
      {
        label: "Settings",
        subsections: [
          { text: "Profile", path: "/settings/profile" },
          { text: "My Details", path: "/settings/mydetails" },
          { text: "Password", path: "/settings/password" },
          { text: "Notification", path: "/settings/notification" },
        ],
      },
    ],
  },
  {
    role: "Admin",
    sections: [
      {
        label: "Dashboard",
        subsections: [
          { text: "Overview", path: "/dashboard/overview" },
          { text: "Recent Activities", path: "/dashboard/recentactivities" },
        ],
      },
      {
        label: "Users",
        subsections: [
          { text: "Teachers", path: "/users/teachers" },
          { text: "Students", path: "/users/students" },
        ],
      },
      {
        label: "Courses",
        subsections: [
          { text: "Overview", path: "/courses/overview" },
          { text: "Details", path: "/courses/details" },
        ],
      },
      {
        label: "Report",
        subsections: [
          { text: "User Activity Report", path: "/reports/activity" },
          { text: "Performance", path: "/reports/performance" },
        ],
      },
      {
        label: "Settings",
        subsections: [
          { text: "Profile", path: "/settings/profile" },
          { text: "My Details", path: "/settings/mydetails" },
          { text: "Password", path: "/settings/password" },
          { text: "Notification", path: "/settings/notification" },
        ],
      },
    ],
  },
  {
    role: "Teacher",
    sections: [
      {
        label: "Dashboard",
        subsections: [
          { text: "Overview", path: "/dashboard/overview" },
          { text: "Recent Activities", path: "/dashboard/recentactivities" },
        ],
      },
      {
        label: "Students",
        subsections: [
          { text: "Overview", path: "/students/overview" },
          { text: "Details", path: "/students/details" },
        ],
      },
      {
        label: "Courses",
        subsections: [
          { text: "Overview", path: "/courses/overview" },
          { text: "Lessons", path: "/courses/lessons" },
          { text: "Add a Lesson", path: "/courses/addlesson" },
        ],
      },
      {
        label: "Report",
        subsections: [
          { text: "Activity Report", path: "/reports/activity" },
          { text: "Send a Report", path: "/reports/sendreport" },
          { text: "Report a Probleme", path: "/reports/reportproblem" },
        ],
      },
      {
        label: "Settings",
        subsections: [
          { text: "Profile", path: "/settings/profile" },
          { text: "My Details", path: "/settings/mydetails" },
          { text: "Password", path: "/settings/password" },
          { text: "Notification", path: "/settings/notification" },
        ],
      },
    ],
  },
  {
    role: "Student",
    sections: [
      {
        label: "Dashboard",
        subsections: [
          { text: "Overview", path: "/dashboard/overview" },
          { text: "Recent Activities", path: "/dashboard/recentactivities" },
        ],
      },
      {
        label: "Teachers",
        subsections: [
          { text: "Overview", path: "/teachers/overview" },
          { text: "Details", path: "/teachers/details" },
        ],
      },
      {
        label: "Courses",
        subsections: [
          { text: "Overview", path: "/courses/overview" },
          { text: "Assigned Lessons", path: "/courses/assignedlessons" },
        ],
      },
      {
        label: "Report",
        subsections: [
          { text: "Activity Report", path: "/reports/activity" },
          { text: "Send a Report", path: "/reports/sendreport" },
          { text: "Report a Problem", path: "/reports/reportproblem" },
        ],
      },
      {
        label: "Settings",
        subsections: [
          { text: "Profile", path: "/settings/profile" },
          { text: "My Details", path: "/settings/mydetails" },
          { text: "Password", path: "/settings/password" },
          { text: "Notification", path: "/settings/notification" },
        ],
      },
    ],
  },
];

export const rolePermissions = {
  SuperAdmin: [
    "/dashboard/overview",
    "/dashboard/recentactivities",
    "/users/admins",
    "/users/teachers",
    "/users/students",
    "/courses/overview",
    "/courses/details",
    "/reports/activity",
    "/reports/performance",
    "/settings/profile",
    "/settings/mydetails",
    "/settings/password",
    "/settings/notification",
  ],
  Admin: [
    "/users/teachers",
    "/users/students",
    "/dashboard/overview",
    "/dashboard/recentactivities",
    "/courses/overview",
    "/courses/details",
    "/reports/activity",
    "/reports/performance",
    "/settings/profile",
    "/settings/mydetails",
    "/settings/password",
    "/settings/notification",
  ],
  Teacher: [
    "/students/overview",
    "/students/details",
    "/dashboard/overview",
    "/dashboard/recentactivities",
    "/courses/overview",
    "/courses/lessons",
    "/courses/addlesson",
    "/reports/activity",
    "/reports/sendreport",
    "/reports/reportproblem",
    "/settings/profile",
    "/settings/mydetails",
    "/settings/password",
    "/settings/notification",
  ],
  Student: [
    "/teachers/overview",
    "/teachers/details",
    "/dashboard/overview",
    "/dashboard/recentactivities",
    "/courses/overview",
    "/courses/assignedlessons",
    "/reports/activity",
    "/reports/sendreport",
    "/reports/reportproblem",
    "/settings/profile",
    "/settings/mydetails",
    "/settings/password",
    "/settings/notification",
  ],
};
