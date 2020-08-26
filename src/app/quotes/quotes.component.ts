import { Component, OnInit, Input } from '@angular/core';
import { Quotes} from '../quote'
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

@Input() name : QuoteFormComponent;
// @Input() description: any;
// @Input() submittedBy : any;

  quotes:Quotes[] = [


        new Quotes(1,
          'Real Men love Jesus',
          'Anduru',
          'MaryAnne', new Date(2020,11,5)),
        new Quotes(2,
          'If to love was a sin to live is a crime',
          'Anduru',
          'MarAnne', new Date(2020,6,3)),
        new Quotes(3,
          'Never say die untill the bones are rotten',
          'Anduru',
          'maranne', new Date(2020,9,1)),
   
  ]
  
  public show:boolean = false;
  public details: any = 'Show';

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
     
    }
  }

  addNewQuote(newQuote){
let quoteLength = this.quotes.length;
newQuote.id = quoteLength+1;
newQuote.name = newQuote.name;
newQuote.decription = newQuote.description;
newQuote.submittedBy = newQuote.submittedBy;

newQuote.completeDate = new Date(newQuote.completeDate)
  this.quotes.push(newQuote)
}

  constructor() { 

  }

  ngOnInit() {
  }



  toggle(){
    this.show = !this.show;

    if(this.show)
    this.details= "Hide";
    else
    this.details = "Show"
  }

}

