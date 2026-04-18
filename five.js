const createCounter = function (init) {

    let current = init;
    return {
        reset: function () {
            current = init;
            console.log(current)
            return current
        },
        decrement: function (decrementValue = 1) {
            var Datadecrement = current -= decrementValue;
            console.log(Datadecrement)
            return Datadecrement
        },
        increment: function (incrementValue = 1) {
            let dataIncrement = current += incrementValue
            console.log(dataIncrement)
            return dataIncrement
        },
    }
}

const counter = createCounter(5);
counter.increment()
counter.decrement();
counter.decrement();
counter.reset();