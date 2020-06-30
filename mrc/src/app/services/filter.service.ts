import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {

    filterSubject = new BehaviorSubject<string>('');
    filter = this.filterSubject.asObservable();

    constructor() {

    }

    updateValue(value: string) {
        this.filterSubject.next(value);
    }

}