import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { UpdatesNewsComponent } from '../updates-news/updates-news.component';
import { ConstituencyServicesComponent } from '../constituency-services/constituency-services.component';
import { EventManagemenComponent } from '../event-managemen/event-managemen.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProfileComponent,UpdatesNewsComponent,ConstituencyServicesComponent,EventManagemenComponent,GalleryComponent,ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fixed the typo here
})
export class HomeComponent {
  events = [
    {
      title: 'संपूर्ण हिंगोली जिल्हा ओला दुष्काळग्रस्त जाहीर करावा ही मागणी केली..!',
      description: 'आमदार राजू भैया नवघरे यांनी कृषिमंत्री मा. श्री धनंजय मुंडे साहेब यांची भेट घेऊन हिंगोली जिल्ह्यात झालेल्या अतिवृष्टी मुळे नुकसानग्रस्तांना सरसकट मदत मिळावी व संपूर्ण हिंगोली जिल्हा ओला दुष्काळग्रस्त जाहीर करावा ही मागणी केली..!',
      date: '05 सप्टेंबर, 2024',
      image: 'september.jpg' // सुनिश्चित करा की ही प्रतिमा assets फोल्डरमध्ये आहे
    },
    {
      title: 'राजुभैय्या नवघरे यांना केली असता भैय्या साहेबांनी क्षणाचा हि विलंब न करता ती मागणी पुर्ण करण्याचे आश्वासन दिले',
      description: 'इंजनगाव (प) येथील गावकऱ्यांनी व तेथील युवक बांधवानी जिम चे साहित्य उपलब्ध करून द्यावे हि मागणी आ. राजुभैय्या नवघरे यांना केली असता भैय्या साहेबांनी क्षणाचा हि विलंब न करता ती मागणी पुर्ण करण्याचे आश्वासन दिले',
      date: '15 सप्टेंबर, 2024',
      image: 'augast.jpg'
    },
    {
      title: 'नवोदय सराव परीक्षा दिं. १८-०१-२४ वेळ-स.११ ते दु. १ वाजेपर्यंत वार-गुरुवार स्थळ - विद्यार्थ्यांची शाळा..!!',
      description: 'वर्ष चौथे आमदार चंद्रकांत उर्फ राजुभैया नवघरे यांची संकल्पना नवोदय सराव परीक्षा दिं. १८-०१-२४ वेळ-स.११ ते दु. १ वाजेपर्यंत वार-गुरुवार स्थळ - विद्यार्थ्यांची शाळा..!!',
      date: '17 जानेवारी, 2024',
      image: 'janeuary.jpg'
    }
  ];
}
