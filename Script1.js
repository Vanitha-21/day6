// 1. a) write a constructor for the class movies,which takes a string representing the tittle of the movies,
// a string repersenting the studio, and a string representing the rating as its arguments, and sets the 
// respective class properties to these values.
class movie {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
getrating() {
    return "the rating is" + this.rating;
}


// b) The constructor for the class movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}


// d) write a piece of code that creates an instance of the class movie with the title "casion royale",
// the studio "eon productions",and the rating "pg13"

const CasinoRoyale = new movie("Casino Royal", "eon Production", "PG13");
    