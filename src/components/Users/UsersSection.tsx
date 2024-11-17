import React from "react";
import { useTheme } from "../SwitchMode/ThemeContext";
import TopSection from "../TopSection";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import testimage from "../../assets/Users/profileImages/profimage.webp";
import { SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import { UserRole } from "../../generals/Types";
import ContainerBackground from "../../UI/ContainerBackground";
import { AdminContentTest } from "../../data/generalData/DashboardContent/UsersContentTest";
import { RecentActivitiesColsData } from "../../data/generalData/RecentActivitiesData/RecentActivitiesColsData";
import { RecentActivitiesRowSuperAdminData } from "../../data/generalData/RecentActivitiesData/RecentActivitiesRowSuperAdminData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../Dashboard/DashRecent.css";
import { ContainerContentProps } from "../../generals/Types";
import DataContainerBackground from "../../UI/DataContainerBackground";

function UsersSection({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const graphData = AdminContentTest.filter((d) => d.labelsDatasets);
  const variantData = AdminContentTest.filter((d) => !d.labelsDatasets);

  const AdminDataActivity: ContainerContentProps[] = AdminContentTest.filter(
    (item) => item.size === "largemid"
  );

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 3,
  });
  const { theme } = useTheme();

  const colsData =
    RecentActivitiesColsData.find((recent) => recent.role === role)?.textIcon ||
    [];

  const columns: GridColDef[] = [
    ...colsData.map((item) => ({
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

      ...(item.text === "Action" && {
        renderCell: (params: any) => (
          <div className="flex items-center justify-start h-full">
            <div
              style={{ width: "fit-content" }}
              className={`h-[50px] flex items-center justify-center px-[16px]  rounded-[25px] 
                      ${
                        params.row.sign === "positive"
                          ? "bg-success-back"
                          : params.row.sign === "negative"
                            ? "bg-error-back"
                            : "bg-warning-back"
                      }`}
            >
              <h2
                style={{ margin: 0 }}
                className={`font-grot font-medium text-base  ${
                  params.row.sign === "positive"
                    ? "text-success-text-color"
                    : params.row.sign === "negative"
                      ? "text-error-text-color"
                      : "text-warning-text-color"
                }`}
              >
                {params.row.action}
              </h2>
            </div>
          </div>
        ),
      }),

      ...(item.text === "Email" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.email}
          </h2>
        ),
      }),

      ...(item.text === "Date-Time" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.datetime}
          </h2>
        ),
      }),

      ...(item.text == "Last-Login" && {
        renderCell: (params: any) => (
          <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
            {params.row.lastlogin}
          </h2>
        ),
      }),
    })),
  ];

  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const basedRoleUsersSection = basedRoleSections[1];

  const sectionTitle = basedRoleUsersSection?.label;
  const subSections = basedRoleUsersSection.subsections;

  const location = useLocation();
  const currentPath = location.pathname;

  let createUserRole = currentPath.toLocaleLowerCase().includes("admin")
    ? "admin"
    : currentPath.toLocaleLowerCase().includes("teacher")
      ? "teacher"
      : "student";

  const rows = RecentActivitiesRowSuperAdminData.map((item, index) => {
    return {
      id: index,
      profileImage: item.name.fullNameImage.image,
      name: item.name.fullNameImage.text,
      role: item.name.role,
      email: item.email,
      datetime: `${item.date} ${item.time}`,
      action: item.action.text,
      sign: item.action.sign,
      lastlogin: item.lastLogin,
    };
  });

  const filterdRows =
    rows?.filter((r) => currentPath.includes(r.role.toLowerCase())) || [];

  const usersSubSections: SubSectionsProps[] = subSections.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px]">
      <TopSection
        profileImage={testimage}
        sectionTitle={sectionTitle}
        SubSections={usersSubSections}
      />
      {graphData.map((item, index) => {
        return <ContainerBackground data={item} size={item.size} key={index} />;
      })}

      <DataContainerBackground data={variantData} size={variantData[0].size} />

      <div className="md:col-span-12 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500">
        {(role === "SuperAdmin" || role === "Admin") && (
          <div className="mb-[32px] pt-[32px] pl-[32px]">
            <h1 className="bg-light-primary-color dark:bg-soft-light-back w-fit py-[16px] px-[32px] rounded-[25px] text-white dark:text-dark-back font-grot font-bold text-base">
              + Add a new {createUserRole}
            </h1>
          </div>
        )}
        <div>
          <DataGrid
            rows={filterdRows}
            columns={columns}
            className={`md:col-span-12 transparent-header`}
            rowHeight={70}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            checkboxSelection
            pageSizeOptions={[3, 5, 25, 50, 100]}
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

export default UsersSection;
