print = console.log; // im over it

if(window.cookieStore !== undefined)
	cookieStore.addEventListener("change", (event) => {
		print(event);
	});
else
	print("cookieStore doesnt exist (firefox moment)");

setTimeout(() => {
	document.cookie = "merp=mainPath";
	document.cookie = "merp=diffPath; path=/merpington";
	document.cookie = "merp=diffDomain; domain=github.io";

	localStorage.removeItem("lsKey");
	sessionStorage.removeItem("ssKey");

	window.addEventListener("storage", function(event)
	{
		print("storage event", event);
	})

	localStorage.setItem("lsKey", "lsVal");
	localStorage.setItem("lsKey", "lsVal");
	sessionStorage.setItem("ssKey", "ssVal");
		print("timeout done")
}, 500);
print("done");