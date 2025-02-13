print = console.log; // im over it

if(window.cookieStore !== undefined)
	cookieStore.addEventListener("change", (event) => {
		print(event);
	});
else
	print("cookieStore doesnt exist (firefox moment)");

document.cookie = "merp=mainPath";
document.cookie = "merp=diffPath; path=/merpington";
document.cookie = "merp=diffDomain; domain=github.io";

localStorage.removeItem("lsKey");
sessionStorage.removeItem("ssKey");

document.addEventListener("storage", function(event)
{
	print("storage event", event);
})

localStorage.setItem("lsKey", "lsVal");
sessionStorage.setItem("ssKey", "ssVal");

print("done");