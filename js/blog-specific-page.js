const queryString = document.location.search;


const params = new URLSearchParams(queryString);

const id = params.get("id");
const blogContainer = document.querySelector(".specific-blog");
const blogCrumb = document.querySelector(".blog_crumb")




const url = "https://hikingblog.helbus.no/wp-json/wc/store/products/" + id;


async function fetchBlogs() {
    try {
        const response = await fetch(url);
        const blogs = await response.json();

        blogContainer.innerHTML = ``;

        console.log(blogs);

        blogCrumb.innerHTML = `${blogs.name}`;

        blogContainer.innerHTML += `
        <h1>${blogs.name}</h1>
        <h2>${blogs.short_description}</h2>
        ${blogs.description}
        <img class="blog_img" src="${blogs.images[0].src}">
        <div class="modal">
        <span class="close">&times;</span>
        <img class="modal_content">
        <div class="caption">${blogs.images[0].alt} <span class="modal_info">Click anywhere to exit</span></div>
        </div>
        `

        

        const modal = document.querySelector(".modal");
        const img = document.querySelector(".blog_img");
        const modalContent = document.querySelector(".modal_content");
        const caption = document.querySelector(".caption");

        img.onclick = function(){
            modal.style.display = "block";
            modalContent.src = this.src;

        };

        modal.onclick = function() {
            modal.style.display = "none";
        }

    }

    catch(error) {

    }
};



fetchBlogs();



