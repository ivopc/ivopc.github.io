async function showChangeModal(title) {
    const wantToChange = await Swal.fire({
        title,
        showDenyButton: true,
        confirmButtonText: "Yes, of course!",
        denyButtonText: `No, thanks!`,
    });
    if (wantToChange.isConfirmed) {
        location.href = "/en-US.html";
    };
    if (wantToChange.isDenied) {
        wantToChange.close();
    };
};

async function detectCountry() {
    try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
        const data = await response.text();
        if (data.match(/loc=(.+)/gi)[0].split("=")[1] !== "BR") {
            showChangeModal("Looks like you do not speak my native language, do you want to go to english page?");
        };
    } catch (err) {
        showChangeModal("I cannot detect your language, do you want to go to the english page?");
    };
};