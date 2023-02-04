const logout = async () => {
    const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "content-type": "appliation/json" },
    });
    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
};

document.querySelector("#logout").addEventListener("click", logout);