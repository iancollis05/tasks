/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArr: number[] = [];
    if (numbers.length == 0) {
        return newArr;
    } else if (numbers.length == 1) {
        for (let i = 0; i < 2; i++) {
            newArr.push(numbers[0]);
        }
        return newArr;
    } else {
        newArr.push(numbers[0]);
        newArr.push(numbers[numbers.length - 1]);
        return newArr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);

    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((s: string): number => {
        let result = parseInt(s, 10);
        if (isNaN(result)) {
            return 0;
        } else {
            return result;
        }
    });
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((s: string): number => {
        const parsed = parseInt(s.replace("$", ""), 10);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shoutArr: string[] = [];
    for (let i = 0; i < messages.length; i++) {
        if (messages[i].endsWith("!")) {
            shoutArr.push(messages[i].toUpperCase());
        } else if (messages[i].endsWith("?")) {
            continue;
        } else {
            shoutArr.push(messages[i]);
        }
    }
    return shoutArr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 4) {
            count = count + 1;
        }
    }
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] != "red" && colors[i] != "blue" && colors[i] != "green") {
            return false;
        }
    }

    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }

    let sum = 0;
    for (let i = 0; i < addends.length; i++) {
        sum = sum + addends[i];
    }

    let equation = addends.join("+");

    return sum + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negativeIndex = -1;

    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0) {
            negativeIndex = i;
            break;
        }
    }
    let sum = 0;
    let limit: number;

    if (negativeIndex === -1) {
        limit = values.length;
    } else {
        limit = negativeIndex;
    }

    for (let j = 0; j < limit; j++) {
        sum = sum + values[j];
    }
    let result = [...values];

    if (negativeIndex === -1) {
        result.push(sum);
    } else {
        result.splice(negativeIndex + 1, 0, sum);
    }

    return result;
}
