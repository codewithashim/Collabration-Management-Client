import { baseUrl } from "../Network/Network";

export const createTaskUrl = baseUrl + "tasks/create-task";

export const getAllTaskUrl = baseUrl + "tasks/";

export const getTaskByIdUrl = (id) => baseUrl + `tasks/id/${id}`;

export const updateTaskByIdUrl = (id) => baseUrl + `tasks/update-task/${id}`;

export const deleteTaskByIdUrl = (id) => baseUrl + `tasks/delete-task/${id}`;
