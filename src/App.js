import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import MainHome from "./Main/MainHome";
import AddUser from "./pages/addUser";
import ControlPanel from "./pages/ControlPanel";
import AddProduct from "./pages/addProduct";
import UpdateAddDevice from "./pages/updateAddDevice";
import AddDevice from "./pages/AddDevice";
import AddDeviceForm from "./pages/AddDeviceForm";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={MainHome} />
        <Route exact path="/ControlPanel" component={ControlPanel} />
        <Route exact path="/AddDevice" component={AddDevice} />
        <Route exact path="/AddUser" component={AddUser} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/editDevice" component={AddDeviceForm} />
        <Route exact path="/UpdateAddDevice/:id" component={UpdateAddDevice} />
      </Switch>
    </div>
  );
}

export default App;
