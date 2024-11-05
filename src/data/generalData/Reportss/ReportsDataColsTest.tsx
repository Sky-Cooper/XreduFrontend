import dateTime from "../../../assets/IconTextImages/DataGrid/Cols/dateTime.svg";
import action from "../../../assets/IconTextImages/DataGrid/Cols/action.svg";
import name from "../../../assets/IconTextImages/DataGrid/Cols/name.svg";
import institution from "../../../assets/IconTextImages/DataGrid/Cols/institution.svg";
import usage from "../../../assets/IconTextImages/DataGrid/Cols/usage.svg";
import { RoleTextImage } from "../../../generals/Types";

export const ReportColsData: RoleTextImage[] = [
  {
    role: "SuperAdmin",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Usage",
        image: usage,
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
        text: "Institution",
        image: institution,
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
        text: "Usage",
        image: usage,
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
        text: "Institution",
        image: institution,
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
        text: "Usage",
        image: usage,
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
        text: "Institution",
        image: institution,
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
        text: "Usage",
        image: usage,
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
        text: "Institution",
        image: institution,
      },
    ],
  },
];
