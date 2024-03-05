const CATEGORIES = [
  {
    category_id: 1,
    category_name: "TRANG TRÍ NHÀ CỬA",
  },
  {
    category_id: 2,
    category_name: "NHÀ BẾP",
  },
  {
    category_id: 3,
    category_name: "NỘI THẤT",
  },
  {
    category_id: 4,
    category_name: "THỜI TRANG",
  },
];

const BLOGS = [
  {
    blog_id: 1,
    blog_title: "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    blog_description: "Chủ tịch HĐQT Công ty cổ phần ECOKA, chị Quang Chân Chân, và Tổng Giám Đốc Công ty cổ phần, anh Hà AnhTrường, đã có một buổi chia sẻ đầy ý nghĩa tại trường đại học FPT về hành trình thành công của ECOKA trong việc đưa hàng Việt ra quốc tế trên sàn thương mại điện tử Amazon. Buổi chia sẻ, diễn ra vào ngày 23/6, đã gây được sự quan tâm và ngưỡng mộ từ các sinh viên.",
    blog_date: "28 Tháng 06, 2023",
    blog_author: "Trần My",
    blog_thumbnail: "https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__79__d2d9e8ff2ae24f8e9774287d33f7a64d_grande.jpg',
        section_thumbnail_label: 'Chị Chân và anh Trường chia sẻ với sinh viên đại học FPT',
        section_content: 'Buổi chia sẻ đã truyền cảm hứng và khuyến khích sinh viên về khả năng của doanh nghiệp Việt trong việc vươn ra thị trường quốc tế. Chị Quang Chân Chân và anh Hà AnhTrường đã chia sẻ những kinh nghiệm quý báu về cách xây dựng và phát triển thương hiệu Việt trên môi trường cạnh tranh như Amazon. Điều này đã mở ra một cánh cửa mới cho các sinh viên, khuyến khích họ tiếp cận và tìm hiểu về cách một doanh nghiệp Việt có thể thành công trên sàn thương mại điện tử hàng đầu thế giới.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__56__e52432f0b3754bee88d4ffc4df86b313_grande.jpg',
        section_thumbnail_label: 'Các bạn sinh viên FPT đặt câu hỏi cho hai diễn giả',
        section_content: 'Cuối buổi chia sẻ, ECOKA đã trao tặng một số phần quà đặc biệt, đó là những sản phẩm thủ công mỹ nghệ từ lục bình của ECOKA. Đây là một lời tri ân đặc biệt dành cho các sinh viên may mắn, đồng thời tạo cơ hội cho họ trải nghiệm và hiểu rõ hơn về nghệ thuật độc đáo và giá trị của những sản phẩm này.'
      }
    ]
  },
  {
    blog_id: 2,
    blog_title: "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    blog_description: "Chủ tịch HĐQT Công ty cổ phần ECOKA, chị Quang Chân Chân, và Tổng Giám Đốc Công ty cổ phần, anh Hà AnhTrường, đã có một buổi chia sẻ đầy ý nghĩa tại trường đại học FPT về hành trình thành công của ECOKA trong việc đưa hàng Việt ra quốc tế trên sàn thương mại điện tử Amazon. Buổi chia sẻ, diễn ra vào ngày 23/6, đã gây được sự quan tâm và ngưỡng mộ từ các sinh viên.",
    blog_date: "28 Tháng 06, 2023",
    blog_author: "Trần My",
    blog_thumbnail: "https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__79__d2d9e8ff2ae24f8e9774287d33f7a64d_grande.jpg',
        section_thumbnail_label: 'Chị Chân và anh Trường chia sẻ với sinh viên đại học FPT',
        section_content: 'Buổi chia sẻ đã truyền cảm hứng và khuyến khích sinh viên về khả năng của doanh nghiệp Việt trong việc vươn ra thị trường quốc tế. Chị Quang Chân Chân và anh Hà AnhTrường đã chia sẻ những kinh nghiệm quý báu về cách xây dựng và phát triển thương hiệu Việt trên môi trường cạnh tranh như Amazon. Điều này đã mở ra một cánh cửa mới cho các sinh viên, khuyến khích họ tiếp cận và tìm hiểu về cách một doanh nghiệp Việt có thể thành công trên sàn thương mại điện tử hàng đầu thế giới.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__56__e52432f0b3754bee88d4ffc4df86b313_grande.jpg',
        section_thumbnail_label: 'Các bạn sinh viên FPT đặt câu hỏi cho hai diễn giả',
        section_content: 'Cuối buổi chia sẻ, ECOKA đã trao tặng một số phần quà đặc biệt, đó là những sản phẩm thủ công mỹ nghệ từ lục bình của ECOKA. Đây là một lời tri ân đặc biệt dành cho các sinh viên may mắn, đồng thời tạo cơ hội cho họ trải nghiệm và hiểu rõ hơn về nghệ thuật độc đáo và giá trị của những sản phẩm này.'
      }
    ]
  },
  {
    blog_id: 3,
    blog_title: "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    blog_description: "Chủ tịch HĐQT Công ty cổ phần ECOKA, chị Quang Chân Chân, và Tổng Giám Đốc Công ty cổ phần, anh Hà AnhTrường, đã có một buổi chia sẻ đầy ý nghĩa tại trường đại học FPT về hành trình thành công của ECOKA trong việc đưa hàng Việt ra quốc tế trên sàn thương mại điện tử Amazon. Buổi chia sẻ, diễn ra vào ngày 23/6, đã gây được sự quan tâm và ngưỡng mộ từ các sinh viên.",
    blog_date: "28 Tháng 06, 2023",
    blog_author: "Trần My",
    blog_thumbnail: "https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__79__d2d9e8ff2ae24f8e9774287d33f7a64d_grande.jpg',
        section_thumbnail_label: 'Chị Chân và anh Trường chia sẻ với sinh viên đại học FPT',
        section_content: 'Buổi chia sẻ đã truyền cảm hứng và khuyến khích sinh viên về khả năng của doanh nghiệp Việt trong việc vươn ra thị trường quốc tế. Chị Quang Chân Chân và anh Hà AnhTrường đã chia sẻ những kinh nghiệm quý báu về cách xây dựng và phát triển thương hiệu Việt trên môi trường cạnh tranh như Amazon. Điều này đã mở ra một cánh cửa mới cho các sinh viên, khuyến khích họ tiếp cận và tìm hiểu về cách một doanh nghiệp Việt có thể thành công trên sàn thương mại điện tử hàng đầu thế giới.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__56__e52432f0b3754bee88d4ffc4df86b313_grande.jpg',
        section_thumbnail_label: 'Các bạn sinh viên FPT đặt câu hỏi cho hai diễn giả',
        section_content: 'Cuối buổi chia sẻ, ECOKA đã trao tặng một số phần quà đặc biệt, đó là những sản phẩm thủ công mỹ nghệ từ lục bình của ECOKA. Đây là một lời tri ân đặc biệt dành cho các sinh viên may mắn, đồng thời tạo cơ hội cho họ trải nghiệm và hiểu rõ hơn về nghệ thuật độc đáo và giá trị của những sản phẩm này.'
      }
    ]
  },
];

const HOME_PRODUCTS = [
  {
    product_id: "ECOKAPRODUCT01",
    product_name: "Product 01",
    product_description: "Description for Product 01",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT02",
    product_name: "Product 02",
    product_description: "Description for Product 02",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT03",
    product_name: "Product 03",
    product_description: "Description for Product 03",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT04",
    product_name: "Product 04",
    product_description: "Description for Product 04",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT05",
    product_name: "Product 05",
    product_description: "Description for Product 05",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT06",
    product_name: "Product 06",
    product_description: "Description for Product 06",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT07",
    product_name: "Product 07",
    product_description: "Description for Product 07",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT08",
    product_name: "Product 08",
    product_description: "Description for Product 08",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT09",
    product_name: "Product 09",
    product_description: "Description for Product 09",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT10",
    product_name: "Product 10",
    product_description: "Description for Product 10",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT11",
    product_name: "Product 11",
    product_description: "Description for Product 11",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT12",
    product_name: "Product 12",
    product_description: "Description for Product 12",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT13",
    product_name: "Product 13",
    product_description: "Description for Product 13",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT14",
    product_name: "Product 14",
    product_description: "Description for Product 14",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT15",
    product_name: "Product 15",
    product_description: "Description for Product 15",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT16",
    product_name: "Product 16",
    product_description: "Description for Product 16",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
];

const PRODUCTS = [
  {
    product_id: "ECOKAPRODUCT01",
    product_name: "Product 01",
    product_description: "Description for Product 01",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT02",
    product_name: "Product 02",
    product_description: "Description for Product 02",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT03",
    product_name: "Product 03",
    product_description: "Description for Product 03",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT04",
    product_name: "Product 04",
    product_description: "Description for Product 04",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 1
  },
  {
    product_id: "ECOKAPRODUCT05",
    product_name: "Product 05",
    product_description: "Description for Product 05",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT06",
    product_name: "Product 06",
    product_description: "Description for Product 06",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT07",
    product_name: "Product 07",
    product_description: "Description for Product 07",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT08",
    product_name: "Product 08",
    product_description: "Description for Product 08",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 2
  },
  {
    product_id: "ECOKAPRODUCT09",
    product_name: "Product 09",
    product_description: "Description for Product 09",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT10",
    product_name: "Product 10",
    product_description: "Description for Product 10",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT11",
    product_name: "Product 11",
    product_description: "Description for Product 11",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT12",
    product_name: "Product 12",
    product_description: "Description for Product 12",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 3
  },
  {
    product_id: "ECOKAPRODUCT13",
    product_name: "Product 13",
    product_description: "Description for Product 13",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT14",
    product_name: "Product 14",
    product_description: "Description for Product 14",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT15",
    product_name: "Product 15",
    product_description: "Description for Product 15",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
  {
    product_id: "ECOKAPRODUCT16",
    product_name: "Product 16",
    product_description: "Description for Product 16",
    product_thumbnail_one: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_two: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_three: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_four: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_five: 'https://ecoka.devilop.me/about_01.png',
    product_thumbnail_six: 'https://ecoka.devilop.me/about_01.png',
    product_price: '0',
    category_id: 4
  },
];

export const FAKE = {
  CATEGORIES,
  BLOGS,
  PRODUCTS,
  HOME_PRODUCTS
};
