document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { 
        el: ".swiper-pagination",
        clickable: true
        },
    });
});

const videos = [
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B5-2",
        date: "2025/6/28",
        opponent: "豊橋市立東陵中学校",
        url: "https://youtu.be/Hm8xxnaN_8E"
    },
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B5-1",
        date: "2025/6/28",
        opponent: "豊橋市立東陵中学校",
        url: "https://youtu.be/0bl3ei1tA5E"
    },
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B3-2",
        date: "2025/6/28",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/ugU8W9yf48A"
    },
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B3-1",
        date: "2025/6/28",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/bgPovG9YeH0"
    },
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B1-2",
        date: "2025/6/28",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/EyNN_aN0BSw"
    },
    {
        year: "2025",
        tournament: "令和7年度 市内総合体育大会",
        matchNo: "B1-1",
        date: "2025/6/28",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/N4ZgPKo2CgM"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B4-2",
        date: "2025/4/30",
        opponent: "豊橋市立羽田中学校",
        url: "https://youtu.be/l9cKsH37kHI"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B4-1",
        date: "2025/4/30",
        opponent: "豊橋市立羽田中学校",
        url: "https://youtu.be/oR_qXR_T3gA"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B3-2",
        date: "2025/4/30",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/U25JBjIT0-A"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B3-1",
        date: "2025/4/30",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/zEvwqxww_FI"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B1-2",
        date: "2025/4/30",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/WaEjG0amoFU"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 2日目",
        matchNo: "B1-1",
        date: "2025/4/30",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/i8gj8XVK-fU"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 1日目",
        matchNo: "D13",
        date: "2025/4/28",
        opponent: "豊橋市立中部中学校",
        url: "https://youtu.be/Q8D1HKgKQss"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 1日目",
        matchNo: "D11",
        date: "2025/4/28",
        opponent: "田原市立赤羽根中学校",
        url: "https://youtu.be/pm-2s2Po35A"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 1日目",
        matchNo: "D9",
        date: "2025/4/28",
        opponent: "新城市立千郷中学校",
        url: "https://youtu.be/RvZyqq1QYw8"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 1日目",
        matchNo: "D6",
        date: "2025/4/28",
        opponent: "豊川市立南部中学校",
        url: "https://youtu.be/6mtIveQicw8"
    },
    {
        year: "2025",
        tournament: "令和7年度 東三河春季大会 1日目",
        matchNo: "D2",
        date: "2025/4/28",
        opponent: "蒲郡市立大塚中学校",
        url: "https://youtu.be/bt22dNzQZuY"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会 交流戦",
        matchNo: "A9",
        date: "2025/3/16",
        opponent: "豊橋市立羽田中学校B",
        url: "https://youtu.be/Bzsur8-ZZOg"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会 交流戦",
        matchNo: "A7",
        date: "2025/3/16",
        opponent: "豊橋市立高豊中学校A",
        url: "https://youtu.be/h3yfBKZUNqU"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "B5-3",
        date: "2025/3/16",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/1dMCmmyBG6s"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "B5-2",
        date: "2025/3/16",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/p6ru_1AzNBg"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "B5-1",
        date: "2025/3/16",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/AKMmcEdBgCI"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A4-2",
        date: "2025/3/16",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/HggUpw3pt0g"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A4-1",
        date: "2025/3/16",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/_75OhAVNzTk"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A3-2",
        date: "2025/3/16",
        opponent: "豊橋市立中部中学校",
        url: "https://youtu.be/oAMOKUuY89M"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A3-1",
        date: "2025/3/16",
        opponent: "豊橋市立中部中学校",
        url: "https://youtu.be/72B0LfcbJpg"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A1-2",
        date: "2025/3/16",
        opponent: "豊橋市立高師台中学校",
        url: "https://youtu.be/CCMBXEk1czQ?si=SrIJTkxRk8L2Z82L"
    },
    {
        year: "2025",
        tournament: "第49回 豊橋市内中学生バレーボール大会",
        matchNo: "A1-1",
        date: "2025/3/16",
        opponent: "豊橋市立高師台中学校",
        url: "https://youtu.be/E8XBw-tDUhk?si=cTRBcFkMun3SLMBW"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B5-2",
        date: "2024/12/07",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/llO6A2i2hys"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B5-1",
        date: "2024/12/07",
        opponent: "Salire Stars Toyohashi",
        url: "https://youtu.be/Dj81ZRtD-6Q"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B3-2",
        date: "2024/12/07",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/CINRmm6j0kE"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B3-1",
        date: "2024/12/07",
        opponent: "豊橋市立高豊中学校",
        url: "https://youtu.be/pvios5Z-V6w"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B1-2",
        date: "2024/12/07",
        opponent: "豊川市立豊川中部中学校",
        url: "https://youtu.be/Z39GHznB-JM"
    },
    {
        year: "2024",
        tournament: "第16回 中央高等学校長杯",
        matchNo: "B1-1",
        date: "2024/12/07",
        opponent: "豊川市立豊川中部中学校",
        url: "https://youtu.be/Jk1zvFl3GuU"
    },
    {
        year: "2024",
        tournament: "第77回 東三河中学生新人バレーボール大会",
        matchNo: "J4-2",
        date: "2024/10/28",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/OWS2yublDzo"
    },
    {
        year: "2024",
        tournament: "第77回 東三河中学生新人バレーボール大会",
        matchNo: "J4-1",
        date: "2024/10/28",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/vb0ytthjQ_g"
    },
    {
        year: "2024",
        tournament: "第77回 東三河中学生新人バレーボール大会",
        matchNo: "J2-2",
        date: "2024/10/28",
        opponent: "田原市立田原中学校",
        url: "https://youtu.be/F5K9IDrkTdc"
    },
    {
        year: "2024",
        tournament: "第77回 東三河中学生新人バレーボール大会",
        matchNo: "J2-1",
        date: "2024/10/28",
        opponent: "田原市立田原中学校",
        url: "https://youtu.be/tcmXvFnkm_I"
    },
    {
        year: "2024",
        tournament: "令和6年度 豊橋市内中学校新人体育大会",
        matchNo: "B2-2",
        date: "2024/09/21",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/JBdnBRlcNEY"
    },
    {
        year: "2024",
        tournament: "令和6年度 豊橋市内中学校新人体育大会",
        matchNo: "B2-1",
        date: "2024/09/21",
        opponent: "豊橋市立二川中学校",
        url: "https://youtu.be/IVwuHK7hDN0"
    },
];

// フィルター
    const yearFilter = document.getElementById("yearFilter");
    const tournamentFilter = document.getElementById("tournamentFilter");
    const videoList = document.getElementById("videoList");

    function renderVideos() {
        const year = yearFilter.value;
        const tournament = tournamentFilter.value;
        videoList.innerHTML = "";

        const filtered = videos.filter(v =>
            (year === "" || v.year === year) &&
            (tournament === "" || v.tournament === tournament)
        );

        if (filtered.length === 0) {
            videoList.innerHTML = "<p>指定された動画はありません。</p>";
            return;
        }

        filtered.forEach(v => {
            let videoId = "";
            if (v.url.includes("youtu.be")) {
                videoId = v.url.split("youtu.be/")[1].split("?")[0];
            } else if (v.url.includes("youtube.com")) {
                videoId = v.url.split("v=")[1].split("&")[0];
            }

            const div = document.createElement("div");
            div.className = "video-card fade-in";
            div.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${videoId}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <p>
                    ${v.date}<br>
                    ${v.tournament} ${v.matchNo}<br>
                    ${v.opponent ? "vs " + v.opponent : ""}
                </p>
            `;
            videoList.appendChild(div);
        });

        // 新しく生成した fade-in 要素に対して可視化チェック
        checkFade();
    }

    // 初期描画 & イベント
    renderVideos();
    yearFilter.addEventListener("change", renderVideos);
    tournamentFilter.addEventListener("change", renderVideos);

    // fade-in
    function checkFade() {
        const windowBottom = window.innerHeight + window.scrollY;

        document.querySelectorAll('.fade-in').forEach(el => {
            const elemTop = el.getBoundingClientRect().top + window.scrollY;
            if (windowBottom > elemTop + 100) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    checkFade();
