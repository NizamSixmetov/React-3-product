import React from 'react'
import { Route, Routes } from 'react-router'
import { WebRoutes } from '../WebRoutes'

const Routing = () => {
    return (
        <Routes>
            {
                WebRoutes.map(({ id, path, element }) => {
                    return <Route path={path} element={element} key={id}/>
                })
            }
        </Routes>
    )
}

export default Routing