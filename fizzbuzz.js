// This is our main function
function fizzbuzz() {
    for( let int = 1; int <= 105; int++){
        var output = new String();
        //Work out what to output
        if(int%3 == 0){
            output = output + "Fizz"
        }
        if(int%5 == 0){
            output = output + "Buzz"
        }
        if(int%7 == 0){
            output = output + "Bang"
        }
        if(int %11 == 0){
            output = "Bong"
        }
        //Output
        if(output==""){
            console.log(int)
        }
        else{
            console.log(output)
        }
    }
}

// Now, we run the main function:
fizzbuzz();

