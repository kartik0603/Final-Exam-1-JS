const  foodlist = [
    {
        city:"Surat",
        fName:"khaman",
        image:"https://pulses.org/images/com_yoorecipe/cropped-khaman.jpg",
        price:"130/kg"
    },
    {
        city:"Surat",
        fName:"Khandavi",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87sZS95hgsmMRT31JrLLtSCs8G6Ly-adXAw&s",
        price:"160/kg"
    },
    {
        city:"Surat",
        fName:"Locho",
        image:"https://miro.medium.com/v2/resize:fit:1400/1*CR1d12AdBOzJM7cBm8QNzA.jpeg",
        price:"180/kg"
    },
    {
        city:"Surat",
        fName:"Patis",
        image:"https://www.nehascookbook.com/wp-content/uploads/2020/12/Vatana-pattice-WS.jpg",
        price:"320/kg"
    },
    {
        city:"Surat",
        fName:"Ghari",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6WdI_N6XM6wmS-kZ9rWYSBp10yv4fztCQA&s",
        price:"780/kg"
    },
    {
        city:"Surat",
        fName:"Surati Sev Khamani",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge9pVciUfXYCRKUsKDC5gla18Ux1AVdi8aSiRAs9YUJIMhPw9kYx84lfnYNpS2i9dhfVpH7jCSJ9x1fnRVaxGGkiydlQkNAI3Pso4_r8R5cEHrSQpOKYZUBAopJ1qo7Ks3ZqYP09H0HBb5/s1600/IMG_7863.JPG",
        price:"270/kg"
    },
    {
        city:"Surat",
        fName:"Surati Nankhatai",
        image:"https://www.yummytummyaarthi.com/wp-content/uploads/2015/03/1-36.jpg",
        price:"300/kg"
    },
    {
        city:"Surat",
        fName:"Surati Undhiyu",
        image:"https://www.indiafoodnetwork.in/wp-content/uploads/2020/01/Undhiyu-3.jpg",
        price:"380/kg"
    },
    {
        city:"Ahmedabad",
        fName:"Fafda Jalebi",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/fafda-jalebi-1.jpeg",
        price:"220/kg"
    },
    {
        city:"Ahmedabad",
        fName:"Dabeli",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/dabeli-1.jpg",
        price:"30/pc"
    },
    {
        city:"Ahmedabad",
        fName:"Muska Bun",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqWoswaLNmorqS4le4LlHsSMQ_7S5fIR-Sw&s",
        price:"120/pc"
    },
    {
        city:"Ahmedabad",
        fName:"Dal Vada",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Dal-Vada-min.jpg",
        price:"360/kg"
    },
    {
        city:"Ahmedabad",
        fName:"Chole Kulche",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Amritsari-Chole-Kulcha-1024x683-1.jpg",
        price:"100/kg"
    },
    {
        city:"Ahmedabad",
        fName:"Handvo",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/Handvo-550-1.jpg",
        price:"280/kg"
    },
    {
        city:"Ahmedabad",
        fName:"Ragda Patties",
        image:"https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/ragda-pattice-2.jpg",
        price:"90/pc"
    },
    {
        city:"Vadodara",
        fName:"Sev Usal",
        image:"https://blog.swiggy.com/wp-content/uploads/2023/12/Pav.png",
        price:"80/pc"
    },
    {
        city:"Vadodara",
        fName:"Tangy Bhelpuri",
        image:"https://blog.swiggy.com/wp-content/uploads/2023/12/Bhelpuri.png",
        price:"120/pc"
    },
    {
        city:"Vadodara",
        fName:"Vada Pav",
        image:"https://blog.swiggy.com/wp-content/uploads/2023/12/Vada-Pav.png",
        price:"35/pc"
    },
    {
        city:"Vadodara",
        fName:"Ghughara",
        image:"https://blog.swiggy.com/wp-content/uploads/2023/12/Ghughra.png",
        price:"45/pc"
    },
    {
        city:"Rajkot",
        fName:"Kachori",
        image:"https://blog.swiggy.com/wp-content/uploads/2023/12/Kachori.png",
        price:"60/2pc"
    },
    {
        city:"Rajkot",
        fName:"Thepla",
        image:"https://blog.swiggy.com/wp-content/uploads/2024/03/Thepla.png",
        price:"55/2pc"
    },
    {
        city:"Rajkot",
        fName:"Khichdi",
        image:"https://blog.swiggy.com/wp-content/uploads/2024/03/Gujarati-Khichdi.png",
        price:"120/250gm"
    },
    {
        city:"Rajkot",
        fName:"Khakhra",
        image:"https://blog.swiggy.com/wp-content/uploads/2024/03/Chila-1.png",
        price:"45/200gm"
    },
    {
        city:"Rajkot",
        fName:"Ghanthiya",
        image:"https://b.zmtcdn.com/data/dish_photos/267/79d7118ce9e78ff9e9ac2a5784fee267.jpg",
        price:"420/kg"
    },
    {
        city:"Bhavnagar",
        fName:"Ganthiya",
        image:"https://www.cookingwithsiddhi.com/wp-content/uploads/2019/06/Ganthiya.jpg",
        price:"160/kg"
    },
    {
        city:"Bhavnagar",
        fName:"Bhavnagari Gathiya",
        image:"https://i.pinimg.com/originals/43/0e/bb/430ebb57f12f865de960dedb2705030d.jpg",
        price:"150/kg"
    },
    {
        city:"Jamnagar",
        fName:"Dry Kachori",
        image:"https://www.ndtv.com/cooks/images/dry_kachori_main.jpg",
        price:"40/pc"
    },
    {
        city:"Jamnagar",
        fName:"Chowpatty Ice Gola",
        image:"https://c.ndtvimg.com/2020-05/8afslc28_gola_625x300_20_May_20.jpg",
        price:"50/pc"
    },
    {
        city:"Bhuj",
        fName:"Dabeli",
        image:"https://www.fabhotels.com/blog/wp-content/uploads/2022/07/dabeli-1.jpg",
        price:"30/pc"
    },
    {
        city:"Junagadh",
        fName:"Bhakri",
        image:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/admin/bhakri_paratha_recipe_.jpg",
        price:"20/pc"
    },
    {
        city:"Junagadh",
        fName:"Dudhi Halwa",
        image:"https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/dudhi-halwa-recipe-1a.jpg",
        price:"300/kg"
    },
    {
        city:"Gandhinagar",
        fName:"Khichu",
        image:"https://www.gujaratfood.com/wp-content/uploads/2019/10/rice-flour-khichu.jpg",
        price:"60/plate"
    },
    {
        city:"Gandhinagar",
        fName:"Methi Thepla",
        image:"https://www.archanaskitchen.com/images/archanaskitchen/Indian_Bread_Recipes/Methi_Thepla_Recipe_Gujarati_Methi_Na_Thepla-1.jpg",
        price:"50/2pc"
    }
];


const displayFoodItems = (city) => {
    const foodListElement = document.getElementById('foodList');
    foodListElement.innerHTML = '';
    
    const filteredFoods = foodList.filter(food => food.city === city);
    
    if (filteredFoods.length === 0) {
        foodListElement.innerHTML = '<p>No food items available for your location.</p>';
        return;
    }
    
    filteredFoods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        foodItem.innerHTML = `
            <div class="card">
                <img src="${food.image}" class="card-img-top" alt="${food.fName}">
                <div class="card-body">
                    <h5 class="card-title">${food.fName}</h5>
                    <p class="card-text">Price: ${food.price}</p>
                    <button class="btn btn-primary add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        foodListElement.appendChild(foodItem);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const foodItem = button.closest('.card');
            const foodName = foodItem.querySelector('.card-title').innerText;
            const foodPrice = foodItem.querySelector('.card-text').innerText;

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ name: foodName, price: foodPrice });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${foodName} added to cart.`);
        });
    });
};
