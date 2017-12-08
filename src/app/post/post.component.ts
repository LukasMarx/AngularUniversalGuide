import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

const RESULT_KEY = makeStateKey<string>('result');

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    public result;
    private isServer: boolean;
    constructor(
        private tstate: TransferState,
        @Inject(PLATFORM_ID) platformId
    ) {
        this.isServer = isPlatformServer(platformId);
    }

    ngOnInit() {
        if (this.tstate.hasKey(RESULT_KEY)) {
            // We are in the browser
            this.result = this.tstate.get(RESULT_KEY, '');
        } else if (this.isServer) {
            // We are on the server
            this.tstate.set(RESULT_KEY, 'Im created on the server!');
        } else {
            // No result received
            this.result = 'Im created in the browser!';
        }
    }
}
