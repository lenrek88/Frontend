class Storage {
    constructor(options) {
        this.name = options;
    }
    get() {
        return localStorage.getItem(this.name);
    }
    set(options) {
        localStorage.setItem(this.name, options);
    }
    clear(){
        localStorage.removeItem(this.name);
    }
    isEmpty(){
        return !this.get() ? true : false;
    }
}

let names = new Storage('names', local);

names.set('kernel')
console.log(names.get());
console.log(names.isEmpty());

let session = new Storage('session');

session.set('hi');
console.log(session.get());
console.log(session.isEmpty())