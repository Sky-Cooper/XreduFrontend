import { RoleTextImage } from "../../../generals/Types";
import name from "../../../assets/IconTextImages/DataGrid/Cols/name.svg";
import dateTime from "../../../assets/IconTextImages/DataGrid/Cols/dateTime.svg";
import course from "../../../assets/IconTextImages/DataGrid/Cols/course.svg";
import cath from "../../../assets/IconTextImages/DataGrid/Cols/cath.svg";
import inst from "../../../assets/IconTextImages/DataGrid/Cols/institution.svg";

export const CoursesColsData: RoleTextImage[] = [
  {
    role: "SuperAdmin",
    textIcon: [
      {
        text: "Name",
        image: name,
      },
      {
        text: "Cours Title",
        image: course,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Field",
        image: cath,
      },
      {
        text: "Institution",
        image: inst,
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
        text: "Cours Title",
        image: course,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Field",
        image: cath,
      },
      {
        text: "Institution",
        image: inst,
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
        text: "Cours Title",
        image: course,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Field",
        image: cath,
      },
      {
        text: "Institution",
        image: inst,
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
        text: "Cours Title",
        image: course,
      },
      {
        text: "Date-Time",
        image: dateTime,
      },
      {
        text: "Field",
        image: cath,
      },
      {
        text: "Institution",
        image: inst,
      },
    ],
  },
];
