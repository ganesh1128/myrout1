import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Product from "./Product";


function App() {
  return (
    
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <div class="container-fluid">
            <Dashboard></Dashboard>
            <Users></Users>
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
