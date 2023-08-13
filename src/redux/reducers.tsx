import { ActionTypes } from "./constants";
import { SetActivateAction } from "./actions";
import { ProjectTypes } from "../pages/OurProject/projectsData";

export interface AppState {
  projects: any;
}

const initialState: AppState = {
  projects: [],
};

const reducer = (state = initialState, action: SetActivateAction): AppState => {
  switch (action.type) {
    case ActionTypes.GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
