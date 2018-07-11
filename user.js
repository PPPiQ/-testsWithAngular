var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    User.prototype.hello = function () {
        return " Hello, " + this.fullname;
    };
    return User;
}());
var user = new user("Piotr", "Pik");
alert(user.hello());
