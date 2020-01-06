let obj = [
    {
        name: '23131',
        id: 1
    },
    {
        name: 'ajdnjwabd',
        id: 2
    },
    {
        name: '2wadwadwad3131',
        id: 3
    },
    {
        name: '23131',
        id: 1
    },
    {
        name: '2wadwadwad3131',
        id: 3
    },
    {
        name: '2dwdwadadawfwgfafga3131',
        id: 4
    },
    {
        name: '2dwdwadadawfwgfafga3131',
        id: 4
    },
    {
        name: '23131',
        id: 1
    },

]

var newArr = []

for(var i = 0; i < obj.length; i++){
    if(!JSON.stringify(newArr).includes(JSON.stringify(obj[i]))){
        newArr.push(obj[i])
    }
}




console.log(newArr)