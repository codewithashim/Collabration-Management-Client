import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTeamByIdUrl } from "../../../Utils/Urls/TeamUrls";
import { useState } from "react";
import InviteUserModal from "../InviteUserModal/InviteUserModal";

const TeamDetails = () => {
  const [inviteUser, setInviteUser] = useState(false);
  const { teamId } = useParams();
  const { data: teamData } = useQuery({
    queryKey: ["teamData"],
    queryFn: async () => {
      const res = await fetch(getTeamByIdUrl(teamId));
      const data = await res.json();
      return data.data;
    },
  });

  return (
    <section>
      <h1>TeamDetails</h1>
      <div className="w-[90%] rounded shadow-md p-4 m-4">
        <h1 className="text-2xl font-bold">
          Team Name: <span>{teamData?.name}</span>
        </h1>
        <hr className="my-4" />
        <div className="flex gap-4 flex-col md:flex-row">
          {teamData?.members?.map((member, index) => {
            return (
              <div
                key={index}
                className="border p-4 m-4 flex justify-center flex-col items-center"
              >
                <div className="avatar online w-20">
                  <div className="w-24 rounded-full">
                    <img src={member?.profilePicture} alt={member?.name} />
                  </div>
                </div>
                <h1>{member?.name}</h1>
                <p>{member?.username}</p>
                <p>{member?.email}</p>
              </div>
            );
          })}
        </div>

        <div className="invite-user my-4">
          <h1 className="text-[1.5rem] text-center">
            Invite User to Team: <span>{teamData?.name}</span>
          </h1>
          <hr className="my-4" />
          <div className="flex justify-center items-center">
            <button className="common-btn" onClick={() => setInviteUser(true)}>
              Invite User
            </button>
          </div>
        </div>
      </div>

      <InviteUserModal inviteUser={inviteUser} setInviteUser={setInviteUser} teamId={teamId} teamData={teamData} />
    </section>
  );
};

export default TeamDetails;
