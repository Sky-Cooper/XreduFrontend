import {
  AssignedLessonsProps,
  UserRole,
  SubSectionsProps,
} from "../../generals/Types";
import React, { useState } from "react";
import TopSection from "../TopSection";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import { AssignedLessonsDataTest } from "../../data/generalData/Courses/AssignedLessonsDataTest";
import { useTheme } from "../SwitchMode/ThemeContext";
import testimage from "../../assets/Users/profileImages/profimage.webp";
import { useLocation } from "react-router-dom";
import saveIcon from "../../assets/IconTextImages/widgets/save.svg";
import Footer from "../Footer";
import filledSaveIcon from "../../assets/IconTextImages/widgets/filledSave.svg";

//TODO save the saved lessons

function AssignedLessons({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const basedRoleCoursesSection = basedRoleSections.find(
    (item) => item.label === "Courses"
  );
  const sectionTitle = basedRoleCoursesSection?.label || "";
  const subSections = basedRoleCoursesSection?.subsections || [];
  const currentPath = location.pathname;
  const coursesSubsections: SubSectionsProps[] = subSections.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  const [savedLessons, setFilledLessons] = React.useState<boolean[]>(
    new Array(AssignedLessonsDataTest.length).fill(false)
  );

  function handleSavedLessons(index: number) {
    setFilledLessons((prevFilledLessons) => {
      const newFilledLessons = [...prevFilledLessons];
      newFilledLessons[index] = !newFilledLessons[index];
      console.log("updated lessons", newFilledLessons);
      return newFilledLessons;
    });
  }

  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px]">
      <TopSection
        profileImage={testimage}
        sectionTitle={sectionTitle}
        SubSections={coursesSubsections}
      />

      <div className="md:col-span-12 flex flex-col gap-[16px]">
        <h1 className="font-bold text-dark-back font-grot text-huge dark:text-soft-light-back">
          Assigned lessons
        </h1>
        <p className="text-base text-gray-500 whitespace-nowrap opacity-60 font-regular font-grot dark:text-gray-200">
          You can assist personal assigned online and offline lessons
        </p>
      </div>

      {AssignedLessonsDataTest.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-light-gradient dark:bg-dark-gradient px-[16px] py-[16px] rounded-[25px] md:col-span-4 h-[300px]"
          >
            <div className="flex flex-row items-center justify-between profile-save mb-[32px]">
              <div className="profile-name flex flex-row gap-[8px] items-center">
                <div className="relative flex justify-center items-center h-[32px] w-[32px]">
                  <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>
                  <img
                    src={item.pfpImage}
                    alt="teacherProfilePicture"
                    className="w-[24px] h-[24px] rounded-full object-cover border-black border-[0.5px] dark:border-white"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="text-sm font-grot text-container-text-color font-regular">
                    {item.teacher}
                  </h3>
                  <h4 className="text-xs font-light font-grot text-container-text-color opacity-60">
                    Teacher
                  </h4>
                </div>
              </div>

              <div
                onClick={() => handleSavedLessons(index)}
                className="cursor-pointer saveIcon relative flex justify-center items-center h-[32px] w-[32px]"
              >
                <div className="absolute inset-0 rounded-full bg-soft-light-back opacity-10"></div>
                <img
                  src={savedLessons[index] === true ? filledSaveIcon : saveIcon}
                  alt="saveIcon"
                  className="w-[14px] h-[18px] "
                />
              </div>
            </div>
            <h3 className="text-base text-white font-grot font-regular mb-[16px]">
              {item.courseTitle}
            </h3>
            <h2 className="font-semibold text-white text-xlg font-grot mb-[16px]">
              {item.lessonTitle}
            </h2>
            <div className="assignement-QandA flex flex-row gap-[8px] mb-[16px]">
              <div className="flex justify-center items-center px-[16px] py-[8px] rounded-[10px] bg-electric-blue-700">
                <span className="text-sm font-medium text-container-text-color font-grot">
                  {item.assignements} Assignements
                </span>
              </div>
              <div className="flex justify-center items-center px-[16px] py-[8px] rounded-[10px] bg-electric-blue-700">
                <span className="text-sm font-medium text-container-text-color font-grot">
                  {item.qAndA} Q&A
                </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-container-text-color opacity-60 mb-[16px]"></div>
            <div className="flex flex-row items-center justify-between w-full datetime-join">
              <div className="flex flex-col justify-start datetime">
                <h3 className="text-sm text-container-text-color font-grot font-regular">
                  {item.date}
                </h3>
                <h3 className="text-sm text-container-text-color font-grot font-regular">
                  {item.time}
                </h3>
              </div>
              <button className="font-grot text-white font-bold text-base px-[16px] py-[8px] rounded-[10px] bg-black">
                Join
              </button>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default AssignedLessons;
