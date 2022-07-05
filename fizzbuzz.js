// This is our main function
function fizzbuzz() {
    for( let int = 0; int <= 255; int = int+1){
        var output = new Array();
        //Work out what to output
        if(int%3 == 0){
            output.push("Fizz");
        }
        if(int%5 == 0){
            output.push("Buzz");
        }
        if(int%7 == 0){
            output.push("Bang");
        }
        if(int %11 == 0){
            output = ["Bong"];
        }
        if (int%13 ==0){
            len = output.length;
            firstB = len;
            //Find the first occurance of B
            for (let i = 0; i<len; i++){
                if(output[i].charAt(0)=="B"){
                    firstB = i
                    break
                }
            }
            //Insert Fezz into middle of array
            a = output.slice(0,firstB);
            a.push("Fezz");
            b = output.slice(firstB,len);
            output = a.concat(b);
        }
        if(int%17 == 0){
            output = output.reverse();
        }
        
        //Output
        if(output.length === 0){
            console.log(int);
        }
        else{
            console.log(output.join(""));
        }
    }
}

// Now, we run the main function:
fizzbuzz();

