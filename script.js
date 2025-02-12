print = console.log; // im over it

cookieStore.addEventListener("change", (event) => {
	console.log(event);
});

document.cookie = "merp=123";
print("done")