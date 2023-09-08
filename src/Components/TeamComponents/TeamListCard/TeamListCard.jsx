/* eslint-disable react/prop-types */

import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

const TeamListCard = ({ team }) => {
  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate(`/dashboard/team/${team?._id}`);
  };

  return (
    <section onClick={handelNavigate} className="cursor-pointer">
      <Card
        style={{
          width: 300,
        }}
      >
        <div className="mb-4">
          <Meta title={team?.name} />
        </div>
        <Meta
          avatar={team?.members?.map((member) => {
            return <Avatar src={member?.profilePicture} key={member?._id} />;
          })}
        />
      </Card>
    </section>
  );
};

export default TeamListCard;
