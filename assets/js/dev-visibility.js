async function showDevVisibility({title, confirmButtonText, denyButtonText, html}) {
    const showDevVisibility = await Swal.fire({
        title,
        html,
        showDenyButton: true,
        confirmButtonText,
        denyButtonText
    });
    localStorage.setItem("hideDevVisibilityCheck", document.querySelector("#hideDevVisibilityCheck").checked ? "true" : "false")
    if (showDevVisibility.isConfirmed) {
        hideDevInfo ();
    };
};

const showDevVisibilityLangs = {
    "BR": {
        title: 
        `Você é alguém ligado a desenvolvimento? Para deixar meu site mais resumido para quem não entende de programação
        você tem a opção de ocultar as partes mais técnicas que falam somente sobre programação. Lembrando que é possível controlar no menu de navegação.`,
        confirmButtonText: "Sim, desejo ocultar!",
        denyButtonText: "Naõ, pode manter!",
        html: `
        <input class="form-check-input" type="checkbox" value="" id="hideDevVisibilityCheck" checked>
        <label class="form-check-label" for="hideDevVisibilityCheck">
          Naõ mostrar isso novamente
        </label>
        `
    }
};