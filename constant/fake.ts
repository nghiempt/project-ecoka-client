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

const BLOGS_EN = [
  {
    blog_id: 1,
    blog_title: "ECOKA shares the journey of lifting the Vietnamese brand on Amazon at FPT University",
    blog_description: "The Chairwoman of the Board of ECOKA JSC, Ms. Quang Chan Chan, and the CEO, Mr. Ha Anh Truong, had a meaningful sharing session at FPT University about ECOKA's successful journey in taking Vietnamese products to the international market on the Amazon e-commerce platform. The sharing session, which took place on June 23, sparked interest and admiration from the students.",
    blog_date: "28/06/2023",
    blog_author: "Tran My",
    blog_thumbnail: "https://file.hstatic.net/200000611203/article/chap_canh_thuong_hieu_viet__29__60cd4c08d9bc49f98cbc9a7d32cdd274.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__79__d2d9e8ff2ae24f8e9774287d33f7a64d_grande.jpg',
        section_thumbnail_label: 'Ms. Chan and Mr. Truong sharing with FPT University students',
        section_content: 'The sharing session inspired and encouraged students about the potential of Vietnamese enterprises in reaching out to international markets. Ms. Quang Chan Chan and Mr. Ha Anh Truong shared valuable experiences on building and developing a Vietnamese brand in a competitive environment like Amazon. This opened a new door for the students, encouraging them to approach and learn about how a Vietnamese enterprise can succeed on the world\'s leading e-commerce platform.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://file.hstatic.net/200000611203/file/chap_canh_thuong_hieu_viet__56__e52432f0b3754bee88d4ffc4df86b313_grande.jpg',
        section_thumbnail_label: 'FPT students asking questions to the speakers',
        section_content: 'At the end of the sharing session, ECOKA presented some special gifts, which were handicraft products from water hyacinth by ECOKA. This was a special gesture of appreciation for the lucky students, at the same time providing an opportunity for them to experience and understand more about the unique art and value of these products.'
      }
    ]
  },
  {
    blog_id: 2,
    blog_title: "Vice Chairman of Hau Giang People's Committee visits and encourages enterprises",
    blog_description: "(NSMT) - On January 23, Mr. Truong Canh Tuyen - Vice Chairman of Hau Giang Provincial People's Committee and Mr. Nguyen Vu Truong - Chairman of Long My District People's Committee, along with leaders of various departments and agencies, visited and presented gifts to several enterprises in the area of Long My district.",
    blog_date: "23/01/2024",
    blog_author: "Mien Tay Life",
    blog_thumbnail: "https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/98976c98-4009-42a8-87ea-652ffbe7ab65-1636.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/98976c98-4009-42a8-87ea-652ffbe7ab65-1636.jpg',
        section_thumbnail_label: 'Leaders at Ecoka Company.',
        section_content: 'At each location, Mr. Truong Canh Tuyen and Mr. Nguyen Vu Truong exchanged, congratulated, and encouraged the leaders, staff, and employees of the enterprises, as well as commended the achievements that the enterprises had made in 2023, especially in the current context of economic fluctuations due to the aftermath of the Covid pandemic. The delegates also listened to and acknowledged the contributions, suggestions of the enterprises regarding issues related to the business environment, tax policies, financial support, human resources supply, infrastructure improvement, etc.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/239d3ff9-95b1-4949-99af-413fc5c827e9-1636.jpg',
        section_thumbnail_label: 'Mr. Truong Canh Tuyen presents gifts to Thuận Lợi Cooperative.',
        section_content: 'At the end of the visit, the enterprises expressed their gratitude and appreciation for the concern and encouragement of the provincial and district levels, and committed to making greater efforts in their production and business activities, ensuring labor safety, environmental protection, fulfilling obligations to the state and society, contributing to the socio-economic development of Long My district and Hau Giang province.'
      }
    ]
  },
  {
    blog_id: 3,
    blog_title: "Starting a business with water hyacinth, the young man earns a revenue of over 2 billion VND/month",
    blog_description: "Realizing the hardships of the traditional handicraft villagers, Mr. Ha Anh Truong (35 years old), residing at Ward 9, Vung Tau City (Ba Ria - Vung Tau Province), has taken products made from water hyacinth abroad with a revenue of over 2 billion VND/month.",
    blog_date: "19/10/2023",
    blog_author: "Thanh Nien Newspaper",
    blog_thumbnail: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-169763416686080802620.jpeg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-169763416686080802620.jpeg',
        section_thumbnail_label: 'Ha Anh Truong starts his business with water hyacinth',
        section_content: 'In 2018, while searching for products to start an e-commerce business, Mr. Ha Anh Truong noticed the handicraft products from water hyacinth of the traditional craft villages.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-1697634325867126376752.jpeg',
        section_thumbnail_label: 'Creating a stable income source for the villagers',
        section_content: '“Most products would be purchased by traders and then sold to China in a way that they buy this season but pay in the next. However, when the market is not favorable, traders will abandon the products, affecting the livelihood of the villagers. This is also the reason why many people have to change their profession,” Mr. Truong explained. \nWith the desire to change the villagers\' lives, Mr. Truong and his associates approached skilled workers, bought from them, and guided them to improve the products in order to export to the European market. “Products from water hyacinth are very environmentally friendly, biodegradable into fertilizer, reducing daily consumption emissions. Therefore, they are favored in the European market,” he said.'
      },
      {
        section_id: 3,
        section_thumbnail: 'https://images2.thanhnien.vn/528068263637045248/2023/10/18/z47955313726042da29c0da7f087866adbd86aac0c367d-16976339415291235375594.jpg',
        section_thumbnail_label: 'Mr. Truong introduces products at the HCMC Export Forum 2023 event',
        section_content: 'In 2022, Mr. Truong established a company manufacturing and trading handicraft products from water hyacinth, such as home decor, dining accessories, fashion items like hats, bags… with the main markets in the US, Canada, France achieving a revenue of over 2 billion VND/month.'
      }
    ]
  },
];

const BLOGS_VI = [
  {
    blog_id: 1,
    blog_title: "ECOKA chia sẻ hành trình chắp cánh thương hiệu Việt trên Amazon tại trường đại học FPT",
    blog_description: "Chủ tịch HĐQT Công ty cổ phần ECOKA, chị Quang Chân Chân, và Tổng Giám Đốc Công ty cổ phần, anh Hà AnhTrường, đã có một buổi chia sẻ đầy ý nghĩa tại trường đại học FPT về hành trình thành công của ECOKA trong việc đưa hàng Việt ra quốc tế trên sàn thương mại điện tử Amazon. Buổi chia sẻ, diễn ra vào ngày 23/6, đã gây được sự quan tâm và ngưỡng mộ từ các sinh viên.",
    blog_date: "28/06/2023",
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
    blog_title: "Phó Chủ tịch UBND tỉnh Hậu Giang thăm hỏi và động viên các doanh nghiệp",
    blog_description: "(NSMT) - Ngày 23/01, ông Trương Cảnh Tuyên - Phó Chủ tịch UBND tỉnh Hậu Giang và ông Nguyễn Vũ Trường - Chủ tịch UBND huyện Long Mỹ cùng lãnh đạo các sở, ban, ngành đã đến thăm và tặng quà cho một số doanh nghiệp trên địa bàn huyện Long Mỹ.",
    blog_date: "23/01/2024",
    blog_author: "Nhịp Sống Miền Tây",
    blog_thumbnail: "https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/98976c98-4009-42a8-87ea-652ffbe7ab65-1636.jpg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/98976c98-4009-42a8-87ea-652ffbe7ab65-1636.jpg',
        section_thumbnail_label: 'Các vị lãnh đạo tại Công ty Ecoka.',
        section_content: 'Tại các địa điểm, ông Trương Cảnh Tuyên và ông Nguyễn Vũ Trường đã giao lưu, chúc mừng và động viên các lãnh đạo, cán bộ, nhân viên của các doanh nghiệp, cũng như biểu dương những thành tích mà các doanh nghiệp đã đạt được trong năm 2023, đặc biệt là trong bối cảnh kinh tế nhiều biến động hiện nay do hậu quả đại dịch Covid để lại. Các đại biểu cũng đã lắng nghe và ghi nhận những ý kiến đóng góp, kiến nghị của các doanh nghiệp về các vấn đề liên quan đến môi trường kinh doanh, chính sách thuế, hỗ trợ tài chính, cung cấp nguồn nhân lực, cải thiện hạ tầng,...'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://i.ex-cdn.com/mientay.giadinhonline.vn/files/content/2024/01/23/239d3ff9-95b1-4949-99af-413fc5c827e9-1636.jpg',
        section_thumbnail_label: 'Ông Trương Cảnh Tuyên tặng quà cho HTX Thuận Lợi.',
        section_content: 'Kết thúc chuyến thăm, các doanh nghiệp đã bày tỏ sự cảm kích và biết ơn đối với sự quan tâm và động viên của cấp tỉnh và cấp huyện, đồng thời cam kết sẽ nỗ lực hơn nữa trong công tác sản xuất kinh doanh, đảm bảo an toàn lao động, bảo vệ môi trường, thực hiện tốt các nghĩa vụ đối với nhà nước và xã hội, góp phần vào sự phát triển kinh tế - xã hội của huyện Long Mỹ và tỉnh Hậu Giang.'
      }
    ]
  },
  {
    blog_id: 3,
    blog_title: "Khởi nghiệp từ cây lục bình, chàng trai kiếm doanh thu hơn 2 tỉ đồng/tháng",
    blog_description: "Nhận thấy những vất vả của người dân làng nghề thủ công mỹ nghệ truyền thống, anh Hà Anh Trường (35 tuổi), ngụ tại P.9, TP.Vũng Tàu (tỉnh Bà Rịa - Vũng Tàu) đã đem sản phẩm làm từ cây lục bình đi xuất ngoại với doanh thu hơn 2 tỉ đồng/tháng.",
    blog_date: "19/10/2023",
    blog_author: "Báo Thanh Niên",
    blog_thumbnail: "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-169763416686080802620.jpeg",
    blog_section: [
      {
        section_id: 1,
        section_thumbnail: 'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-169763416686080802620.jpeg',
        section_thumbnail_label: 'Hà Anh Trường khởi nghiệp với cây lục bình',
        section_content: 'Năm 2018, trong quá trình tìm kiếm mặt hàng để khởi nghiệp mô hình kinh doanh thương mại điện tử, anh Hà Anh Trường đã chú ý đến các sản phẩm thủ công mỹ nghệ từ cây lục bình của làng nghề truyền thống.'
      },
      {
        section_id: 2,
        section_thumbnail: 'https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2023/10/18/base64-1697634325867126376752.jpeg',
        section_thumbnail_label: 'Tạo nguồn thu nhập ổn định cho người dân làng nghề',
        section_content: '“Đa phần sản phẩm sẽ được thương lái thu mua rồi bán sang Trung Quốc theo kiểu gối đầu, làm mùa này nhưng đến đợt sau mới trả tiền. Tuy nhiên, khi thị trường không khả quan, thương lái sẽ bỏ hàng làm ảnh hưởng đến sinh kế của người dân. Đây cũng là lý do khiến nhiều người phải chuyển nghề”, anh Trường kể lại. \nVới mong muốn thay đổi đời sống của người dân, anh Trường cùng các cộng sự đã tiếp cận những người thợ lành nghề, thu mua và hướng dẫn họ cải tiến sản phẩm để làm sao xuất khẩu sang thị trường châu Âu. “Các sản phẩm từ lục bình rất thân thiện với môi trường, có thể phân hủy sinh học làm phân bón, giảm phát thải tiêu dùng hàng ngày. Do đó, được thị trường tại châu Âu ưa chuộng”, anh nói.'
      },
      {
        section_id: 3,
        section_thumbnail: 'https://images2.thanhnien.vn/528068263637045248/2023/10/18/z47955313726042da29c0da7f087866adbd86aac0c367d-16976339415291235375594.jpg',
        section_thumbnail_label: 'Anh Trường trong lần giới thiệu sản phẩm tại sự kiện Diễn đàn và Xuất khẩu TP.HCM 2023',
        section_content: 'Năm 2022, anh Trường thành lập công ty sản xuất và thương mại các sản phẩm thủ công mỹ nghệ từ lục bình, như: trang trí nhà cửa, đồ dùng phụ kiện bàn ăn, những sản phẩm thời trang nón, túi xách… với thị trường chủ lực ở Mỹ, Canada, Pháp đạt doanh thu hơn 2 tỉ đồng/tháng.'
      }
    ]
  },
];

export const FAKE = {
  CATEGORIES,
  BLOGS_VI,
  BLOGS_EN,
};
