/*
=========================================================
CÁCH THÊM FOLDER MỚI — CHỈ SỬA FILE albums.js
=========================================================

Ví dụ folder đơn giản nhất:

{
    name: "Sinh nhật em",
    cover: "images/em/sinhnhat/1.jpg",

    photos: [
        "images/em/sinhnhat/1.jpg",
        "images/em/sinhnhat/2.jpg",
        "images/em/sinhnhat/3.jpg"
    ]
},

- Đặt block trong `her: [...]`  => xuất hiện ở mục "Em".
- Đặt block trong `us: [...]`   => xuất hiện ở mục "Tôi và em".
- Tối đa 5 folder / hàng trên desktop.
- Folder thứ 6 tự xuống hàng.
- Album KHÔNG phân trang ảnh nữa.
- Có bao nhiêu ảnh thì tất cả sẽ tự quây quanh trái tim.
- Ảnh càng nhiều thì website tự thu nhỏ ảnh.

Nếu muốn title riêng cho ảnh:

{
    src: "images/em/1.jpg",
    title: "Chú thích khi hover"
}

Bạn có thể trộn 2 kiểu trong cùng photos:

photos: [
    "images/em/1.jpg",
    {
        src: "images/em/2.jpg",
        title: "Ảnh thứ hai"
    }
]

=========================================================
*/

const LOVE_ALBUMS = {
    her: [
        {
            name: "1 tháng bên nhauuu",
            cover: "18_7/cf243f04-c26e-475d-adb8-ab019002cf00.jpg",
            photos: [
                {
                    src: "18_7/dautien.jpg",
                    title: "Ảnh em đầu tiên gửi anhhh"
                },
                {
                    src: "18_7/662d5db2-2256-4461-bcf0-db515085192f.jpg",
                    title: "Ẻm bị chụp lénnn"
                },
                {
                    src: "18_7/a4.jpg",
                    title: "Móc khóa tui tặng ẻm nèee"
                },
                {
                    src: "18_7/cd3a08f2-8665-4221-a104-dbedc797b037.jpg",
                    title: "Lần đầu ẻm đeo kínhhh"
                },
                {
                    src: "18_7/cf243f04-c26e-475d-adb8-ab019002cf00.jpg",
                    title: "Em và hoa"
                },
                {
                    src: "18_7/94fed789-9f68-4971-88d8-7f1c9f40d5f3.jpg",
                    title: "Em hun anh hỏ"
                }
            ]
        },

        {
            name: "2 tháng bên nhauuu",
            cover: "18_8/e6425637-88f2-4b7e-bf27-53390bfdedbf.jpg",
            photos: [
                {
                    src: "18_8/3bcde69f-6af6-4e83-81f4-d2f15f96ccf7.jpg",
                    title: "Lườm"
                },
                {
                    src: "18_8/2e99e5cb-77e9-44e3-b1d7-532eeff4ea44.jpg",
                    title: "Ngoan xinh iu neeeee"
                },
                {
                    src: "18_8/e6425637-88f2-4b7e-bf27-53390bfdedbf.jpg",
                    title: "Hoa của anh và hoa của em"
                },
                {
                    src: "18_8/0c797047-52b5-4c89-9fc2-83de370f54e6.jpg",
                    title: "Ờm.....thì....."
                },
                {
                    src: "18_8/fc771c6d-c144-4b36-8a86-ce28c91bfd17.jpg",
                    title: "Cũm là em và hoa nhưng mà zam hơnnnn"
                },
                {
                    src: "18_8/66bdc676-162b-413f-b38b-9d75828f426f.jpg",
                    title: "hoa trên tóc hoa"
                },
            ]
        },

        {
            name: "3 tháng bên nhauuu",
            cover: "18_9/30720f1d-8660-42fe-b5d2-6a1c20aa4709.jpg",
            photos: [
                {
                    src: "18_9/30720f1d-8660-42fe-b5d2-6a1c20aa4709.jpg",
                    title: "My best photo"
                },
                {
                    src: "18_9/4c071d68-8259-4bf9-9eec-a219d3f3f8ed.jpg",
                    title: "Ảnh nền điện thoại neee"
                },
                {
                    src: "18_9/ef6b624c-4da2-463d-8426-02e416cb8f91.jpg",
                    title: "I'm just a girl, standing in front of a boy, asking him to love her"
                },
                {
                    src: "18_9/65ca708a-5c7e-40ad-ac18-a383f8b73f8d.jpg",
                    title: "Ẻm quýn rũ tuiii"
                },
                {
                    src: "18_9/70012f05-efc4-427f-ad6e-d61fe6d52397.jpg",
                    title: "Hoa và hoa"
                },
                {
                    src: "18_9/837c55f3-8a8b-4d23-9a27-c68f5ce1cbbb.jpg",
                    title: "xinh iuuuu"
                }
            ]
        }
    ],

    us: [
        {
            name: "1 tháng bên nhauuu",
            cover: "18_7/a3.jpg",
            photos: [
                {
                    src: "18_7/a3.jpg",
                    title: "First date sau tỏ tình nèee"
                },
                {
                    src: "18_7/209292cf-4794-440d-9819-57fc24f0d7cf.jpg",
                    title: "Hun nèee"
                },
                {
                    src: "18_7/44c5f015-5ad0-41f0-a0a7-5d3019af51b7.jpg",
                    title: "Ẻm nựng tuiii"
                },
                {
                    src: "18_7/9b5c0d5e-723a-4a5e-8824-6b41436fcfe7.jpg",
                    title: "Bĩu môi nèee"
                },
                {
                    src: "18_7/23e54505-8c1c-465c-ba86-832a3fc9edaf.jpg",
                    title: "Ẻm công khai tuiii"
                },
                {
                    src: "18_7/5c88f73f-479a-4f81-885c-f7e18bc9d49d.jpg",
                    title: "2 con Ma Kết chu mỏ"
                },
                {
                    src: "18_7/8138ba08-a590-46f3-830a-bc1590fd887f.jpg",
                    title: "Nhéo má nèee"
                },
                {
                    src: "18_7/5963f45f-7cfc-426f-ae60-af5099c9a7ec.jpg",
                    title: "Ăng nhăng nhănggg"
                }
            ]
        },

        {
            name: "2 tháng bên nhauuu",
            cover: "18_8/0a1eb653-8e9a-45f4-be1b-6a7cf8a01856.jpg",
            photos: [
                {
                    src: "18_8/0a1eb653-8e9a-45f4-be1b-6a7cf8a01856.jpg",
                    title: "Đi date neee"
                },
                {
                    src: "18_8/7584a173-adab-48f6-89ff-cdb87cf6243e.jpg",
                    title: "Chọt chọt gãi gãi"
                },
                {
                    src: "18_8/18_8.jpg",
                    title: "Anh chỉ nhìn đồ ăng, hong nhìn em"
                },
                {
                    src: "18_8/9f42518c-c84f-45c5-9e75-804b6d5fd3b6.jpg",
                    title: "Ôm mínnn"
                },
                {
                    src: "18_8/edd3379a-d268-41e3-9bc6-27bb47d83f2a.jpg",
                    title: "Xinh iu bên tráiiii"
                },
                {
                    src: "18_8/a0dcd348-6143-4a69-89da-6e740b153efb.jpg",
                    title: "Cười xinh waaaaa"
                },
                {
                    src: "18_8/a5a335d6-bea8-4fb8-9751-ed953a119de2.jpg",
                    title: "Hun mínnnn"
                }
            ]
        },

        {
            name: "3 tháng bên nhauuu",
            cover: "18_9/7bba1f27-68c0-4f80-9826-d14ca49f783e.jpg",
            photos: [
                {
                    src: "18_9/5c63091e-28db-40cb-88f4-ff51005ecaea.jpg",
                    title: "Ăn bánh gi ngol za"
                },
                {
                    src: "18_9/7bba1f27-68c0-4f80-9826-d14ca49f783e.jpg",
                    title: "Bên nhau neee"
                },
                {
                    src: "18_9/9af74b40-844c-4a84-a7a5-7d1812381676.jpg",
                    title: "Gửi ảnh xem 1 lần ha"
                },
                {
                    src: "18_9/5bfbf81b-1f9d-41df-a499-bc783eae8739.jpg",
                    title: "Rung động nữa ruiii"
                },
                {
                    src: "18_9/63e3066d-8154-4592-903f-b9ab573088ff.jpg",
                    title: "Cười tươi wa iiii"
                },
            ]
        }
    ]
};
