import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CardViewUsersComponent } from './components/card-view-users/card-view-users.component';
import { MatCardModule } from '@angular/material/card';
import { UserListServiceService } from './services/user-list-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { DataUserComponent } from './Modals/data-user/data-user.component';
import {FooterComponent} from './components/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardViewUsersComponent, 
    DataUserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule
    
  ],
  providers: [
    UserListServiceService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
