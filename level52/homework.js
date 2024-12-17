function countArea(args) {
    if (args.length === 1) {
        const radius = args[0];
        if (radius <= 0) {
            return "the radius must be a positive number.";
        }
        return Math.PI * Math.pow(radius, 2);
    } else if (args.length === 2) {
        const [length, width] = args;
        if (length <= 0 || width <= 0) {
            return "length and width must be positive numbers.";
        }
        return length * width;
    } else if (args.length === 3) {
        const [a, b, c] = args;
        if (a <= 0 || b <= 0 || c <= 0) {
            return "all sides must be positive numbers.";
        }
        const s = (a + b + c) / 2;
        if (s <= a || s <= b || s <= c) {
            return "The provided dimensions do not form a valid triangle.";
        }
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        return "Do as shown in the მაგ";
    }
}
//მაგ
console.log(countArea(5))
console.log(countArea(4, 6))
console.log(countArea(3, 4, 5))