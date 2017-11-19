import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';
import {isUndefined} from 'util';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.snapshot.params['id']
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;


    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {

        if ((params['allowEdit'])) {
          const allowEditParamValue = params['allowEdit'];
          console.log(allowEditParamValue);
          if (allowEditParamValue === 'true') {
            this.allowEdit = true;
          } else {
            this.allowEdit = false;
          }
        }
      }
    );

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (!isUndefined(params['id'])) {
          this.server = this.serversService.getServer(parseInt(params['id'], 10));
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      }
    );
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
