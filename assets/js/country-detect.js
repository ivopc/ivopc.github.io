async function showChangeModal(title) {
    const wantToChange = await Swal.fire({
        title,
        html: `
        <input class="form-check-input" type="checkbox" value="" id="hideLangCheck" checked>
        <label class="form-check-label" for="hideLangCheck">
          Don't show it again
        </label>
        `,
        showDenyButton: true,
        confirmButtonText: "Yes, of course!",
        denyButtonText: `No, thanks!`,
    });
    localStorage.setItem("hideLangCheck", document.querySelector("#hideLangCheck").checked ? "true" : "false");
    if (wantToChange.isConfirmed) {
        location.href = "/en-US.html";
    };
};

async function detectCountry() {
    if (localStorage.getItem("hideLangCheck") === null || localStorage.getItem("hideLangCheck") === "false") {
        try {
            const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
            const data = await response.text();
            const lang = data.match(/loc=(.+)/gi)[0].split("=")[1];
            if (lang !== "BR") {
                await showChangeModal("Looks like you do not speak my native language, do you want to go to english page?");
            };
            if (localStorage.getItem("hideDevVisibilityCheck") === null || localStorage.getItem("hideDevVisibilityCheck") === "false") 
                await showDevVisibility(showDevVisibilityLangs[lang]);
        } catch (err) {
            showChangeModal("I cannot detect your language, do you want to go to the english page?");
        };
    };
};