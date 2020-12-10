import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable()
export class DashboardService {
  private socketURL = 'https://jn-dashboard-service.herokuapp.com/dashboard';
  private socket;

  constructor() {
    this.socket = io(this.socketURL);
  }

  getAngularAvgVotes(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('onAngularVotes', (angularVotes) => {
        observer.next(angularVotes);
      });
    });
  }

  getErrorInfo(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('mongoError', (error) => {
        observer.next(error);
      });
    });
  }
}
