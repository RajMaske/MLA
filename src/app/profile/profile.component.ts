import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Make sure to create this CSS file if needed
})
export class ProfileComponent {
  // Personal bio and achievements
  bio: string = `आमचे आमदार जनतेच्या सेवेत समर्पित आहेत. त्यांची कारकीर्द समाजसेवेसाठी समर्पित आहे.`;
  achievements: string[] = [
    'आरोग्य क्षेत्रात सुधारणा करण्यासाठी विविध योजनेची अंमलबजावणी केली.',
    'शिक्षण सुधारणा प्रकल्पांतर्गत अनेक शाळा स्थापन केल्या.',
    'पायाभूत सुविधांचा विकास साधला.'
  ];
  journey: string = `आमदारांनी आपल्या कार्यकाळात अनेक चांगले निर्णय घेतले आहेत...`;
}
