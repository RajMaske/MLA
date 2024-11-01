import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-updates-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './updates-news.component.html',
  styleUrl: './updates-news.component.css'
})
export class UpdatesNewsComponent {
  // Sample news articles
  newsArticles = [
    {
      title: 'सार्वजनिक आरोग्य शिबिराचे आयोजन',
      date: 'ऑक्टोबर 20, 2024',
      description: 'आरोग्य शिबिरामध्ये मोफत वैद्यकीय तपासणी आणि सल्ला दिला जात आहे.'
    },
    {
      title: 'शिक्षण सुधारणा प्रकल्पावर चर्चा',
      date: 'सप्टेंबर 15, 2024',
      description: 'शिक्षण क्षेत्रातील सुधारणा वर एक माहितीपट.'
    },
    {
      title: 'वाहन सुरक्षेवर जागरूकता मोहीम',
      date: 'ऑगस्ट 25, 2024',
      description: 'वाहन सुरक्षा नियमांचे पालन करण्याबाबत जागरूकता वाढवण्यासाठी मोहीम.'
    }
  ];
}
