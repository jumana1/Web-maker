import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/User/login/login.component';
import { RegisterComponent } from './Components/User/register/register.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { WebsiteListComponent } from './Components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './Components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './Components/website/website-edit/website-edit.component';
import { PageListComponent } from './Components/page/page-list/page-list.component';
import { PageNewComponent } from './Components/page/page-new/page-new.component';
import { PageEditComponent } from './Components/page/page-edit/page-edit.component';
import { WidgetListComponent } from './Components/widgets/widget-list/widget-list.component';
import { WidgetChooserComponent } from './Components/widgets/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './Components/widgets/widget-edit/widget-edit.component';
import { WidgetHeadingComponent } from './Components/widgets/widget-edit/widget-heading/widget-heading.component';
import { WidgetImageComponent } from './Components/widgets/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './Components/widgets/widget-edit/widget-youtube/widget-youtube.component';

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
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
