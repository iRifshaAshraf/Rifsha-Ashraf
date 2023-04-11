var mini = true;
        function toggleSidebar() {
            if (mini) {
                console.log("opening sidebar");
                document.getElementById("mySidebar").style.width = "210px";
                document.getElementById("main").style.marginRight = "210px";
                mini = false;
            } 
            else {
                console.log("closing sidebar");
                document.getElementById("mySidebar").style.width = "85px";
                document.getElementById("main").style.marginRight = "205px";
                mini = true;
            }
        }
        (function () {
            [...document.querySelectorAll(".control")].forEach(button => {
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