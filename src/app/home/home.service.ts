import { Injectable }     from "@angular/core";
import { Headers, Http , RequestOptions, Response  } from "@angular/http";
import { Observable }     from "rxjs/Observable";

@Injectable()
export class HomeService {
    private headers = new Headers({"Authorization":"Basic am9yYXdhcnNpbmdoOndlZDU0anVsIQ=="});
    private requestOptions = new RequestOptions({headers: this.headers});
    public constructor(private http: Http) {}
   public getHeroes (): Observable<any []> {
        return this.http.get("https://api.github.com/users",this.requestOptions)
            .map(this.extractData)
             .catch(this.handleError);
    }
    public extractData(res: Response) {
        let body = res.json();
        return body || { };
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
