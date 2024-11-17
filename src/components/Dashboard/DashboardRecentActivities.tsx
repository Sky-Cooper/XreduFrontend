import React, { useMemo } from "react";
import { useTheme } from "../SwitchMode/ThemeContext";
import TopSection from "../TopSection";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import testimage from "../../assets/Users/profileImages/profimage.webp";
import { UserRole } from "../../generals/Types";
import { SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import { RecentActivitiesColsData } from "../../data/generalData/RecentActivitiesData/RecentActivitiesColsData";
import { RecentActivitiesRowSuperAdminData } from "../../data/generalData/RecentActivitiesData/RecentActivitiesRowSuperAdminData";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./DashRecent.css";
import Button from "../../UI/Button";

import { UserRoleAuthorities } from "../../data/generalData/RoleBasedSections";

//TODO : only render the first few rows the data grid , till the user navigate through it

function DashboardRecentActivities({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const [UserAuthorities, setUserAuthorities] = React.useState<string[]>(() => {
    switch (role) {
      case "SuperAdmin":
        return ["All users", ...UserRoleAuthorities.SUPER_ADMIN];
      case "Admin":
        return ["All users", ...UserRoleAuthorities.ADMIN];
      case "Teacher":
        return ["All users", ...UserRoleAuthorities.TEACHER];
      case "Student":
        return ["All users", ...UserRoleAuthorities.STUDENT];
      default:
        return ["All users"];
    }
  });

  const [currentUserFilter, setCurrentUserFilter] = React.useState<boolean[]>(
    new Array(UserAuthorities.length)
      .fill(false)
      .map((item, index) => (index === 0 ? true : item))
  );

  const rows = useMemo(() => {
    return RecentActivitiesRowSuperAdminData.map((item, index) => ({
      id: index,
      profileImage: item.name.fullNameImage.image,
      name: item.name.fullNameImage.text,
      role: item.name.role,
      email: item.email,
      datetime: `${item.date} ${item.time}`,
      action: item.action.text,
      sign: item.action.sign,
      lastlogin: item.lastLogin,
    }));
  }, [RecentActivitiesRowSuperAdminData]);

  const [filteredRows, setFilteredRows] = React.useState(rows);

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();
  }

  function handleUserFilterClick(index: number) {
    setCurrentUserFilter(() => {
      const newUserFilter = new Array(UserAuthorities.length).fill(false);
      newUserFilter[index] = true;
      const userRoleClicked = UserAuthorities[index];
      if (userRoleClicked === "All users") {
        setFilteredRows(rows);
      } else {
        const filtered = rows.filter(
          (r) => r.role === capitalizeFirstLetter(userRoleClicked)
        );
        setFilteredRows(filtered);
      }
      return newUserFilter;
    });
  }

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  const { theme } = useTheme();
  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const subSection =
    basedRoleSections.find((subSection) => subSection.label === "Dashboard")
      ?.subsections || [];
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;

  const subSectionData: SubSectionsProps[] = subSection.map((item) => ({
    state: item.path === currentPath ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  const colsData =
    RecentActivitiesColsData.find((recent) => recent.role === role)?.textIcon ||
    [];

  const columns: GridColDef[] = useMemo(() => {
    return [
      ...colsData.map((item) => ({
        field: item.text.toLowerCase().replace("-", ""),
        headerName: item.text,
        renderHeader: () => (
          <div className="flex flex-row items-center gap-[8px]">
            <img
              src={item.image}
              alt={item.text}
              className="w-[24px] h-[24px]"
            />
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

        ...(item.text === "Last-Login" && {
          renderCell: (params: any) => (
            <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
              {params.row.lastlogin}
            </h2>
          ),
        }),
      })),
    ];
  }, [colsData]);
  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px] overflow-hidden h-full">
      <TopSection
        profileImage={testimage}
        SubSections={subSectionData}
        sectionTitle="Dashboard"
      />

      <div className="md:col-span-12 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500">
        <div className="mb-[32px] pt-[32px] pl-[32px]">
          {(role === "SuperAdmin" || role == "Admin") && (
            <div className="flex flex-row gap-[8px] w-fit py-[8px] px-[16px] bg-gray-100 rounded-[25px]">
              {UserAuthorities.map((item, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => handleUserFilterClick(index)}
                    className={` text-base font-medium  border-none appearance-none font-grot rounded-[25px] 
                      ${
                        currentUserFilter[index] === true && theme === "light"
                          ? "bg-light-primary-color text-soft-light-back"
                          : currentUserFilter[index] === true &&
                              theme === "dark"
                            ? "bg-dark-primary-color text-soft-light-back"
                            : currentUserFilter[index] === false &&
                                theme === "light"
                              ? "text-light-primary-color"
                              : "text-dark-primary-color"
                      }`}
                    size="mid"
                  >
                    {capitalizeFirstLetter(item)}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            className={`md:col-span-12 transparent-header`}
            rowHeight={70}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 25, 50, 100]}
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

export default DashboardRecentActivities;
