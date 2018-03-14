//This is a sample of pulling the list
const [node,script,tag,price] = process.argv

if(tag != "--price"){

   console.log("Require an argument for the price: --price");
   process.exit(200);

}
else{
    console.log(`You are filtering by price: $${price}`);

}



console.log(`Filter by beer price $${price}`);

let beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
];

beers.filter(beer=>beer.price >= price)
.map(beer=> beer.name + ": $" + beer.price)
.forEach((result)=> console.log(result));


