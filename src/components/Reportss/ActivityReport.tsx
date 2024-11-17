import React from "react";
import TopSection from "../TopSection";
import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import { ReportContent } from "../../data/generalData/DashboardContent/ReportContent";
import { UserRole } from "../../generals/Types";
import { SubSectionsProps } from "../../generals/Types";
import { useLocation } from "react-router-dom";
import DataContainerBackground from "../../UI/DataContainerBackground";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ReportsRowSuperAdminData } from "../../data/generalData/Reportss/ReportDataRowsTest";
import { ReportColsData } from "../../data/generalData/Reportss/ReportsDataColsTest";
import testImage from "../../assets/Users/profileImages/profimage.webp";
import { useTheme } from "../SwitchMode/ThemeContext";
import Faqs from "../Faqs";
import { PerformanceFaqsData } from "../../data/generalData/FaqsData";
import { useMemo } from "react";

function ActivityReport({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const basedRoleSections =
    RoleBasedSections.find((r) => r.role === role)?.sections || [];
  const basedRoleReportsSection = basedRoleSections[3];
  const sectionTitle = basedRoleReportsSection?.label;
  const subSections = basedRoleReportsSection?.subsections;
  const location = useLocation();
  const currentPath = location.pathname;

  const userSubsection: SubSectionsProps[] = subSections.map((item) => ({
    state: currentPath === item.path ? "enabled" : "disabled",
    textPaths: { text: item.text, path: item.path },
  }));

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 3,
  });

  const { theme } = useTheme();

  const rows = ReportsRowSuperAdminData.map((item, index) => {
    return {
      id: index,
      profileImage: item.name.fullNameImage.image,
      name: item.name.fullNameImage.text,
      role: item.name.role,
      usage: item.usage,
      datetime: `${item.date} ${item.time}`,
      action: item.action.text,
      sign: item.action.sign,
      institution: item.institution.text,
      lightMoreIcon: item.institution.lightImage,
      darkMoreIcon: item.institution.darkImage,
    };
  });

  const roleBasedReportColsData =
    ReportColsData.find((r) => r.role === role)?.textIcon || [];

  const columns: GridColDef[] = [
    ...roleBasedReportColsData.map((item) => ({
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

      ...(item.text === "Usage" && {
        renderCell: (params: any) => (
          <div className="flex flex-row gap-[8px] h-full items-center">
            <h2 className="text-base text-gray-800 font-grot font-regular dark:text-light-back">
              {params.row.usage}
            </h2>
          </div>
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
    })),
  ];

  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px] h-full">
      <TopSection
        profileImage={testImage}
        SubSections={userSubsection}
        sectionTitle={sectionTitle}
      />
      {ReportContent.map((item, index) => {
        return (
          <DataContainerBackground
            data={item.data}
            size={item.size}
            key={index}
          />
        );
      })}

      {currentPath === "/reports/performance" && (
        <Faqs data={PerformanceFaqsData} />
      )}

      {currentPath === "/reports/activity" && (
        <div className="md:col-span-12 border-[0.5px] border-gray-200 rounded-[25px] dark:border-gray-500">
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
      )}
    </div>
  );
}

export default ActivityReport;
