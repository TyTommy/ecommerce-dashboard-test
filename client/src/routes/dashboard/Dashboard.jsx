import { Layout } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sider from "../../components/sider/sider.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clear_user } from "../../redux/actions/index.js";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();

  const navigator = useNavigate();

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
              onClick={() => navigator("profile")}
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
            <div
              onClick={() => {
                dispatch(clear_user());
                navigator("/auth");
              }}
              className="bg-light"
              style={{
                height: "30px",
                borderRadius: "4px",
                backgroundColor: "green",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "0 10px",
              }}
            >
              Sign out
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </Layout>
  );
};

export default Dashboard;
