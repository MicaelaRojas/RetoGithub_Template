import {HomeView,AboutView} from"../pages";
import * as ROUTES from"./routes";

export const listRoutes =[
    {
        path: ROUTES.HOME,
        elements: <HomeView/>
    },
    {
        path: ROUTES.ABOUT,
        elements: <AboutView/>
    }
];