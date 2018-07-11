class User {
    fullname: string;
    constructor(firstname:string,lastname:string){
        this.fullname=firstname + " " + lastname;
    }
    hello():string{
        return " Hello, " + this.fullname;
    }
}

var user = new user("Piotr", "Pik");
alert(user.hello());