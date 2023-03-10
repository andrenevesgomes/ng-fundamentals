import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
        <h2> {{event.name}}</h2>
        <img src='{{event.imageUrl}}' />
        <div> Date: {{event.date}} </div>
        <div> Time: {{event.time}} </div>
        <div> Price: {{event.price}}€ </div>
        <div>
            <span class="">Localization: {{event.location.address}} </span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
  `
})
export class EventThumbnailComponent {
   @Input() event:any
}
