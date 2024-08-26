import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Trainers from "../pages/Trainers";
import Contact_us from "../pages/Contact_us";
import News from "../pages/News";
import NewsDetails from "../components/Newspage/NewsDetails";
import Services from './../pages/Services';
import About_us from "../pages/About_us";
import Explore from "../pages/Explore";
import Explore_Details from "../pages/Explore_Details";
import Trainers_Details from './../pages/Trainers_Details';
import PrivacyPolicy from "../pages/legal/App_Privacy_Policy";
import TermsOfUse from "../pages/legal/Terms_of_use";
import CookiePolicy from "../pages/legal/Cookie_policy";
import PrivacyPolicyfb from "../pages/legal/privacy_policy_ads";
import RefundPolicy from "../pages/legal/Refund_policy";
import WebLogin from "../pages/WebLogin";
import Error404 from "../pages/Error404";
import Root_Dashboard from './../pages/Dashboard/Root';
import RedirectToShopify from "./Fakeadmin";
import UnderConstruction from "../pages/UnderConstruction";
import Panel from "../pages/Dashboard/Panel";
import Blog_create from "../pages/Dashboard/Pages/Blog_create";
import Blog_list from "../pages/Dashboard/Pages/Blog_list";
import Team_create from "../pages/Dashboard/Pages/Team_create";
import Team_list from "../pages/Dashboard/Pages/Team_list";
import Testimonial_create from "../pages/Dashboard/Pages/Testimonial_create";
import Testimonial_list from "../pages/Dashboard/Pages/Testimonial_list";
import Blog_edit from "../pages/Dashboard/Pages/Blog_edit";
import Team_edit from "../pages/Dashboard/Pages/Team_edit";
import Testimonial_edit from "../pages/Dashboard/Pages/Testimonial_edit";
import AdminRoute from "./AdminRoute";
import Notice_create from "../pages/Dashboard/Pages/Notice_create";
import Notice_list from "../pages/Dashboard/Pages/Notice_list";
import Notice from './../pages/Notice';
import Notice_edit from './../pages/Dashboard/Pages/Notice_edit';
import Notice_Details from "../pages/Notice_Details";
export const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('')
      },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: '/trainers/:name',
        element: <Trainers_Details />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/trainer/get-name/${params.name}`)
      },
      {
        path: "/service",
        element: <Services/>
      },
      {
        path: "/blog",
        element: <News />
      },
      
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/explore/details/:id",
        element: <Explore_Details/>,
 
      },
      {
        path: "/aboutus/about",
        element: <About_us />
      },
      {
        path: "/contactus",
        element: <Contact_us />
      },
      {
        path: "/blog/:id",
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/news/get-id/${params.id}`)
      },
      {
        path: "/notice/:id",
        element: <Notice_Details /> ,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/notice/get-id/${params.id}`)
      },
      {
        path: "/legal/appprivacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "/legal/termsofuse",
        element: <TermsOfUse />
      },
      {
        path: "/legal/refundpolicy",
        element: <RefundPolicy />
      },
 
      {
        path: "/legal/cookiepolicy",
        element: <CookiePolicy />
      },
      {
        path: "/legal/privacypolicyads",
        element: <PrivacyPolicyfb />
      },
      {
        path: "/webadmin",
        element: <WebLogin />  //
      },
      {
        path: "/under",
        element: <UnderConstruction />  //
      },
      {
        path: "/notice",
        element: <Notice />  //
      },
      
  
       
    ]
  },
  {
    path: "dashboard",
    element:<AdminRoute><Root_Dashboard></Root_Dashboard></AdminRoute>,
    errorElement: <Error404></Error404>,
    children: [
      // {
      //   path:'profile',
      //   element:
      // }
      {
        path:"dashboard",
        element:<Panel></Panel>
      },
      {
        path:"notice_view",
        element:<AdminRoute><Notice_list></Notice_list></AdminRoute>
      },
      {
        path:"notice_create",
        element:<AdminRoute><Notice_create></Notice_create></AdminRoute>
      },
      {
        path:"blog_view",
        element:<AdminRoute><Blog_list></Blog_list></AdminRoute>
      },
      {
        path:"blog_create",
        element:<AdminRoute><Blog_create></Blog_create></AdminRoute>
      },
      {
        path:"testimonial_view",
        element:<AdminRoute><Testimonial_list></Testimonial_list></AdminRoute>
      },
      {
        path:"testimonial_create",
        element: <AdminRoute><Testimonial_create></Testimonial_create></AdminRoute>
      },
      {
        path:"team_view",
        element:<AdminRoute><Team_list></Team_list></AdminRoute>
      },
      {
        path:"team_add",
        element: <AdminRoute><Team_create></Team_create></AdminRoute>
      },
      {
        path:"team_edit/:id",
        element: <AdminRoute><Team_edit></Team_edit></AdminRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/trainer/get-id/${params.id}`)
      },
      {
        path:"blog_edit/:id",
        element: <AdminRoute><Blog_edit></Blog_edit></AdminRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/news/get-id/${params.id}`)
      },
      {
        path:"testimonial_edit/:id",
        element: <AdminRoute><Testimonial_edit></Testimonial_edit></AdminRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/testimonial/get-id/${params.id}`)
      },
      {
        path:"notice_edit/:id",
        element: <AdminRoute><Notice_edit></Notice_edit></AdminRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URL}/notice/get-id/${params.id}`)
      }

    ]

  },
  {
    path: "/admin",
    element: <RedirectToShopify />  //
  },
]
);