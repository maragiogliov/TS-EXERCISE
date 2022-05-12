//////////////////////////////////////////////////////////////// Classes: A blueprint for an object 3 using modules
export class invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
    ;
}
;
