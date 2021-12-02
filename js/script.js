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
        let easy_container = document.getElementById("easy_container");

        let medium_container = document.getElementById("medium_container");

        let hard_container = document.getElementById("hard_container");

        let difficulty =  document.getElementById("difficulty").value;
        console.log(difficulty);

        if (difficulty == "Easy") {
        
            easy_container.classList.add ("active");
            medium_container.classList.remove ("active");
            hard_container.classList.remove ("active");
            
            
        } else if (difficulty == "Medium") {
            
            medium_container.classList.add ("active");
            easy_container.classList.remove ("active");
            hard_container.classList.remove ("active");


        } else if (difficulty == "Hard") {
            
            hard_container.classList.add ("active");
            medium_container.classList.remove ("active");
            easy_container.classList.remove ("active");
            
        }

    
    //creo gli elementi nel dom


    const easyContainer = document.getElementById("easy_container");

    const mediumContainer = document.getElementById("medium_container");

    const hardContainer = document.getElementById("hard_container");

    let arrBombs = [];
    

        if (difficulty == "Easy") {
            //creo un elemento

            arrBombs = getRandomIntIncluse (1,100);
            console.log(arrBombs); 

            for (let i = 0; i < 100; i++) {
                let easyCreated = document.createElement("div");
                easyCreated.classList.add ("square");

                easyContainer.append(easyCreated);
                console.log(easyCreated);

                easyCreated.innerHTML = i + 1;
                console.log(easyCreated.innerHTML);

                if (arrBombs.includes(parseInt(easyCreated.innerHTML))) {
                    easyCreated.classList.add("is_bomb")
                }


                //cosa succede al click della cella

                easyCreated.addEventListener("click", function() {
                    if (easyCreated.classList.contains("is_bomb")) {
                        //se è una bomba devo aggiungere la classe red a TUTTE le bombe

                        let bombElement = document.querySelectorAll (".is_bomb");

                        for (let i = 0; i < bombElement.length; i++) {
                            bombElement[i].classList.add("red");
                        }
                    } else {
                        easyCreated.classList.add("blue");
                    }
                })
                
            }

            
        
        } else if (difficulty == "Medium") {

            arrBombs = getRandomIntIncluse (1,81);
            //creo un elemento

            for (let i = 0; i < 81; i++) {
                let mediumCreated = document.createElement("div");
                mediumCreated.classList.add ("square" , "medium");

                mediumContainer.append(mediumCreated);
                console.log(mediumCreated);

                mediumCreated.innerHTML = i + 1;
                console.log(mediumCreated.innerHTML);

                if (arrBombs.includes(parseInt(mediumCreated.innerHTML))) {
                    mediumCreated.classList.add("is_bomb")
                } 

                mediumCreated.addEventListener("click", function() {
                    if (mediumCreated.classList.contains("is_bomb")) {
                        //se è una bomba devo aggiungere la classe red a TUTTE le bombe

                        let bombElement = document.querySelectorAll (".is_bomb");

                        for (let i = 0; i < bombElement.length; i++) {
                            bombElement[i].classList.add("red");
                        }
                    } else {
                        mediumCreated.classList.add("blue");
                    }
                })
            }
        
        } else if (difficulty == "Hard") {

            arrBombs = getRandomIntIncluse (1,49);
            //creo un elemento

            for (let i = 0; i < 49; i++) {
                let hardCreated = document.createElement("div");
                hardCreated.classList.add ("square" , "hard");

                hardContainer.append(hardCreated);
                console.log(hardCreated);

                hardCreated.innerHTML = i + 1;
                console.log(hardCreated.innerHTML);
                


                if (arrBombs.includes(parseInt(hardCreated.innerHTML))) {
                    hardCreated.classList.add("is_bomb")
                } 

                hardCreated.addEventListener("click", function() {
                    if (hardCreated.classList.contains("is_bomb")) {
                        //se è una bomba devo aggiungere la classe red a TUTTE le bombe

                        let bombElement = document.querySelectorAll (".is_bomb");

                        for (let i = 0; i < bombElement.length; i++) {
                            bombElement[i].classList.add("red");
                        }
                    } else {
                        hardCreated.classList.add("blue");
                    }
                }) 


            }
        }        
      

    
})

//funzione per creare numeri random nell'array blackList
function getRandomIntIncluse(min, max) {

    //creo array 
    let bombNumbers = [];

    //ciclo for per inserire i numeri nell'array
    for (let index = 0; index < 16; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);

         //includo gli estremi
        let randNumber = bombNumbers[index];
        randNumber = Math.floor(Math.random() * (max - min + 1) + min);

        //check
        while (bombNumbers.includes(randNumber)){
            randNumber = Math.floor(Math.random() * (max - min + 1) + min);
        }
        bombNumbers.push(randNumber);
        
    }
    return bombNumbers;

}




    