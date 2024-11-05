import { ContainerContentProps } from "../../../generals/Types";
import users from "../../../assets/Containers/users.svg";

export const AdminContentTest: ContainerContentProps[] = [
  {
    size: "large",
    icon: users,
    title: "Admins subscription",
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
          label: "Admins",
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
    icon: users,
    title: "Total admins",
    main: "176 Admins",
    reference: "of 176 total",
    percentage: 100,
  },
  {
    size: "largemid",
    icon: users,
    title: "Active admins",
    main: "66 Admins",
    reference: "of 176 total",
    percentage: 42,
  },
  {
    size: "largemid",
    icon: users,
    title: "Inactive admins",
    main: "95 Admins",
    reference: "of 176 total",
    percentage: 59,
  },
  {
    size: "largemid",
    icon: users,
    title: "Pending admins",
    main: "25 Admins",
    reference: "of 176 total",
    percentage: 5,
  },
];
