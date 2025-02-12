cookieStore.addEventListener("change", (event) => {
	console.log(event);
});

document.cookie = "merp=123";
print("done")