describe("00-sayHello", function () {
  it("returns 'Hello!'", function () {
    expect(sayHello()).toBe("Hello!");
  });
});

describe("01-addOne", function () {
  it("works with negative numbers", function () {
    expect(addOne(-5)).toBe(-4);
  });
  it("works with positive numbers", function () {
    expect(addOne(1)).toBe(2);
  });
});

describe("02-addTwoNumbers", function () {
  it("adds 5 and 10", function () {
    expect(addTwoNumbers(5, 10)).toBe(15);
  });
  it("adds 10 and negative 2", function () {
    expect(addTwoNumbers(10, -2)).toBe(8);
  });
  it("adds 0 and 0", function () {
    expect(addTwoNumbers(0, 0)).toBe(0);
  });
  it("returns NaN appropriately", function () {
    expect(addTwoNumbers("Hello", 5)).toBeNaN();
  });
});

describe("03-sumNumbers", function () {
  it("sums array of one num", function () {
    expect(sumNumbers([10])).toBe(10);
  });
  it("sums array of two nums", function () {
    expect(sumNumbers([5, 10])).toBe(15);
  });
  it("sums_array_of_three_nums", function () {
    expect(sumNumbers([2, 10, -5])).toBe(7);
  });
  it("sums_empty_array", function () {
    expect(sumNumbers([])).toBe(0);
  });
});

describe("04-addList", function () {
  it("returns 0 with no args", function () {
    expect(addList()).toBe(0);
  });
  it("adds list of numbers", function () {
    expect(addList(2, 7)).toBe(9);
    expect(addList(0, 7, -1)).toBe(6);
  });
});

describe("05-computeRemainder", function () {
  it("returns infinity", function () {
    expect(computeRemainder(4, 0)).toBe(Infinity);
  });
  it("computes remainder", function () {
    expect(computeRemainder(10, 2)).toBe(0);
    expect(computeRemainder(10, 3)).toBe(1);
    expect(computeRemainder(10.5, 3)).toBe(1.5);
  });
});

describe("06-range", function () {
  it("returns msg if first arg not smaller", function () {
    expect(range(5, 2)).toBe("First argument must be less than second");
  });
  it("returns appropriate array of nums", function () {
    expect(range(1, 4)).toEqual([1, 2, 3]);
    expect(range(1, 1)).toEqual([]);
    expect(range(-2, 3)).toEqual([-2, -1, 0, 1, 2]);
  });
});

describe("07-reverseUpcaseString", function () {
  it("returns string reversed and upcased", function () {
    expect(reverseUpcaseString("SEI Rocks!")).toBe("!SKCOR IES");
  });
});

describe("08-removeEnds", function () {
  it("returns empty string when length less than 3", function () {
    expect(removeEnds("a")).toBe("");
  });
  it("removes the ends", function () {
    expect(removeEnds("abc")).toBe("b");
    expect(removeEnds("123456789")).toBe("2345678");
  });
});

describe("09-charCount", function () {
  it("returns an object", function () {
    expect(typeof charCount("abc")).toBe("object");
  });
  it("properly counts the chars", function () {
    expect(charCount("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(charCount("Today is fantastic!")).toEqual({
      T: 1,
      o: 1,
      d: 1,
      a: 3,
      y: 1,
      " ": 2,
      i: 2,
      s: 2,
      f: 1,
      n: 1,
      t: 2,
      c: 1,
      "!": 1,
    });
  });
});

describe("10-formatWithPadding", function () {
  it("pads only if not min lenth", function () {
    expect(formatWithPadding(1234, "*", 3)).toBe("1234");
  });
  it("pads integer with char specified", function () {
    expect(formatWithPadding(123, "0", 5)).toBe("00123");
    expect(formatWithPadding(42, "*", 10)).toBe("********42");
  });
});

describe("11-isPalindrome", function () {
  it("returns a boolean", function () {
    expect(typeof isPalindrome("abc")).toBe("boolean");
  });
  it("empty string returns true", function () {
    expect(isPalindrome("")).toBe(true);
  });
  it("returns true for simple palindrome", function () {
    expect(isPalindrome("A")).toBe(true);
  });
  it("returns false if not palindrome", function () {
    expect(isPalindrome("abc")).toBe(false);
  });
  it("returns true for palindrome phrase", function () {
    expect(isPalindrome("A nut for a jar of tuna")).toBe(true);
  });
});

describe("12-hammingDistance", function () {
  it("returns NaN if not same length", function () {
    expect(hammingDistance("abc", "ab")).toEqual(NaN);
  });
  it("returns correct distance", function () {
    expect(hammingDistance("abc", "abc")).toBe(0);
    expect(hammingDistance("a1c", "a2c")).toBe(1);
    expect(hammingDistance("!!!!", "****")).toBe(4);
  });
});

describe("13-mumble", function () {
  it("repeats characters correctly", function () {
    expect(mumble("X")).toBe("X");
    expect(mumble("abc")).toBe("a-bb-ccc");
    expect(mumble("121")).toBe("1-22-111");
    expect(mumble("!A 2")).toBe("!-AA-   -2222");
  });
});

describe("14-fromPairs", function () {
  it("returns object from array of arrays", function () {
    expect(
      fromPairs([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
    expect(
      fromPairs([
        ["name", "Sam"],
        ["age", 24],
        ["name", "Sally"],
      ])
    ).toEqual({ name: "Sally", age: 24 });
    expect(
      fromPairs([
        ["i", "like"],
        ["to", "eat"],
        ["banana", "chips"],
      ])
    ).toEqual({ i: "like", to: "eat", banana: "chips" });
  });
});

describe("15-mergeObjects", function () {
  it("returns a modified version of the object passed into the function as the first argument", function () {
    var obj = {};
    expect(mergeObjects(obj, { a: 1 })).toBe(obj);
  });
  it("adds additional properties", function () {
    expect(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    });
  });
  it("merges props from left to right", function () {
    expect(
      mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }, { b: 22, d: 44 })
    ).toEqual({ a: 1, b: 22, c: 3, d: 44 });
  });
});

describe("16-findHighestPriced", function () {
  it("returns an object", function () {
    expect(
      typeof findHighestPriced([{ price: 1 }, { price: 2 }, { price: 3 }])
    ).toBe("object");
  });
  it("finds the highest priced object", function () {
    var items = [
      { sku: "a1", price: 25 },
      { sku: "b2", price: 5 },
      { sku: "c3", price: 50 },
      { sku: "d4", price: 10 },
    ];
    expect(findHighestPriced(items)).toBe(items[2]);
  });
  it("returns first object if tie", function () {
    var items = [
      { sku: "a1", price: 25 },
      { sku: "b2", price: 25 },
    ];
    expect(findHighestPriced(items)).toBe(items[0]);
  });
});

describe("17-mapArray", function () {
  it("returns a new array", function () {
    expect(Array.isArray(mapArray([], (_) => _))).toBe(true);
  });
  it("successfuly maps without using index", function () {
    expect(
      mapArray([1, 2, 3], function (n) {
        return n * 2;
      })
    ).toEqual([2, 4, 6]);
  });
  it("successfuly maps using index", function () {
    expect(
      mapArray(["rose", "tulip", "daisy"], function (f, i) {
        return `${i + 1} - ${f}`;
      })
    ).toEqual(["1 - rose", "2 - tulip", "3 - daisy"]);
  });
});

describe("18-reduceArray", function () {
  it("successfully sums an array of numbers", function () {
    expect(
      reduceArray(
        [1, 2, 3],
        function (acc, n) {
          return acc + n;
        },
        0
      )
    ).toBe(6);
  });
  it("considers index", function () {
    expect(
      reduceArray(
        [1, 2, 3],
        function (acc, n, i) {
          return acc + n + i;
        },
        0
      )
    ).toBe(9);
  });
  it("counts votes", function () {
    expect(
      reduceArray(
        ["Yes", "No", "Yes", "Maybe"],
        function (acc, v) {
          acc[v] = acc[v] ? acc[v] + 1 : 1;
          return acc;
        },
        {}
      )
    ).toEqual({ Yes: 2, No: 1, Maybe: 1 });
  });
});

// Challenge: 19-flatten
describe("19-flatten", function () {
  it("flattens nested arrays", function () {
    expect(flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]])).toEqual([
      1,
      2,
      3,
      4,
      1,
      "a",
      "b",
      "c",
    ]);
  });
  it("returns same array if no nesting", function () {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

// Challenge: 20-primeFactors
describe("20-primeFactors", function () {
  it("returns prime factors of a given number", function () {
    expect(primeFactors(2)).toEqual([2]);
    expect(primeFactors(18)).toEqual([2, 3, 3]);
    expect(primeFactors(105)).toEqual([3, 5, 7]);
  });
  it("returns an empty array for numbers less than 2", function () {
    expect(primeFactors(1)).toEqual([]);
    expect(primeFactors(0)).toEqual([]);
  });
  it("handles non-integer inputs", function () {
    expect(primeFactors(4.5)).toEqual([]);
  });
});

// Challenge: 21-isprime
describe("21-isPrime", function () {
  it("primes are greater than 1", function () {
    expect(isPrime(1)).toBe(false);
  });
  it("primes are whole numbers", function () {
    expect(isPrime(3.1)).toBe(false);
  });
  it("checks for prime number", function () {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(29)).toBe(true);
    expect(isPrime(200)).toBe(false);
  });
});


describe("22-intersection", function () {
  it("returns an empty array when no intersection exists", function () {
    expect(intersection([1], [2])).toEqual([]);
  });
  it("returns correct intersection", function () {
    expect(intersection(["a", 1], [])).toEqual([]);
    expect(intersection(["a", 1], [true, "a", 15])).toEqual(["a"]);
    expect(
      intersection([1, "a", true, 1, 1], [true, 1, "b", 1]).sort()
    ).toEqual([1, true, 1].sort());
    expect(
      intersection([true, 1, "b", 1], [1, "a", true, 1, 1]).sort()
    ).toEqual([1, true, 1].sort());
  });
  it("does not modify the args", function () {
    var a1 = [1, 2, 3];
    var _a1 = [1, 2, 3];
    var a2 = ["a", "b", "c"];
    var _a2 = ["a", "b", "c"];
    intersection(a1, a2);
    expect(a1).toEqual(_a1);
    expect(a2).toEqual(_a2);
  });
});

// Challenge: 23-balancedBrackets
describe("23-balancedBrackets", function () {
  it("returns true for balanced strings", function () {
    expect(balancedBrackets("()")).toBe(true);
    expect(balancedBrackets("[{}]")).toBe(true);
    expect(balancedBrackets("[({}[])]")).toBe(true);
  });
  it("returns false for unbalanced strings", function () {
    expect(balancedBrackets("(]")).toBe(false);
    expect(balancedBrackets("[(])")).toBe(false);
  });
});

// Challenge: 24-isWinningTicket
describe("24-isWinningTicket", function () {
  it("returns true for winning tickets", function () {
    expect(
      isWinningTicket([
        ["ABC", 65],
        ["dddd", 100],
        ["Hello", 108],
      ])
    ).toBe(true);
  });
  it("returns false for non-winning tickets", function () {
    expect(
      isWinningTicket([
        ["ABC", 999],
        ["XY", 89],
      ])
    ).toBe(false);
  });
});

// Challenge: 25-getNumForIP
describe("25-getNumForIP", function () {
  it("converts IP address to numeric value", function () {
    expect(getNumForIP("192.156.99.15")).toBe(3231474447);
    expect(getNumForIP("10.0.0.1")).toBe(167772161);
  });
});

// Challenge: 26-toCamelCase
describe("26-toCamelCase", function () {
  it("converts strings to camel case", function () {
    expect(toCamelCase("sei-rocks")).toBe("seiRocks");
    expect(toCamelCase("banana_Turkey_potato")).toBe("bananaTurkeyPotato");
  });
  it("returns the same string if no special characters", function () {
    expect(toCamelCase("sei")).toBe("sei");
  });
});

// Challenge: 27-countTheBits
describe("27-countTheBits", function () {
  it("counts the number of 1 bits in binary representation", function () {
    expect(countTheBits(13)).toBe(3);
    expect(countTheBits(256)).toBe(1);
  });
});

// Challenge: 28-gridTrip
describe("28-gridTrip", function () {
  it("calculates final grid position after a series of moves", function () {
    expect(gridTrip([0, 0], "U2R1")).toEqual([1, 2]);
    expect(gridTrip([10, 5], "D5L15U2")).toEqual([-5, 2]);
  });
});

// Challenge: 29-addChecker
describe("29-addChecker", function () {
  it("returns true if two numbers in the array sum to the given number", function () {
    expect(addChecker([1, 2], 3)).toBe(true);
    expect(addChecker([10, 15, 16, 22], 32)).toBe(true);
  });

  it("returns false if no two numbers in the array sum to the given number", function () {
    expect(addChecker([-3, 2], 9)).toBe(false);
    expect(addChecker([10, 15, 16, 22], 19)).toBe(false);
  });
});

// Challenge: 30-totalTaskTime
describe("30-totalTaskTime", function () {
  it("returns 0 for an empty task queue", function () {
    expect(totalTaskTime([], 1)).toBe(0);
  });

  it("calculates total time for tasks with a single thread", function () {
    expect(totalTaskTime([4, 2, 5], 1)).toBe(11);
  });

  it("calculates total time for tasks with multiple threads", function () {
    expect(totalTaskTime([5, 8], 2)).toBe(8);
    expect(totalTaskTime([4, 2, 10], 2)).toBe(12);
  });

  it("handles more complex scenarios", function () {
    expect(totalTaskTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
    expect(totalTaskTime([5, 2, 6, 8, 7, 2], 3)).toBe(12);
  });
});