function* generator (i) {
    yield i;
    yield i+10;
    yield i+20;
    yield i+30;
}

let gen = generator(10)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// {value: 10, done: false}
// {value: 20, done: false}
// {value: 30, done: false}
// {value: 40, done: false}
// {value: undefined, done: true}

function* idMaker(max = 10) {
    let index = 0 ;
    while(index < max) {
        yield index++
    }
}

gen = idMaker()

// console.log(gen.next().value) --> 0
// console.log(gen.next().value) --> 1

for(let i of gen) {
    console.log(i)
}