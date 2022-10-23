

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile"
import User from "layouts/user"
import EmployeeSignin from 'layouts/employeeSignin'
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Task from "layouts/task"
import SeeUser from "layouts/user/seeUser"

// @mui icons
import Icon from "@mui/material/Icon";
const status = localStorage.getItem('status');
var variable = '';
var vari = '';

if(status === 'Employee')
{
  variable = 'navbar';
  vari = 'collapse';
}
else{
  variable = 'collapse';
  vari= 'navbar';
}

const routes = [
  {
    type: "navbar",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard/:id",
    component: <Dashboard />,
  },
  {
    type: variable,
    name: "Add Admin",
    key: "sign-up",
    icon: <Icon fontSize="small">addcircle</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/profile",
    component: <Profile/>,
  },
  {
    type: variable,
    name: "Add Employee",
    key: "user",
    icon: <Icon fontSize="small">addcircle</Icon>,
    route: "/user",
    component: <User/>,
  },
  {
    type: "navbar",
    name: "Employee Sign In",
    key: "sign-in-emp",
    icon: <Icon fontSize="small">addcircle</Icon>,
    route: "/employeeSignin",
    component: <EmployeeSignin />,
  },
  {
    type: vari,
    name: " Add Task",
    key: "enterprise",
    icon: <Icon fontSize="small">addcircle</Icon>,
    route: "/task",
    component: <Task/>,
  },
  {
    type: variable,
    name: "See all user",
    key: "alluser",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/user/seeUser",
    component: <SeeUser/>,
  },
  {
    type: "navbar",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
