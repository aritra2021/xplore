import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './pages/itc/itc.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddComponent } from './components/add/add.component';
import { ItcFormComponent } from './forms/itc-form/itc-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderFormComponent } from './forms/provider-form/provider-form.component';
import { ProductFamilyFormComponent } from './forms/product-family-form/product-family-form.component';
import { TbmFormComponent } from './forms/tbm-form/tbm-form.component';
import { TruncatePipe } from './pipe';
import { ItcDetailsComponent } from './components/itc-details/itc-details.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    LoadingComponent,
    AddComponent,
    ItcFormComponent,
    ProviderFormComponent,
    ProductFamilyFormComponent,
    TbmFormComponent,
    TruncatePipe,
    ItcDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
