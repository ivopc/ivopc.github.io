const Gallery = function () {

    this.loadHTML = '<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
    this.$el = $("#gallery");

    // guardar templates
    this.templates = {};

    // setar templates
    _.forEach(
        document.querySelectorAll("[data-template]"),
        el => this.setTemplates(el)
    );

    this.mediaData = {};
    this.gallery = {};

    this.gallery.photos = [
        {id:"1" ,type:1, title:"Imagem de Gameplay #001", img:"img\/gameplay1.png"},
        {id:"2" ,type:1, title:"Imagem de Gameplay #002", img:"img\/gameplay2.png"},
        {id:"3" ,type:1, title:"Imagem de Gameplay #003", img:"img\/gameplay3.png"},
        {id:"4" ,type:1, title:"Imagem de Gameplay #004", img:"img\/gameplay4.png"},
        {id:"5" ,type:1, title:"Imagem de Gameplay #005", img:"img\/gameplay5.png"},
        {id:"6" ,type:1, title:"Imagem de Gameplay #006", img:"img\/gameplay6.png"},
        {id:"7" ,type:1, title:"Imagem de Gameplay #007", img:"img\/gameplay7.png"},
        {id:"8" ,type:1, title:"Imagem de Gameplay #008", img:"img\/gameplay8.png"},
        {id:"9" ,type:1, title:"Imagem de Gameplay #009", img:"img\/gameplay9.png"},
        {id:"10" ,type:1, title:"Imagem de Gameplay #010", img:"img\/gameplay10.png"},
        {id:"11" ,type:1, title:"Imagem de Gameplay #011", img:"img\/gameplay11.png"},
        {id:"12" ,type:1, title:"Imagem de Gameplay #012", img:"img\/gameplay12.png"},
        {id:"13" ,type:1, title:"Imagem de Gameplay #013", img:"img\/gameplay13.png"},
        {id:"14" ,type:1, title:"Imagem de Gameplay #014", img:"img\/gameplay14.png"},
        {id:"15" ,type:1, title:"Imagem de Gameplay #015", img:"img\/gameplay15.png"},
        {id:"16" ,type:1, title:"Imagem de Gameplay #016", img:"img\/gameplay16.png"},
        {id:"17" ,type:1, title:"Imagem de Gameplay #017", img:"img\/gameplay17.png"},
        {id:"18" ,type:1, title:"Imagem de Gameplay #018", img:"img\/gameplay18.png"},
        {id:"19" ,type:1, title:"Imagem de Gameplay #019", img:"img\/gameplay19.png"},
        {id:"20" ,type:1, title:"Imagem de Gameplay #020", img:"img\/gameplay20.png"},
        {id:"21" ,type:1, title:"Imagem de Gameplay #021", img:"img\/gameplay21.png"},
        {id:"22" ,type:1, title:"Imagem de Gameplay #022", img:"img\/gameplay22.png"},
        {id:"23" ,type:1, title:"Imagem de Gameplay #023", img:"img\/gameplay23.png"},
        {id:"24" ,type:1, title:"Imagem de Gameplay #024", img:"img\/gameplay24.png"},
        {id:"25" ,type:1, title:"Imagem de Gameplay #025", img:"img\/gameplay25.png"},
        {id:"26" ,type:1, title:"Imagem de Gameplay #026", img:"img\/gameplay26.png"},
        {id:"27" ,type:1, title:"Imagem de Gameplay #027", img:"img\/gameplay27.png"},
    ];

    this.gallery.videos = [
        {id: 99, type: 2, img: "img/videos/vswild.png", title: "Batalha Vs. Selvagem", video_url: "Cw8yJhn5xBk", width: 560, height: 315},    
        {id: 98, type: 2, img: "img/videos/vstamer.png", title: "Batalha Vs. Domador", video_url: "T28PDy9-l8M", width: 560, height: 315},
        {id: 97, type: 2, img: "img/videos/pvp.png", title: "Batalha PvP", video_url: "fa8KZKP2mn4", width: 560, height: 315},
        {id: 96, type: 2, img: "img/videos/quest.png", title: "Missão", video_url: "EG2-wWQx_Aw", width: 560, height: 315},
        {id: 95, type: 2, img: "img/videos/storyline.png", title: "Parte da Storyline", video_url: "mEDlbkl1XYA", width: 560, height: 315},
        {id: 94, type: 2, img: "img/videos/specialattack.png", title: "Ataques Especiais", video_url: "ANVn5RWkxpY", width: 560, height: 315},
        {id: 93, type: 2, img: "img/videos/market.png", title: "Mercado", video_url: "zg6Q6EbR3Tw", width: 560, height: 315},
        {id: 92, type: 2, img: "img/videos/marketplace.png", title: "Negociações", video_url: "arDhzD11CG8", width: 560, height: 315},
        {id: 91, type: 2, img: "img/videos/learnmove.png", title: "Aprender Ataque", video_url: "ieNDdEub1QU", width: 560, height: 315},
        {id: 90, type: 2, img: "img/videos/online.png", title: "Interação Online", video_url: "zONhY_ZBMFI", width: 560, height: 315},
        {id: 89, type: 2, img: "img/videos/illumination.png", title: "Iluminação do Mapa", video_url: "itq4OSBj828", width: 560, height: 315},
        {id: 88, type: 2, img: "img/videos/monsterbox.png", title: "MonsterBox", video_url: "GMvLpWKPzwk", width: 560, height: 315},
        {id: 87, type: 2, img: "img/videos/tame.png", title: "Domando Monstro", video_url: "myxDS9jaRbc", width: 560, height: 315},
        {id: 86, type: 2, img: "img/videos/item.png", title: "Usando Item", video_url: "722aESgvX48", width: 560, height: 315},
        {id: 85, type: 2, img: "img/videos/skin.png", title: "Skin", video_url: "Gh6rc3xDNFg", width: 560, height: 315},
        {id: 84, type: 2, img: "img/videos/npcinteract.png", title: "Interagindo com NPC", video_url: "37_oxrLwkNU", width: 560, height: 315},
        {id: 83, type: 2, img: "img/videos/serverinteract.png", title: "Interagindo com Servidor", video_url: "I51SOOLQnQ0", width: 560, height: 315}
    ];

    this.generateGallery(location.hash, false);

    const self = this;

    $("[data-tab]").on("click", function (event) {
        self.generateGallery($(this).attr("href"), true);
        $(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    $("body").on("click", ".card", function () {
        let id = Number($(this).attr("data-id"));
        self.showMedia(self.mediaData[id]);
    });
};

// setar templates que estão na página
Gallery.prototype.setTemplates = function (el) {
    // pega atributo do nome do template
    const template = el.getAttribute("data-template");
    // seta template pelo nome e pega HTML do template
    this.templates[template] = _.template(el.innerHTML);
};

// gerar galeria
Gallery.prototype.generateGallery = function (hash, clear) {
    let load;
    
    hash = hash || location.hash;

    if (clear)
        this.$el.html("");

    this.$el.html(this.loadHTML);

    switch (hash) {
        case "#img": {
            load = "photos";
            $("#tabimg").addClass("active");
            break;
        };

        case "#video": {
            load = "videos";
            $("#tabvideo").addClass("active");
            break;
        };

        default: {
            load = "photos";
            $("#tabimg").addClass("active");
            break;
        };
    };



    this.$el.html("");

    const data = this.gallery[load];

    for (let i = 0, l = data.length; i < l; i++) {

        this.mediaData[data[i].id] = data[i];
        this.$el.append(this.templates.gallery({
            img: data[i]["img"],
            title: data[i]["title"],
            id: data[i]["id"]
        }));
    };

};

// mostrar mídia
Gallery.prototype.showMedia = function (data) {
    const modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["custom-class-1", "custom-class-2"],
    });

    let content;

    switch (data.type) {
        case 1: {
            content = this.templates.imgmodal({
                title: data.title,
                img: data.img
            })
            break;
        };

        case 2: {
            content = this.templates.videomodal({
                title: data.title,
                video: data.video_url,
                width: data.width,
                height: data.height
            });
            break;
        };
    };


    // set content
    modal.setContent(content);

    // open modal
    modal.open();
};

$(() => new Gallery());