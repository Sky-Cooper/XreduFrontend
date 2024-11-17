import { UserRole } from "./generals/Types";
import React, { Suspense, lazy } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import DashboardRecentActivities from "./components/Dashboard/DashboardRecentActivities";
import Layout from "./Layout";

import UsersSection from "./components/Users/UsersSection";
import { ProtectedRouteProps } from "./generals/Types";
import { useLocation } from "react-router-dom";
import { rolePermissions } from "./data/generalData/RoleBasedSections";
import Unauthorized from "./components/Unauthorized";
import Courses from "./components/Courses/Courses";
import ActivityReport from "./components/Reportss/ActivityReport";
import Profile from "./components/Settingss/Profile";
import AssignedLessons from "./components/Courses/AssignedLessons";
import CreateReport from "./components/Reportss/CreateReport";

//TODO : instead of passing pathToFetch as a prop , create an api context that fetch the user DAta one time from the backend inside the app.tsx then share the data through out all the components as an context

function App() {
  const userRole: UserRole = "SuperAdmin";

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoutes }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const hasPermission = allowedRoutes.includes(currentPath);

    if (!hasPermission) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }

    return <Outlet />;
  };

  const MemoizedProtectedRoute = React.memo(ProtectedRoute);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} />
      <Routes>
        <Route path="/" element={<Layout role={userRole} />}>
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            path="/dashboard"
            element={<Navigate to="dashboard/overview" replace />}
          />
          <Route
            path="dashboard/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="overview"
              element={
                <DashboardOverview
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/dashboard/overview`}
                />
              }
            />
            <Route
              path="recentactivities"
              element={
                <DashboardRecentActivities
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/dashboard/recentactivities`}
                />
              }
            />
          </Route>

          <Route
            path="users/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="admins"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/users/admins`}
                />
              }
            />
            <Route
              path="teachers"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/users/teachers`}
                />
              }
            />
            <Route
              path="students"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/users/students`}
                />
              }
            />
          </Route>

          <Route
            path="teachers/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="overview"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/teachers/overview`}
                />
              }
            />
            {/* <Route
              path="details"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/teachers/details`}
                />
              }
            /> */}
          </Route>
          <Route
            path="students/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="overview"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/students/overview`}
                />
              }
            />
            {/* <Route
              path="details"
              element={
                <UsersSection
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLowerCase()}/students/details`}
                />
              }
            /> */}
          </Route>
          <Route
            path="courses/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="overview"
              element={
                <Courses
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/courses/overview`}
                />
              }
            />

            <Route
              path="details"
              element={
                <Courses
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/courses/details`}
                />
              }
            />

            <Route
              path="assignedlessons"
              element={
                <AssignedLessons
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/courses/assignedlessons`}
                />
              }
            />
          </Route>
          <Route
            path="reports/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="activity"
              element={
                <ActivityReport
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/reports/activity`}
                />
              }
            />

            <Route
              path="performance"
              element={
                <ActivityReport
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/reports/performance`}
                />
              }
            />

            <Route
              path="sendreport"
              element={
                <CreateReport
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/reports/sendreport`}
                />
              }
            />

            <Route
              path="reportproblem"
              element={
                <CreateReport
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/reports/reportproblem`}
                />
              }
            />
          </Route>
          <Route
            path="settings/*"
            element={
              <MemoizedProtectedRoute
                allowedRoutes={rolePermissions[userRole]}
              />
            }
          >
            <Route
              path="profile"
              element={
                <Profile
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/settings/profile`}
                />
              }
            />
            <Route
              path="mydetails"
              element={
                <Profile
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/settings/mydetails`}
                />
              }
            />
            <Route
              path="password"
              element={
                <Profile
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/settings/password`}
                />
              }
            />
            <Route
              path="notification"
              element={
                <Profile
                  role={userRole}
                  pathToFetch={`/api/${userRole.toLocaleLowerCase()}/settings/notification`}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
