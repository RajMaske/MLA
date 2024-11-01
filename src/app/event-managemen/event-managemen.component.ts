import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-managemen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-managemen.component.html',
  styleUrl: './event-managemen.component.css'
})
export class EventManagemenComponent {
  // Sample events for management
  events = [
    {
      title: 'समुदाय आरोग्य शिबीर',
      date: 'ऑक्टोबर 20, 2024',
      description: 'समुदाय आरोग्य शिबीर आयोजित केले जाईल.',
      time: 'सुबह 10:00 वाजता',
      location: 'ग्रामपंचायत सभागृह'
    },
    {
      title: 'शैक्षणिक सेमिनार',
      date: 'सप्टेंबर 15, 2024',
      description: 'विद्यार्थ्यांसाठी करियर संधींचा मार्गदर्शन.',
      time: 'संध्याकाळ 4:00 वाजता',
      location: 'शाळा परिसर'
    },
    {
      title: 'रस्ते सुरक्षा जागरूकता',
      date: 'ऑगस्ट 25, 2024',
      description: 'रस्ते सुरक्षेच्या नियमांचे पालन करण्याबद्दल जागरूकता.',
      time: 'दुपारी 2:00 वाजता',
      location: 'ग्रामीण भाग'
    }
  ];
}
