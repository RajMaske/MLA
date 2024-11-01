import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  // Sample images and videos
  mediaItems = [
    {
      type: 'image',
      src: 'assets/gallery/photo1.jpg', // Ensure the image is present in assets
      alt: 'Community Event',
      caption: 'समुदाय कार्यक्रमात MLA'
    },
    {
      type: 'image',
      src: 'assets/gallery/photo2.jpg',
      alt: 'Health Camp',
      caption: 'आरोग्य शिबीर'
    },
    {
      type: 'video',
      src: 'assets/gallery/video1.mp4', // Ensure the video is present in assets
      alt: 'Public Speech',
      caption: 'सार्वजनिक भाषण'
    },
    {
      type: 'image',
      src: 'assets/gallery/photo3.jpg',
      alt: 'Education Seminar',
      caption: 'शैक्षणिक सेमिनार'
    }
  ];
}
