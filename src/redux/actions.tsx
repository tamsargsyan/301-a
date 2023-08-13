import { ActionTypes } from "./constants";

export interface SetActivateAction {
  type: typeof ActionTypes.GET_PROJECTS;
  payload: any;
}
export const getProjects = (projects: any): SetActivateAction => ({
  type: ActionTypes.GET_PROJECTS,
  payload: projects,
});
