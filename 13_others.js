n=require('fs').readFileSync('/dev/stdin')-0;console.log([...'123456789'].map(x=>`${n} * ${x} = ${n*x}`).join(`
`))

//dlaud5379