import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  @Input() testimonialText: string | undefined;
  @Input() testimonialAuthor: string | undefined;
 }
