import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Signin from './Signin/Sign';
import Signup from './Signup/sign-up';
import ForgetPass from './Forget-pass/forget';
import Onboarding from './Onboarding/onboarding';
import Schedule from './Content Schedule/schedule';
import Importcsv from './Content Schedule/importcsv';
import ImportLink from './Content Schedule/importlink';
import ContentCategories from './Content Schedule/contentCategories';
import Hashtag from './Content Schedule/hashtag';
import ScheduleSetup from './Content Schedule/scheduleSetup';
import Analytics from './Content Schedule/analyrics';
import Overview from './Content Schedule/overview';
import CreatePost from './Content Schedule/createPost';
import Plans from './components/Plans';
import Media from './Content Schedule/media';
import ConentApproval from './Content Schedule/contentApproval';
import UserManagement from './Content Schedule/User';
import ProfileSetting from './Content Schedule/profileSetting';

const router = createHashRouter([
  {
    path: "/userManagement",
    element: <UserManagement />
  },
  {
    path: "/profileSetting",
    element: <ProfileSetting />
  },
  {
    path: "/contentApproval",
    element: <ConentApproval />
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/plans",
    element: <Plans />,
  },
  {
    path: "/overview",
    element: <Overview />,

  },
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget",
    element: <ForgetPass />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/importcsv",
    element: <Importcsv />
  },
  {
    path: "/importlink",
    element: <ImportLink />
  },
  {
    path: "/contentcategory",
    element: <ContentCategories />,
  },
  {
    path: "/hashtag",
    element: <Hashtag />,
  },
  {
    path: "/scheduleSetup",
    element: <ScheduleSetup />
  },
  {
    path: "/analytics",
    element: <Analytics />
  },
  {
    path: "/createPost",
    element: <CreatePost />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
