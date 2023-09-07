import { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaPowerOff, FaThLarge } from "react-icons/fa";
const { Sider, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 768);
    if (window.innerWidth < 768) {
      setSideNavVisible(false);
    } else {
      setSideNavVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize on component mount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <Layout className="bg-transparent">
      <style>{`
        .ant-menu-item-selected {
          background: linear-gradient(135deg, #2b59ff 0%, #bb2bff 100%);
        }
      `}</style>

      {/* Add a condition to render Sider based on sideNavVisible */}
      {sideNavVisible && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="text-white"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={["1"]}
            className="text-white "
          >
            <Menu.Item key="1" icon={<FaThLarge />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FaCalendarAlt />}>
              <Link to="/dashboard/calender">Calendar</Link>
            </Menu.Item>

            <Menu.Item key="12" icon={<FaPowerOff />}>
              <Link
                onClick={() => {
                  localStorage.clear();
                }}
                to="/"
              >
                Logout
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      )}

      <Layout className="bg-transparent">
        <div
          style={{
            padding: 0,
            position: "sticky",
            top: 0,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              toggleCollapsed();
              toggleSideNav();
            }}
            style={{
              fontSize: "16px",
              color: "black",
              width: 64,
              height: 64,
            }}
          />
        </div>

        <Content className={`${collapsed ? "" : "md:ml-10"}`}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
