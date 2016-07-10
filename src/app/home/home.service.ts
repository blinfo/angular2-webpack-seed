import { Injectable }     from '@angular/core';
import { Inject } from "@angular/core";
import { Http , Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Test } from "./home.component";

@Injectable()
export class HomeService {
    public constructor(@Inject(Http)  private http: Http) {}
    getHeroes (): Observable<Test []> {
        return this.http.get("./src/app/home/homm-data.json")
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
  }

