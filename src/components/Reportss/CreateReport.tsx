import React from "react";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import TopSection from "../TopSection";
import { UserRole, SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import testImage from "../../assets/Users/profileImages/profimage.webp";
import { useTheme } from "../SwitchMode/ThemeContext";
import { SubmitHandler, useForm } from "react-hook-form";
import Footer from "../Footer";
import attachement from "../../assets/IconTextImages/widgets/attachement.svg";

//TODO grades should be options based on the assigned group , for superAdmin has the full access to all the groups , admin samething , teacher only assigend group , student should not have the access to broadcast the report , rather it should be directed to a teacher or admin or superAdmin
//TODO for the report a problem section , if the user is an admin then he can select only the superAdmin , if the teacher is a teacher then he can only select the superAdmin , if the teacher is a student he can select either admin or teacher

type GradeAndGroupProps = {
  grade: string;
  group: string;
};

export const existingGrouptest: GradeAndGroupProps[] = [
  {
    grade: "1AP",
    group: "G1",
  },
  {
    grade: "2AP",
    group: "G2",
  },
  {
    grade: "2AP",
    group: "G4",
  },
];

type CreateReportFields = {
  subject: string;
  description: string;
  email?: string;
  group?: GradeAndGroupProps;
  file: File;
};

function CreateReport({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const { theme } = useTheme();

  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const basedRoleReportSection = basedRoleSections[3];
  const sectionTitle = basedRoleReportSection?.label;
  const subSections = basedRoleReportSection?.subsections || [];
  const location = useLocation();
  const currentPath = location.pathname;

  const currentPageHeader =
    currentPath === "/reports/sendreport"
      ? "Send a report"
      : "Report a problem";
  const currentPageDescription =
    currentPath === "/reports/sendreport"
      ? "You can create a report and broadcast it"
      : "You can report an issue and send it to the super admin or the admin";

  const reportSubsection: SubSectionsProps[] = subSections?.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<CreateReportFields>();

  const onSubmit: SubmitHandler<CreateReportFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("data ", data);
  };

  const [fileName, setFileName] = React.useState("Select a file");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      console.log("the file name is", file.name);
    } else {
      setFileName("Select a file");
    }
  }

  return (
    <div className="w-full grid grid-col-12 gap-x-[24px] gap-y-[32px] h-full">
      <TopSection
        profileImage={testImage}
        SubSections={reportSubsection}
        sectionTitle={sectionTitle}
      />
      <div className="md:col-span-12 flex flex-col gap-[16px]">
        <h1 className="font-bold text-dark-back font-grot text-huge dark:text-soft-light-back">
          {currentPageHeader}
        </h1>
        <p className="text-base text-gray-500 opacity-60 font-grot dark:text-gray-200">
          {currentPageDescription}
        </p>
      </div>
      <form
        className="relative md:col-span-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-[32px] relative md:col-span-6 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500 px-[32px] py-[32px]">
          <div className="mb-[32px] relative flex flex-row items-center justify-between w-full">
            <label
              htmlFor="subject"
              className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
            >
              Subject
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              placeholder="Put the subject here ..."
              className="text-base text-gray-500 dark:text-gray-300 bg-transparent
              opacity-80 font-grot font-regular border-[1px] border-gray-400
              rounded-[10px] py-[8px] w-[300px] pl-[16px]"
            />
          </div>
          <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px] "></div>
          <div className="mb-[32px] relative flex flex-row items-center justify-between w-full">
            <label
              htmlFor="subject"
              className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
            >
              Description
            </label>
            <input
              {...register("description")}
              type="text"
              id="subject"
              placeholder="Put the description here ..."
              className="text-base text-gray-500 dark:text-gray-300 bg-transparent
              opacity-80 font-grot font-regular border-[1px] border-gray-400
              rounded-[10px] py-[8px] w-[300px] pl-[16px]"
            />
          </div>
          <div className="h-[2px] dark:bg-gray-500 w-full bg-gray-200 mb-[32px] "></div>
          {role === "Student" && (
            <div className="mb-[32px] relative flex flex-row items-center justify-between w-full">
              <label
                htmlFor="subject"
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
                type="text"
                id="email"
                placeholder="put the assigned email"
                className="text-base text-gray-500 dark:text-gray-300 bg-transparent
              opacity-80 font-grot font-regular border-[1px] border-gray-400
              rounded-[10px] py-[8px] w-[300px] pl-[16px]"
              />
              {errors.email && (
                <p className="absolute bottom-[-80%] text-sm font-light text-red-500 font-grot">
                  {errors.email.message}
                </p>
              )}
            </div>
          )}
          {role != "Student" && (
            <div className="mb-[32px] relative flex flex-row items-center justify-between w-full">
              <label
                htmlFor="group"
                className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
              >
                Group
              </label>
              <input
                {...register("group")}
                type="text"
                id="group"
                placeholder="Select the assigned group"
                className="text-base text-gray-500 dark:text-gray-300 bg-transparent
              opacity-80 font-grot font-regular border-[1px] border-gray-400
              rounded-[10px] py-[8px] w-[300px] pl-[16px]"
              />
            </div>
          )}
          <div className="h-[2px] dark:bd-gray-500 w-full bg-gray-200 mb-[32px] dark:bg-gray-500"></div>

          <div className="relative flex flex-row items-center justify-between w-full">
            <label
              htmlFor="file"
              className="text-lg font-bold text-gray-500 dark:text-gray-300 font-grot"
            >
              File
            </label>
            <div
              className="overflow-hidden text-base text-gray-500 dark:text-gray-300 bg-transparent
              opacity-80 font-grot font-regular border-[1px] border-gray-400
              rounded-[10px] py-[8px] w-[300px] pl-[16px] flex flex-row gap-[8px] items-center"
            >
              <label htmlFor="file" className="cursor-pointer">
                <img
                  src={attachement}
                  alt="attachementIcon"
                  className="w-[24px] h-[24px]"
                />
              </label>
              <input
                {...register("file")}
                type="file"
                id="file"
                placeholder="Select a file pdf, pptx.."
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-base text-gray-500 font-grot dark:text-gray-300 opacity-80 font-regular">
                {fileName}
              </span>
            </div>
          </div>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="py-[16px] px-[32px] rounded-[25px] dark:bg-dark-primary-color  bg-light-primary-color text-base font-bold font-grot text-soft-light-back"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateReport;
