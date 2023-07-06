tests = ['Jamie: jamie@geneinfo.org', 'Zara: zetsure@bio123', 'Hong and Andrzej: hchui@euphoric.edu and aszego@euphoric.edu'] 
const pattern = /[a-z]+@[a-z]+\.[a-z]+/g

console.log(`pattern is ${pattern}`)

for (let test of tests){
    console.log(`tested against ${test}`) 
    const matches = test.match(pattern) 
    if (matches === null){
        console.log('-no matches-') 
    } 
    else {
        for (let m of matches){
            console.log(m)
        }
    }
}

