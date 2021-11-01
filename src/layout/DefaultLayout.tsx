import React from 'react'
import {
  Switch,
} from 'react-router-dom'

import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import ComponentWillLoad, { Load } from '@/routes/index'
import Routes from '@/routes/baseRoute'
import {
  withRouter,
} from 'react-router-dom'

const DefaultLayout = (props: any) => {
  console.log(props)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Switch>
            <ComponentWillLoad config={Routes} />
          </Switch>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default withRouter(DefaultLayout)