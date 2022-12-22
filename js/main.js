const input = document.getElementsByTagName('input')[0],
    cardTitle = document.getElementsByClassName("card-title"),
    result = document.getElementsByClassName('main-body')[0],
    korzinka = document.getElementById('korzinka'),
    offcanvas = document.getElementsByClassName('offcanvas-body')[0],
    mainRow = document.getElementsByClassName('main-row')[0],
    cards = document.getElementsByClassName('card')

const foods = [
    // pizza
    {
        photo:`https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg`,
        name: 'Moti Pikmotichu',
        type:'pizza',
        estimation: 4.7,
        iteam: 2.300,
        ordered: 1.200,
        price: 23.12,
        onclick:`add1()`
    },
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg`,
        name: 'Moti Bowl',
        type:'pizza',
        estimation: 5,
        iteam: 1.300,
        ordered: 200,
        price: 13.12,
        onclick:`add2()`
    },
    {
        photo:`https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg`,
        name: 'Crispy Rava',
        type:'pizza',
        estimation: 3.4,
        iteam: 200,
        ordered: 120,
        price: 3.09,
        onclick:`add3()`
    },
    {
        photo:`https://bakeitwithlove.com/wp-content/uploads/2022/02/tortilla-pizza-sq.jpg`,
        name: 'Milk PowderBarfi',
        type:'pizza',
        estimation: 4.5,
        iteam: 2.500,
        ordered: 1.500,
        price: 4.05,
        onclick:`add4()`
    },
    {
        photo:`https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg`,
        name: 'Pizza',
        type:'pizza',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick:`add5()`
    },
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg`,
        name: 'Pizza',
        type:'pizza',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick:`add6()`
    },
    {
        photo:`https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg`,
        name: 'Pizza',
        type:'pizza',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick:`add7()`
    },
    {
        photo:`https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg`,
        name: 'Pizza',
        type:'pizza',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick:`add8()`
    },
    // sushi
    {
        photo:`https://sushi-master.uz/assets/images/nabory/set-zolotaya-rybka.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 23.12,
        onclick: `sushi1()`
    },
    {
        photo:`https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image-500x500.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi2()`
    },
    {
        photo:`https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi3()`
    },
    {
        photo:`https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi4()`
    },
    {
        photo:`https://izzycooking.com/wp-content/uploads/2022/04/Sushi-01.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi5()`
    },
    {
        photo:`https://img.championat.com/news/big/w/q/pochemu-sushi-vredny-dlja-figury_1590677088981164064.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi6()`
    },
    {
        photo:`https://repost.uz/storage/uploads/12-1648117542-Julia-post-material.jpeg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi7()`
    },
    {
        photo:`https://i.ytimg.com/vi/gSfAP783ubg/maxresdefault.jpg`,
        name: 'sushi',
        type: 'sushi',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `sushi8()`
    },
    // drinks
    {
        photo:`https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 23.12,
        onclick: `drink1()`
    },
    {
        photo:`https://images.absolutdrinks.com/drink-images/Raw/Absolut/72e8f521-50cf-45bf-80ec-1abf3baec30a.jpg?imwidth=500`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink2()`
    },
    {
        photo:`https://www.halfbakedharvest.com/wp-content/uploads/2021/07/Strawberry-Pink-Drink-1.jpg`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink3()`
    },
    {
        photo:`https://www.thespruceeats.com/thmb/6goYw3Ag028G5Jl75Q6tcqFWJL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greyhound-cocktail-recipe-759306-hero-01-680428b9f8d24389a2b547a52f3c279d.jpg`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink4()`
    },
    {
        photo:`https://thebigmansworld.com/wp-content/uploads/2021/07/keto-drink-mix4.jpeg`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink5()`
    },
    {
        photo:`https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink6()`
    },
    {
        photo:`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191120-blackberry-virgin-mojito-delish-ehg-4719-1583519572.jpg?crop=0.668xw:1.00xh;0.0929xw,0&resize=640:*`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink7()`
    },
    {
        photo:`https://assets.wedeliverlocal.co.uk/cdn/images/seopagesimages/drinks.png`,
        name: 'Drink',
        type: 'drinks',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `drink8()`
    },
    // cake
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 23.12,
        onclick: `cake1()`
    },
    {
        photo:`https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake2()`
    },
    {
        photo:`https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake3()`
    },
    {
        photo:`https://www.allrecipes.com/thmb/BY8CcWT0JZOjFcWeIem9Fik1x78=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9266919-c023924050f9406bab6eccea1664e88b.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake4()`
    },
    {
        photo:`https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake5()`
    },
    {
        photo:`https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Unicorn-cake-32e0971.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake6()`
    },
    {
        photo:`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake7()`
    },
    {
        photo:`https://preppykitchen.com/wp-content/uploads/2017/03/Cookies-and-Cream-Cake-3-feature.jpg`,
        name: 'Cake',
        type: 'cake',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `cake8()`
    },
    // bread
    {
        photo:`https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread1()`
    },
    {
        photo:`https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread2()`
    },
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread3()`
    },
    {
        photo:`https://hips.hearstapps.com/hmg-prod/images/types-of-bread-1666723473.jpg`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread4()`
    },
    {
        photo:`https://images-gmi-pmc.edge-generalmills.com/da2abda1-fae1-4782-b65f-93868ca5bd40.jpg`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread5()`
    },
    {
        photo:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTmstdhHxcUlwsKVDpzYvlbxFBBrp1BjiIg&usqp=CAU`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread6()`
    },
    {
        photo:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzm0La11T7KslapFDcJaW03QwLQ3GB3xXCNQ&usqp=CAU`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread7()`
    },
    {
        photo:`https://assets.epicurious.com/photos/611137f4ae1741cb107078b4/16:9/w_2560%2Cc_limit/Baker'sPercentages_HERO_072921_19667.jpg`,
        name: 'Bread',
        type: 'bread',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bread8()`
    },
    // yogurt
    {
        photo:`https://www.seriouseats.com/thmb/W7HjvRJOBOMn7ly6F6lIOrE_JfY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__06__20190614-yogurt-vicky-wasik-8-1b8381eea1b44c17ac31879c11e6c624.jpg`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt1()`
    },
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Turkish_strained_yogurt.jpg/220px-Turkish_strained_yogurt.jpg`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt2()`
    },
    {
        photo:`https://static01.nyt.com/images/2018/07/18/dining/18YOGURT1/18YOGURT1-articleLarge.jpg`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt3()`
    },
    {
        photo:`https://mevgal.com/wp-content/uploads/4_AG_Yogurt%20150_FRUITS_FORE.png`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt4()`
    },
    {
        photo:`https://images.squarespace-cdn.com/content/v1/59586003b3db2be61087fb3a/1614232421516-J6B54R4RT3UYELC43AMH/Mevgal_Greek_Yogurt_500_0.jpg?format=1000w`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt5()`
    },
    {
        photo:`https://odysea-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/11/18113545/mevgal_authentic_greek_yogurt_10_fat_1kg_2018__1_1.jpg`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt6()`
    },
    {
        photo:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lnVBUEMu4RcBYu-VVvHr3bu1vsOnJFfAMDhs0jzdw0ZcaJg_tbb6zkGSgLuMW-OkBr0&usqp=CAU`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt7()`
    },
    {
        photo:`https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/10/16/4/tm1b17_fruit_parfaits1.jpg.rend.hgtvcom.616.462.suffix/1434575166114.jpeg`,
        name: 'Yogurt',
        type: 'yogurt',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `yogurt8()`
    },
    // burger
    {
        photo:`https://cdnn1.img.sputniknews-uz.com/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger1()`
    },
    {
        photo:`https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger2()`
    },
    {
        photo:`https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger3()`
    },
    {
        photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger4()`
    },
    {
        photo:`https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/pass/double-rl-ranch-burger.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger5()`
    },
    {
        photo:`https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger6()`
    },
    {
        photo:`https://static.onecms.io/wp-content/uploads/sites/43/2022/09/26/25473-the-perfect-basic-burger-ddmfs-4x3-1350-1.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger7()`
    },
    {
        photo:`https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg`,
        name: 'Burger',
        type: 'burger',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `burger8()`
    },
    // bowl
    {
        photo:`https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456-500x375.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl1()`
    },
    {
        photo:`https://hips.hearstapps.com/vidthumb/images/delish-buddha-bowl-horizontal-1535376908.png?crop=1.00xw:0.753xh;0,0.0648xh&resize=1200:*`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl2()`
    },
    {
        photo:`https://images.themodernproper.com/billowy-turkey/production/posts/2021/Poke-Bowl-11.jpeg?w=1200&h=1800&fm=jpg&auto=compress&fit=crop&dm=1644553103&s=456c63c9a0fdd87c9b4fe1e215c0edc3`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl3()`
    },
    {
        photo:`https://theforkedspoon.com/wp-content/uploads/2016/07/acai-bowl-5.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl4()`
    },
    {
        photo:`https://elavegan.com/wp-content/uploads/2021/05/vegan-buddha-bowl-with-chickpeas-avocado-colorful-veggies-and-green-dressing-on-the-side.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl5()`
    },
    {
        photo:`https://easychickenrecipes.com/wp-content/uploads/2020/01/copycat-chipotle-burrito-bowls-7-of-7.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl6()`
    },
    {
        photo:`https://thehappypear.ie/wp-content/uploads/2021/09/IMG_4780-scaled.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl7()`
    },
    {
        photo:`https://feelgoodfoodie.net/wp-content/uploads/2017/03/Chicken-Burrito-Bowl-06.jpg`,
        name: 'Bowl',
        type: 'bowl',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `bowl8()`
    },
    // meat
    {
        photo:`https://cdn.britannica.com/72/143572-050-87DF1262/pork-butcher-shop-Hong-Kong.jpg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat1()`
    },
    {
        photo:`https://images.ctfassets.net/3s5io6mnxfqz/5GlOYuzg0nApcehTPlbJMy/140abddf0f3f93fa16568f4d035cd5e6/AdobeStock_175165460.jpeg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat2()`
    },
    {
        photo:`https://i.insider.com/60ff1914f350d50019590549?width=1136&format=jpeg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat3()`
    },
    {
        photo:`https://assets.bonappetit.com/photos/6304fda53831470090e2a87f/1:1/w_1799,h_1799,c_limit/You-Are-What-You%20Eat-Raw-Meat-Diet%20.jpg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat4()`
    },
    {
        photo:`https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2019/09/06/cutting-meat-consumption-may-cause-serious-harm-academics-warn/10121111-1-eng-GB/Cutting-meat-consumption-may-cause-serious-harm-academics-warn.jpg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat5()`
    },
    {
        photo:`https://post.healthline.com/wp-content/uploads/2022/03/sliced-beef-red-meat-732-549-feature-thumb.jpg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat6()`
    },
    {
        photo:`https://nmgprod.s3.amazonaws.com/media/files/74/fe/74fec7f5063a98fab0d5b6dfba06fde9/cover_image_1622553873.jpg.760x400_q85_crop_upscale.jpg`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat7()`
    },
    {
        photo:`https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/af/f552608f5111e3b74b0b94eba10f26/Course-Image.jpg?auto=format%2Ccompress&dpr=1`,
        name: 'Meat',
        type: 'meat',
        estimation: 4,
        iteam: 0,
        ordered: 0,
        price: 10,
        onclick: `meat8()`
    },
]

function search() {
    var searchArr = foods.filter(iteam => iteam.name.toLowerCase().includes(input.value.toLowerCase()))
    show(searchArr);
}

function show(array) {
    mainRow.innerHTML = '';
    
    array.forEach(element => {
        mainRow.innerHTML += 
      ` <div class="col-3">
            <div class="card">
                <img src="${element.photo}" class="card-img-top" alt="">
                <div class="card-body text-center">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text"><i class="fa-solid fa-star text-warning"></i> 4.7</p>
                </div>
                <div class="card-footer">
                    <div class="row h-100">
                        <div class="col-4">
                            <p>Price</p>
                            <p>$ ${element.price}</p>
                        </div>
                        <div class="col-4">
                            <p>Item</p>
                            <p>${element.iteam}</p>
                        </div>
                        <div class="col-4">
                            <p>Ordered</p>
                            <p>${element.ordered}</p>
                        </div>
                        <button onclick="${element.onclick}">Buy</button>
                    </div>
                </div>
            </div>
        </div> `
    });
}

show(foods)

function forDropdown(type) {
    
    if (type.toLowerCase() == `Cake`.toLowerCase()) {
        dropdownButton.innerHTML = "Cake";
    };
    if (type.toLowerCase() == `Pizza`.toLowerCase()) {
        dropdownButton.innerHTML = "Pizza";
    };
    if (type.toLowerCase() == `Burger`.toLowerCase()) {
        dropdownButton.innerHTML = "Burger";
    };
    if (type.toLowerCase() == `Sushi`.toLowerCase()) {
        dropdownButton.innerHTML = "Sushi";
    };
    if (type.toLowerCase() == `Meat`.toLowerCase()) {
        dropdownButton.innerHTML = "Meat";
    };
    if (type.toLowerCase() == `Drinks`.toLowerCase()) {
        dropdownButton.innerHTML = "Drinks";
    };
    if (type.toLowerCase() == `Bowl`.toLowerCase()) {
        dropdownButton.innerHTML = "Bowl";
    };
    if (type.toLowerCase() == `Yogurt`.toLowerCase()) {
        dropdownButton.innerHTML = "Yogurt";
    };
    if (type.toLowerCase() == `Bread`.toLowerCase()) {
        dropdownButton.innerHTML = "Bread";
    };
};

function addFood() {
    let nameInput = document.getElementById('food-name'),
        priceInput = document.getElementById('food-price'),
        itemInput = document.getElementById('food-item'),
        foodOrdered = document.getElementById('food-ordered'),
        dropdownButton = document.getElementById('dropdownButton')

    if (nameInput.value && priceInput.value && itemInput.value && foodOrdered.value && dropdownButton.innerHTML == 'Pizza') {

        foods.unshift(
            {
                photo: `https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )

        show(foods)

        nameInput.value = ''
        priceInput.value = ''
        itemInput.value = ''
        foodOrdered.value = ''
        dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Sushi') {
        foods.unshift(
            {
                photo: `https://sushi-master.uz/assets/images/nabory/set-zolotaya-rybka.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Drink') {
        foods.unshift(
            {
                photo: `https://thebigmansworld.com/wp-content/uploads/2021/07/keto-drink-mix4.jpeg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Cake') {
        foods.unshift(
            {
                photo: `https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Bread') {
        foods.unshift(
            {
                photo: `https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Yogurt') {
        foods.unshift(
            {
                photo: `https://mevgal.com/wp-content/uploads/4_AG_Yogurt%20150_FRUITS_FORE.png`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Burger') {
        foods.unshift(
            {
                photo: `https://cdnn1.img.sputniknews-uz.com/img/07e5/0a/13/20963736_320:0:1600:1280_1920x0_80_0_0_a56abdbe1daa06b4f9b03e5961ba807e.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Bowl') {
        foods.unshift(
            {
                photo: `https://cdn.loveandlemons.com/wp-content/uploads/2020/06/IMG_25456-500x375.jpg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else if (dropdownButton.innerHTML == 'Meat') {
        foods.unshift(
            {
                photo: `https://i.insider.com/60ff1914f350d50019590549?width=1136&format=jpeg`,
                name: nameInput.value,
                iteam: itemInput.value,
                price: priceInput.value,
                ordered: foodOrdered.value
            },
        )    
            show(foods)

            nameInput.value = ''
            priceInput.value = ''
            itemInput.value = ''
            foodOrdered.value = ''
            dropdownButton.innerHTML = 'Type of food'
    }
    else {
        nameInput.value = ''
        priceInput.value = ''
        itemInput.value = ''
        dropdownButton.innerHTML = ''
        foodOrdered.value = ''
        dropdownButton.innerHTML = 'Type of food'
    }
}





// add functions in mainBody

function selectFood(type) {
    var bread = document.getElementById(`bread`);
    var cake = document.getElementById(`cake`);
    var burger = document.getElementById(`burger`);
    var sushi = document.getElementById(`sushi`);
    var drinks = document.getElementById(`drinks`);
    var meat = document.getElementById(`meat`);
    var pizza = document.getElementById(`pizza`);
    var bowl = document.getElementById(`bowl`);
    var yogurt = document.getElementById(`yogurt`);
    var all = document.getElementById(`all`);

    if (type == `Bread`) {
        bread.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Bread`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Cake`) {
        cake.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Cake`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Burger`) {
        burger.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Burger`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Bowl`) {
        bowl.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Bowl`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Sushi`) {
        sushi.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Sushi`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Drinks`) {
        drinks.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Drinks`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Meat`) {
        meat.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Meat`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Pizza`) {
        pizza.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Pizza`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `Yogurt`) {
        yogurt.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(`Yogurt`.toLowerCase()));
        show(buttonFunction);
    }
    if (type == `All`) {
        all.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(``));
        show(buttonFunction);
    }

    if (!type) {
        all.classList.add("active_selection");
        var buttonFunction = foods.filter(element => element.type.toLowerCase().includes(``));
        show(buttonFunction);
    }
};

selectFood();



// add functions in offcanvas

function add1() {
    offcanvas.innerHTML += cards[0].innerHTML;
}

function add2() {
    offcanvas.innerHTML += cards[1].innerHTML;
}

function add3() {
    offcanvas.innerHTML += cards[2].innerHTML;
}

function add4() {
    offcanvas.innerHTML += cards[3].innerHTML;
}

function add5() {
    offcanvas.innerHTML += cards[4].innerHTML;
}

function add6() {
    offcanvas.innerHTML += cards[5].innerHTML;
}

function add7() {
    offcanvas.innerHTML += cards[6].innerHTML;
}

function add8() {
    offcanvas.innerHTML += cards[7].innerHTML;
}



function sushi1() {
    offcanvas.innerHTML += cards[8].innerHTML;
}

function sushi2() {
    offcanvas.innerHTML += cards[9].innerHTML;
}

function sushi3() {
    offcanvas.innerHTML += cards[10].innerHTML;
}

function sushi4() {
    offcanvas.innerHTML += cards[11].innerHTML;
}

function sushi5() {
    offcanvas.innerHTML += cards[12].innerHTML;
}

function sushi6() {
    offcanvas.innerHTML += cards[13].innerHTML;
}

function sushi7() {
    offcanvas.innerHTML += cards[14].innerHTML;
}

function sushi8() {
    offcanvas.innerHTML += cards[15].innerHTML;
}



function drink1() {
    offcanvas.innerHTML += cards[16].innerHTML;
}

function drink2() {
    offcanvas.innerHTML += cards[17].innerHTML;
}

function drink3() {
    offcanvas.innerHTML += cards[18].innerHTML;
}

function drink4() {
    offcanvas.innerHTML += cards[19].innerHTML;
}

function drink5() {
    offcanvas.innerHTML += cards[20].innerHTML;
}

function drink6() {
    offcanvas.innerHTML += cards[21].innerHTML;
}

function drink7() {
    offcanvas.innerHTML += cards[22].innerHTML;
}

function drink8() {
    offcanvas.innerHTML += cards[23].innerHTML;
}



function cake1() {
    offcanvas.innerHTML += cards[24].innerHTML;
}

function cake2() {
    offcanvas.innerHTML += cards[25].innerHTML;
}

function cake3() {
    offcanvas.innerHTML += cards[26].innerHTML;
}

function cake4() {
    offcanvas.innerHTML += cards[27].innerHTML;
}

function cake5() {
    offcanvas.innerHTML += cards[28].innerHTML;
}

function cake6() {
    offcanvas.innerHTML += cards[29].innerHTML;
}

function cake7() {
    offcanvas.innerHTML += cards[30].innerHTML;
}

function cake8() {
    offcanvas.innerHTML += cards[31].innerHTML;
}



function bread1() {
    offcanvas.innerHTML += cards[32].innerHTML;
}

function bread2() {
    offcanvas.innerHTML += cards[33].innerHTML;
}

function bread3() {
    offcanvas.innerHTML += cards[34].innerHTML;
}

function bread4() {
    offcanvas.innerHTML += cards[35].innerHTML;
}

function bread5() {
    offcanvas.innerHTML += cards[36].innerHTML;
}

function bread6() {
    offcanvas.innerHTML += cards[37].innerHTML;
}

function bread7() {
    offcanvas.innerHTML += cards[38].innerHTML;
}

function bread8() {
    offcanvas.innerHTML += cards[39].innerHTML;
}



function yogurt1() {
    offcanvas.innerHTML += cards[40].innerHTML;
}

function yogurt2() {
    offcanvas.innerHTML += cards[41].innerHTML;
}

function yogurt3() {
    offcanvas.innerHTML += cards[42].innerHTML;
}

function yogurt4() {
    offcanvas.innerHTML += cards[43].innerHTML;
}

function yogurt5() {
    offcanvas.innerHTML += cards[44].innerHTML;
}

function yogurt6() {
    offcanvas.innerHTML += cards[45].innerHTML;
}

function yogurt7() {
    offcanvas.innerHTML += cards[46].innerHTML;
}

function yogurt8() {
    offcanvas.innerHTML += cards[47].innerHTML;
}



function burger1() {
    offcanvas.innerHTML += cards[48].innerHTML;
}

function burger2() {
    offcanvas.innerHTML += cards[49].innerHTML;
}

function burger3() {
    offcanvas.innerHTML += cards[50].innerHTML;
}

function burger4() {
    offcanvas.innerHTML += cards[51].innerHTML;
}

function burger5() {
    offcanvas.innerHTML += cards[52].innerHTML;
}

function burger6() {
    offcanvas.innerHTML += cards[53].innerHTML;
}

function burger7() {
    offcanvas.innerHTML += cards[54].innerHTML;
}

function burger8() {
    offcanvas.innerHTML += cards[55].innerHTML;
}



function bowl1() {
    offcanvas.innerHTML += cards[56].innerHTML;
}

function bowl2() {
    offcanvas.innerHTML += cards[57].innerHTML;
}

function bowl3() {
    offcanvas.innerHTML += cards[58].innerHTML;
}

function bowl4() {
    offcanvas.innerHTML += cards[59].innerHTML;
}

function bowl5() {
    offcanvas.innerHTML += cards[60].innerHTML;
}

function bowl6() {
    offcanvas.innerHTML += cards[61].innerHTML;
}

function bowl7() {
    offcanvas.innerHTML += cards[62].innerHTML;
}

function bowl8() {
    offcanvas.innerHTML += cards[63].innerHTML;
}



function meat1() {
    offcanvas.innerHTML += cards[64].innerHTML;
}

function meat2() {
    offcanvas.innerHTML += cards[65].innerHTML;
}

function meat3() {
    offcanvas.innerHTML += cards[66].innerHTML;
}

function meat4() {
    offcanvas.innerHTML += cards[67].innerHTML;
}

function meat5() {
    offcanvas.innerHTML += cards[68].innerHTML;
}

function meat6() {
    offcanvas.innerHTML += cards[69].innerHTML;
}

function meat7() {
    offcanvas.innerHTML += cards[70].innerHTML;
}

function meat8() {
    offcanvas.innerHTML += cards[71].innerHTML;
}