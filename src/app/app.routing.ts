import {Routes, RouterModule} from "@angular/router";

import {ModuleWithProviders} from "@angular/core";

import {LoginComponent} from "./Components/User/login/login.component";

import {RegisterComponent} from "./Components/User/register/register.component";
import {ProfileComponent} from "./Components/User/profile/profile.component";
import {WebsiteListComponent} from "./Components/Website/website-list/website-list.component";
import { WebsiteNewComponent } from "./Components/Website/website-new/website-new.component";
import { WebsiteEditComponent } from "./Components/Website/website-edit/website-edit.component";
import { PageListComponent } from "./Components/Page/page-list/page-list.component";
import { PageNewComponent } from "./Components/Page/page-new/page-new.component";
import { PageEditComponent } from "./Components/Page/page-edit/page-edit.component";
import { WidgetListComponent } from "./Components/Widgets/widget-list/widget-list.component";
import { WidgetChooserComponent } from "./Components/Widgets/widget-chooser/widget-chooser.component";
import { WidgetEditComponent } from "./Components/Widgets/widget-edit/widget-edit.component";

// Import all other components here


const APP_ROUTES : Routes = [

{ path: "", component: LoginComponent},
{ path: "login", component: LoginComponent},
{ path: "register", component: RegisterComponent},
{ path: "user/:uid", component: ProfileComponent},
{ path: "user/:uid/website", component: WebsiteListComponent},
{ path: "user/:uid/website/new", component: WebsiteNewComponent},
{ path: "user/:uid/website/:wid", component: WebsiteEditComponent},
{ path: "user/:uid/website/:wid/page",
component: PageListComponent},
{ path: "user/:uid/website/:wid/page/new",
component: PageNewComponent},
{ path: "user/:uid/website/:wid/page/:pid",
component: PageEditComponent},
{ path: "user/:uid/website/wid/page/:pid/widget",
component: WidgetListComponent},
{ path: "user/:uid/website/:wid/page/:pid/widget/new",
component: WidgetChooserComponent},
{ path: "user/:uid/website/:wid/page/:pid/widget/:wid",
component: WidgetEditComponent},




 // so on
];

// Export the routes as module providers

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);



