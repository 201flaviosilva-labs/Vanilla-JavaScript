const mainList = document.getElementById("MainList");

main();
function main() {
	fetch("./Links.json")
		.then((response) => response.json())
		.then((data) => {
			Object.keys(data).map(key => {
				const liCatgory = document.createElement("li");
				const h2CatgoryTitle = document.createElement("h2");
				const ulCatgoryList = document.createElement("ul");

				h2CatgoryTitle.innerHTML = key;

				data[key].map(link => {
					const li = document.createElement("li");
					const a = document.createElement("a");

					a.innerHTML = link.name;
					a.href = link.href;

					li.appendChild(a);
					ulCatgoryList.appendChild(li);
				});

				liCatgory.appendChild(h2CatgoryTitle);
				liCatgory.appendChild(ulCatgoryList);
				mainList.appendChild(liCatgory);
			});
		});
}
