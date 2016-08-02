import { Test } from "./home.component";
import { Injectable }     from "@angular/core";
import { Http , Response  } from "@angular/http";
import { Observable }     from "rxjs/Observable";

@Injectable()
export class HomeService {
    public constructor(private http: Http) {}
   public getHeroes (): Observable<Test []> {
        return this.http.get("./src/app/home/homm-data.json")
            .map(this.extractData)
             .catch(this.handleError);
    }
    public extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    public handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We"d also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error";
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
  }
