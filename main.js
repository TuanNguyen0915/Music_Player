const app = {
    songs: [
        {
            name: "Color_Out",
            singer: "Alone",
            path: "./assets/music/Color_Out.mp3",
            image: "./assets/img/Alone_-_Color_Out.jpeg",
        },
        {
            name: "You'll_Be_Fine (Original_Mix)",
            singer: "Erick_Fill_&amp;_Alwaro_",
            path: "./assets/music/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3.mp3",
            image: "./assets/img/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine.jpeg",
        },
        {
            name: "Crystals_In_Our_Eyes",
            singer: "Romancoke",
            path: "./assets/music/Romancoke_-_Crystals_In_Our_Eyes.mp3",
            image: "./assets/img/Romancoke_-_Crystals_In_Our_Eyes.jpeg",
        },
        {
            name: "Sau-Nay-Chung-Ta-Giau",
            singer: "Khac Viet",
            path: "./assets/music/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.mp3",
            image: "./assets/img/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.jpeg",
        },
        {
            name: "Color_Out",
            singer: "Alone",
            path: "./assets/music/Color_Out.mp3",
            image: "./assets/img/Alone_-_Color_Out.jpeg",
        },
        {
            name: "You'll_Be_Fine (Original_Mix)",
            singer: "Erick_Fill_&amp;_Alwaro_",
            path: "./assets/music/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3.mp3",
            image: "./assets/img/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine.jpeg",
        },
        {
            name: "Crystals_In_Our_Eyes",
            singer: "Romancoke",
            path: "./assets/music/Romancoke_-_Crystals_In_Our_Eyes.mp3",
            image: "./assets/img/Romancoke_-_Crystals_In_Our_Eyes.jpeg",
        },
        {
            name: "Sau-Nay-Chung-Ta-Giau",
            singer: "Khac Viet",
            path: "./assets/music/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.mp3",
            image: "./assets/img/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.jpeg",
        },
        {
            name: "Color_Out",
            singer: "Alone",
            path: "./assets/music/Color_Out.mp3",
            image: "./assets/img/Alone_-_Color_Out.jpeg",
        },
        {
            name: "You'll_Be_Fine (Original_Mix)",
            singer: "Erick_Fill_&amp;_Alwaro_",
            path: "./assets/music/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine_ft._Crushboys_(Original_Mix)_-_erickfill.mp3.mp3",
            image: "./assets/img/Erick_Fill_&amp;_Alwaro_-_You'll_Be_Fine.jpeg",
        },
        {
            name: "Crystals_In_Our_Eyes",
            singer: "Romancoke",
            path: "./assets/music/Romancoke_-_Crystals_In_Our_Eyes.mp3",
            image: "./assets/img/Romancoke_-_Crystals_In_Our_Eyes.jpeg",
        },
        {
            name: "Sau-Nay-Chung-Ta-Giau",
            singer: "Khac Viet",
            path: "./assets/music/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.mp3",
            image: "./assets/img/Sau-Nay-Chung-Ta-Giau-Khac-Viet-ACV.jpeg",
        },
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
                <div class="song">
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>    
                    </div>    
                </div>`;
        });
        document.querySelector(".playlist").innerHTML = htmls.join("");
    },
    handleEvents: function () {
        const cd = document.querySelector(".cd");
        const cdWidth = cd.offsetWidth;

        //* Change the width of cover when scrolling
        document.onscroll = function () {
            const newScroll = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = parseFloat(cdWidth) - parseFloat(newScroll);
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };
    },
    start: function () {
        this.handleEvents();
        this.render();
    },
};

app.start();
