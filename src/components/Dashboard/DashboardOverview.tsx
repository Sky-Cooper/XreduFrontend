import { RoleBasedSections } from "../../data/generalData/RoleBasedSections";
import { UserRole } from "../../generals/Types";
import TopSection from "../TopSection";
import testimage from "../../assets/Users/profileImages/profimage.webp";
import { SubSectionsProps } from "../../generals/Types";
import ContainerBackground from "../../UI/ContainerBackground";
import { OverviewContentTest } from "../../data/generalData/DashboardContent/OverviewContentTest";
import { useLocation } from "react-router-dom";

function DashboardOverview({
  role,
  pathToFetch,
}: {
  role: UserRole;
  pathToFetch: string;
}) {
  const sections =
    RoleBasedSections.find((rol) => rol.role === role)?.sections || [];

  const dashboardSection = sections.find(
    (sections) => sections.label === "Dashboard"
  );

  const dashboardSubSections = dashboardSection?.subsections || [];

  const location = useLocation();
  const currentPath = location.pathname;

  const subSections: SubSectionsProps[] = dashboardSubSections.map(
    (subSection) => ({
      state: currentPath === subSection.path ? "enabled" : "disabled",
      textPaths: { text: subSection.text, path: subSection.path },
    })
  );

  console.log(pathToFetch);

  return (
    <div className="w-full grid grid-cols-12 gap-x-[24px] gap-y-[32px]">
      <TopSection
        profileImage={testimage}
        SubSections={subSections}
        sectionTitle={sections[0].label}
      />

      {OverviewContentTest.map((item, index) => {
        return <ContainerBackground data={item} size={item.size} key={index} />;
      })}
    </div>
  );
}

export default DashboardOverview;
