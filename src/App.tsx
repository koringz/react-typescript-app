import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, HashRouter, Redirect, Switch, Route, Link } from "react-router-dom";

const LoadComponent = <T extends React.ComponentType<any>>(factory: () => Promise<{
    default: T;
}>) => {
    const LFC = React.lazy(factory)
    return function (props: any) {
        return <LFC {...props}></LFC>
    }
}


const routes = [
    {
        path: '/table',
        component: LoadComponent(() => import('@/pages/Table/index'))
    },
    {
        path: '/home',
        component: LoadComponent(() => import('@/pages/Home/index'))
    },
]


const Load = (Comp: any) => {
    // component 未必选
    const Com = Comp.component
    if(!Com) return null;
    return (
        <Suspense fallback={<div>loading</div>}>
            <Com />
        </Suspense>
    )
}

const ComponentWillLoad = () => {
    return (
        <Switch>
            {routes.map((items, key) => (
               <Route 
                    key={key}
                    path={items.path} 
                    render={routeProps => (
                        <Load {...items}></Load>
                    )}  
                />
            ))}
        </Switch>
    )
} 

class App extends React.Component{
    render() {
        return (
            <div>
                <HashRouter>
                    <ComponentWillLoad />
                    {/* <Switch>
                        <Redirect from="/" to="/Home" />
                    </Switch> */}
                </HashRouter>
            </div>        
        )
    }
}



export default App