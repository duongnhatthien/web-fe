import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponet from './components/Default/DefaultComponet';
import * as UserServices from './Services/UserService';
import { jwtDecode } from 'jwt-decode';
import { UseSelector, UseDispatch, useDispatch } from 'react-redux';
import {
    selectCurrentUser,
    updateCurrentUser,
} from './redux/Slide/userReducer';
import validator from 'validator';
export default function App() {
    // Access the client
    const ClarkUserCurrent = useDispatch();

    useEffect(() => {
        console.log('Logining ...');

        let storageData = localStorage.getItem('access_token');
        if (storageData.toString() != 'undefined') {
            console.log('storageData: ', storageData);
            const { payload } = jwtDecode(storageData);
            UserServices.getDetailUser(payload.id, storageData)
                .then((data) => {
                    ClarkUserCurrent(updateCurrentUser(data.data.data));
                })
                .catch((error) => {
                    console.log('Error: ', error);
                });
        }
    }, []);

    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader
                            ? DefaultComponet
                            : Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }></Route>
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}
