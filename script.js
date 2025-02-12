print = console.log; // im over it

cookieStore.addEventListener("change", (event) => {
	print(event);
});

document.cookie = "merp=mainPath";
document.cookie = "merp=diffPath; path=/merpington";
document.cookie = "merp=diffDomain; domain=github.io";
print("done")