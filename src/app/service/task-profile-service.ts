import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { TaskProfile } from "../model/task-profile";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TaskProfileService {

        private baseUrl = '/api/v1/taskprofile';

        constructor(private http: HttpClient) {
        
        }

        getTaskProfilesByUserId(userId: string): Observable<TaskProfile[]> {
            return this.http.get<TaskProfile[]>(`${this.baseUrl}?userId=${userId}`);
        }

}