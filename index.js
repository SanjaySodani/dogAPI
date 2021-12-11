window.onload = function () {
    async function getDog() {
        try {
            let res = await fetch(document.getElementById("link").value);
            if (res.ok) {
                let data = await res.json();
                document.getElementById("dog-img").src = data.message;
                document.getElementById("text-message").innerText = "";
                document.getElementById("response").value = JSON.stringify(data);
            }
            else {
                throw new Error("Error! Something went wrong");
            }
        }
        catch (err) {
            document.getElementById("dog-img").src = "";
            document.getElementById("text-message").innerText = err.message;
            document.getElementById("response").value = "";
        }
    }

    document.getElementById("btn-fetch").addEventListener('click', function () {
        getDog();
    })
}