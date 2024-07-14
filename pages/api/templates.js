export default function handler(req, res) {
    const tempData = [
        {
            href: "/sample01/",
            src: "https://i.gyazo.com/ab3e7dbcbf047943d72849ee49f68b2e.png",
            title: "sample01",
            description: "コーポレートサイトのトップ画面作成",
            update: "2024/07/13"
        },
        {
            href: "#",
            src: "/img/preparatImg.png",
            title: "sample02",
            description: "概要説明(準備中)",
            update: "20**/**/**"
        },
        {
            href: "#",
            src: "/img/preparatImg.png",
            title: "sample03",
            description: "概要説明(準備中)",
            update: "20**/**/**"
        },
    ];

    const bootStrapClassDate = [
        {
            href: "https://qiita.com/Rock22/items/e4e89f15c29e1415977d",
            text: "text-align"
        },
        {
            href: "#",
            text: "メニュー１"
        }
    ];

    res.status(200).json({tempData, bootStrapClassDate});
}