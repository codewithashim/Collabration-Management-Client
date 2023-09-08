import { useQuery } from "@tanstack/react-query";
import { getAllTaskUrl } from "../Utils/Urls/TaskUrl";

const useTask = () => {
  const {
    data: tasksData,
    isLoading: tasksLoaded,
    refetch: refetchTasks,
  } = useQuery({
    queryKey: ["tasksData"],
    queryFn: async () => {
      const res = await fetch(getAllTaskUrl);
      const data = await res.json();
      return data?.data;
    },
  });

  return {
    tasksData,
    tasksLoaded,
    refetchTasks,

  };
};

export default useTask;
