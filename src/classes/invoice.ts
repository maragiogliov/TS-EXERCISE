//////////////////////////////////////////////////////////////// Classes: A blueprint for an object 3 using modules

export class invoice {
    constructor (
        readonly client : string,
        public details : string,
        public amount : number,
    ){};

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    };
};