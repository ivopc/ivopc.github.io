// inicialização do app
var Index = function () {

    this.loadHTML = '<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';

    // definindo componentes 
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".modal").modal();

    $("[href^='https://www.000webhost.com']").remove();

    $("#reg_form").on("submit", (event) => {
        this.register(); 
        event.preventDefault();
    });

    $("#join").on("click", (event) => {
        $("#reg_form").submit();
        event.preventDefault();
    });

    $("#btn-login").on("click", (event) => {
        M.Modal.getInstance($("#loginregmodal")).open();
        event.preventDefault();
    });

    $("#btn-logout").on("click", (event) => {
        this.logout();
        event.preventDefault();
    });

    $("#trylogin").on("click", (event) => {
        this.login();
        event.preventDefault();
    });
};

Index.prototype.login = function () {
    // fazer request de cadastro

    $("#login_response").html(this.loadHTML);

    $.ajax({
        url: "ajax/login.php",
        method: "POST",
        dataType: "json",
        data: {
            username: $("[name=login-username]").val(),
            password: $("[name=login-password]").val(),
        },
        success: function (data) {

            if (data.error) {
                $("#login_response").html(data.error);
            };

            if (data.success) {
                $("#login_response").html(data.success);
                setTimeout(function () {
                    location.reload();
                }, 2200);
                
            };

        }
    });
};

Index.prototype.logout = function () {
    // fazer request de cadastro
    $.ajax({
        url: "ajax/logout.php",
        method: "POST",
        dataType: "json",
        success: function () {

            location.reload();

        }
    });
};

Index.prototype.register = function () {
    // fazer request de cadastro


    if ($("[name=password]").val() !== $("[name=password_repeat]").val()) {
        $("#reg_response").html("As senhas não são iguais!");
        return;
    };

    $("#reg_response").html(this.loadHTML);

    $.ajax({
        url: "ajax/register.php",
        method: "POST",
        dataType: "json",
        data: {
            username: $("[name=username]").val(),
            password: $("[name=password]").val(),
            email: $("[name=email]").val(),
            captcha: $("[name=captcha]").val()
        },
        success: function (data) {

            if (data.error) {
                $("#reg_response").html(data.error);
                $("#captcha-img").attr("src", "captcha.php?" + Date.now());
            };

            if (data.success) {
                $("#reg_response").html(data.success);
                setTimeout(function () {
                    M.Modal.getInstance($("#loginregmodal")).open();
                    $("[name=login-username]").focus();
                    $("[name=login-username]").val($("[name=username]").val());
                }, 2500);
                
            };

        }
    });
};

$(document).ready(function () {
    new Index();
});