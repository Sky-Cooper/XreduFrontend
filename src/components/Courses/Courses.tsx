import { useTheme } from "../SwitchMode/ThemeContext";
import React from "react";
import TopSection from "../TopSection";
import testImage from "../../assets/Users/profileImages/profimage.webp";
import { SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import { UserRole } from "../../generals/Types";
import ContainerBackground from "../../UI/ContainerBackground";
import DataContainerBackground from "../../UI/DataContainerBackground";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import { CoursesRowSuperAdminData } from "../../data/generalData/Courses/CoursesDataRowsTest";
import { CoursesColsData } from "../../data/generalData/Courses/CoursesDataColsTest";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CoursesContent } from "../../data/generalData/DashboardContent/CoursesContent";

function Courses({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const graphData = CoursesContent.filter((d) => d.labelsDatasets);
  const variantData = CoursesContent.filter((d) => !d.labelsDatasets);

  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const basedRoleCoursesSection = basedRoleSections[2];
  const sectionTitle = basedRoleCoursesSection.label;
  const subSections = basedRoleCoursesSection.subsections;

  const location = useLocation();
  const currentPath = location.pathname;

  const userSubsection: SubSectionsProps[] = subSections.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  React.useEffect(() => {
    if (currentPath === "/courses/details") {
      setPaginationModel({
        page: 0,
        pageSize: 5,
      });
    } else
      setPaginationModel({
        page: 0,
        pageSize: 3,
      });
  }, [currentPath]);

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 3,
  });
  const { theme } = useTheme();

  const rows = CoursesRowSuperAdminData.map((item, index) => {
    return {
      id: index,
      profileImage: item.name.fullNameImage.image,
      name: item.name.fullNameImage.text,
      role: item.name.role,
      courseTitle: item.courseTitle,
      datetime: `${item.date} ${item.time}`,
      field: item.category,
      institution: item.institution.text,
      lightMoreIcon: item.institution.lightImage,
      darkMoreIcon: item.institution.darkImage,
    };
  });
  const roleBasedCoursColsData =
    CoursesColsData.find((r) => r.role === role)?.textIcon || [];

  const columns: GridColDef[] = [
    ...roleBasedCoursColsData.map((item) => ({
      field: item.text.toLowerCase().replace("-", ""),
      headerName: item.text,
      renderHeader: () => (
        <div className="flex flex-row items-center gap-[8px]">
          <img src={item.image} alt={item.text} className="w-[24px] h-[24px]" />
          <h2 className="text-base font-semibold font-grot text-dark-back dark:text-light-back">
            {item.text}
          </h2>
        </div>
      ),

      flex: 1,
      ...(item.text === "Name" && {
        renderCell: (params: any) => (
          <div className="flex flex-row items-center gap-[8px] h-full">
            <img
              src={params.row.profileImage}
              alt={params.row.name}
              className={`rounded-full w-[32px] h-[32px] object-cover border-[1px] ${theme === "light" ? "border-black" : "border-light-back"}`}
            />
            <div className="flex flex-col items-start leading-tight">
              <h3 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
                {params.row.name}
              </h3>
              <h2 className="text-sm font-light text-gray-600 font-grot dark:text-gray-400">
                {params.row.role}
              </h2>
            </div>
          </div>
        ),
      }),

      ...(item.text === "Date-Time" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.datetime}
          </h2>
        ),
      }),

      ...(item.text === "Institution" && {
        renderCell: (params: any) => (
          <div className="flex flex-row gap-[8px] h-full items-center">
            <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
              {params.row.institution}
            </h2>
            <img
              src={
                theme === "light"
                  ? params.row.lightMoreIcon
                  : params.row.darkMoreIcon
              }
              className="w-[24px] h-[24px]"
            />
          </div>
        ),
      }),

      ...(item.text === "Cours Title" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.courseTitle}
          </h2>
        ),
      }),

      ...(item.text === "Field" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.field}
          </h2>
        ),
      }),
    })),
  ];

  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px]  h-full">
      <TopSection
        profileImage={testImage}
        SubSections={userSubsection}
        sectionTitle={sectionTitle}
      />
      {currentPath === "/courses/overview" && (
        <>
          {graphData.map((item, index) => {
            return (
              <ContainerBackground data={item} size={item.size} key={index} />
            );
          })}
          <DataContainerBackground
            data={variantData}
            size={variantData[0].size}
          />
        </>
      )}

      <div className="md:col-span-12 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500">
        {(role === "SuperAdmin" || role === "Admin") && (
          <div className="mb-[32px] pt-[32px] pl-[32px]">
            <h1 className="bg-light-primary-color dark:bg-soft-light-back w-fit py-[16px] px-[32px] rounded-[25px] text-white dark:text-dark-back font-grot font-bold text-base">
              + Add a new course
            </h1>
          </div>
        )}

        <div>
          <DataGrid
            rows={rows}
            columns={columns}
            className={`md:col-span-12 transparent-header`}
            rowHeight={70}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[3, 5, 25, 50, 100]}
            checkboxSelection
            sx={{
              backgroundColor: "transparent",
              border: "none",

              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#6b7280" : "black",
              },
              "& .MuiTablePagination-displayedRows": {
                color: theme === "dark" ? "#6b7280" : "black",
              },
              "& .MuiTablePagination-selectLabel": {
                color: theme === "dark" ? "#6b7280" : "black",
              },
              "& .MuiTablePagination-selectIcon": {
                color: theme === "dark" ? "#6b7280" : "black",
              },
              "& .MuiDataGrid-selectedRowCount": {
                color: theme === "dark" ? "transparent" : "transparent",
              },
              "& .MuiDataGrid-row.MuiDataGrid-row--firstVisible": {
                "--rowBorderColor": "transparent",
              },

              "& .MuiDataGrid-row": {
                borderBottom: "0.5px solid transparent",
                borderColor: "transparent",
              },

              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "transparent",
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                color: "inherit",
              },

              "& .MuiDataGrid-iconButtonContainer .MuiSvgIcon-root": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#e5e7eb" : "#6b7280",
              },

              "& .MuiDataGrid-menuIconButton .MuiSvgIcon-root": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#e5e7eb" : "#6b7280",
              },

              "& .MuiDataGrid-columnHeader:hover .MuiDataGrid-menuIconButton .MuiSvgIcon-root":
                {
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "#e5e7eb" : "#6b7280",
                },
              "& .MuiDataGrid-columnHeader:hover .MuiDataGrid-sortIcon": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#e5e7eb" : "#6b7280",
              },

              "& .MuiDataGrid-columnSeparator": {
                color: (theme) =>
                  theme.palette.mode === "dark" ? "#e5e7eb" : "#6b7280",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Courses;
