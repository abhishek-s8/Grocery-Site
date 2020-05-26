	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.00
	},
	{
		name: "Crackers",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.50
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 11.00
	},
	{
		name: "Potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.00
	},
	{
		name: "Corn",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.00
	},
	{
		name: "Bacon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.00
	},
	{
		name: "Honey",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 10.00
	},

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Both") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push([prods[i].name, prods[i].price]);
		}
		else if (restriction == "None"){
			product_names.push([prods[i].name, prods[i].price]);
		}
	}

	//insertion sort
	let length = product_names.length;

	for (let i = 1; i < length ; i++) {

		let j = i - 1;
		let temp = product_names[i][1];
		let temp2 = product_names[i][0];

		while (j >= 0 && product_names[j][1] > temp) {
			product_names[j + 1][1] = product_names[j][1];
			product_names[j + 1][0] = product_names[j][0];
			j--;
		}
		product_names[j + 1][1] = temp;
		product_names[j + 1][0] = temp2;
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
