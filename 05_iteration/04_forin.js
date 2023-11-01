const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject)
{
// console.log(`${key} shortcut is for ${myObject[key]}`)
// console.log(myObject[key])
}
const prog = ["js", "rb", "py", "java", "cpp"]
for (const key in prog)
{
    // console.log(prog[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('Fr', "France")
map.set('AF', "Africa")
map.set('IN', "India")
for (const key in map)
{
    console.log(key)
}