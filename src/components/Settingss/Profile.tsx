import React from "react";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import TopSection from "../TopSection";
import { UserRole, LanguageOptions } from "../../generals/Types";
import { SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import testImage from "../../assets/Users/profileImages/profimage.webp";
import { useTheme } from "../SwitchMode/ThemeContext";
import { SubmitHandler, useForm } from "react-hook-form";
import lightMore from "../../assets/IconTextImages/widgets/lightMode/more.svg";
import darkMore from "../../assets/IconTextImages/widgets/darkMode/more.svg";
import mrcFlag from "../../assets/ImagesForTest/morocco flag.png";
import passwordEye from "../../assets/Containers/passwordEye.svg";
import "./SwitchMode.css";
import {
  UserRoleDescriptionContent,
  UserRolePermissionsContent,
  UserDataTest,
  UserNotificationData,
  TextNotificationProps,
} from "../../data/generalData/Settingss/SettingsProfileData";
import Footer from "../Footer";

type ProfileFormFields = {
  email: string;
  firstName: string;
  lastName: string;
  institution: string;
  profileImage: File | string;
  role: UserRole;
  language: LanguageOptions;
  permissions: string[];
  phoneNumber: string;
  emailRecovery: string;
  currentPassword: string;
  newPassword: string;
  confirmedPassword: string;
  notifications: TextNotificationProps[];
};

//TODO : display the coutry flag based on the phoneNumber entered
//TODO : handle the delete feature , fetch the backend data after connecting
//TODO : only update the updated fields , not the whole form
//TODO : make sure to check if the current password is correct

function Profile({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const { theme } = useTheme();

  const basedRoleDescription = UserRoleDescriptionContent.find(
    (r) => r.role === role
  )?.description;

  const basedRolePermissions = UserRolePermissionsContent.find(
    (r) => r.role === role
  )?.permissions;

  const [permissionClicked, setPermissionClicked] = React.useState(false);

  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];

  const basedRoleSettingsSection = basedRoleSections[4];
  const sectionTitle = basedRoleSettingsSection?.label;
  const subSections = basedRoleSettingsSection?.subsections;
  const location = useLocation();
  const currentPath = location.pathname;

  const pageHeaderDescriptions = [
    {
      header: "Profile",
      description: "Update your photo and your profile informations here .",
    },
    {
      header: "Details",
      description: "Update your personal details data here  .",
    },
    {
      header: "Password",
      description: "Update your personal password here .",
    },
    {
      header: "Notification",
      description: "Update your notifications settings here .",
    },
  ];

  const currentPageInfos = pageHeaderDescriptions.find((item) =>
    currentPath.includes(item.header.toLocaleLowerCase())
  );

  const currentPageHeader = currentPageInfos?.header;
  const currentPageDescription = currentPageInfos?.description;

  const settingsSubsection: SubSectionsProps[] = subSections.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormFields>({
    defaultValues: {
      email: UserDataTest.email,
      firstName: UserDataTest.firstName,
      language: UserDataTest.language,
      lastName: UserDataTest.lastName,
      phoneNumber: UserDataTest.phoneNumber,
      profileImage: UserDataTest.profileImage,
      emailRecovery: UserDataTest.emailRecovery,
      notifications: UserNotificationData.map((notification) => ({
        text: notification.text,
        state: notification.state,
      })),
    },
  });

  const [newImage, setNewImage] = React.useState<string | null>(null);

  const onSubmit: SubmitHandler<ProfileFormFields> = async (data) => {
    if (data.newPassword) {
      if (UserDataTest.password != data.currentPassword) {
        alert("Please enter the correct current password.");
        return;
      }
      if (data.newPassword !== data.confirmedPassword) {
        alert("New password and confirm password do not match.");
        return;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.profileImage instanceof File) {
      const imageUrl = URL.createObjectURL(data.profileImage as Blob);
      setNewImage(imageUrl);
    } else if (typeof data.profileImage === "string") {
      setNewImage(data.profileImage);
    }
    const updatedData = {
      ...data,
      profileImage: newImage || data.profileImage,
      notifications: UserNotifData,
    };

    console.log("Final Submission Data:", updatedData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl);
      setValue("profileImage", file);
    }
  };

  React.useEffect(() => {
    return () => {
      if (newImage) {
        URL.revokeObjectURL(newImage);
      }
    };
  }, [newImage]);

  const [UserNotifData, setUserNotifData] =
    React.useState(UserNotificationData);

  const chunkedData = [];

  for (let i = 0; i < UserNotifData.length; i += 3) {
    chunkedData.push(UserNotifData.slice(i, i + 3));
  }

  function handleNotificationState(index: number) {
    setUserNotifData((prevNotifData) => {
      const newNotifData = [...prevNotifData];
      newNotifData[index].state = !newNotifData[index].state;
      return newNotifData;
    });
    setValue("notifications", UserNotifData);
  }

  return (
    <div className="w-full grid grid-col-12 gap-x-[24px] gap-y-[32px] h-full">
      <TopSection
        profileImage={testImage}
        SubSections={settingsSubsection}
        sectionTitle={sectionTitle}
      />
      <div className="flex flex-col gap-[16px]">
        <h1 className="font-bold text-dark-back font-grot text-huge dark:text-soft-light-back ">
          {currentPageHeader}
        </h1>
        <p className="text-base text-gray-500 opacity-60 font-regular font-grot dark:text-gray-200">
          {currentPageDescription}
        </p>
      </div>
      <form
        className="relative md:col-span-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-end w-full">
          <button
            disabled={isSubmitting}
            type="submit"
            className=" mb-[32px] py-[16px] px-[32px] rounded-[25px] dark:bg-dark-primary-color  bg-light-primary-color text-base font-bold font-grot text-soft-light-back"
          >
            {isSubmitting ? "Loading ..." : "Submit"}
          </button>
        </div>
        <div className="relative md:col-span-12 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500 px-[32px] py-[32px]">
          {currentPath === "/settings/profile" && (
            <>
              <div className=" relative flex flex-row w-full  items-center mb-[32px] gap-[64px]">
                <div className="flex flex-row items-center justify-between w-1/2">
                  <label
                    htmlFor="email"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Email
                  </label>

                  <input
                    {...register("email", {
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "You should enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                  />
                  {errors.email && (
                    <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-row items-center justify-between w-1/2 ">
                  <label
                    htmlFor="role"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Role
                  </label>
                  <div
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                  >
                    {role.toLocaleLowerCase()} user
                  </div>
                </div>
              </div>

              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px] "></div>
              <div className="relative w-full flex flex-row gap-[64px] mb-[32px] items-center">
                <div className="relative flex flex-row items-center justify-between w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Firstname
                  </label>
                  <input
                    {...register("firstName", {
                      maxLength: {
                        value: 20,
                        message: "You should enter a valid first name",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "The first name should not include any number",
                      },
                    })}
                    type="text"
                    id="firstName"
                    placeholder="Type your first name..."
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                  />
                  {errors.firstName && (
                    <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-row items-center justify-between w-1/2">
                  <label
                    htmlFor="language"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Language
                  </label>

                  <select
                    {...register("language")}
                    id="language"
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular border w-[300px]
                 border-gray-400 rounded-[10px] py-[8px] pl-[16px]"
                  >
                    <option value="eng">English</option>
                    <option value="fr">French</option>
                  </select>
                </div>
              </div>

              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="relative w-full flex flex-row gap-[64px]  items-center mb-[32px]">
                <div className="relative flex flex-row items-center justify-between w-1/2">
                  <label
                    htmlFor="lastName"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Lastname
                  </label>

                  <input
                    {...register("lastName", {
                      maxLength: {
                        value: 20,
                        message: "You should put a valid last name here ",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "The last name should not include any number",
                      },
                    })}
                    type="text"
                    id="lastName"
                    placeholder="Type your last name..."
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular border w-[300px]
                     border-gray-400 rounded-[10px] py-[8px] pl-[16px]"
                  />
                  {errors.lastName && (
                    <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className="relative flex flex-row items-center justify-between w-1/2 ">
                  <label
                    htmlFor="permissions"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Permissions
                  </label>
                  {basedRolePermissions && permissionClicked === false && (
                    <div
                      onClick={() =>
                        setPermissionClicked(
                          (prevPermissionClicked) => !prevPermissionClicked
                        )
                      }
                      className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular border w-[300px]
                     border-gray-400 rounded-[10px] py-[8px] pl-[16px] pr-[16px] flex flex-row justify-between items-center"
                    >
                      {basedRolePermissions[0]}
                      <img
                        src={theme === "light" ? lightMore : darkMore}
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                  )}
                  {basedRolePermissions && permissionClicked === true && (
                    <ul
                      onClick={() =>
                        setPermissionClicked(
                          (prevPermissionClicked) => !prevPermissionClicked
                        )
                      }
                      className="absolute right-0 top-0 overflow-y-scroll max-h-[100px] shadow-lg flex flex-col gap-[8px] text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular border w-[300px]
                     border-gray-400 rounded-[10px] py-[8px] pl-[16px] "
                    >
                      {basedRolePermissions.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]">
                {" "}
              </div>
              <div className="relative w-full flex flex-row gap-[64px] items-center mb-[32px]">
                <div className="flex flex-row items-center justify-between w-1/2">
                  <label
                    htmlFor="institution"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot "
                  >
                    Institution
                  </label>
                  <div
                    className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                  >
                    {UserDataTest.institution}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-1/2">
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                  >
                    Phone number
                  </label>
                  <div className="w-[300px] border-[1px] border-gray-400 rounded-[10px] py-[8px] pl-[16px] flex flex-row items-center gap-[8px]">
                    <img
                      src={mrcFlag}
                      className="w-[36px] h-[24px] rounded-[5px]"
                    />
                    <input
                      {...register("phoneNumber", {
                        maxLength: {
                          value: 20,
                          message: "You should put a valid phone number here",
                        },
                        pattern: {
                          value:
                            /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,9}$/,
                          message: "Invalid phone number format",
                        },
                      })}
                      type="text"
                      id="phoneNumber"
                      placeholder="Type your phone number..."
                      className="text-base text-gray-500 bg-transparent dark:text-gray-300 opacity-80 font-grot font-regular"
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="w-full flex flex-row gap-[64px] items-center  ">
                <div className="flex flex-row items-start justify-between w-1/2">
                  <div className="flex flex-col ">
                    <h2 className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot">
                      Your photo
                    </h2>
                    <p className="text-sm font-light text-gray-400 dark:text-gray-500 font-grot">
                      This will display on your profile
                    </p>
                  </div>
                  <img
                    src={newImage || UserDataTest.profileImage}
                    alt="profileImage"
                    className="w-[60px] h-[60px] rounded-full border-[0.5px] border-dark-back dark:border-soft-light-back object-cover "
                  />
                  <div className="flex flex-row gap-[8px] items-start">
                    <div>
                      <label
                        htmlFor="profileImage"
                        className="rounded-[25px] cursor-pointer font-medium font-grot text-base text-light-primary-color py-[8px] px-[16px] bg-transparent dark:bg-dark-primary-color dark:text-soft-light-back"
                      >
                        Update
                      </label>
                      <input
                        {...register("profileImage")}
                        type="file"
                        accept="image/*"
                        id="profileImage"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    <button className="text-base font-medium bg-transparent dark:text-soft-light-back dark:opacity-60 text-light-disabled-color font-grot">
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-1/2">
                  <label
                    htmlFor="description"
                    className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot "
                  >
                    Description
                  </label>
                  <p className="w-[300px] text-sm font-light text-gray-400 dark:text-gray-500 font-grot">
                    {basedRoleDescription}
                  </p>
                </div>
              </div>
            </>
          )}
          {currentPath === "/settings/mydetails" && (
            <>
              <div className="mb-[32px] relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="status"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot "
                >
                  Status
                </label>
                <div
                  className={`${UserDataTest.status === "Active" ? "bg-green-200" : "bg-red-200"} text-base text-gray-500 dark:text-dark-back  opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]`}
                >
                  {UserDataTest.status}
                </div>
              </div>

              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>

              <div className="mb-[32px] relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="timeZone"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  Time Zone
                </label>
                <div
                  className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                >
                  {UserDataTest.timeZone}
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="mb-[32px] relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="joinDate"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  Date joined
                </label>
                <div
                  className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                >
                  {UserDataTest.joinDate}
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="emailRecovery"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  Email recovery
                </label>
                <input
                  {...register("emailRecovery", {
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "You should enter a valid email address",
                    },
                  })}
                  type="email"
                  id="emailRecovery"
                  placeholder="Email"
                  className="text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] pl-[16px]"
                />
                {errors.emailRecovery && (
                  <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                    {errors.emailRecovery.message}
                  </p>
                )}
              </div>
            </>
          )}

          {currentPath === "/settings/password" && (
            <>
              <div className="mb-[32px] relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="currentPassword"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  Current password
                </label>
                <div
                  className="flex flex-row justify-between items-center text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] px-[16px]"
                >
                  <input
                    {...register("currentPassword")}
                    type="password"
                    id="currentPassword"
                    className="bg-transparent outline-none"
                  />
                  <img
                    src={passwordEye}
                    alt="passwordIcon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="mb-[32px] relative flex flex-row items-center justify-between w-1/2">
                <label
                  htmlFor="newPassword"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  New password
                </label>
                <div
                  className="flex flex-row justify-between items-center text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] px-[16px]"
                >
                  <input
                    {...register("newPassword")}
                    type="password"
                    id="newPassword"
                    className="bg-transparent outline-none"
                  />
                  <img
                    src={passwordEye}
                    alt="passwordIcon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
              <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px]"></div>
              <div className="relative flex flex-row items-center justify-between w-1/2 ">
                <label
                  htmlFor="confirmedPassword"
                  className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
                >
                  Confirm password
                </label>
                <div
                  className="flex flex-row justify-between items-center text-base text-gray-500 dark:text-gray-300 bg-transparent opacity-80 font-grot font-regular 
              border-[1px] border-gray-400 rounded-[10px] py-[8px] w-[300px] px-[16px]"
                >
                  <input
                    {...register("confirmedPassword")}
                    type="password"
                    id="confirmedPassword"
                    className="bg-transparent outline-none"
                  />
                  <img
                    src={passwordEye}
                    alt="passwordIcon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </>
          )}

          {currentPath === "/settings/notification" && (
            <div className="relative flex flex-col  gap-[32px] w-full">
              {chunkedData.map((chunk, chunkIndex) => (
                <React.Fragment key={chunkIndex}>
                  <div className="flex flex-row items-center justify-between">
                    {chunk.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-row items-center gap-[8px]"
                      >
                        <span className="text-lg font-bold text-gray-500 whitespace-nowrap dark:text-gray-300 font-grot">
                          {item.text}
                        </span>
                        <div
                          onClick={() =>
                            handleNotificationState(chunkIndex * 3 + index)
                          }
                          className={`toggle-btn ${item.state ? "toggled" : ""}`}
                        >
                          <input
                            type="hidden"
                            {...register(
                              `notifications.${chunkIndex * 3 + index}.state`
                            )}
                          />
                          <div className="thumb"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {chunkIndex < chunkedData.length - 1 && (
                    <hr className="w-full border-gray-200 dark:bg-gray-500 h-[2px]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Profile;
