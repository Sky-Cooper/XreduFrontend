import { ContainerContentProps } from "../../../generals/Types";
import courses from "../../../assets/Containers/courses.svg";

export const CoursesContent: ContainerContentProps[] = [
  {
    size: "large",
    icon: courses,
    title: "Courses Uploads",
    labelsDatasets: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Teachers",
          data: [0, 50, 100, 85, 95, 150, 210, 280, 320, 350, 320, 375],
          borderColor: "#CB99FA",
          backgroundColor: "#CB99FA",

          pointRadius: 5,
        },
        {
          label: "Courses",
          data: [2, 4, 5, 5, 10, 12, 15, 18, 25, 32, 40, 42],
          borderColor: "#C2C5CC",
          backgroundColor: "#C2C5CC",

          pointRadius: 5,
        },
      ],
    },
  },

  {
    size: "largemid",
    icon: courses,
    title: "Total courses",
    main: "176 courses",
    reference: "of 176 total",
    percentage: 100,
  },
  {
    size: "largemid",
    icon: courses,
    title: "Active courses",
    main: "66 courses",
    reference: "of 176 total",
    percentage: 42,
  },
  {
    size: "largemid",
    icon: courses,
    title: "Inactive courses",
    main: "95 courses",
    reference: "of 176 total",
    percentage: 59,
  },
  {
    size: "largemid",
    icon: courses,
    title: "Pending courses",
    main: "25 courses",
    reference: "of 176 total",
    percentage: 5,
  },
];
