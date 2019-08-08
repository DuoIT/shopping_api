const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://phuochoaile:lephuochoai@cluster0-m3edx.mongodb.net/shopping`, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const ProductsModel = require('./ProductsModel');

const products = [
    {
        name: 'Ổ cứng SSD Plextor 128GB M.2 2280 SATA 3 - PX-128S3G',
        image:     ['https://img1.phongvu.vn/media/catalog/product/s/s/ssd-plextor-px-s3g-m2-2280-1.jpg', 'https://img1.phongvu.vn/media/catalog/product/s/s/ssd-plextor-px-s3g-m2-2280-2.jpg'],
        category:  'ssd',
        overview: `
        Tên sản phẩm: Ổ cứng SSD Plextor 128GB PX-128S3G (M2-2280)

        - Dung lượng: 128GB
        - Kích thước: M.2 2280
        - Kết nối: M.2 SATA
        - Tốc độ đọc / ghi (tối đa): 560MB/s / 500MB/s
        `,
        describe:  `
        Giới thiệu ổ cứng SSD Plextor 128GB PX-128S3G (M2-2280)

        Tốc độ đọc: Lên tới 550 MB / s Tốc độ ghi: Lên tới 500 MB / s Đọc ngẫu nhiên: Lên đến 72K IOPS Viết ngẫu nhiên: Lên đến 57K IOPS

        - Đặc điểm, tính năng
        Các quy trình mới cho các thành phần nâng cao Chỉ có các thành phần mới nhất được lựa chọn cho dòng S3 là bộ xử lý NAND ﬂ tro cấp 3, bộ xử lý 14nm tiên tiến của Hynix và bộ điều khiển SMI 2254. Các thành phần này kết hợp cho phép S3 Series cung cấp tốc độ đọc / ghi tuần tự là 550/510 MB / s với tốc độ đọc / ghi ngẫu nhiên là 90K / 71K IOPS. So với các HDD truyền thống, đây là một mức hiệu suất đáng kể.
        
        Ổ cứng SSD Plextor 128GB PX-128S3G (M2-2280)
        
        Dung lượng thực của bộ nhớ cache tốc độ cao Sử dụng dung lượng lưu trữ đầy đủ của SSD! Công nghệ PlexNitro dẫn đầu ngành công nghiệp độc quyền sử dụng thiết kế bộ nhớ đệm SLC, có nghĩa là S3 không cần phải dự trữ không gian cung cấp quá mức, do đó dẫn đến tốc độ đọc / ghi tăng tốc. Điều này có nghĩa là người dùng có thể sử dụng toàn bộ dung lượng của ổ đĩa. Lấy SSD 128GB làm ví dụ: sau khi trừ dung lượng dư thừa được sử dụng bởi các thương hiệu khác, chỉ còn khoảng 120GB không gian. Tuy nhiên, với công nghệ tối ưu hóa hiệu suất của PlexNitro, có thể sử dụng toàn bộ 128GB không gian, không giảm chút nào. Lý tưởng cho việc xây dựng và nâng cấp PC tùy chỉnh Dòng S3 có giao thức - SATA 2.5-inch (S3C) và M.2 2280 (S3G) và có 3 tùy chọn dung lượng: 128GB và 256GB. Nó hoàn toàn có thể đáp ứng các yêu cầu cài đặt của các thiết bị máy tính để bàn và máy tính xách tay, cũng như các thiết bị khác sử dụng SSD. Điều này làm cho dòng S3 trở thành sự lựa chọn tốt nhất.
         
        - Công nghệ độc quyền
        + PlexNitro
        PlexNitro, công nghệ tăng tốc bộ nhớ cache độc quyền của Plextor, được phát triển đặc biệt cho TLC SSD. Sử dụng PlexNitro Cache như một bộ đệm để cải thiện tốc độ đọc và ghi của SSD TLC, mà không lấy đi khả năng của người dùng như trên cấp phép. Plextor vẫn cam kết cung cấp các sản phẩm SSD “dung lượng đầy đủ” 128GB, 256GB và 512GB thay vì 120GB, 240GB và 480GB.
        
        + PlexVault
        Phần mềm PlexVault của Plextor nhằm mục đích cung cấp một không gian bảo mật hơn và các đặc quyền kiểm soát hoàn chỉnh cho người dùng. Ngay cả khi bạn đang sử dụng máy tính với người khác, bạn vẫn có thể lưu trữ dữ liệu cá nhân của mình qua PlexVault, được lưu trữ an toàn và an toàn trên máy tính, miễn là máy tính được trang bị ổ SSD Plextor.
        
        + PlexCompressor
        Dung lượng lưu trữ của SSD luôn là điểm quan trọng. PlexCompressor của Plextor sử dụng công nghệ nén thông minh, tùy chỉnh mang lại cho người dùng nhiều dung lượng lưu trữ hơn mà không ảnh hưởng đến trải nghiệm người dùng và hiệu năng hệ thống.
        
        + PlexTurbo
        PlexTurbo là một giải pháp bộ đệm RAM SSD thông minh sử dụng RAM hệ thống để tăng tốc hiệu năng lưu trữ SSD. Nó làm tăng tuổi thọ của SSD trong khi tăng tốc hiệu suất truy cập. (Đề nghị dung lượng DRAM: 32GB)
        `,
        price:     585000,
        stock:     30
    },
    {
        name: 'Ổ cứng SSD Western Digital WD Green 240GB M.2 2280 SATA 3 - WDS240G2G0B',
        image: [
            'http://catalog.teko.vn/storage/o_cung/1805377/a97c6ea469693789446d9de562865c31_%E1%BB%94-c%E1%BB%A9ng-ssd-wd-green-240gb-m2-2280-(wds240g2g0b)-1.jpg',
            'http://catalog.teko.vn/storage/o_cung/1805377/126189d782877f8e8a3342713d21f4b6_%E1%BB%94-c%E1%BB%A9ng-ssd-wd-green-240gb-m2-2280-(wds240g2g0b)-2.jpg'
        ],
        category: 'ssd',
        overview: `
        Tên sản phẩm: Ổ cứng SSD WD Green 240GB M2-2280 (WDS240G2G0B)

        - Dung lượng: 240GB
        - Kích thước: M.2 2280
        - Kết nối: M.2 SATA
        - Tốc độ đọc / ghi (tối đa): 545MB/s
        `,
        describe: `
        Giới thiệu sản phẩm ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280)
        Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280)

        Trước đây, trên các dòng máy tính để bản lẫn laptop đều được trang bị ổ cứng HDD (Hard Disk Drive) để lưu trữ dữ liệu, tuy vậy nhược điểm của loại cứng này là tốc độ đọc ghi dữ liệu khá chậm chạp nên không thể đáp ứng tốt trong việc truyển tải các dữ liệu nặng hay xử lý tác vụ đồ họa phức tạp. Đây cũng là lý do mà ổ SSD ra đời.Với việc có nhiều ưu điểm vượt trội hơn ổ HDD thì SSD đang ngày càng được sử dụng rộng rãi.Để phục vụ nhu cầu sử dụng SSD đó hãng sản xuất WD (Western Digital)hãng sản xuất ổ đĩa cứng lớn nhất thế giới đã giới thiệu rất nhiều sản phẩm trong đó có Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280)

        + Đặc điểm nổi bật
        Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280) là giải pháp để tối ưu hóa hiệu năng của máy tính, cung cấp hiệu suất và độ tin cậy cực cao khi được trang bị tất cả các công nghệ  tiên tiến nhất hiện nay.

        Ổ cứng có tốc độ đọc lên đến 540MB/s giúp cho các ứng dụng chạy nhanh hơn, thời gian đáp ứng thấp hơn và tăng tốc độ truyền tải dữ liệu. Với SSD WD 240GB WDS240G2G0B (M2-2280) bạn sẽ có được một trải nghiệm tuyệt vời trên hệ thống máy tính của bạn và tiết kiệm được rất nhiều thời gian.

        Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280)Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280) còn nổi bật ở khả năng bền bỉ của mình với  tuổi thọ hoạt động (MTTF) lên đến 1.750.000 giờ.Cùng với các công nghệ tự sửa lỗi (ECC),Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280)  sẽ bảo vệ dữ liệu của bạn với độ tin cậy cực kì lâu dài. Bên cạnh đó còn là khả năng tối ưu hóa đa nhiệm có thể dùng nhiều tác vụ cùng lúc.

        Ổ cứng SSD WD 240GB WDS240G2G0B (M2-2280) tương thích hầu hết với tất cả máy tính , đáp ứng mọi nhu cầu của mọi hệ thống laptop hay PC.

        `,
        price: 890000,
        stock: 20
    }
]

products.map(product => {
    const new_product = new ProductsModel({
        name: product.name,
        image: product.image,
        category: product.category,
        overview: product.overview,
        describe: product.describe,
        price: product.price,
        stock: product.stock
    })

    new_product.save();
})