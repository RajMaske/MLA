import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-constituency-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './constituency-services.component.html',
  styleUrl: './constituency-services.component.css'
})
export class ConstituencyServicesComponent {
  // Sample services offered
  services = [
    {
      title: 'आवेदन सहाय्य',
      description: 'आपल्या सर्व प्रकारच्या सरकारी आणि वैयक्तिक अर्जांसाठी सहाय्य.'
    },
    {
      title: 'संपर्क साधा',
      description: 'आपल्याला आवश्यक असलेल्या माहितीसाठी आमच्याशी संपर्क साधा.'
    },
    {
      title: 'सामाजिक सुरक्षा',
      description: 'सामाजिक सुरक्षा योजनेत लाभ घेण्यासाठी मार्गदर्शन.'
    },
    {
      title: 'शिकायची मदत',
      description: 'शिक्षणाच्या दृष्टीने सहाय्य आणि मार्गदर्शन.'
    }
  ];
}
