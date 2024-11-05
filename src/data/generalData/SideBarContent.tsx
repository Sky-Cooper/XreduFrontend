import { UserRole } from "../../generals/Types";
import lightEnabledDash from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size dashboard enable icon.svg";
import lightDisabledDash from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size dashboard disabled icon.svg";
import darkDisabledDash from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size dashboard disabled icon.svg";
import lightEnabledUsers from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size users enabled icon.svg";
import lightDisabledUsers from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size users disabled icon.svg";
import darkDisabledUsers from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size users disabled icon.svg";
import lightEnabledCourses from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size courses enable icon.svg";
import lightDisabledCourses from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size courses disabled icon.svg";
import darkDisabledCourses from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size courses disabled icon.svg";
import lightEnabledReport from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size report enable icon.svg";
import lightDisabledReport from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size report disabled icon.svg";
import darkDisabledReport from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size report disabled icon.svg";
import lightEnabledSettings from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size settings enable icon.svg";
import lightDisabledSettings from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size settings disabled icon.svg";
import darkDisabledSettings from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size settings disabled icon.svg";
import lightEnabledLogout from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Enable icons/light big size log out enable icon.svg";
import lightDisabledLogout from "../../assets/IconTextImages/SideBarIcons/Light mode icons/Disabled icons/light big size log out disabled icon.svg";
import darkDisabledLogout from "../../assets/IconTextImages/SideBarIcons/Dark mode icons/Disabled icons/dark big size log out disabled icon.svg";
import { RoleSections } from "../../generals/Types";

type IconStates = {
  lightEnabled: string;
  lightDisabled: string;
  darkDisabled: string;
};

type SidebarItem = {
  text: string;
  path: string;
  icons: IconStates;
};

export const SideBarContent: Record<UserRole, SidebarItem[]> = {
  SuperAdmin: [
    {
      text: "Dashboard",
      path: "/dashboard/overview",
      icons: {
        lightEnabled: lightEnabledDash,
        lightDisabled: lightDisabledDash,
        darkDisabled: darkDisabledDash,
      },
    },
    {
      text: "Users",
      path: "/users/admins",
      icons: {
        lightEnabled: lightEnabledUsers,
        lightDisabled: lightDisabledUsers,
        darkDisabled: darkDisabledUsers,
      },
    },

    {
      text: "Courses",
      path: "/courses/overview",
      icons: {
        lightEnabled: lightEnabledCourses,
        lightDisabled: lightDisabledCourses,
        darkDisabled: darkDisabledCourses,
      },
    },

    {
      text: "Report",
      path: "/reports/activity",
      icons: {
        lightEnabled: lightEnabledReport,
        lightDisabled: lightDisabledReport,
        darkDisabled: darkDisabledReport,
      },
    },

    {
      text: "Settings",
      path: "/settings/profile",
      icons: {
        lightEnabled: lightEnabledSettings,
        lightDisabled: lightDisabledSettings,
        darkDisabled: darkDisabledSettings,
      },
    },

    {
      text: "Logout",
      path: "/logout",
      icons: {
        lightEnabled: lightEnabledLogout,
        lightDisabled: lightDisabledLogout,
        darkDisabled: darkDisabledLogout,
      },
    },
  ],

  Admin: [
    {
      text: "Dashboard",
      path: "/dashboard/overview",
      icons: {
        lightEnabled: lightEnabledDash,
        lightDisabled: lightDisabledDash,
        darkDisabled: darkDisabledDash,
      },
    },
    {
      text: "Users",
      path: "/users/teachers",
      icons: {
        lightEnabled: lightEnabledUsers,
        lightDisabled: lightDisabledUsers,
        darkDisabled: darkDisabledUsers,
      },
    },

    {
      text: "Courses",
      path: "/courses/overview",
      icons: {
        lightEnabled: lightEnabledCourses,
        lightDisabled: lightDisabledCourses,
        darkDisabled: darkDisabledCourses,
      },
    },

    {
      text: "Report",
      path: "/reports/activity",
      icons: {
        lightEnabled: lightEnabledReport,
        lightDisabled: lightDisabledReport,
        darkDisabled: darkDisabledReport,
      },
    },

    {
      text: "Settings",
      path: "/settings/profile",
      icons: {
        lightEnabled: lightEnabledSettings,
        lightDisabled: lightDisabledSettings,
        darkDisabled: darkDisabledSettings,
      },
    },

    {
      text: "Logout",
      path: "/logout",
      icons: {
        lightEnabled: lightEnabledLogout,
        lightDisabled: lightDisabledLogout,
        darkDisabled: darkDisabledLogout,
      },
    },
  ],

  Teacher: [
    {
      text: "Dashboard",
      path: "/dashboard/overview",
      icons: {
        lightEnabled: lightEnabledDash,
        lightDisabled: lightDisabledDash,
        darkDisabled: darkDisabledDash,
      },
    },
    {
      text: "Students",
      path: "/students/overview",
      icons: {
        lightEnabled: lightEnabledUsers,
        lightDisabled: lightDisabledUsers,
        darkDisabled: darkDisabledUsers,
      },
    },

    {
      text: "Courses",
      path: "/courses/overview",
      icons: {
        lightEnabled: lightEnabledCourses,
        lightDisabled: lightDisabledCourses,
        darkDisabled: darkDisabledCourses,
      },
    },

    {
      text: "Report",
      path: "/reports/activity",
      icons: {
        lightEnabled: lightEnabledReport,
        lightDisabled: lightDisabledReport,
        darkDisabled: darkDisabledReport,
      },
    },

    {
      text: "Settings",
      path: "/settings/profile",
      icons: {
        lightEnabled: lightEnabledSettings,
        lightDisabled: lightDisabledSettings,
        darkDisabled: darkDisabledSettings,
      },
    },

    {
      text: "Logout",
      path: "/logout",
      icons: {
        lightEnabled: lightEnabledLogout,
        lightDisabled: lightDisabledLogout,
        darkDisabled: darkDisabledLogout,
      },
    },
  ],

  Student: [
    {
      text: "Dashboard",
      path: "/dashboard/overview",
      icons: {
        lightEnabled: lightEnabledDash,
        lightDisabled: lightDisabledDash,
        darkDisabled: darkDisabledDash,
      },
    },
    {
      text: "Teachers",
      path: "/teachers/overview",
      icons: {
        lightEnabled: lightEnabledUsers,
        lightDisabled: lightDisabledUsers,
        darkDisabled: darkDisabledUsers,
      },
    },

    {
      text: "Courses",
      path: "/courses/overview",
      icons: {
        lightEnabled: lightEnabledCourses,
        lightDisabled: lightDisabledCourses,
        darkDisabled: darkDisabledCourses,
      },
    },

    {
      text: "Report",
      path: "/reports/activity",
      icons: {
        lightEnabled: lightEnabledReport,
        lightDisabled: lightDisabledReport,
        darkDisabled: darkDisabledReport,
      },
    },

    {
      text: "Settings",
      path: "/settings/profile",
      icons: {
        lightEnabled: lightEnabledSettings,
        lightDisabled: lightDisabledSettings,
        darkDisabled: darkDisabledSettings,
      },
    },

    {
      text: "Logout",
      path: "/logout",
      icons: {
        lightEnabled: lightEnabledLogout,
        lightDisabled: lightDisabledLogout,
        darkDisabled: darkDisabledLogout,
      },
    },
  ],
};
