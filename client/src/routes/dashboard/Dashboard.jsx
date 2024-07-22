import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sider from "../../components/sider/sider.jsx";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed} />
      <div
        style={{
          width: "100%",
          height: "50px",
        }}
      >
        <header
          style={{
            background: "#001529",
            padding: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderLeft: "1px solid white",
          }}
        >
          <span style={{ color: "white" }}>Header</span>
          <div className="d-flex align-items-center gap-3">
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "200px",
                height: "30px",
                borderRadius: "4px",
                paddingLeft: "10px",
                outline: "none",
              }}
            />
            <div
              className="avatar"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "green",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              K
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </Layout>
  );
};

export default Dashboard;
