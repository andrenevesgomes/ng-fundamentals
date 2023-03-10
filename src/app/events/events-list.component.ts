import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail [event]="dados"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent {
    dados =
        {
            id: 1,
            name: 'Angular Connect',
            date: '22/06/2026',
            time: '10:00 am',
            price: 399.99,
            imageUrl: '/assets/images/angularconnect-shield.png',
            location: {
                address: '1057 DT',
                city: 'London',
                country: 'England'
            }
        }

}