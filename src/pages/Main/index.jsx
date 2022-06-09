import "./style.scss";
import { Switch, Route } from "react-router-dom";

// components
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Registration from "../../components/Registration";
import AdministrativeWork from "../../components/AdministrativeWork";

function Main() {

  return(
    <div className="Main">
      <Header />
      <div className="content-wrap">
        <Menu />
        <Switch>
          <Route path={"/admin"} exact component={Registration} />
          <Route path={"/admin/main"} component={AdministrativeWork} />
        </Switch>
      </div>
      
    </div>
  )
}

export default Main;