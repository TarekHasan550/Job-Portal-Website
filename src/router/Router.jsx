import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../components/pages/Home'
import MyApplications from '../components/pages/MyApplications'
import MyJobs from '../components/pages/MyPostedJobs'
import AddJob from '../components/pages/AddJob'
import RegisterPage from '../components/pages/RegisterPage'
import LoginPage from '../components/pages/LoginPage'
import ErrorPage from '../components/shared/ErrorPage'
import PrivateRoute from './PrivateRoute'

export default function Router({ children }) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "/home",
          Component: Home
        },
        {
          path: "/my-applications",
          element: (
            <PrivateRoute>
              <MyApplications></MyApplications>
            </PrivateRoute>
          )
        },
        {
          path: "/add-job",
          element: (
            <PrivateRoute>
              <AddJob></AddJob>
            </PrivateRoute>
          )
        },
        {
          path: "/my-posted-jobs",
          element: (
            <PrivateRoute>
              <MyJobs></MyJobs>
            </PrivateRoute>
          )
        },
        {
          path: "/login",
          Component: LoginPage
        },
        {
          path: "/register",
          Component: RegisterPage
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  )
}
