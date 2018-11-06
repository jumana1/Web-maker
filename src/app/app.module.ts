import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/User/login/login.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { WebsiteListComponent } from './Components/Website/website-list/website-list.component';
import { WebsiteNewComponent } from './Components/Website/website-new/website-new.component';
import { WebsiteEditComponent } from './Components/Website/website-edit/website-edit.component';
import { PageListComponent } from './Components/Page/page-list/page-list.component';
import { PageNewComponent } from './Components/Page/page-new/page-new.component';
import { PageEditComponent } from './Components/Page/page-edit/page-edit.component';
import { WidgetListComponent } from './Components/Widgets/widget-list/widget-list.component';
import { WidgetChooserComponent } from './Components/Widgets/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/Widgets/widget-edit/widget-edit.component';
import { WidgetHeadingComponent } from './Components/Widgets/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './Components/Widgets/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './Components/Widgets/widget-edit/widget-youtube/widget-youtube.component';

import { UserService } from "./services/user.service.client";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageListComponent,
    PageNewComponent,
    PageEditComponent,
    WidgetListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeadingComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent
  ],
  imports: [BrowserModule, Routing],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
