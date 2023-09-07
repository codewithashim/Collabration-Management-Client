import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <section>
      <h1>Header</h1>
      <Outlet />
    </section>
  );
};

export default MainLayouts;
