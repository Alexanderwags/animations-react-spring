import React from "react"
import { Header } from "container/header/Header"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const Home = React.lazy(() => import("pages/Home"))
export const Routes = () => {
  return (
    <React.Suspense fallback={<>loading...</>}>
      <Switch>
        <Route path="/about">
          <>about</>
        </Route>
        <Route path="/topics">
          <>topics </>
        </Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </React.Suspense>
  )
}
