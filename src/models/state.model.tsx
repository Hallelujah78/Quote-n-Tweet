import { Quote } from "./quote.model";

export interface State {
  quotes: Quote[];
  quote: string;
  author: string;
}
