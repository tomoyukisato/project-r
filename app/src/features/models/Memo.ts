export class Memo {
    id: number | undefined;
    title: string = '';
    body: string = '';

    constructor(initializer?: any){
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.title) this.title = initializer.title;
        if(initializer.body) this.body = initializer.body;
    }
}