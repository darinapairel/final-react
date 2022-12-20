import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route
//       element={<Team />}
//       path="teams/:teamId"
//       loader={async ({ params }) => {
//         return fetch(
//           `/fake/api/teams/${params.teamId}.json`
//         );
//       }}
//       // action={async ({ request }) => {
//       //   return updateFakeTeam(await request.formData());
//       // }}
//     />
//   )
//   // {
//   //   path: "/",
//   //   element: <Root />,
//   //   errorElement: <div>404</div>
//   // },
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
