const { data } = require('./data.js')

const countFunc = () => {
    data.map((i) => {
        i.name += ` [${i.people.length}]`;
        i.people.map((j) => {
            j.name += ` [${j.animals.length}]`
        });
    });

    return console.log(JSON.stringify(data))
}

const filterFunc = (q) => {
    let res = [];
    data.map((i) => {
        i.people.map((j) => {
            newAnimals = j.animals.filter(a => {
                if (a.name.includes(q)) {
                    res.push({
                        name: i.name,
                        people: {
                            name: j.name,
                            animals: {
                                name: a.name
                            }
                        }
                    })
                }
            })
        });
    });

    return console.log(JSON.stringify(res));
}

module.exports = {
    countFunc,
    filterFunc
  }