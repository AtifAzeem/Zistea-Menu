import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to menu.json
const menuPath = path.join(__dirname, "../src/data/menu.json");

// Read menu.json
const menu = JSON.parse(fs.readFileSync(menuPath, "utf8"));

/*
|--------------------------------------------------------------------------
| Image Mapping
|--------------------------------------------------------------------------
*/

const exactImageMap = {

    /* ============================================================
       Cold Coffee
    ============================================================ */

    "Cold Coffee|Classic Brew":
        "/menu/coffee/classic.webp",

    "Cold Coffee|Chocolate Frappe":
        "/menu/coffee/chocolate-frappe.webp",

    // All flavoured coffees use the same representative image
    "Cold Coffee|Vanilla Bliss":
        "/menu/coffee/classic.webp",

    "Cold Coffee|Caramel Craze":
        "/menu/coffee/classic.webp",

    "Cold Coffee|Butter Scotch Cup":
        "/menu/coffee/classic.webp",

    "Cold Coffee|Hazelnut Bliss":
        "/menu/coffee/classic.webp",

     /* ============================================================
    Milk Shakes
    ============================================================ */

    "Milk Shakes|Banana Velvet Shake":
        "/menu/milkshakes/banana.webp",

    "Milk Shakes|Vanilla Cloud Bliss":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Mango Majesty":
        "/menu/milkshakes/mango.webp",

    "Milk Shakes|Butter Scotch Gold":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Strawberry Velvet Shake":
        "/menu/milkshakes/strawberry.webp",

    "Milk Shakes|Black Current Crush":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Dark Oreo Delight":
        "/menu/milkshakes/oreo.webp",

    "Milk Shakes|Dark Chocolate Shake":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Crushed Kit-Kat Shake":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Bubble Gum Bloom":
        "/menu/milkshakes/premium.webp",

    "Milk Shakes|Raseeli Rasmalai Shake":
        "/menu/milkshakes/premium.webp",
    
    /* ============================================================
        Chai
    ============================================================ */

    "Chai|Adrak Attack":
        "/menu/chai/classic.webp",

    "Chai|Masala-e-Magic":
        "/menu/chai/classic.webp",

    "Chai|Cardamom Classic":
        "/menu/chai/classic.webp",

    "Chai|Bambaiya Cutting":
        "/menu/chai/classic.webp",

    "Chai|Choco Fusion":
        "/menu/chai/chocolate.webp",

    "Chai|Butter Scotch Bliss":
        "/menu/chai/flavoured.webp",

    "Chai|Vanilla Vibes":
        "/menu/chai/flavoured.webp",

    "Chai|Caramel Kiss":
        "/menu/chai/flavoured.webp",

    "Chai|Irani Ishq":
        "/menu/chai/classic.webp",

    "Chai|Royal Almond":
        "/menu/chai/flavoured.webp",

    "Chai|Strawberry Charm":
        "/menu/chai/flavoured.webp",

    "Chai|Pistachio Pleasure":
        "/menu/chai/flavoured.webp",

    "Chai|Saffron Royale":
        "/menu/chai/flavoured.webp",

    "Chai|Strong Green Tea":
        "/menu/chai/classic.webp",
    /* ============================================================
    Burger
    ============================================================ */

    "Burger|Aloo Tikki Bites":
        "/menu/burgers/aloo.webp",

    "Burger|Double Decor Aloo Bites":
        "/menu/burgers/aloo.webp",

    "Burger|Cheesy Aloo Tikki Bites":
        "/menu/burgers/aloo.webp",

    "Burger|Schezwan Blast":
        "/menu/burgers/schezwan.webp",

    "Burger|Spicy Tandoori Bites":
        "/menu/burgers/paneer.webp",

    "Burger|Masala Makhni Burger":
        "/menu/burgers/paneer.webp",

    "Burger|Chilli Garlic Burger":
        "/menu/burgers/paneer.webp",

    "Burger|Paneer Delight":
        "/menu/burgers/paneer.webp",

    "Burger|Cheesy Paneer Delight":
        "/menu/burgers/cheese-paneer.webp",

    "Burger|Zistea Special":
        "/menu/burgers/cheese-paneer.webp",
    
    /* ============================================================
    Wraps
    ============================================================ */

    "Wraps|Classic Aloo Roll-up":
        "/menu/wraps/aloo.webp",

    "Wraps|Cheesy Aloo Roll-up":
        "/menu/wraps/aloo.webp",

    "Wraps|Paneer Roll-up":
        "/menu/wraps/paneer.webp",

    "Wraps|Cheesy Paneer Roll-up":
        "/menu/wraps/paneer.webp",

    "Wraps|Veggies Loaded Roll-up":
        "/menu/wraps/loaded-veg.webp",

    "Wraps|Cheesy Veggies Loaded Roll-up":
        "/menu/wraps/loaded-veg.webp",
    /* ============================================================
    Sandwich
    ============================================================ */

    "Sandwich|Crispy Aloo Crushed":
        "/menu/sandwiches/veg.webp",

    "Sandwich|Savory Onion Zing":
        "/menu/sandwiches/veg.webp",

    "Sandwich|Sweet Corn Mayo Melt":
        "/menu/sandwiches/corn-mayo.webp",

    "Sandwich|Veggies Delight Fusion":
        "/menu/sandwiches/veg.webp",

    "Sandwich|Paneer Supreme Grilled":
        "/menu/sandwiches/paneer.webp",

    "Sandwich|Tandoori Paneer Sandwich":
        "/menu/sandwiches/paneer.webp",

    "Sandwich|Veggie Cheese Bomb":
        "/menu/sandwiches/cheese-overloaded.webp",

    "Sandwich|Zistea Overloaded Sandwich":
        "/menu/sandwiches/cheese-overloaded.webp",

    /* ============================================================
    Pizza
    ============================================================ */

    "Pizza|Classic Margherita Magic":
        "/menu/pizza/margherita.webp",

    "Pizza|Onion O' Clock":
        "/menu/pizza/onion.webp",

    "Pizza|Capsi Crunch":
        "/menu/pizza/capsicum.webp",

    "Pizza|Tomato Tangy Treat":
        "/menu/pizza/tomato.webp",

    "Pizza|Corny Affair":
        "/menu/pizza/corn.webp",

    "Pizza|Fresh Veggie Delight":
        "/menu/pizza/veggie.webp",

    "Pizza|Fresh Veggie Schezwan Blast":
        "/menu/pizza/veggie.webp",

    "Pizza|Paneer-e-Zaika":
        "/menu/pizza/paneer.webp",

    "Pizza|Zaika-e-Tandoori Paneer":
        "/menu/pizza/paneer.webp",

    "Pizza|Paneer Masala Makhni Pizza":
        "/menu/pizza/paneer.webp",

    "Pizza|Desi Masala-e-Magic":
        "/menu/pizza/desi.webp",

    "Pizza|Red Hot Waves":
        "/menu/pizza/red-sauce.webp",

    "Pizza|Zaika-e-Schezwan":
        "/menu/pizza/schezwan.webp",

    /* ============================================================
    Pasta
    ============================================================ */

    "Pasta|Tangy Tomato Pasta":
        "/menu/pasta/red-sauce.webp",

    "Pasta|Creamy White Pasta":
        "/menu/pasta/white-sauce.webp",

    "Pasta|Pink Sauce Pasta":
        "/menu/pasta/pink-sauce.webp",

    "Pasta|Cheesy Corn Pasta":
        "/menu/pasta/corn.webp",

    "Pasta|Paneer Pasta":
        "/menu/pasta/paneer.webp",

    "Pasta|Tandoori Paneer Pasta":
        "/menu/pasta/paneer.webp",

    "Pasta|Schezwan Pasta":
        "/menu/pasta/schezwan.webp",

    /* ============================================================
    Fries
    ============================================================ */

    "Fries|Classic Salted Fries":
        "/menu/fries/classic.webp",

    "Fries|Peri Peri Fries":
        "/menu/fries/peri-peri.webp",

    "Fries|Cheesy Fries":
        "/menu/fries/cheese.webp",

    "Fries|Loaded Fries":
        "/menu/fries/loaded.webp",

/* ============================================================
   Momos
============================================================ */

"Momo|Veg Fried Momo (10 pcs.)":
    "/menu/momos/fried-veg.webp",

"Momo|Kurkure Momo (10 pcs.)":
    "/menu/momos/kurkure.webp",

"Momo|Cheesy Corn (8 pcs.)":
    "/menu/momos/steam.webp",

"Gravy Momo|Desi Chatni Momo (8 pcs.)":
    "/menu/momos/steam.webp",

"Gravy Momo|Spicy Schezwan Momo (8 pcs.)":
    "/menu/momos/schezwan-gravy.webp",

"Gravy Momo|Pizza Tangy Tomato (8 pcs.)":
    "/menu/momos/red-sauce.webp",

"Gravy Momo|Tandoori Momo (8 pcs.)":
    "/menu/momos/tandoori-gravy.webp",

"Gravy Momo|Masala Makhni Momo (8 pcs.)":
    "/menu/momos/red-sauce.webp",

"Gravy Momo|Creamy Momo (8 pcs.)":
    "/menu/momos/white-sauce-gravy.webp",

/* ============================================================
   Spring Rolls
============================================================ */

"Spring Roll|Spring Roll (2 pcs.)":
    "/menu/spring-rolls/spring-roll.webp",

"Spring Roll|Kurkure Spring Roll (2 pcs.)":
    "/menu/spring-rolls/spring-roll.webp",

/* ============================================================
   Chinese
============================================================ */

"Chinese|Veg Fried Rice":
    "/menu/chinese/veg-fried.webp",

"Chinese|Paneer Fried Rice":
    "/menu/chinese/paneer-fried.webp",

"Chinese|Veg Noodles":
    "/menu/chinese/veg-noodles.webp",

"Chinese|Hakka Noodles":
    "/menu/chinese/veg-noodles.webp",

"Chinese|Paneer Noodles":
    "/menu/chinese/paneer-fried.webp",

"Chinese|Honey Chilli Potato":
    "/menu/chinese/honey-chilli.webp",

"Chinese|Chilli Potato":
    "/menu/chinese/chilli-potato.webp",

"Chinese|Sweet Corn Soup":
    "/menu/chinese/sweet-corn-soup.webp",

"Chinese|Tom Yum Soup":
    "/menu/chinese/tom-soup.webp",

"Chinese|Korean Ramen":
    "/menu/chinese/korean-ramen.webp",
    
/* ============================================================
   Maggi
============================================================ */

"Maggi|Classic Maggi":
    "/menu/maggi/classic.webp",

"Maggi|Veg Maggi":
    "/menu/maggi/veg.webp",

"Maggi|Paneer Maggi":
    "/menu/maggi/paneer.webp",

"Maggi|Schezwan Maggi":
    "/menu/maggi/schezwan.webp",

"Maggi|Cheese Butter Maggi":
    "/menu/maggi/cheese-butter.webp",

/* ============================================================
   Mocktails
============================================================ */

"Mocktails|Mint Mojito":
    "/menu/mocktails/mint-mojito.webp",

"Mocktails|Berry Mojito":
    "/menu/mocktails/berry-mojito.webp",

"Mocktails|Blueberry Lagoon":
    "/menu/mocktails/blueberry-lagoon.webp",

"Mocktails|Watermelon Cooler":
    "/menu/mocktails/watermelon-cooler.webp",

/* ============================================================
   Quick Bites
============================================================ */

"Quick Bites|Bhel Puri":
    "/menu/quick-bites/bhel-puri.webp",

"Quick Bites|Bun Maska":
    "/menu/quick-bites/bun-maska.webp",

"Quick Bites|Nachos":
    "/menu/quick-bites/nachos.webp",

"Quick Bites|Sweet Corn":
    "/menu/quick-bites/sweet-corn.webp",

"Quick Bites|Butter Toast":
    "/menu/quick-bites/toast.webp",

"Quick Bites|Cheese Toast":
    "/menu/quick-bites/toast.webp",

/* ============================================================
   Hot Coffee
============================================================ */

"Hot Coffee|Black Kick":
    "/menu/hot-coffee/black.webp",

"Hot Coffee|Desi Brew":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Creamy Butter":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Almond Shot":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Caramel Craze":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Choco Lava":
    "/menu/hot-coffee/mocha.webp",

"Hot Coffee|Vanilla Bliss":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Mocha Madness":
    "/menu/hot-coffee/mocha.webp",

"Hot Coffee|Butter Scotch Cup":
    "/menu/hot-coffee/cappucino.webp",

"Hot Coffee|Hazelnut Bliss":
    "/menu/hot-coffee/cappucino.webp",

"Drinks|Cold Drink":
    "/menu/drinks/cold-drink.webp",

"Drinks|Masala Cold Drink":
    "/menu/drinks/masala.webp",

"Drinks|Hell Energy":
    "/menu/drinks/hell.webp",

/* ============================================================
   Pasta
============================================================ */

"Pasta|Desi Masala-e-Magic":
    "/menu/pasta/red-sauce.webp",

"Pasta|Red Hot Waves":
    "/menu/pasta/red-sauce.webp",

"Pasta|Zaika-e-Schezwan":
    "/menu/pasta/red-sauce.webp",

"Pasta|Pretty Pink Pasta":
    "/menu/pasta/pink-sauce.webp",

"Pasta|Smoky Tandoori Waves":
    "/menu/pasta/tandoori.webp",

"Pasta|Masala-e-Makhni":
    "/menu/pasta/red-sauce.webp",

"Pasta|Creamy White Waves":
    "/menu/pasta/white-sauce.webp",

/* ============================================================
   Fries
============================================================ */

"Fries|Lemon Chilli Attack":
    "/menu/fries/garlic.webp",

"Fries|Extra Spicy Chilli Fries":
    "/menu/fries/garlic.webp",

"Fries|Korean Kimchi Fries":
    "/menu/fries/garlic.webp",

"Fries|Tandoori Crisp":
    "/menu/fries/pizza.webp",

"Fries|Spicy Schezwan Shots":
    "/menu/fries/pizza.webp",

"Fries|Masala Makhni Fries":
    "/menu/fries/loaded-cheese.webp",

/* ============================================================
   Quick Bites
============================================================ */

"Quick Bites|Chocolate Bun":
    "/menu/quick-bites/bun-maska.webp",

"Quick Bites|Bread Butter Toast":
    "/menu/quick-bites/toast.webp",

"Quick Bites|Sweet Corn Chat":
    "/menu/quick-bites/sweet-corn.webp",

"Quick Bites|Nachos with Cheese Dip":
    "/menu/quick-bites/nachos.webp",

"Quick Bites|Veggies Nachos Chat":
    "/menu/quick-bites/nachos.webp",

"Quick Bites|Bambaiya Bhelpuri":
    "/menu/quick-bites/bhel-puri.webp",

/* ============================================================
   Beverages
============================================================ */

"Beverages|Mint Mirage":
    "/menu/mocktails/mint-mojito.webp",

"Beverages|Blue Lagoon Splash":
    "/menu/mocktails/blueberry-lagoon.webp",

"Beverages|Red Blush Melon":
    "/menu/mocktails/watermelon-cooler.webp",

"Beverages|Midnight Khatta":
    "/menu/mocktails/berry-mojito.webp",

"Beverages|Blue Berry Bloom":
    "/menu/mocktails/blueberry-lagoon.webp",

"Beverages|Cren Crimson Chill":
    "/menu/mocktails/watermelon-cooler.webp",

"Beverages|Berry Eclipse":
    "/menu/mocktails/berry-mojito.webp",

"Drinks|Water":
    "/menu/drinks/cold-drink.webp",

/* ============================================================
   Chilli Potato
============================================================ */

"Chilli Potato|Chilli Potato":
    "/menu/chinese/chilli-potato.webp",

"Chilli Potato|Honey Chilli Potato":
    "/menu/chinese/honey-chilli.webp",

/* ============================================================
   Fried Rice
============================================================ */

"Fried Rice|Veg Fried Rice":
    "/menu/chinese/veg-fried.webp",

"Fried Rice|Spicy Schezwan Rice":
    "/menu/chinese/veg-fried.webp",

"Fried Rice|Paneer Fried Rice":
    "/menu/chinese/paneer-fried.webp",

/* ============================================================
   Noodles
============================================================ */

"Noodles|Veg Noodle":
    "/menu/chinese/veg-noodles.webp",

"Noodles|Paneer Veg Noodle":
    "/menu/chinese/paneer-fried.webp",

"Noodles|Korean Ramen Noodle":
    "/menu/chinese/korean-ramen.webp",

/* ============================================================
   Soup
============================================================ */

"Soup|Tangy Tomato Soup":
    "/menu/chinese/tom-soup.webp",

"Soup|Hot Chilli Soup":
    "/menu/chinese/tom-soup.webp",

"Soup|Creamy Corn Soup":
    "/menu/chinese/sweet-corn-soup.webp",
};


const keywordImageMap = {

    Maggie: [
        ["Cheese Butter", "/menu/maggi/cheese-butter.webp"],
        ["Cheese", "/menu/maggi/cheese-butter.webp"],
        ["Paneer", "/menu/maggi/paneer.webp"],
        ["Tandoori", "/menu/maggi/paneer.webp"],
        ["Schezwan", "/menu/maggi/schezwan.webp"],
        ["Veg", "/menu/maggi/veg.webp"],
        ["Corn", "/menu/maggi/veg.webp"],
        ["Classic", "/menu/maggi/classic.webp"],
        ["Masala", "/menu/maggi/classic.webp"],
        ["Butter", "/menu/maggi/classic.webp"]
    ],

    Fries: [
        ["Pizza", "/menu/fries/pizza.webp"],
        ["Loaded", "/menu/fries/loaded-cheese.webp"],
        ["Cheesy", "/menu/fries/loaded-cheese.webp"],
        ["Cheese", "/menu/fries/loaded-cheese.webp"],
        ["Garlic", "/menu/fries/garlic.webp"],
        ["Peri", "/menu/fries/peri-peri.webp"],
        ["Salted", "/menu/fries/salted.webp"],
        ["Simple", "/menu/fries/salted.webp"]
    ]
};

// Statistics
let updated = 0;
const missing = [];

menu.categories.forEach(category => {
    category.items.forEach(item => {
        const key = `${category.name}|${item.name}`;

        if (exactImageMap[key]) {
            item.image = exactImageMap[key];
            updated++;
            return;
        }

        const rules = keywordImageMap[category.name];

        if (rules) {
            let found = false;

            for (const [keyword, image] of rules) {
                if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
                    item.image = image;
                    updated++;
                    found = true;
                    break;
                }
            }

            if (!found) {
                missing.push(key);
            }
        } else {
            missing.push(key);
        }
    });
});

// Save JSON
fs.writeFileSync(menuPath, JSON.stringify(menu, null, 2));

console.log("====================================");
console.log(`✅ Updated ${updated} items`);
console.log(`❌ Missing ${missing.length} items`);
console.log("====================================");

if (missing.length) {
    console.log("\nMissing Image Mapping:\n");

    missing.forEach(name => {
        console.log(`"${name}": "",`);
    });
}