import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import {MemberService} from '../../_services/member.service';
import {Component, OnInit} from '@angular/core';
import {Member} from 'src/app/_entities/Member';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {StorageService} from "../../_services/storage.service";

//import {GLOBAL1} from 'C:/Users/pc/angular/FirstAppAngular/src/app/app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  dataSource!: MatTableDataSource<Member>;
  members: Member[] | undefined;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'cc'];
  user: any;

  constructor(private memberService: MemberService, private router: Router, private dialog: MatDialog,private storageService:StorageService) {

    this.dataSource = new MatTableDataSource(this.memberService.tab);
  }

  ngOnInit(): void {
    this.memberService.getAllMembers().then((tableau) => {
      this.dataSource.data = tableau;
      console.log(tableau)
    });
    this.user=this.storageService.getUser();


  }

  fetchData(): void {
    this.memberService.getAllMembers().then((tableau) => {
      this.dataSource.data = tableau
    })
  }

  ONDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(resultat => {
      if (resultat) {
        this.memberService.deleteMemberById(id).then(() => {
        })
        this.fetchData();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

