const input = require('fs').readFileSync('/dev/stdin').toString()
console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(c => input.indexOf(c)).join(' '))

// 	kiwiyou