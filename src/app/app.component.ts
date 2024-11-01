import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { UpdatesNewsComponent } from "./updates-news/updates-news.component";
import { ConstituencyServicesComponent } from './constituency-services/constituency-services.component';
import { EventManagemenComponent } from "./event-managemen/event-managemen.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, ProfileComponent, UpdatesNewsComponent, ConstituencyServicesComponent, EventManagemenComponent, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mla-website';
}
