// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon ? .raichu && will_pokemon ? 
    .pikachu ? .friend? .charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))



const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];



/*let ArrayFromAbove = array.sort();
console.log(ArrayFromAbove);
let item = 0;
for (i=0; i<array.length; i++){
    if item < [i];
}*/

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
array.sort((a, b) => a - b && a===a);














let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const CleanTheRoom = (arr) => {
    let isSorted = false;

    while(isSorted === false){
        isSorted = true;
        for(var i=0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                isSorted = false;
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }

    let cleaned = [];
    let j = 0;
    while(j<arr.length){
        if(arr[j+1] === arr[j] && j<arr.length){
            hasMore = true;
            let mini = [];
            while (hasMore) {
                mini.push(arr[j]);
                j++;
                if (!(arr[j+1] === arr[j]) && j<arr.length) {
                    mini.push(arr[j]);
                    j++;
                    hasMore = false;
                }
            }
            cleaned.push(mini);
        }else{
            cleaned.push(arr[j]);
            j++;
        }
    }
    return cleaned;
}

CleanTheRoom(input);