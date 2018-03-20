function infixToPostfix (expression) {

    function precedence(ch) {
        switch(ch) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
        }
        return -1;
    }

    var len = expression.length,
        result = '',
        stack = [];

    for (var i = 0; i < len; ++ i) {
        var ch = expression[i];

        if (/([A-Za-z0-9])/g.exec(ch)) {
            // It is either a letter or a number
            result += ch;
        } else if (ch === '(') {
            stack.push(ch);
        } else if (ch === ')') {

            while (stack.length && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            if (stack.length && stack[stack.length - 1] !== '(') {
                console.log('Invalid expression');
                return false;
            } else {
                stack.pop();
            }
        } else {
            // It is a number
            while (stack.length && precedence(ch) <= precedence(stack[stack.length - 1])) {
                result += stack.pop();
            }
            stack.push(ch);
        }
    }

    while (stack.length) {
        result += stack.pop();
    }

    return result;
}

console.log(infixToPostfix('((a+(b*(((c^d)-e)^(f+(g*h)))))-i)'));


function infixToPrefix(expression) {
    var expression = expression.split('').reverse();
    var len = expression.length;

    for (var i = 0; i < len; ++ i) {
        if (expression[i] === '(') {
            expression[i] = ')';
        } else if (expression[i] === ')') {
            expression[i] = '(';
        }
    }

    expression = expression.join('');

    expression = infixToPostfix(expression);
    expression = expression.split('').reverse().join('');

    return expression;
}

// console.log(infixToPrefix('(a-b/c)*(a/k-l)'));

function postFixtoInfix(expression) {
    var len = expression.length,
        stack = [];

    for (var i = 0; i < len; ++ i) {
        var ch = expression[i];

        if (/([a-zA-Z0-9])/g.exec(ch)) {
            stack.push(ch);
        } else {
            var o1 = stack.pop();
            var o2 = stack.pop();
            stack.push('(' + o2 + ch + o1 + ')');
        }
    }
    return stack.pop();
}

// console.log(postFixtoInfix('abcd^e-fgh*+^*+i-'));

// ((a+(b*(((c^d)-e)^(f+(g*h)))))-i)
// a+b*(c^d-e)^(f+g*h)-i

function preFixtoInfix(expression) {
    expression = expression.split('').reverse().join('');
    var len = expression.length,
        stack = [];

    for (var i = 0; i < len; ++ i) {
        var ch = expression[i];

        if (/([a-zA-Z0-9])/g.exec(ch)) {
            stack.push(ch);
        } else {
            var o1 = stack.pop();
            var o2 = stack.pop();
            stack.push('(' + o1 + ch + o2 + ')');
        }
    }
    return stack.pop();
}

// console.log(preFixtoInfix('*-A/BC-/AKL'));

function expressionEvaluator(expression) {
    function hasPrecedence(op1, op2) {
        if (
            op2 === '(' ||
            op2 === ')'
        ) {
            return false;
        }
        if (
            (op1 === '*' ||
            op1 === '/')
            &&
            (op2 === '+' ||
            op2 === '-')
        ) {
            return false;
        }
        return true;
    }
    function evaluate(sym, b, a) {
        switch (sym) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b !== 0)
                    return a / b;
                throw new Error('Divide by Zero Exception');
        }
        return 0;
    }

    var stack = [],
        operations = [],
        result = 0;

    for (var i = 0; i < expression.length; ++ i) {
        var ch = expression[i];

        if (ch === ' ') continue;

        if (/([0-9])/g.exec(ch)) {
            // It is a number
            var temp = ch, app = '';
            while (/([0-9])/g.exec(temp)) {
                app += temp;
                temp = expression[++ i];
            }
            -- i;
            stack.push(Number(app));
        } else if (ch === '(') {
            operations.push(ch);
        } else if (ch === ')') {
            while (operations.length && operations[operations.length - 1] !== '(') {
                stack.push(evaluate(operations.pop(), stack.pop(), stack.pop()));
            }
            if (operations.length && operations[operations.length - 1] !== '(') {
                throw new Error('Bad expression');
            } else {
                operations.pop();
            }
        } else if (
            ch === '+' ||
            ch === '-' ||
            ch === '*' ||
            ch === '/'
        ) {
            while (operations.length && hasPrecedence(ch, operations[operations.length - 1])) {
                stack.push(evaluate(operations.pop(), stack.pop(), stack.pop()));
            }
            operations.push(ch);
        }
    }
    while (operations.length) {
        stack.push(evaluate(operations.pop(), stack.pop(), stack.pop()));
    }
    return stack.pop();
}

console.log(expressionEvaluator('10 + 2 * 6'));
console.log(expressionEvaluator('100 * 2 + 12'));
console.log(expressionEvaluator('100 * ( 2 + 12 )'));
console.log(expressionEvaluator('100 * ( 2 + 12 ) / 14'));

console.log(eval('100 * ( 2 + 12 ) / 14'));
