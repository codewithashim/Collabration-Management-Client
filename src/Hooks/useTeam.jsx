import { useQuery } from "@tanstack/react-query";
import { getAllTeamUrl } from "../Utils/Urls/TeamUrls";

const useTeam = () => {
  const {
    data: teamsData,
    isLoading: teamsLoaded,
    refetch: refetchTeams,
  } = useQuery({
    queryKey: ["teamsData"],
    queryFn: async () => {
      const res = await fetch(getAllTeamUrl);
      const data = await res.json();
      return data.data;
    },
  });

  return {
    teamsData,
    teamsLoaded,
    refetchTeams,
  };
};

export default useTeam;
