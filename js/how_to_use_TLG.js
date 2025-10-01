//script per il media query
const toggleBtn = document.querySelector(".menu-toggle");
		const navLinks = document.querySelector(".nav-links");

		toggleBtn.addEventListener("click", () => {
		  navLinks.classList.toggle("show");
		});

//script per far funzionare le tabs
const tabs = document.querySelectorAll(".tabs-container .tab");
			const contents = document.querySelectorAll(".tabs-container .content");

			const removeActiveClass = () => {
				tabs.forEach((t) => {
					t.classList.remove("active");

				});

				contents.forEach(c => {
					c.classList.remove("active");
				})
			};

			const openTab = (index) => {
			    removeActiveClass();
			    tabs[index].classList.add("active");
			    contents[index].classList.add("active");
			  };

			  //click sulle tab (funziona come prima)
			  tabs.forEach((t, i) => {
			    t.addEventListener("click", () => {
			      openTab(i);
			      // aggiorno l'hash dell’URL (utile se ricarichi la pagina)
			      history.replaceState(null, "", "#" + contents[i].id);
			    });
			  });

			  //all'avvio: se c'è un hash nell’URL → apri la tab corrispondente
			  document.addEventListener("DOMContentLoaded", () => {
			    const hash = window.location.hash.substring(1); // es. "tab3"
			    if (hash) {
			      const target = document.getElementById(hash);
			      if (target) {
			        const index = Array.from(contents).indexOf(target);
			        if (index >= 0) {
			          openTab(index);
			        }
			      }
			    }
			  });
