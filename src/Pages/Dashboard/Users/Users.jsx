import useUsers from "../../../Hooks/useUsers";

const Users = () => {
  const { usersData } = useUsers();
    console.log(usersData);

  return <section>
    <h1>users</h1>
  </section>;
};

export default Users;
