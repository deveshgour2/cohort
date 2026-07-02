let users = [
    {
        name: "Devesh",
        profession: "Web Developer",
        city: "Indore",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Priya",
        profession: "UI/UX Designer",
        city: "Delhi",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Rahul",
        profession: "Software Engineer",
        city: "Bhopal",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Sneha",
        profession: "Graphic Designer",
        city: "Mumbai",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

let main = document.querySelector("main")

let sum = ""
users.forEach(function(elem){
  sum += ` <div class="card">
           <img src="${elem.image}" >
            <h4>${elem.name}</h4>
             <h2>${elem.profession}</h2>
            <p>${elem.city}</p>
        </div> `
 
})
  main.innerHTML = sum