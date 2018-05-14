import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesRef: AngularFireList<any>;
  courses$: Observable<any[]>;
  course$: Observable<{}>;
  constructor(private db: AngularFireDatabase) {
    this.coursesRef = db.list('courses');
    this.courses$ = this.coursesRef
                      .snapshotChanges()
                      .map(changes => {
                        return changes.map(change => {
                          return { key: change.payload.key, ...change.payload.val() };
                        });
                      });
  }

  addCourse(title, author, price, f) {
    this.coursesRef.push({title: title, author: author, price: price});
  }

}

export class Course {
  author: string;
  price: number;
  title: string;
}
