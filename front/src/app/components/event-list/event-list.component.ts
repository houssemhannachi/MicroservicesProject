import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EventService} from "../../_services/event.service";
import {Event} from "../../_entities/Event";
import {StorageService} from "../../_services/storage.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  dataSource!: MatTableDataSource<Event>;
  events: Event[] | undefined;
  displayedColumns: string[] = ['titre', 'lieu', 'date', 'cc'];
  user: any;

  constructor(private eventService: EventService, private storageService: StorageService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((tableau) => {
      this.dataSource.data = tableau;
      console.log(tableau)
    });
    this.user = this.storageService.getUser();
  }

}
