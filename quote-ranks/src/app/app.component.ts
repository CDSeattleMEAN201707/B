import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Quote Ranks';

    quotes = [
        {body: 'They dont think it be like it is but it do', author: 'Oscar Gamble', rating: 0},
        {body: 'This is a quote', author: 'B', rating: 0},
        {body: 'Think lightly of yourself and deeply of the world', author: 'Miyamoto Musashi', rating: 0},
    ];

    createQuote(quote) {
        console.log(quote);
        this.quotes.push(quote);
    }

    deleteQuote(quote) {
        const idx = this.quotes.indexOf(quote);
        this.quotes.splice(idx, 1);
    }

}
