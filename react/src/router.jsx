import {Navigate, createBrowserRouter} from 'react-router-dom';
import Users from './views/Users';
import Loginn from './views/Loginn';
import SignnUp from './views/SignnUp';
import NotFound from './views/NotFound';
import GuestLayout from './Layout/components/GuestLayout';
import DefaultLayout from './Layout/components/DefaultLayout';
import Dashboard from './views/Dashboard';
import UserForm from './views/UserForm';

const router = createBrowserRouter ( [
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/users"/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path: '/users/:id',
                element: <UserForm key="userUpdate"/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
        ]
    },
{
  path: '/',
  element: <GuestLayout/>,
  children: [
    {
        path: '/login',
        element: <Loginn/>,
    },
    {
        path: '/signup',
        element: <SignnUp/>
    },
]
},


{
    path: '*',
    element: <NotFound/>
}
]
)

export default router;