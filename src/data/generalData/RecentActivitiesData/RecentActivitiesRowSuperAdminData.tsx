import { ProfileData } from "../../../generals/Types";
import proProfileImage from "../../../assets/Users/profileImages/profimage.webp";

export type RoleBasedRowData = {
  name: ProfileData;
  email: string;
  date: string;
  time: string;
  action: ActionProps;
  lastLogin: string;
};
export type ActionProps = {
  text: string;
  sign: "positive" | "negative" | "neutral";
};

export const RecentActivitiesRowSuperAdminData: RoleBasedRowData[] = [
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Mouad Houmada", image: proProfileImage },
    },
    email: "mouadhoumada@gmail.com",
    date: "Dec 2, 2024",
    time: "2:15 pm",
    action: {
      text: "Affecting a course",
      sign: "positive",
    },
    lastLogin: "1h 20min ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Sara Almahdi", image: proProfileImage },
    },
    email: "sara.almahdi@example.com",
    date: "Jan 9, 2024",
    time: "10:45 am",
    action: {
      text: "Uploading a lesson",
      sign: "positive",
    },
    lastLogin: "2h 45min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "John Doe", image: proProfileImage },
    },
    email: "johndoe@studentmail.com",
    date: "Jan 8, 2024",
    time: "3:30 pm",
    action: {
      text: "Sending feedback",
      sign: "neutral",
    },
    lastLogin: "4h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Laila Ahmed", image: proProfileImage },
    },
    email: "laila.ahmed@adminmail.com",
    date: "Jan 7, 2024",
    time: "5:15 pm",
    action: {
      text: "Deleting a course",
      sign: "negative",
    },
    lastLogin: "3 days ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Ahmad Ali", image: proProfileImage },
    },
    email: "ahmad.ali@teachermail.com",
    date: "Jan 6, 2024",
    time: "1:25 pm",
    action: {
      text: "Creating a new lesson",
      sign: "positive",
    },
    lastLogin: "5h 15min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "Emily Smith", image: proProfileImage },
    },
    email: "emilysmith@studentmail.com",
    date: "Jan 5, 2024",
    time: "4:10 pm",
    action: {
      text: "Failing an assignment",
      sign: "negative",
    },
    lastLogin: "7h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Khalid Rami", image: proProfileImage },
    },
    email: "khalid.rami@adminmail.com",
    date: "Jan 4, 2024",
    time: "12:30 pm",
    action: {
      text: "Adding a teacher",
      sign: "positive",
    },
    lastLogin: "5 days ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Mouad Houmada", image: proProfileImage },
    },
    email: "mouadhoumada@gmail.com",
    date: "Jan 10, 2024",
    time: "2:15 pm",
    action: {
      text: "Affecting a course",
      sign: "positive",
    },
    lastLogin: "1h 20min ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Sara Almahdi", image: proProfileImage },
    },
    email: "sara.almahdi@example.com",
    date: "Jan 9, 2024",
    time: "10:45 am",
    action: {
      text: "Uploading a lesson",
      sign: "positive",
    },
    lastLogin: "2h 45min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "John Doe", image: proProfileImage },
    },
    email: "johndoe@studentmail.com",
    date: "Jan 8, 2024",
    time: "3:30 pm",
    action: {
      text: "Sending feedback",
      sign: "neutral",
    },
    lastLogin: "4h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Laila Ahmed", image: proProfileImage },
    },
    email: "laila.ahmed@adminmail.com",
    date: "Jan 7, 2024",
    time: "5:15 pm",
    action: {
      text: "Deleting a course",
      sign: "negative",
    },
    lastLogin: "3 days ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Ahmad Ali", image: proProfileImage },
    },
    email: "ahmad.ali@teachermail.com",
    date: "Jan 6, 2024",
    time: "1:25 pm",
    action: {
      text: "Creating a new lesson",
      sign: "positive",
    },
    lastLogin: "5h 15min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "Emily Smith", image: proProfileImage },
    },
    email: "emilysmith@studentmail.com",
    date: "Jan 5, 2024",
    time: "4:10 pm",
    action: {
      text: "Failing an assignment",
      sign: "negative",
    },
    lastLogin: "7h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Khalid Rami", image: proProfileImage },
    },
    email: "khalid.rami@adminmail.com",
    date: "Jan 4, 2024",
    time: "12:30 pm",
    action: {
      text: "Adding a teacher",
      sign: "positive",
    },
    lastLogin: "5 days ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Mouad Houmada", image: proProfileImage },
    },
    email: "mouadhoumada@gmail.com",
    date: "Jan 10, 2024",
    time: "2:15 pm",
    action: {
      text: "Affecting a course",
      sign: "positive",
    },
    lastLogin: "1h 20min ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Sara Almahdi", image: proProfileImage },
    },
    email: "sara.almahdi@example.com",
    date: "Jan 9, 2024",
    time: "10:45 am",
    action: {
      text: "Uploading a lesson",
      sign: "positive",
    },
    lastLogin: "2h 45min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "John Doe", image: proProfileImage },
    },
    email: "johndoe@studentmail.com",
    date: "Jan 8, 2024",
    time: "3:30 pm",
    action: {
      text: "Sending feedback",
      sign: "neutral",
    },
    lastLogin: "4h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Laila Ahmed", image: proProfileImage },
    },
    email: "laila.ahmed@adminmail.com",
    date: "Jan 7, 2024",
    time: "5:15 pm",
    action: {
      text: "Deleting a course",
      sign: "negative",
    },
    lastLogin: "3 days ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Ahmad Ali", image: proProfileImage },
    },
    email: "ahmad.ali@teachermail.com",
    date: "Jan 6, 2024",
    time: "1:25 pm",
    action: {
      text: "Creating a new lesson",
      sign: "positive",
    },
    lastLogin: "5h 15min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "Emily Smith", image: proProfileImage },
    },
    email: "emilysmith@studentmail.com",
    date: "Jan 5, 2024",
    time: "4:10 pm",
    action: {
      text: "Failing an assignment",
      sign: "negative",
    },
    lastLogin: "7h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Khalid Rami", image: proProfileImage },
    },
    email: "khalid.rami@adminmail.com",
    date: "Jan 4, 2024",
    time: "12:30 pm",
    action: {
      text: "Adding a teacher",
      sign: "positive",
    },
    lastLogin: "5 days ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Mouad Houmada", image: proProfileImage },
    },
    email: "mouadhoumada@gmail.com",
    date: "Jan 10, 2024",
    time: "2:15 pm",
    action: {
      text: "Affecting a course",
      sign: "positive",
    },
    lastLogin: "1h 20min ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Sara Almahdi", image: proProfileImage },
    },
    email: "sara.almahdi@example.com",
    date: "Jan 9, 2024",
    time: "10:45 am",
    action: {
      text: "Uploading a lesson",
      sign: "positive",
    },
    lastLogin: "2h 45min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "John Doe", image: proProfileImage },
    },
    email: "johndoe@studentmail.com",
    date: "Jan 8, 2024",
    time: "3:30 pm",
    action: {
      text: "Sending feedback",
      sign: "neutral",
    },
    lastLogin: "4h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Laila Ahmed", image: proProfileImage },
    },
    email: "laila.ahmed@adminmail.com",
    date: "Jan 7, 2024",
    time: "5:15 pm",
    action: {
      text: "Deleting a course",
      sign: "negative",
    },
    lastLogin: "3 days ago",
  },
  {
    name: {
      role: "Teacher",
      fullNameImage: { text: "Ahmad Ali", image: proProfileImage },
    },
    email: "ahmad.ali@teachermail.com",
    date: "Jan 6, 2024",
    time: "1:25 pm",
    action: {
      text: "Creating a new lesson",
      sign: "positive",
    },
    lastLogin: "5h 15min ago",
  },
  {
    name: {
      role: "Student",
      fullNameImage: { text: "Emily Smith", image: proProfileImage },
    },
    email: "emilysmith@studentmail.com",
    date: "Jan 5, 2024",
    time: "4:10 pm",
    action: {
      text: "Failing an assignment",
      sign: "negative",
    },
    lastLogin: "7h ago",
  },
  {
    name: {
      role: "Admin",
      fullNameImage: { text: "Khalid Rami", image: proProfileImage },
    },
    email: "khalid.rami@adminmail.com",
    date: "Jan 4, 2024",
    time: "12:30 pm",
    action: {
      text: "Adding a teacher",
      sign: "positive",
    },
    lastLogin: "5 days ago",
  },
];
