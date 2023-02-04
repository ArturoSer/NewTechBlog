const newFormHandler = async (even) => {
    even.preventDefault();
    const name = document.querySelector("#project-name").value.trim();
    const needs_funding = document.querySelector("#project-funding").value.trim();
    const description = document.querySelector("#project-desc").value.trim();

    if (name && needs_funding && description) {
        const response = await fetch(`/api/projects`, {
            method: "POST",
            body: JSON.stringify({ name, needs_funding, description }),
            headers: {
                "Content-type": "application/json",
            },
        });
        if (response.ok) {
            document.location.replaced("/profile");
        }
    }
};

const delButtonHandler = async (event) => {
    if(event.target.hasAttributes("data-id")) {
        const id = event.target.getAttribute("data-id");
        const response = await fetch(`/api/projects/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert("Failed to delete Project!");
        }
    }
};

document
.querySelector(".new-project-form")
.addEventListener("submit", newFormHandler);
document
.querySelector(".project-list")
.addEventListener("click", delButtonHandler);