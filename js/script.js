//aggiungo evento per il quale, una volta selezionata la difficoltà e anche dopo aver cliccato play apparirà la griglia selezionata


const playBtn = document.getElementById("btnPlay");

// const medium = document.getElementById("medium");
// console.log(medium);

// const hard = document.getElementById("hard");
// console.log(hard);



//creo l'evento click -- voglio che al click di play in pagina si veda l'elemento che ha la classe active

//variabile difficoltà
playBtn.addEventListener("click", 
    function () {

        let difficulty =  document.getElementById("difficulty").value;
        console.log(difficulty);

        if (difficulty == "Easy") {
            
            let easy_container = document.getElementById("easy_container");
            console.log(easy_container);
    
            easy_container.classList.add ("active");
            medium_container.classList.remove ("active");
            hard_container.classList.remove ("active");
            
            
        } else if (difficulty == "Medium") {
            
            let medium_container = document.getElementById("medium_container");
            console.log(medium_container);
    
            medium_container.classList.add ("active");
            easy_container.classList.remove ("active");
            hard_container.classList.remove ("active");


        } else if (difficulty == "Hard") {
            let hard_container = document.getElementById("hard_container");
            console.log(hard_container);
    
            hard_container.classList.add ("active");
            medium_container.classList.remove ("active");
            easy_container.classList.remove ("active");
            
        }

    
    //creo gli elementi nel dom


    const easyContainer = document.getElementById("easy_container");

    const mediumContainer = document.getElementById("medium_container");

    const hardContainer = document.getElementById("hard_container");


    

        if (difficulty == "Easy") {
            //creo un elemento

            for (let i = 0; i < 100; i++) {
                let easyCreated = document.createElement("div");
                easyCreated.classList.add ("square");

                easyContainer.append(easyCreated);
                console.log(easyCreated);

                //creo un array per i numeri

                let arrNum = [...Array(100).keys()];
                console.log(arrNum);

                easyCreated.innerHTML = i + 1;
                
                easyCreated.addEventListener("click", 
                function() {
                    this.style.backgroundColor = "blue";
                })

            }
        
        } else if (difficulty == "Medium") {
            //creo un elemento

            for (let i = 0; i < 81; i++) {
                let mediumCreated = document.createElement("div");
                mediumCreated.classList.add ("square" , "medium");

                mediumContainer.append(mediumCreated);
                console.log(mediumCreated);

                mediumCreated.innerHTML = i + 1;

                mediumCreated.addEventListener("click", 
                function() {
                    this.style.backgroundColor = "blue";
                })

            }
        
        } else if (difficulty == "Hard") {
            //creo un elemento

            for (let i = 0; i < 49; i++) {
                let hardCreated = document.createElement("div");
                hardCreated.classList.add ("square" , "hard");

                hardContainer.append(hardCreated);
                console.log(hardCreated);

                hardCreated.innerHTML = i + 1;
                
                hardCreated.addEventListener("click", 
                function() {
                    this.style.backgroundColor = "blue";
                })

            }
        }        


        
})








    