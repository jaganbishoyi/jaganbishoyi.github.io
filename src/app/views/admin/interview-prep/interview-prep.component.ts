import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IInterview } from '@interfaces/general.interface';
import { Location } from '@angular/common';
import { interviews } from '@inMemoryDB/interview-prep';

@Component({
    selector: 'app-interview-prep',
    templateUrl: './interview-prep.component.html',
    styleUrls: ['./interview-prep.component.scss']
})
export class InterviewPrepComponent implements OnInit {
    interview: IInterview = {} as IInterview;
    invalidCategory = false;
    category = "";
    path = "";

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.category = params['category'];
            const interview = interviews.find((interview: IInterview) => interview.category === this.category);
            if (interview) {
                this.path = `assets/interview-prep/${interview.URL}`;
                this.invalidCategory = false;
                this.interview = interview;
            } else {
                this.invalidCategory = true;
            }
        })
    }

    navigateBack(): void {
        this.location.back();
    }
}
