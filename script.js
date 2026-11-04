
// ======================================
// Q36. Employee Salary Report
// ======================================

function q36() {

    const employees = [
        { name: "Arun", salary: 250000 },
        { name: "Priya", salary: 350000 },
        { name: "Kumar", salary: 180000 },
        { name: "Divya", salary: 420000 },
        { name: "Rahul", salary: 280000 }
    ];

    const lowSalaryEmployees = employees.filter(
        employee => employee.salary < 300000
    );

    console.log("Employees earning less than ₹300,000:");

    lowSalaryEmployees.forEach(employee => {
        console.log(
            "Name:", employee.name,
            "| Salary: ₹" + employee.salary
        );
    });
}


// ======================================
// Q37. Product Price Calculator
// ======================================

function q37() {

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {

            const productDetails = products.map(product => {
                return {
                    title: product.title,
                    price: product.price
                };
            });

            console.log("Product Titles and Prices:");
            console.log(productDetails);

        })
        .catch(error => {
            console.log("Error fetching products:", error);
        });
}


// ======================================
// Q38. Product Search
// ======================================

function q38() {

    const selectedCategory = "electronics";

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {

            const filteredProducts = products.filter(
                product => product.category === selectedCategory
            );

            console.log("Products in Electronics Category:");
            console.log(filteredProducts);

            filteredProducts.forEach(product => {
                console.log(
                    "Title:", product.title,
                    "| Price: $" + product.price
                );
            });

        })
        .catch(error => {
            console.log("Error fetching products:", error);
        });
}


// ======================================
// Q39. Number Analysis
// ======================================

function q39() {

    const numbers = [10, 15, 20, 25, 30, 35, 40];

    console.log("Original Numbers:", numbers);

    // map(): Multiply each number by 2
    const doubledNumbers = numbers.map(num => num * 2);

    console.log("Doubled Numbers:", doubledNumbers);

    // filter(): Get numbers greater than 20
    const greaterNumbers = numbers.filter(num => num > 20);

    console.log("Numbers Greater Than 20:", greaterNumbers);

    // reduce(): Calculate the total
    const total = numbers.reduce((sum, num) => sum + num, 0);

    console.log("Sum of Numbers:", total);

    // some(): Check whether any number is greater than 35
    const hasGreaterNumber = numbers.some(num => num > 35);

    console.log("Any Number Greater Than 35:", hasGreaterNumber);

    // every(): Check whether all numbers are positive
    const allPositive = numbers.every(num => num > 0);

    console.log("Are All Numbers Positive:", allPositive);
}


// ======================================
// Q40. Product Listing
// ======================================

function q40() {

    console.log("Fetching product details...");

    fetch("https://fakestoreapi.com/products")
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch product data");
            }

            return response.json();

        })
        .then(products => {

            console.log("Product Listing:");

            products.forEach(product => {

                console.log("-------------------------");
                console.log("Title:", product.title);
                console.log("Price: $" + product.price);
                console.log("Category:", product.category);

            });

        })
        .catch(error => {

            console.log("Error:", error.message);

        })
        .finally(() => {

            console.log("Product fetching process completed.");

        });
}


// ======================================
// Run Exercise Based on User Input
// ======================================

function runExercise() {

    const questionNumber = Number(
        document.getElementById("question").value
    );

    switch (questionNumber) {

        case 36:
            q36();
            break;

        case 37:
            q37();
            break;

        case 38:
            q38();
            break;

        case 39:
            q39();
            break;

        case 40:
            q40();
            break;

        default:
            console.log("Please enter a question number between 36 and 40.");
    }
}
