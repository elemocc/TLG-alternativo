//script per il media query
const toggleBtn = document.querySelector(".menu-toggle");
		const navLinks = document.querySelector(".nav-links");

		toggleBtn.addEventListener("click", () => {
		  navLinks.classList.toggle("show");
		});

//script per far funzionare la maschera di ricerca 

const container = document.getElementById("search-container");
		    const addBtn = document.getElementById("addRowBtn");
		    const clearBtn = document.getElementById("clearBtn");

		    // campi di ambito
		    const fields = {
		      "Author": "text",
		      "Title": "text",
		      "Century": "dropdown",
		      "Genre": "dropdown"
		    };

		    const operators = ["AND", "OR", "NOT"];

		    function createRow() {
		      const row = document.createElement("div");
		      row.className = "search-row";

		    const dd = document.createElement("select");
			

		      // dropdown per ambito
		      const fieldSelect = document.createElement("select");
		      for (let key in fields) {
		        const opt = document.createElement("option");
		        opt.value = key;
		        opt.textContent = key;
		        fieldSelect.appendChild(opt);
		      }
		      row.appendChild(fieldSelect);

		      // placeholder per input centrale
		      const middleContainer = document.createElement("div");
		      row.appendChild(middleContainer);

		      // dropdown per operatore
		      const opSelect = document.createElement("select");
		      operators.forEach(op => {
		        const opt = document.createElement("option");
		        opt.value = op;
		        opt.textContent = op;
		        opSelect.appendChild(opt);
		      });
		      row.appendChild(opSelect);

		      // pulsante elimina riga
		      const delBtn = document.createElement("button");
		      delBtn.className = "del-btn";
		      delBtn.innerHTML = `
			  <svg xmlns="http://www.w3.org/2000/svg" 
			       width="16" height="16" viewBox="0 0 24 24" 
			       fill="none" stroke="#022f40" 
			       stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
			    <line x1="18" y1="6" x2="6" y2="18"/>
			    <line x1="6" y1="6" x2="18" y2="18"/>
			  </svg>`;
		      delBtn.addEventListener("click", () => row.remove());
		      row.appendChild(delBtn);

		      const dropdownOptions = {
			  "Century": ["8th B.C.", "7th B.C.", "6th B.C.", "5th B.C.", "4th B.C."],
			  "Genre": ["Tragedy", "Comedy", "Epic", "Lyric"]
			};

		      // funzione per aggiornare campo centrale
		      function updateMiddle() {
			  middleContainer.innerHTML = "";
			  const field = fieldSelect.value;
			  if (fields[field] === "text") {
			    const input = document.createElement("input");
			    input.type = "text";
			    middleContainer.appendChild(input);
			  } else if (fields[field] === "dropdown") {
			    dropdownOptions[field].forEach(val => {
			      const opt = document.createElement("option");
			      opt.value = val;
			      opt.textContent = val;
			      dd.appendChild(opt);
			    });
			    middleContainer.appendChild(dd);
			  }
			}

		      fieldSelect.addEventListener("change", updateMiddle);
		      updateMiddle();

		      container.appendChild(row);
		    }

		    // aggiungi riga al click
		    addBtn.addEventListener("click", createRow);

		    // resetta tutto
		    clearBtn.addEventListener("click", () => {
		      container.innerHTML = "";
		    });

		    // una riga di default
		    createRow();

//script per far funzionare le tabs
const buttons = document.querySelectorAll(".tab-button");
	    const contents = document.querySelectorAll(".tab-content");

	    buttons.forEach(btn => {
	      btn.addEventListener("click", () => {
	        // rimuovo active da tutti
	        buttons.forEach(b => b.classList.remove("active"));
	        contents.forEach(c => c.classList.remove("active"));

	        // attivo il tab cliccato
	        btn.classList.add("active");
	        document.getElementById(btn.dataset.tab).classList.add("active");
	      });
	    });

//script per far funzionare i dropdown nei filtri di ricerca
document.querySelectorAll(".dropdown").forEach(dropdown => {
			  const button = dropdown.querySelector(".dropbtn");
			  const options = dropdown.querySelectorAll(".dropdown-content div");

			  // toggle apertura menu
			  button.addEventListener("click", (e) => {
			    e.stopPropagation(); // evita chiusura immediata
			    dropdown.classList.toggle("show");
			  });

			  // selezione opzione
			  options.forEach(opt => {
			    opt.addEventListener("click", () => {
			      button.textContent = opt.dataset.value;
			      dropdown.classList.remove("show");
			    });
			  });

			  // chiusura cliccando fuori
			  document.addEventListener("click", (e) => {
			    if (!dropdown.contains(e.target)) {
			      dropdown.classList.remove("show");
			    }
			  });
			});