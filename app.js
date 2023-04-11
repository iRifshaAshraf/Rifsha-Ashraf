
var mini = true;
        function toggleSidebar() {
            if (mini) {
                console.log("opening nav");
                document.getElementById("nav-bar").style.width = "210px";
                mini = false;
            } 
            else {
                console.log("closing nav");
                document.getElementById("nav-bar").style.width = "5rem";
                mini = true;
            }
        }
        (function () {
            [...document.querySelectorAll(".nav")].forEach(button => {
                button.addEventListener("click", function() {
                    document.querySelector(".active-btn").classList.remove("active-btn");
                    this.classList.add("active-btn");
                    document.querySelector(".active").classList.remove("active");
                    document.getElementById(button.dataset.id).classList.add("active");
                })
            });
            document.querySelector(".theme-btn").addEventListener("click", () => {
                document.body.classList.toggle("light-mode");
            })
        })();