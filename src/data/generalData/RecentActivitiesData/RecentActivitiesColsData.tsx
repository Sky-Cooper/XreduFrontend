import { RoleTextImage } from "../../../generals/Types";
import name from "../../../assets/IconTextImages/DataGrid/Cols/name.svg";
import email from "../../../assets/IconTextImages/DataGrid/Cols/email.svg";
import dateTime from "../../../assets/IconTextImages/DataGrid/Cols/dateTime.svg";
import action from "../../../assets/IconTextImages/DataGrid/Cols/action.svg";
import eye from "../../../assets/IconTextImages/DataGrid/Cols/eye.svg";
import course from "../../../assets/IconTextImages/DataGrid/Cols/course.svg";

export const RecentActivitiesColsData: RoleTextImage[] = [
  {
    role: "SuperAdmin",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Email",
        image: email,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Action",
        image: action,
      },
      {
        text: "Last-Login",
        image: eye,
      },
    ],
  },
  {
    role: "Admin",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Email",
        image: email,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Action",
        image: action,
      },
      {
        text: "Last-Login",
        image: eye,
      },
    ],
  },
  {
    role: "Teacher",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Email",
        image: email,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Action",
        image: action,
      },
      {
        text: "Last-Login",
        image: eye,
      },
    ],
  },
  {
    role: "Student",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Email",
        image: email,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Action",
        image: action,
      },
      {
        text: "Course",
        image: course,
      },
    ],
  },
];
