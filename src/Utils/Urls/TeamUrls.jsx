import { baseUrl } from "../Network/Network";

export const createTeamUrl = baseUrl + "teams/create-team";

export const getAllTeamUrl = baseUrl + "teams/";

export const getTeamByIdUrl = (id) => baseUrl + `teams/id/${id}`;

export const updateTeamByIdUrl = (id) => baseUrl + `teams/update-team/${id}`;

export const deleteTeamByIdUrl = (id) => baseUrl + `teams/delete-team/${id}`;

export const inviteUserToTeam = (id) => baseUrl + `teams/invite/:teamId'${id}`;
