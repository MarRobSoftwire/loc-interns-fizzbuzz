// This is our main function
function fizzbuzz() {
    for( let int = 1; int <= 100; int++){
        var output = new String();
        if(int%3 == 0){
            output = output + "Fizz"
        }
        if(int%5 == 0){
            output = output + "Buzz"
        }
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

