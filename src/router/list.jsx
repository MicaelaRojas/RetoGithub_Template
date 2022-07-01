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
    },
    {
        path: ROUTES.SIGNIN,
        elements: <SignInView/>
    },
    {
        path: ROUTES.CALLBACK,
        elements: <GithubView/>
    },
];