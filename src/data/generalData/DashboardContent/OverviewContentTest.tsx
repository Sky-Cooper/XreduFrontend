import { ContainerContentProps } from "../../../generals/Types";
import emsi from "../../../assets/ImagesForTest/emsi.jpg";
import courses from "../../../assets/Containers/courses.svg";
import users from "../../../assets/Containers/users.svg";
import institution from "../../../assets/Containers/institution.svg";

export const OverviewContentTest: ContainerContentProps[] = [
  {
    size: "small",
    icon: users,
    title: "Admins",
    main: "1205 Students",
    reference: "of 2450 total",
    percentage: 70,
  },
  {
    size: "small",
    icon: users,
    title: "Teachers",
    main: "1205 Students",
    reference: "of 2450 total",
    percentage: 50,
  },
  {
    size: "small",
    icon: users,
    title: "Students",
    main: "1205 Students",
    reference: "of 2450 total",
    percentage: 50,
  },
  {
    size: "large",
    icon: courses,
    title: "Courses uploaded",
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
          label: "Courses",
          data: [0, 50, 100, 85, 95, 150, 210, 280, 320, 350, 320, 375],
          borderColor: "#CB99FA",
          backgroundColor: "#CB99FA",

          pointRadius: 5,
        },
        {
          label: "Institutions",
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
    icon: institution,
    title: "Subs by schools",
    percentageLines: [
      {
        institutionImage: emsi,
        institutionName: "Emsi",
        percentage: 50,
      },
      {
        institutionImage: emsi,
        institutionName: "Ensa",
        percentage: 20,
      },
      {
        institutionImage: emsi,
        institutionName: "Um5",
        percentage: 10,
      },
      {
        institutionImage: emsi,
        institutionName: "Um6",
        percentage: 5,
      },
      {
        institutionImage: emsi,
        institutionName: "Emi",
        percentage: 15,
      },
      {
        institutionImage: emsi,
        institutionName: "Emi",
        percentage: 50,
      },
      {
        institutionImage: emsi,
        institutionName: "Um5",
        percentage: 20,
      },
      {
        institutionImage: emsi,
        institutionName: "Um6",
        percentage: 10,
      },
      {
        institutionImage: emsi,
        institutionName: "Emsi",
        percentage: 5,
      },
      {
        institutionImage: emsi,
        institutionName: "Al akhawayn",
        percentage: 15,
      },
      {
        institutionImage: emsi,
        institutionName: "Ensam",
        percentage: 50,
      },
      {
        institutionImage: emsi,
        institutionName: "Fst",
        percentage: 20,
      },
      {
        institutionImage: emsi,
        institutionName: "Ispits",
        percentage: 10,
      },
      {
        institutionImage: emsi,
        institutionName: "Emi",
        percentage: 5,
      },
      {
        institutionImage: emsi,
        institutionName: "Emsi",
        percentage: 15,
      },
    ],
  },
];
