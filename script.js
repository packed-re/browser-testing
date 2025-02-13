print = console.log; // im over it

if(cookieStore !== undefined)
	cookieStore.addEventListener("change", (event) => {
		print(event);
	});
else
	print("cookieStore doesnt exist (firefox moment)");

document.cookie = "merp=mainPath";
document.cookie = "merp=diffPath; path=/merpington";
document.cookie = "merp=diffDomain; domain=github.io";
print("done");