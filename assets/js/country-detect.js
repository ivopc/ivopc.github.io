async function detectCountry () {
    try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
        const data = await response.text();
        if (data.match(/loc=(.+)/gi)[0].split("=")[1] !== "BR") {
            const wantToChange = await Swal.fire({
                title: "Looks like you do not speak my native language, do you want to go to english page?",
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
    } catch (err) {
      Swal.fire({
        title: `I can't detect your language, but you can change the website language on navbar country flags!`,
        showConfirmButton: false,
        timer: 3000
      });
    }; 
};