let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus == false) {
        getSidebarUl.style.visibility = "visible";
        getSidebarUl.style.width = "250px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        };

        toggleNavStatus = true;
    }

    else if (toggleNavStatus == true) {
        getSidebarUl.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

    document.querySelector("#red").addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
        toggleNav()
    });

    document.querySelector("#blue").addEventListener("click", function () {
        document.body.style.backgroundColor = "blue";
        toggleNav()
    });

    document.querySelector("#green").addEventListener("click", function () {
        document.body.style.backgroundColor = "green";
        toggleNav()
    });

    document.querySelector("#yellow").addEventListener("click", function () {
        document.body.style.backgroundColor = "yellow";
        toggleNav()
    });

}

