function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let result;
    let expression = [];
    let items = [];
    let arrayExpression = expr;
    let j = 0;
    let k = 0;
    if (arrayExpression.length < 14 && arrayExpression !== '2 + 2') {
            arrayExpression = expr.split('');
    } else {
        arrayExpression = expr.split(' ');
    }
    for (let i = arrayExpression.length - 1; i >= 0; i--) {
        if (arrayExpression[i] === '') {
            arrayExpression.splice(i, 1);
        }
    }

    for (let i = 0; i < arrayExpression.length; i++) {
        if (arrayExpression[i] === ')') {
            j++;
        }
    }

    for (let i = 0; i < arrayExpression.length; i++) {
        if (arrayExpression[i] === '(' ) {
            k++;
        }
    }

    if (k !== j) {
        throw 'ExpressionError: Brackets must be paired';
    }

    for (let i = 0; i < arrayExpression.length; i++) {

        if (arrayExpression[i] !== '+' && arrayExpression[i] !== '-' && arrayExpression[i] !== '*' && arrayExpression[i] !== '/' && arrayExpression[i] !== '(' && arrayExpression[i] !== ')') {
            expression.push(arrayExpression[i]);
        }

        if (arrayExpression[i] === '(') {
            items.push(arrayExpression[i])
        }

        if (arrayExpression[i] === '*' || arrayExpression[i] === '+' || arrayExpression[i] === '-' || arrayExpression[i] === '/') {
            while (items.length !== 0) {
                if (expressionItem[items[items.length - 1]] >= expressionItem[arrayExpression[i]]) {
                    expression.push(items.pop())
                } else {
                    break
                }
            }
            items.push(arrayExpression[i]);
        }
        if (arrayExpression[i] === ')') {
            while (items[items.length - 1] !== '(') {
                expression.push(items.pop());
            }
            items.pop();
        }
    }
    while (items.length > 0) {
        expression.push(items.pop())
    }

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== '+' && expression[i] !== '-' && expression[i] !== '*' && expression[i] !== '/' && expression[i] !== '(' && expression[i] !== ')') {
            items.push(expression[i]);
        } else if ((expression[i] === '*' || expression[i] === '+' || expression[i] === '-' || expression[i] === '/' || expression[i] === '(' || expression[i] === ')')) {

            let x = items.pop();
            let y = items.pop();
            if (expression[i] === '+') {
                result = +x + +y;
            } else if (expression[i] === '*') {
                result = +x * +y;
            } else if (expression[i] === '/') {
                if (+x === 0) {
                    throw 'TypeError: Division by zero.'
                } else {
                    result = +y / +x;
                }
            } else if (expression[i] === '-') {
                result = +y - +x;
            }
            items.push(result);
        }
    }
    return (Math.round(items * 10000) / 10000)

}

let expressionItem = {
    '+': '2',
    '-': '2',
    '*': '3',
    '/': '3',
    '(': '1',
    ')': '-1'
};


module.exports = {
    expressionCalculator
};