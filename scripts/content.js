// Danh sách các câu trả lời đã biết, mỗi câu có thể có nhiều đáp án đúng

const answers = {
  "Người được chở trên xe mô tô (xe máy), xe gắn máy không đội mũ bảo hiểm bị xử phạt?":
    ["200.000 đến 400.000 đồng"],
  "Người trộm cắp tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng, có thể bị phạt tù từ 06 tháng đến 03 năm nếu?":
    [
      "Đã bị xử phạt vi phạm hành chính về hành vi chiếm đoạt tài sản mà còn vi phạm",
      "Gây ảnh hưởng xấu đến an ninh, trật tự, an toàn xã hội",
      "Tài sản là phương tiện kiếm sống chính của người bị hại và gia đình họ",
    ],
  "Luật Phòng, chống tham nhũng năm 2018 có hiệu lực thì hành khi nào?": [
    "01/7/2019",
  ],
  "Hình thức xử lý nào sau đây được áp dụng đối với người môi giới mại dâm?": [
    "Truy cứu trách nhiệm hình sự",
  ],
  "Giáo dục quốc phòng và an ninh trong các cơ sở giáo dục đại học là môn học được xác định như thế nào?":
    [
      "Giáo dục quốc phòng và an ninh trong trường cao đẳng nghề, cơ sở giáo dục đại học là môn học chính khóa",
    ],
  "Bạo lực học đường ở Việt Nam là gì?": [
    "Là hiện tượng học sinh, sinh viên dùng hành vi mang tính bạo lực dể giải quyết mâu thuẫn",
  ],
  "Sinh viên đang học nghiện ma tuý, tự giác khai báo thì nhà trường xử lý như thế nào?":
    [
      "Cho phép người học nghỉ học một năm (12 tháng), bảo lưu kết quả học tập và giao cho gia đình người học để quản lý, tổ chức cai nghiện",
    ],
  "Mức xử phạt bổ sung đối với người điều khiển xe mô tô (xe máy), xe gắn máy có vi phạm nồng độ cồn trong máu hoặc trong khí thở vượt quá 80 miligam/100 mililít máu hoặc vượt quá 0,4 miligam/1 lít khí thở là?":
    ["Tước giấy phép lái xe từ 22 đến 24 tháng."],
  "Pháp lệnh phòng, chống mại dâm có hiệu lực thi hành từ ngày, tháng, năm nào?":
    ["Ngày 01 tháng 7 năm 2003"],
  "Tại sao phải ngăn chặn tệ nạn mại dâm?": [
    "Vì nó làm bại hoại đạo đức",
    "Vì nó lây truyền nhiều loại dịch bệnh nguy hiểm",
    "Vì nó gây ảnh hưởng tiêu cực tới văn hóa, xã hội",
  ],
  "Nguyên nhân nào dưới đây gây nên tình trạng bạo lực học đường.": [
    "Do ảnh hưởng tiêu cực của xã hội, thiếu sự quan tâm của gia đình, bản thân học sinh, sinh viên ở vào độ tuổi chưa phát triển đầy đủ về tâm sinh lý.",
  ],
  "Theo luật An ninh mạng năm 2018, Tội phạm mạng là?": [
    "Là hành vi sử dụng không gian mạng, công nghệ thông tin hoặc phương tiện điện tử để thực hiện hành vi phạm tội được quy định tại Bộ luật Hình sự",
  ],
  "Khi phát hiện tệ nạn ma túy cá nhân, gia đình có trách nhiệm gì?": [
    "Cung cấp nhanh chóng các thông tin về tệ nạn ma túy cho cơ quan công an hoặc cơ quan khác có thẩm quyền",
  ],
  "Tệ nạn ma túy được hiểu như thế nào?": [
    "Tất cả các phương án trả lời đều đúng.",
  ],
  "Đi xe mô tô (xe máy), xe gắn máy vào ban đêm cần làm gì?": [
    "Đi xe có đủ hai gương, đèn hậu nhấp nháy hoặc phản quang màu đỏ",
    "Đội mũ bảo hiểm sáng màu; mặc quần áo sáng màu hoặc phản quang",
  ],
  "Có mấy loại dải phân cách?": ["Loại cố định", "Loại di động"],
  "Theo quy định của Luật phòng chống ma túy Nhà trường có trách nhiệm gì?": [
    "Tổ chức thực hiện chương trình giáo dục về phòng, chống ma túy; giáo dục pháp luật về phòng, chống ma túy và lối sống lành mạnh cho học sinh, sinh viên, học viên; quản lý chặt chẽ, ngăn chặn học sinh, sinh viên, học viên tham gia tệ nạn ma túy.",
    "Phối hợp với gia đình, cơ quan, tổ chức và chính quyền địa phương để quản lý, giáo dục học sinh, sinh viên, học viên về phòng, chống ma túy.",
    "Phối hợp với cơ quan y tế và chính quyền địa phương tổ chức xét nghiệm khi cần thiết để phát hiện học sinh, sinh viên, học viên nghiện ma túy.",
  ],
  "Đâu là quy tắc ửng xử cho tổ chức, cá nhân khi tham gia mạng xã hội?": [
    "Chia sẻ những thông tin có nguồn chính thống, đáng tin cậy.",
    "Có các hành vi, ứng xử phù hợp với những giá trị đạo đức, văn hóa, truyền thống của dân tộc Việt Nam; không sử dụng từ ngữ gây thù hận, kích động bạo lực, phân biệt vùng miền, giới tính, tôn giáo",
    "Không đăng tải những nội dung vi phạm pháp luật, các thông tin xúc phạm danh dự, nhân phẩm ảnh hưởng đến quyền và lợi ích hợp pháp của các tổ chức, cá nhân khác; sử dụng ngôn ngữ phản cảm, vi phạm thuần phong mĩ tục; tung tin giả, tin sai sự thật; quảng cáo, kinh doanh dịch vụ trái phé.. gây bức xúc trong dư luận xã hội, ảnh hưởng đến trật tự an toàn xã hội.",
  ],
  "Hiện tượng xã hội bao gồm những hành vi sai lệch chuẩn mực xã hội. Vi phạm đạo đức và pháp luật, gây hậu quả nghiêm trọng về mọi mặt đối với đời sống cộng đồng là nội dung của khái niệm nào dưới đây?":
    ["Tệ nạn xã hội."],
  "Để đảm bảo an toàn khi điều khiển xe mô tô (xe máy), xe gắn máy cần tuân thủ các quy tắc giao thông nào?":
    [
      "Điều khiển xe đi đúng làn đường, phần đường quy định.",
      "Tuyệt đối không điều khiển xe sau khi uống rượu, bia.",
      "Đội mũ bảo hiểm cho người đi mô tô, xe gắn máy và cài quai đúng quy cách.",
    ],
  "Một người để được coi là chủ sở hữu một tác phẩm chỉ cần có quyền nào sau đây đối với tác phẩm đó?":
    ["Quyền đứng tên với tư cách là tác giả trên tác phẩm"],
  "Thông tin trên không gian mạng có nội dung kích động gây bạo loạn, phá rối an ninh, gây rối trật tự công cộng bao gồm:":
    ["Tất cả các phương án trả lời đều đúng."],
  "Luật PCCC quy định một trong những biện pháp cơ bản đầu tiên trong công tác phòng cháy là gì?":
    [
      "Quản lý chặt chẽ và sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt; đảm bảo các điều kiện an toàn về phòng cháy.",
    ],
  "Theo quy định Luật Phòng, chống bạo lực gia đình năm 2022, hành vi nào sau đây là hành vi bạo lực gia đình?":
    [
      "Hành hạ, ngược đãi, đánh đập, đe dọa hoặc hành vi cố ý khác xâm hại đến sức khỏe, tính mạng",
      "Bỏ mặc, không quan tâm; không nuôi dưỡng, chăm sóc thành viên gia đình là trẻ em, phụ nữ mang thai, phụ nữ đang nuôi con dưới 36 tháng tuổi, người cao tuổi, người khuyết tật, người không có khả năng tự chăm sóc; không giáo dục thành viên gia đình là trẻ em.",
      "Cưỡng ép thành viên gia đình học tập, lao động quá sức, đóng góp tài chính quá khả năng của họ; kiểm soát tài sản, thu nhập của thành viên gia đình nhằm tạo ra tình trạng lệ thuộc về mặt vật chất, tinh thần hoặc các mặt khác.",
    ],
  "Theo bạn, đặc điểm của biển báo chỉ dẫn là gì?": [
    "Hình chữ nhật hoặc hình vuông nền màu xanh lam, ở giữa có hình vẽ hoặc chữ chỉ dẫn màu trắng.",
  ],
  "Sinh viên có trách nhiệm nào dưới đây trong phòng chống tội phạm, tệ nạn xã hội?":
    [
      "Không tham gia các tệ nạn xã hội và hoạt động phạm tội sử dụng công nghệ cao dưới bất kỳ hình thức nào.",
      "Thường xuyên học tập, nâng cao nhận thức về phòng chống các loại tệ nạn xã hội, tội phạm nói chung và tội phạm sử dụng công nghệ cao nói riêng.",
      "Thực hiện các biện pháp phòng chống tội phạm, tệ nạn xã hội theo hướng dẫn của nhà trường, chính quyền địa phương và các cơ quan nhà nước.",
    ],
  "Theo quy định Luật Phòng, chống bạo lực gia đình năm 2022, trách nhiệm của chính quyền địa phương các cấp được quy định ở nội dung nào sau đây?":
    [
      "Chỉ đạo, tổ chức thực hiện nội dung quản lý nhà nước về phòng, chống bạo lực gia đình theo thẩm quyền tại địa phương.",
      "Bố trí kinh phí, nhân lực đáp ứng yêu cầu thực hiện nhiệm vụ phòng, chống bạo lực gia đình trên địa bàn quản lý theo quy định của Luật này.",
      "Hằng năm, Ủy ban nhận dân các cấp báo cáo Hội đồng nhân dân cùng cấp về công tác phòng, chống bạo lực gia đình tại địa phương",
    ],
  "Anh N đi xe mô tô 2 bánh trên đường một chiều có một làn xe cơ giới và có biển báo hiệu khu vực đông dân cư, nhưng quan sát thấy đường vắng nên anh cho xe chạy với tốc độ 60km/h. Theo quy định hiện hành, hành vi vi phạm của anh N sẽ phải chịu mức phạt tiền nào dưới đây?":
    ["Từ 600.000 đồng đến 1.000.000 đồng"],
  "Khi thấy thông tin về một sự kiện nào đó vừa xảy được đăng tải trên mạng xã hội thì chúng ta có tin tưởng không?":
    [
      "Nửa tin nửa ngờ, phải chờ cơ quan chức năng công bố mới xác định đó là sự thật",
    ],
  "Người có cử chỉ, lời nói thô bạo, trêu ghẹo, xúc phạm danh dự, nhân phẩm của người khác bị xử phạt hành chính với mức nào dưới đây?":
    ["100.000 đ đến 300.000 đ"],
  "Mại dâm là hành vi như thế nào?": ["Là hành vi bán dâm và mua dâm"],
  "Mức xử phạt tiền đối với người điều khiển xe mô tô (xe máy), xe gắn máy có viphạm nồng độ cồn trong máu hoặc trong khí thở vượt quá 50 miligam đến 80 miligam/100mililít máu hoặc vượt quá 0,25 miligam đến 0,4 miligam/1 lít khí thở là?":
    ["Phạt tiền từ 4 đến 5 triệu đồng."],
  "Thuốc lắc là dạng ma tuý gì?": ["Ma tuý tổng hợp"],
  "Xử lý hành vi vi phạm pháp luật về phòng, chống tác hại của rượu, bia như thế nào":
    [
      "Tổ chức, cá nhân có hành vi vi phạm pháp luật về phòng, chống tác hại của rượu, bia thì tùy theo tính chất, mức độ vi phạm mà bị xử lý kỷ luật, xử phạt vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường theo quy định của pháp luật",
    ],
  "Tội cưỡng bức người khác sử dụng trái phép chất ma túy bị phạt tù với mức nào dưới đây?":
    ["3 năm đến 7 năm"],
  "Bạn hãy cho biết hành vi sử dụng nguồn lửa, các thiết bị điện tử hoặc các thiết bị, dụng cụ sinh lửa, sinh nhiệt khác ở những nơi có quy định cấm sẽ xử phạt hành chính như thế nào?":
    ["Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng"],
  "Mức xử phạt tiền đối với người điều khiển xe mô tô (xe máy), xe gắn máy có viphạm nồng độ cồn trong máu hoặc trong khí thở vượt quá 80 miligam/100 mililít máu hoặcvượt quá 0,4 miligam/1 lít khí thở là?":
    ["Phạt tiền từ 6 đến 8 triệu đồng."],
  "Hành vi xâm hại hoặc thuê người khác xâm hại đến sức khỏe của người khác bị xử phạt hành chính với mức nào dưới đây?":
    ["2000.000 đ đến 3000.000 đ"],
  "Bán dâm theo quy định của Pháp lệnh phòng chống mại dâm là gì?": [
    "Là hành vi giao cấu của một người với người khác để được trả tiền hoặc lợi ích vật chất khác.",
  ],
  "Theo quy định hiện hành, hành vi vi phạm nào dưới đây của người điều khiển xe máy ngoài việc bị phạt tiền, còn bị hình phạt bổ sung tước quyền sử dụng Giấy phép lái xe từ 01 tháng đến 03 tháng?":
    ["Sử dụng điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính)"],
  "Sinh viên đang làm thủ tục nhập học mà vi phạm quy định về sản xuất, vận chuyển, tàng trữ, mua bán, tổ chức sử dụng, lôi kéo, cưỡng bức người khác sử dụng ma tuý thì bị nhà trường xử lý như thế nào?":
    [
      "Thu hồi giấy triệu tập nhập học",
      "Thông báo cho gia đình",
      "Thông báo cho cơ quan Nhà nước có thẩm quyền xử lý theo quy định của pháp luật",
    ],
  "Tác hại của thuốc lá là?": [
    "Ảnh hưởng có hại của việc sản xuất, sử dụng thuốc lá gây ra cho sức khỏe con người, môi trường và sự phát triển kinh tế – xã hội",
  ],
  "Cách đội mũ bảo hiểm đúng?": [
    "Đội MBH sao cho vành trước mũ song song với chân mày và cách chân mày khoảng 2 ngón tay.",
    "Điều chỉnh hai quai mũ sao cho không bị xoắn và ôm sát thùy tai.",
    "Cài khóa mũ sao cho quai mũ vừa khít dưới chân cằm.",
  ],
  "Mức xử phạt bổ sung đối với người điều khiển xe mô tô (xe máy), xe gắn máy có viphạm nồng độ cồn trong máu hoặc trong khí thở vượt quá 80 miligam/100 mililít máu hoặc vượt quá 0,4 miligam/1 lít khí thở là?":
    ["Tước giấy phép lái xe từ 22 đến 24 tháng."],
  "Hành vi nhận tiền, sửa điểm thi là hành vi nào trong số các hành vi sau đây?":
    [
      "Lợi dụng chức vụ, quyền hạn trong khi thi hành nhiệm vụ, công vụ vì vụ lợi.",
    ],
  "Tại nơi đường đang được sửa chữa, người điều khiển xe mô tô (xe máy), xe gắn máy tham gia giao thông cần?":
    [
      "Giảm tốc độ, quan sát biển chỉ dẫn và hiệu lệnh của người điều khiển giao thông.",
    ],
  "Luật giáo dục quốc phòng và an ninh năm 2013 (Luật số: 30/2013/QH13) nghiêm cấm các hành vi nào sau đây?":
    ["Tất cả các hành vi trên"],
  "Mục đích trong thông tin, giáo dục, truyền thông về phòng, chống tác hại của rượu, bia là":
    [
      "Nhằm nâng cao nhận thức, định hướng hành vi, thay đổi thói quen có hại để phòng, chống tác hại của rượu, bia đối với sức khỏe con người, gia đình, cộng đồng, an toàn giao thông, trật tự, an toàn xã hội, kinh tế và các vấn đề xã hội khác",
    ],
  "Giáo dục, nâng cao cảnh giác cách mạng, phát huy truyền thống yêu nước của Nhân dân tham gia phòng ngừa đấu tranh chống mọi âm mưu hoạt động của các thế lực thù địch trong và ngoài nước. Được xác định là một trong những;":
    ["Nội dung xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"],
  "Hành vi sử dụng trái phép chất ma túy thì bị xử lý hình sự với mức nào dưới đây?":
    ["Không bị xử lý hình sự về hành vi sử dụng trái phép chất ma túy"],
  "Không nên dùng mạng xã hội cho mục đích nào sau đây?": [
    "Đăng thông tin giả, thông tin sai sự thật.",
  ],
  "Theo quy định Luật Phòng, chống bạo lực gia đình năm 2022, quy định cơ sở nào sau đây thực hiện trợ giúp phòng, chống bạo lực gia đình?":
    [
      "Địa chỉ tin cậy; Cơ sở khám bệnh, chữa bệnh.",
      "Cơ sở trợ giúp xã hội; Trung tâm trợ giúp pháp lý nhà nước, tổ chức tham gia trợ giúp pháp lý.",
      "Cơ sở khác tham gia trợ giúp phòng, chống bạo lực gia đình; Cơ sở cung cấp dịch vụ trợ giúp phòng, chống bạo lực gia đình.",
    ],
  "Bạo lực học đường gây ra tác hại gì": [
    "Gây ra tổn thương về thân thể và tâm lý của nạn nhân",
    "Tạo ra sự phát triển nhân cách lệch lạc trong học sinh, sinh viên.",
    "Làm giảm sút học tập của học sinh, sinh viên và ảnh hưởng với giáo dục của Nhà trường.",
  ],
  "Khi gặp một đoàn xe hoặc một đoàn người có tổ chức thì người lái xe có được phép cho xe chạy cắt ngang hay không?":
    ["Không được phép"],
  "Mức xử phạt cho cá nhân có hành vi lợi dụng mạng xã hội để chia sẻ thông tin giả mạo, thông tin sai sự thật, xuyên tạc, vu khống, xúc phạm uy tín của cơ quan, tổ chức, danh dự, nhân phẩm của cá nhân":
    ["Từ 10.000.000 đồng đến 20.000.000 đồng"],
  "Theo bạn, đặc điểm của biển báo cấm là gì": [
    "Hình tròn, viền đỏ, nền màu trắng, trên có hình vẽ hoặc chữ số, chữ viết màu đen thể hiện điều cấm.",
  ],
  "Theo Luật An ninh mạng năm 2018, Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam bao gồm:":
    ["Tất cả đáp áp trên"],
  "Những quy định mới của Luật Phòng, chống tham nhũng năm 2018 là?": [
    "Quy định về cơ quan kiểm soát tài sản, thu nhập",
  ],
  "Hành vi cố ý gây thương tích cho người khác (bắt nạt hoặc đánh nhau) với tỷ lệ bao nhiêu % thì bị truy cứu trách nhiệm hình sự?":
    ["11% trở lên"],
  "Theo quy định tại Nghị định 144/2021/NĐ-CP ngày 31/12/2021 của Chính phủ, thì hành vi từ chối hoặc trốn tránh nghĩa vụ cấp dưỡng, chăm sóc con sau khi ly hôn nếu bị xử phạt vi phạm hành chính thì phạt bao nhiêu tiền?":
    ["Từ 5.000.000 đồng đến 10.000.000 đồng."],
  "Bạn hãy cho biết hành vi sử dụng nguồn lửa, các thiết bị điện tử hoặc các thiết bị, dụng cụ sinh lửa, sinh nhiệt khác ở những nơi có quy định cấm sẽ xử phạt hành chính như thế nào?":
    ["Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng"],
  "Giáo dục quốc phòng và an ninh trong các cơ sở giáo dục đại học là môn học được xác định như thế nào?":
    [
      "Giáo dục quốc phòng và an ninh trong trường cao đẳng nghề, cơ sở giáo dục đại học là môn học chính khóa.",
    ],
  "Nội dung hợp tác quốc tế về thanh niên bao gồm?": [
    "Tham gia tổ chức quốc tế; ký kết và thực hiện điều ước quốc tế, thỏa thuận quốc tế về thanh niên; chương trình, dự án hợp tác quốc tế về thanh niên;",
    "Trao đổi thông tin, kinh nghiệm quản lý và chính sách, pháp luật về thanh niên;",
    "Giao lưu giữa thanh niên Việt Nam với thanh niên các nước.",
  ],
  "Đâu là hành vi bị cấm khi sử dụng mạng xã hội?": [
    "Tuyên truyền, kích động bạo lực, dâm ô, đồi trụy, tội ác, tệ nạn xã hội, mê tín dị đoan, phá hoại thuần phong, mỹ tục của dân tộc",
    "Tiết lộ bí mật nhà nước, bí mật quân sự, an ninh, kinh tế, đối ngoại và những bí mật khác do pháp Luật quy định",
    "Đưa thông tin xuyên tạc, vu khống, xúc phạm uy tín của tổ chức, danh dự và nhân phẩm của cá nhân",
  ],
  "Luật giáo dục quốc phòng và an ninh năm 2013 (Luật số: 30/2013/QH13) quy định: Quyền và trách nhiệm của công dân về giáo dục quốc phòng và an ninh như thế nào?":
    [
      "Công dân có quyền và trách nhiệm học tập, nghiên cứu để nắm vững kiến thức quốc phòng và an ninh.",
    ],
  "Theo bạn, đặc điểm của biển hiệu lệnh là gì?": [
    "Hình tròn, không viền, nền xanh lam có hình vẽ màu trắng đặc trưng cho hiệu lệnh nhằm báo cho người tham gia giao thông biết.",
  ],
  "Ma túy là chất được chiết xuất từ loại cây nào dưới đây?": [
    "Cây Côca",
    "Cây Cần sa",
    "Cây Anh túc",
  ],
  "Trên nguyên tắc, ai được coi là chủ sở hữu của tác phẩm khuyết danh đang trong thời hạn bảo hộ?":
    ["Người quản lý tác phẩm."],
  "Thông tin trên không gian mạng có nội dung tuyên truyền chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam bao gồm:":
    [
      "Tuyên truyền xuyên tạc, phỉ báng chính quyền nhân dân;",
      "Chiến tranh tâm lý, kích động chiến tranh xâm lược, chia rẽ, gây thù hận giữa các dân tộc, tôn giáo và nhân dân các nước;",
      "Xúc phạm dân tộc, quốc kỳ, quốc huy, quốc ca, vĩ nhân, lãnh tụ, danh nhân, anh hùng dân tộc.",
    ],
  "Một đoạn đường có biển báo cố định quy định tốc độ tối đa 30 km/h nhưng lại có một biển báo tạm thời quy định tốc độ tối đa 5 km/h, người điều khiển xe phải chấp hành biển báo nào?":
    ["Biển báo tạm thời (5 km/h)"],
  "Thông tin có nội dung xấu trên mạng xã hội là gì?": [
    "Thông tin xuyên tạc gây hoang mang dư luận",
    "Thông tin kích động bạo lực.",
    "Thông tin khuyến khích sử dụng chất gây nghiện, rủ rê đánh bạc, kiếm tiền.",
  ],
  "Trong các hành vi sau đây, hành vi nào bị nghiêm cấm theo Luật Phòng chống ma túy?":
    ["Tất cả các phương án trả lời đều đúng."],
  "Người phát hiện, tố giác và đấu tranh trong phòng, chống mại dâm được đảm bảo các quyền lợi gì?":
    [
      "Được bảo vệ và giữ bí mật, nếu bị thiệt hại tài sản thì được đền bù. Nếu bị thương tích, tổn hại về sức khỏe hoặc bị thiệt hại về tính mạng thì được hưởng chế độ, chính sách theo quy định của pháp luật.",
    ],
  "Vì sao có quy định bắt buộc người điều khiển và người ngồi sau xe mô tô (xe máy), xe gắn máy phải đội mũ bảo hiểm?":
    [
      "Để phòng ngừa hậu quả của tai nạn giao thông: Phòng chấn thương sọ não (loại thương tích nguy hiểm nhất do tai nạn).",
    ],
  "Hợp tác quốc tế về thanh niên phải bảo đảm nguyên tắc?": [
    "Bình đẳng, tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ, phù hợp với pháp luật mỗi nước, điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên và thông lệ quốc tế.",
  ],
  "Anh H điều khiển xe máy điện chạy trong khu vực thị trấn, với tốc độ cho phép, để đảm bảo an toàn giao thông, anh H phải chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình":
    [
      "Với khoảng cách tùy thuộc vào mật độ phương tiện, tình hình giao thông thực tế",
    ],
  "Hành vi lợi dụng mạng xã hội để cung cấp, chia sẻ thông tin giả mạo, thông tin sai sự thật, xuyên tạc, vu khống, xúc phạm uy tín của cơ quan, tổ chức, danh dự, nhân phẩm của cá nhân sẽ bị xử phạt hành chính như thế nào?":
    ["Phạt tiền từ 10.000.000 đồng đến 15.000.000 đồng"],
  "Luật An ninh mạng nghiêm cấm việc sử dụng không gian mạng để thực hiện hành vi nào dưới đây":
    [
      "Tổ chức, hoạt động, câu kết, xúi giục, mua chuộc, lừa gạt, lôi kéo, đào tạo, huấn luyện người chống Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam",
      "Xuyên tạc lịch sử, phủ nhận thành tựu cách mạng, phá hoại khối đại đoàn kết toàn dân tộc, xúc phạm tôn giáo, phân biệt đối xử về giới, phân biệt chủng tộc",
      "Hoạt động mại dâm, tệ nạn xã hội, mua bán người; đăng tải thông tin dâm ô, đồi trụy, tội ác; phá hoại thuần phong, mỹ tục của dân tộc, đạo đức xã hội, sức khỏe của cộng đồng",
    ],
  "Tội môi giới mại dâm có thể bị phạt bao nhiêu năm tù?": [
    "6 tháng đến 20 năm",
  ],
  "Trong Luật giao thông đường bộ khái niệm “Đường cao tốc” được hiểu như thế nào là đúng?":
    [
      "Là đường chỉ dành riêng cho xe cơ giới chạy với tốc độ cao, có dải phân cách chia đường cho xe chạy theo hai chiều ngược nhau riêng biệt và không giao cắt cùng mức với đường khác;",
    ],
  "Những thông tin nào không nên chia sẻ trên mạng xã hội": [
    "Số điện thoại, địa chỉ nhà riêng hoặc trường học",
    "Phát biểu, chỉ trích về các chủ đề nhạy cảm",
  ],
  "Khái niệm “Dải phân cách” được hiểu như thế nào là đúng?": [
    "Là bộ phận của đường để phân chia mặt đường thành hai chiều chạy riêng biệt",
    "Là bộ phận của đường để phân chia phần đường của xe cơ giới và xe thô sơ",
  ],
  "Công dân từ bao nhiêu tuổi trở lên, đủ sức khoẻ có trách nhiệm tham gia vào đội dân phòng, đội phòng cháy và chữa cháy cơ sở được lập ở nơi cư trú hoặc nơi làm việc khi có yêu cầu?":
    ["18 tuổi"],
  "Tổ chức lợi dụng mạng xã hội để cung cấp, chia sẻ thông tin bịa đặt, gây hoang mang trong Nhân dân sẽ bị xử phạt hành chính như thế nào?":
    ["Phạt tiền từ 20.000.000 đồng đến 40.000.000 đồng"],
  "Người có hành vi vi phạm được quy định trong Luật An ninh mạng năm 2018 thì bị xử lý như thế nào?":
    [
      "Tùy theo tính chất, mức độ vi phạm mà bị khiển trách, xử lý kỷ luật, xử lý vi phạm hành chính hoặc bị truy cứu trách nhiệm hình sự, nếu gây thiệt hại thì phải bồi thường",
    ],
  "Để đảm bảo an toàn khi điều khiển xe mô tô (xe máy), xe gắn máy cần tuân thủ các quy tắc giao thông nào?":
    [
      "Điều khiển xe đi đúng làn đường, phần đường quy định.",
      "Tuyệt đối không điều khiển xe sau khi uống rượu, bia.",
      "Đội mũ bảo hiểm cho người đi mô tô, xe gắn máy và cài quai đúng quy cách.",
    ],
  "Hành vi trộm cắp tài sản của công dân vi phạm pháp luật gì?": [
    "Vi phạm pháp luật hình sự",
  ],
  "Theo bạn, đặc điểm của biển báo nguy hiểm và cảnh báo là gì?": [
    "Hình tam giác đều, viền đỏ, nền màu vàng, trên có hình vẽ màu đen mô tả sự việc cần báo hiệu.",
  ],
  "Theo Luật An ninh mạng năm 2018 thì Tài khoản số là thông tin dùng để làm gì?":
    [
      "Chứng thực, xác thực, bảo đảm, phân quyền sử dụng các ứng dụng, dịch vụ trên không gian mạng",
    ],
  "Theo Luật Thanh niên 2020 thì?": [
    "Thanh niên là lực lượng xã hội to lớn, xung kích, sáng tạo, đi đầu trong công cuộc đổi mới, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa; có vai trò quan trọng trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, hội nhập quốc tế và xây dựng chủ nghĩa xã hội",
  ],
  "Theo Bộ luật hình sự 2015, Bộ luật số 100/2015/QH13, Điều 247. Tội trồng cây thuốc phiện, cây côca, cây cần sa hoặc các loại cây khác có chứa chất ma túy bị xử phạt với mức nào dưới đây?":
    ["Từ 06 tháng đến 07 năm"],
  "Tác dụng của việc đội mũ bảo hiểm khi ngồi trên xe mô tô (xe máy), xe gắn máy tham gia giao thông?":
    [
      "Bảo vệ, hạn chế nguy cơ chấn thương vùng đầu, đặc biệt là chấn thương sọ não khi chẳng may xảy ra tai nạn.",
    ],
  "Khi nhận được lệnh huy động tham gia cứu chữa đám cháy, bạn sẽ làm gì?": [
    "Nhanh chóng nhận lệnh, sử dụng các dụng cụ chữa cháy và thực hiện theo sự chỉ dẫn của lực lượng chữa cháy chuyên nghiệp",
  ],
  "Mua dâm theo quy định của Pháp lệnh phòng chống mại dâm là gì?": [
    "Là hành vi của người dùng tiền hoặc lợi ích vật chất khác trả cho người bán dâm để được giao cấu.",
  ],
  "Theo quy định tại Điều 3, Nghị định 72/2013/NĐ-CP, ngày 15/7/2013 của Chỉnh phủ thì Mạng xã hội là gì?":
    [
      "Mạng xã hội (social network) là hệ thống thông tin cung cấp cho cộng đồng người sử dụng mạng các dịch vụ lưu trữ, cung cấp, sử dụng, tìm kiếm, chia sẻ và trao đổi thông tin với nhau, bao gồm dịch vụ tạo trang thông tin điện tử cá nhân, diễn đàn (forum), trò chuyện (chat) trực tuyến, chia sẻ âm thanh, hình ảnh và các hình thức dịch vụ tương tự khác.",
    ],
  "Những hành vi có tính chất bạo lực học đường có thể xâm hại tới quyền nào của nạn nhân?":
    [
      "Quyền bất khả xâm phạm về tài sản.",
      "Quyền bất khả xâm phạm về nhân phẩm, danh dự",
      "Quyền bất khả xâm phạm về tính mạng, sức khỏe",
    ],
  "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm. Được xác định là một trong những:":
    ["Nội dung xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"],
  "Bên cạnh mặt tích cực, mạng xã hội đang tồn tại yếu tố tiêu cực nào?": [
    "Mạng xã hội làm gia tăng nguy cơ lộ lọt bí mật nhà nước.",
    "Mạng xã hội tác động tiêu cực đối với sự phát triển văn hóa.",
    "Mạng xã hội đang trở thành công cụ, môi trường “màu mỡ” để tội phạm lợi dụng hoạt động.",
  ],
  "Điều khiển xe máy chạy quá tốc độ quy định từ 05 km/h đến dưới 10 km/h sẽ bị phạt bao nhiêu tiền?":
    ["Phạt tiền từ 200.000 đồng đến 300.000 đồng"],
  "Hình thức xử lý nào sau đây được áp dụng đối với người mua dâm?": [
    "Phương án a. Truy cứu trách nhiệm hình sự",
  ],
  "Luật giáo dục quốc phòng và an ninh năm 2013 (Luật số: 30/2013/QH13) áp dụng với đối tượng nào sau đây?":
    ["Công dân Việt Nam và người nước ngoài sinh sống tại Việt Nam"],
  "Bộ quy tắc ứng xử trên mạng xã hội theo Quyết định số 874/QĐ-BTTTT ngày 17/6/2021 của Bộ trưởng Bộ Thông tin và Truyền thông có mấy quy tắc ứng xử cho tổ chức, cá nhân khi tham gia mạng xã hội ?":
    ["8 quy tắc"],
  'Khái niệm "An ninh mạng” là:': [
    "Là sự bảo đảm hoạt động trên không gian mạng không gây phương hại đến an ninh quốc gia, trật tự, an toàn xã hội, quyền và lợi ích hợp pháp của cơ quan, tổ chức, cá nhân",
  ],
  "Theo Bộ luật hình sự 2015, Bộ luật số 100/2015/QH13, Điều 248 quy định Tội sản xuất trái phép chất ma túy. Theo đó, tội sản xuất trái pháp chất ma túy bị xử lý hình sự với mức nào dưới đây?":
    ["Từ 02 năm đến chung thân hoặc tử hình"],
  "Giảng viên A cung cấp tư liệu và hướng dẫn cho sinh viên B làm luận văn tốt nghiệp. A cũng đứng tên với tư cách là giảng viên hướng dẫn trên luận văn tốt nghiệp trên. Hỏi: A có được coi là đồng tác giả của tác phẩm nói trên không?":
    ["Có, vì A đã góp công rất lớn để B sáng tạo ra tác phẩm."],
  "Khi tham gia giao thông, người đi bộ phải thực hiện quy tắc giao thông nào?":
    [
      "Người đi bộ phải đi trên hè phố, lề đường; trường hợp đường không có hè phố, lề đường thì người đi bộ phải đi sát mép đường.",
      "Người đi bộ chỉ được qua đường ở những nơi có đèn tín hiệu, có vạch kẻ đường hoặc có cầu vượt, hầm dành cho người đi bộ và phải tuân thủ tín hiệu chỉ dẫn.",
      "Trường hợp không có đèn tín hiệu, không có vạch kẻ đường, cầu vượt, hầm dành cho người đi bộ thì người đi bộ phải quan sát các xe đang đi tới, chỉ qua đường khi bảo đảm an toàn và chịu trách nhiệm bảo đảm an toàn khi qua đường.",
      "Người đi bộ không được vượt qua dải phân cách, không đu bám vào phương tiện giao thông đang chạy; khi mang vác vật cồng kềnh phải bảo đảm an toàn và không gây trở ngại cho người và phương tiện tham gia giao thông đường bộ.",
      "Trẻ em dưới 7 tuổi khi đi qua đường đô thị, đường thường xuyên có xe cơ giới qua lại phải có người lớn dắt; mọi người có trách nhiệm giúp đỡ trẻ em dưới 7 tuổi khi đi qua đường.",
    ],
  "Người trộm cắp tài sản của người khác trị giá từ 2.000.000 đồng đến dưới 50.000.000 đồng, có thể bị phạt tù từ 06 tháng đến 03 năm nếu:":
    [
      "Đã bị xử phạt vi phạm hành chính về hành vi chiếm đoạt tài sản mà còn vi phạm;",
      "Gây ảnh hưởng xấu đến an ninh, trật tự, an toàn xã hội;",
      "Tài sản là phương tiện kiếm sống chính của người bị hại và gia đình họ;",
    ],
  "Người được chở trên xe mô tô (xe máy), xe gắn máy không đội mũ bảo hiểm bị xử phạt?":
    ["400.000 đến 600.000 đồng"],
  "Theo quy định Luật Phòng, chống bạo lực gia đình năm 2022, trách nhiệm của người có hành vi bạo lực gia đình được quy định như thế nào?":
    [
      "Chấm dứt hành vi bạo lực gia đình; Chấp hành yêu cầu, quyết định của cơ quan, tổ chức, cá nhân có thẩm quyền khi áp dụng biện pháp phòng ngừa, ngăn chặn, bảo vệ, hỗ trợ và xử lý vi phạm pháp luật về phòng, chống bạo lực gia đình.",
      "Kịp thời đưa người bị bạo lực gia đình đi cấp cứu, điều trị. Chăm sóc người bị bạo lực gia đình, trừ trường hợp người bị bạo lực gia đình, người giám hộ hoặc người đại diện theo pháp luật của người bị bạo lực gia đình từ chối.",
      "Bồi thường thiệt hại, khắc phục hậu quả do mình gây ra cho người bị bạo lực gia đình, người tham gia phòng, chống bạo lực gia đình và tổ chức, cá nhân khác.",
    ],
  "Luật Phòng, chống bạo lực gia đình năm 2022, quy định người bị bạo lực gia đình có quyền và trách nhiệm nào sau đây?":
    ["ĐA4: Các nội dung nêu tại đáp án 1 và 2"],
  "Mức xử phạt bổ sung đối với người điều khiển xe mô tô (xe máy), xe gắn máy có viphạm nồng độ cồn trong máu hoặc trong khí thở vượt quá 50 miligam đến 80 miligam/100mililít máu hoặc vượt quá 0,25 miligam đến 0,4 miligam/1 lít khí thở là?":
    ["Tước giấy phép lái xe từ 16 đến 18 tháng."],
  "Biểu hiệu nào sau đây là biểu hiện thường thấy ở người đang nghiện ma túy?":
    ["Tất cả các dấu hiệu nêu ra đều đúng"],
  "Khi điều khiển xe mô tô, xe máy tham gia giao thông cần phải có những loại giấy tờ gì?":
    [
      "Giấy phép lái xe (nếu điều khiển xe mô tô)",
      "Giấy đăng ký xe mô tô, xe gắn máy",
      "Giấy chứng nhận BHTNDS còn hiệu lực có liên quan đến xe mình đang đi",
    ],
  "Hành vi nào sau đây bị nghiêm cấm theo Pháp lệnh phòng chống mại dâm?": [
    "Mua dâm",
    "Bán dâm",
    "Tổ chức hoạt động mại dâm",
  ],
  "Khi gặp các thông tin mà anh/chị cho rằng không đúng trên một nhóm facebook nào đó, anh/chị nên làm gì?":
    [
      "Chặn, báo cáo bài viết cho quản trị viên và người có trách nhiệm liên quan",
    ],
  "Để đảm bảo an toàn khi điều khiển xe mô tô (xe máy), xe gắn máy cần tuân thủ các quy tắc giao thông nào?":
    [
      "Điều khiển xe đi đúng làn đường, phần đường quy định.",
      "Tuyệt đối không điều khiển xe sau khi uống rượu, bia.",
      "Đội mũ bảo hiểm cho người đi mô tô, xe gắn máy và cài quai đúng quy cách.",
    ],
  "Bạo lực học đường ở là gì?": [
    "Là hiện tượng học sinh, sinh viên dùng hành vi mang tính bạo lực để giải quyết mâu thuẫn",
  ],
  "Theo bạn, đặc điểm của biển báo cấm là gì?": [
    "Hình tròn, viền đỏ, nền màu trắng, trên có hình vẽ hoặc chữ số, chữ viết màu đen thể hiện điều cấm.",
  ],
  "Bạo lực học đường gây ra tác hại gì?": [
    "Gây ra tổn thương về thân thể và tâm lý của nạn nhân",
    "Tạo ra sự phát triển nhân cách lệch lạc trong học sinh, sinh viên.",
    "Làm giảm sút học tập của học sinh, sinh viên và ảnh hưởng với giáo dục của Nhà trường.",
  ],
  "Phong trào Bình dân học vụ được phát động trong bối cảnh nào?": [
    "Sau khi Cách mạng Tháng Tám thành công",
  ],
  "Theo Kết luận 128-KL/TW, việc quản lý các chức danh lãnh đạo trong quân đội, công an ở địa phương được giao cho ai?": [
    "Các Ban Thường vụ Quân ủy Trung ương, Đảng ủy Công an Trung ương",
  ],
  "Ngoài đại biểu Quốc hội, ai hoặc cơ quan nào khác có quyền đề nghị sửa đổi Hiến pháp?": [
    "Chủ tịch nước, Ủy ban Thường vụ Quốc hội, Chính phủ",
  ],
  "Trong trường hợp cần trưng cầu ý dân về Hiến pháp mới hoặc sửa đổi Hiến pháp, ai là người quyết định việc này?": [
    "Quốc hội",
  ],
  '"Bình dân học vụ số" có thể được triển khai thông qua hình thức nào?': [
    "Cả hai hình thức trên",
  ],
  "Quy trình sửa đổi Hiến pháp ở Việt Nam bắt đầu bằng bước nào?": [
    "Quốc hội thảo luận và biểu quyết đề nghị sửa đổi",
  ],
  "Đến khi nào các biện pháp tạm dừng trong Kết luận 128-KL/TW sẽ được dỡ bỏ?": [
    "Khi hoàn thành việc sắp xếp đơn vị hành chính cấp tỉnh, huyện, xã",
  ],
  'Phong trào "Bình dân học vụ số" góp phần vào mục tiêu nào của Việt Nam đến năm 2030?': [
    "Đảm bảo 100% người dân sử dụng thành thạo công nghệ số",
  ],
  "Phong trào Bình dân học vụ đã huy động lực lượng nào tham gia giảng dạy?": [
    "Những người biết chữ bất kể nghề nghiệp",
  ],
  "Nghị quyết 57 đề xuất cơ chế gì để khuyến khích mua sắm công?": [
    "Ưu tiên sản phẩm, hàng hóa là kết quả nghiên cứu khoa học trong nước",
  ],
  'Ai có thể là lực lượng nòng cốt trong việc triển khai "Bình dân học vụ số"?': [
    "Đoàn viên thanh niên và tình nguyện viên",
  ],
  "Một trong những giải pháp đột phá của Nghị quyết 57 là gì?": [
    "Đơn giản hóa thủ tục hành chính và giao quyền tự chủ trong sử dụng kinh phí nghiên cứu",
  ],
  "Kết luận 128-KL/TW được ban hành trong bối cảnh nào?": [
    "Tổng kết Nghị quyết 18 về tinh gọn bộ máy hệ thống chính trị",
  ],
  "Theo quy định, việc sửa đổi Hiến pháp phải được thông qua với tỷ lệ phiếu tán thành tối thiểu là bao nhiêu?": [
    "Ít nhất 2/3 tổng số đại biểu Quốc hội",
  ],
  '"Bình dân học vụ số" được đề cập trong bối cảnh quốc gia nào đang diễn ra mạnh mẽ?': [
    "Chuyển đổi số quốc gia",
  ],
  "Hiến pháp hiện hành của Việt Nam được Quốc hội thông qua vào ngày nào?": [
    "28/11/2013",
  ],
  "Điều khoản nào trong Hiến pháp Việt Nam không được phép sửa đổi theo quy định?": [
    "Điều 4 về vai trò lãnh đạo của Đảng Cộng sản Việt Nam",
  ],
  "Mục tiêu chính của phong trào Bình dân học vụ là gì?": [
    "Xóa nạn mù chữ trong nhân dân",
  ],
  "Theo Hiến pháp Việt Nam, cơ quan nào có quyền lập hiến và sửa đổi Hiến pháp?": [
    "Quốc hội",
  ],
  "Một trong những nội dung quan trọng của Kết luận 128-KL/TW là gì?": [
    "Sáp nhập và tinh gọn các cơ quan Mặt trận Tổ quốc, tổ chức chính trị - xã hội",
  ],
  "Theo Kết luận 128-KL/TW, từ ngày 07/03/2025, hoạt động nào bị tạm dừng ở các tổ chức chính trị - xã hội ở Trung ương?": [
    "Tuyển dụng, bổ nhiệm và giới thiệu ứng cử các chức danh lãnh đạo",
  ],
  "Sau khi Quốc hội thông qua Hiến pháp sửa đổi, ai là người ký lệnh công bố?": [
    "Chủ tịch Quốc hội",
  ],
  "Ai là người đứng đầu Nhà nước Việt Nam Dân chủ Cộng hòa đã ký sắc lệnh thành lập Nha Bình dân học vụ?": [
    "Chủ tịch Hồ Chí Minh",
  ],
  "Theo Nghị quyết 57, nguồn lực đầu tư cho khoa học và công nghệ nên được ưu tiên thực hiện qua hình thức nào?": [
    "Cơ chế quỹ thông qua các quỹ phát triển khoa học và công nghệ",
  ],
  "Theo Hiến pháp 2013, việc lấy ý kiến nhân dân về dự thảo sửa đổi Hiến pháp là bước nào trong quy trình?": [
    "Bước bắt buộc trước khi Quốc hội thông qua",
  ],
  "Trong vòng một năm sau khi phát động, phong trào Bình dân học vụ đã giúp bao nhiêu người biết chữ?": [
    "Gần 2,5 triệu người",
  ],
  "Nghị quyết 57-NQ/TW được ban hành vào ngày nào?": [
    "22/12/2024",
  ],
  "Để bắt đầu quy trình sửa đổi Hiến pháp, cần có đề nghị từ ít nhất bao nhiêu đại biểu Quốc hội?": [
    "2/3 tổng số đại biểu Quốc hội",
  ],
  "Theo thống kê, tỷ lệ mù chữ ở Việt Nam trước khi phong trào Bình dân học vụ diễn ra là bao nhiêu?": [
    "Trên 90%",
  ],
  'Một trong những kỹ năng cơ bản mà "Bình dân học vụ số" có thể tập trung là gì?': [
    "Sử dụng điện thoại thông minh và internet cơ bản",
  ],
  'Đối tượng chính mà "Bình dân học vụ số" hướng tới là ai?': [
    "Toàn bộ người dân, đặc biệt là những người chưa quen với công nghệ",
  ],
  "Phong trào Bình dân học vụ có ý nghĩa gì đối với sự nghiệp cách mạng Việt Nam?": [
    "Nâng cao dân trí, góp phần xây dựng đất nước",
  ],
  'Mục tiêu chính của "Bình dân học vụ số" là gì?': [
    "Giúp người dân tiếp cận và sử dụng công nghệ số hiệu quả",
  ],
  "Kết luận 128-KL/TW của Bộ Chính trị được ban hành vào ngày nào?": [
    "07/03/2025",
  ],
  "Theo Nghị quyết 57, ai được xác định là trung tâm và then chốt trong phát triển khoa học, công nghệ?": [
    "Nhà khoa học",
  ],
  "Mục tiêu chính của Kết luận 128-KL/TW là gì?": [
    "Tinh gọn tổ chức bộ máy và quản lý công tác cán bộ trong giai đoạn sắp xếp đơn vị hành chính",
  ],
  '"Bình dân học vụ số" được hiểu là gì trong bối cảnh hiện nay?': [
    "Phổ cập kiến thức và kỹ năng số cho người dân",
  ],
  'Phong trào "Bình dân học vụ số" lấy cảm hứng từ sự kiện lịch sử nào?': [
    "Phong trào Bình dân học vụ xóa mù chữ năm 1945",
  ],
  "Kết luận 128-KL/TW yêu cầu các cấp ủy, tổ chức đảng thực hiện như thế nào để đảm bảo mục tiêu tinh gọn bộ máy?": [
    "Triển khai đồng bộ, chặt chẽ theo chủ trương của Bộ Chính trị",
  ],
  "Theo Nghị quyết 57, yếu tố nào được coi là điều kiện tiên quyết để phát triển khoa học và công nghệ?": [
    "Nhân lực chất lượng cao",
  ],
  "Một trong những mục tiêu dài hạn của Nghị quyết 57 đến năm 2045 là gì?": [
    "Đưa Việt Nam trở thành quốc gia phát triển, thu nhập cao nhờ khoa học và công nghệ",
  ],
  '"Bình dân học vụ số" có ý nghĩa gì trong thời đại hiện nay?': [
    "Giảm khoảng cách số giữa các tầng lớp xã hội",
  ],
  "Mục tiêu chính của Nghị quyết 57 là gì?": [
    "Đột phá trong khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số",
  ],
  "Nghị quyết 57 khuyến khích các nhà khoa học làm gì để thúc đẩy đổi mới sáng tạo?": [
    "Thành lập và điều hành doanh nghiệp dựa trên kết quả nghiên cứu",
  ],
  "Sinh viên có thể xem thời khóa biểu trong một kỳ học ở đâu?": [
    "App eHUST",
    "http://ctt.hust.edu.vn",
  ],
  "Khi nào sinh viên cần đăng ký kế hoạch học tập cho kỳ tới?": [
    "Thường vào 2 tuần 5-6 của học kỳ hiện tại",
  ],
  "Điểm rèn luyện được xếp loại theo cách nào dưới đây?": [
    "Xuất sắc, Tốt, Khá, Trung bình, Yếu, Kém",
  ],
  "Các màu nhãn sách tại Trung tâm truyền thông và tri thức số là:": [
    "Màu trắng: sách đọc tại các phòng.",
    "Màu vàng: sách tại các phòng mượn tham khảo.",
    "Màu tím: sách tại phòng mượn giáo trình.",
    "Màu xanh: sách tại phòng mượn giáo trình.",
    "Màu hồng: sách tra cứu/ từ điển tại các phòng đọc.",
  ],
  "Một môn học có thể có các điều kiện học phần nào": [
    "Học phần học trước, Học phần song hành, Học phần tiên quyết",
  ],
  'Hành vi “vào phòng thi để thi thay người khác” lần thứ 2 sẽ dẫn đến hình thức kỷ luật nào?': [
    "Buộc thôi học",
  ],
  'Sinh viên vi phạm “dùng phương tiện kỹ thuật truyền tin để làm hộ bài thi cho người khác” lần thứ 2 sẽ bị xử lý như thế nào?': [
    "Buộc thôi học",
  ],
  "Chính sách của Đại học Bách Khoa Hà Nội khi hỗ trợ sinh viên khó khăn, rủi do đột xuất là gì:": [
    "Sinh viên được hỗ trợ 5-10 triệu đồng.",
  ],
  "Điều kiện cần để đạt học bổng loại A là gì?": [
    "GPA≥3,6 ĐRL≥90",
  ],
  "Nếu một sinh viên bị ốm nặng và phải nhập viện trong thời gian thi cuối kỳ, sinh viên đó nên làm gì?": [
    "Báo với giảng viên và làm thủ tục xin hoãn thi",
  ],
  "Ai chịu trách nhiệm lập và quản lý hồ sơ cá nhân của sinh viên?": [
    "Ban Công tác sinh viên",
  ],
  "Quy chế CTSV mới ban hành có hiệu lực từ khi nào?": [
    "Ngày 13 tháng 3 năm 2025",
  ],
  "Dựa trên đánh giá kết quả học tập, quy định về điểm liệt như nào:": [
    "Điểm quá trình < 3.0, Điểm cuối kỳ < 3.0.",
  ],
  "Theo định hướng của Ban Giám đốc Đại học với sinh viên NĂM THỨ HAI, bạn nên làm gì?!": [
    "Tập trung chuyên ngành, Tham gia thực tập/ trao đổi sinh viên, Phát triển kỹ năng lãnh đạo, Mở rộng mạng lưới quan hệ.",
  ],
  "Để một học phần không bị điểm liệt, điều kiện nào sau đây phải được đáp ứng?": [
    "Cả điểm quá trình và điểm thi cuối kỳ đều lớn hơn 3.0",
  ],
  "Kết quả học tập sẽ được cập nhật vào khoảng thời gian nào?": [
    "4-5 tuần sau khi thi học kỳ",
  ],
  "Địa chỉ email của Ban Đào tạo ?": [
    "dt@hust.edu.vn",
  ],
  "Quy tắc sắp xếp thời gian Khoa học": [
    "Toàn diện",
    "Hợp lý",
    "Nổi bật trọng điểm",
    "Dành khoảng thời gian trống",
  ],
  "Theo quy định, khi nào sinh viên sẽ hội tụ đủ yếu tố về điểm rèn luyện để Hội đồng kỷ luật nhà trường xem xét hình thức kỷ luật nâng cảnh báo học tập lên mức 2 ?": [
    "Khi đủ 2 học kỳ liên tiếp dưới 50đ.",
  ],
  "Theo định hướng của Ban Giám đốc Đại học với sinh viên NĂM THỨ BA, bạn nên làm gì?!": [
    "Học chuyên ngành, Tham gia các lab/dự án, Phát triển kỹ năng chuyên môn, Xây dựng hồ sơ cá nhân.",
  ],
  "Phương pháp quản lý chi tiêu 50-20-30 với sinh viên?": [
    "50% Nhu cầu thiết yếu, 20% Tiết kiệm, 30% Sở thích cá nhân",
  ],
  "Theo Quy chế CTSV mới ban hành, trách nhiệm nào dưới đây là bắt buộc đối với sinh viên?": [
    "Chấp hành nghiêm các chủ trương của Đảng và quy định của Đại học",
  ],
  "Vốn vay không được phép sử dụng vào mục đích nào?": [
    "Mua và sử dụng các chất kích thích, ma túy, đồ chơi tiêu khiển vì mục đích mua vui cho bản thân, cá nhân",
  ],
  "Mục chấm điểm rèn luyện có 2 cột điểm SV chấm và điểm GV chấm, vậy điểm chốt tính theo điểm nào?": [
    "Cột điểm GV chấm.",
  ],
  "Địa chỉ email ssu@hust.edu.vn là địa chỉ tiếp nhận thông tin của đơn vị nào dưới đây?": [
    "Tổ Tư vấn và hỗ trợ sinh viên",
  ],
  "Sinh viên có thể xem tổng số tiền học phí phải đóng trong một kỳ học ở đâu": [
    "http://ctt-sis.hust.edu.vn",
  ],
  "Trong các buổi nói chuyện của Ban Giám đốc đại học, hình ảnh chú CÁ NGỪ minh hoa cho định hướng phát triển sau tốt nghiệp": [
    "Đi làm kỹ thuật, chuyên gia thực việc",
  ],
  "Địa chỉ Ban Công tác Sinh viên của Đại học Bách Khoa Hà Nội?": [
    "Phòng 101-105 nhà C1",
  ],
  'Sinh viên có hành vi “tổ chức đánh bạc” sẽ bị xử lý như thế nào theo phụ lục của Quy chế CTSV mới ban hành?': [
    "Chuyển cơ quan chức năng xử lý theo pháp luật",
  ],
  "Cách thức đánh giá điểm rèn luyện của Đại học Bách Khoa Hà Nội là gì?": [
    "Giáo viên chấm điểm theo khung điểm, kết quả tự đánh giá và minh chứng",
    "Thực hiện trên hệ thống sổ tay sinh viên Online (Web/App)",
    "Cách thức đánh giá bao gồm cả ba phương án trên",
    "Sinh viên tự đánh giá theo các minh chứng tham gia hoạt động tích lũy được",
  ],
  "Thời gian đào tạo chuẩn của bậc Cử nhân là bao lâu?": [
    "4 năm",
  ],
  "Sau thời gian điều chỉnh đăng ký, sinh viên có thể làm đơn xin rút học phần để không tính kết quả học tập không?": [
    "Được làm đơn xin rút và phải đóng học phí cho học phần được rút",
  ],
  "Điều kiện được xét học bổng loại A là gì:": [
    "GPA từ 3.6, điểm rèn luyện từ 90.",
  ],
  "Khi nào sinh viên phải hoàn toàn tự đăng ký lớp?": [
    "Bắt đầu từ học kỳ thứ 3",
  ],
  "Cho học phần MI1026 với khối lượng như sau 4(3-2-0-8). Những số trong ngoặc đơn thể hiện số giờ trong 1 tuần theo thứ tự từ trái sang phải đúng là?": [
    "3 giờ lý thuyết, 2 giờ bài tập, 0 giờ thực hành, 8 giờ tự học",
  ],
  "Bạn hãy cho biết để đạt được Danh hiệu Sinh viên 5 tốt, bạn cần đáp ứng đủ những tiêu chí nào sau đây?": [
    "Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Thể lực tốt, Hội nhập tốt",
  ],
  "Chính sách mượn tài liệu của Thư viện là:": [
    "Số lượng tài liệu mượn tối đa: 8 cuốn (phòng 111); 5 cuốn (phòng 102). Thời gian mượn: 60 ngày (phòng 111); 30 ngày (phòng 102). Gia hạn: 30 ngày (phòng 111); 7 ngày (phòng 102).",
  ],
  "Sinh viên nạp tiền thẻ gửi xe đạp/ xe máy ở đâu": [
    "Trung tâm Dịch vụ và Hỗ trợ Bách khoa",
  ],
  "Địa chỉ của Sổ tay công tác sinh viên Online?": [
    "https://ctsv.hust.edu.vn/",
  ],
  // Khả năng có lỗi
  "Khi gặp vấn đề về tài khoản email bạn liên lạc với Trung tâm Chuyển đổi số tại phòng nào?": [
    "Phòng 905A – Thư viện Tạ Quang Bửu",
  ],
  "Những giá trị cốt lõi Đại học Bách khoa từ góc nhìn văn hoá?": [
    "Tài năng cá nhân. Trí tuệ tập thể",
    "Tận tuỵ, Cống hiến",
    "Tôn trọng. Chính trực",
    "Kế thừa. Sáng tạo",
    "Chất lượng. Hiệu quả",
  ],
  "Quy chế CTSV mới ban hành áp dụng cho đối tượng nào?": [
    "Chỉ sinh viên đại học hệ chính quy văn bằng thứ nhất",
  ],
  "Mức học bổng loại B có giá trị?": [
    "Cả A và C",
  ],
  "Sinh viên sau khi đăng ký học phần sẽ được gì dưới đây?": [
    "Được đăng ký học tập trong cả 2 đợt: chính thức và điều chỉnh",
  ],
  '“Trường Đại học Bách Khoa Hà Nội” được mang tên mới là “Đại học Bách Khoa Hà Nội” từ ngày nào?': [
    "2/12/2022",
  ],
  "Quy định về trang phục đối với sinh viên tại Đại học Bách Khoa Hà Nội ?": [
    "Sinh viên không cần mặc đồng phục mọi lúc nhưng trang phục phù phải hợp với môi trường học tập; đồng thời yêu cầu sinh viên đeo thẻ sinh viên/học viên khi đi học và tới khu vực làm việc của nhà trường.",
  ],
  "Trong các buổi nói chuyện của Ban Giám đốc đại học,hình ảnh chú CÁ MẬP minh hoa cho định hướng phát triển sau tốt nghiệp": [
    "Trở thành nhà sáng lập doanh nghiệp",
  ],
  "Một môn học có trọng số KT(0,4)-T(0,6) nghĩa là môn học đó có": [
    "Trọng số của điểm kiểm tra giữa kỳ là 0,4, cuối kỳ là 0,6",
  ],
  "Hành vi nào dưới đây sinh viên không được phép thực hiện?": [
    "Gian lận trong học tập, kiểm tra, thi cử",
  ],
  "Nếu sinh viên vi phạm “học thay hoặc nhờ người học thay” lần thứ 3, hình thức kỷ luật nào sẽ được áp dụng?": [
    "Cảnh cáo",
  ],
  "Theo Quy chế CTSV mới ban hành, nội dung giáo dục nào dưới đây được triển khai cho sinh viên?": [
    "Giáo dục chính trị tư tưởng",
  ],
  "Hành vi “tổ chức làm hộ tiểu luận, đồ án, khóa luận tốt nghiệp” có thể dẫn đến hậu quả nào nếu mức độ nghiêm trọng?": [
    "Chuyển cơ quan chức năng xử lý theo pháp luật",
  ],
  "Sinh viên “làm hộ tiểu luận, đồ án, khóa luận tốt nghiệp” cho người khác lần thứ 2 sẽ nhận hình thức kỷ luật nào?": [
    "Buộc thôi học",
  ],
  "Theo phụ lục của Quy chế CTSV mới ban hành, sinh viên sử dụng văn bằng, chứng chỉ giả để xét điều kiện tốt nghiệp sẽ bị xử lý như thế nào ở lần đầu?": [
    "Đình chỉ 1 năm học",
  ],
  "Hình thức kỷ luật nào được áp dụng nếu sinh viên vi phạm lần đầu ở mức độ nhẹ?": [
    "Khiển trách",
  ],
  // 'Đường link của trang thông tin "Những điều viên cần biết" là gì?': [
  //   "https://sv-ctt.hust.edu.vn/#/so-tay-sv",
  // ],
  "Sau khi kết thúc kỳ học, sinh viên cần thực hiện nhiệm vụ nào sau đây?": [
    "Đăng ký lớp cho các môn đã chọn trong kỳ tới",
  ],
  "Sinh viên vi phạm hành vi “đánh nhau” lần thứ 2 sẽ bị áp dụng hình thức kỷ luật nào theo phụ lục của Quy chế CTSV mới ban hành?": [
    "Đình chỉ học tập 1 năm học",
  ],
  "Sinh viên được xếp hạng trình độ năm thứ nhất căn cứ số tín chỉ tích lũy như thế nào?": [
    "Trình độ năm thứ nhất nếu số tín chỉ tích lũy <32",
  ],
  "Học bổng Trần Đại Nghĩa dành cho sinh viên có hoàn cảnh kinh tế khó khăn, có nghị lực vươn lên trong cuộc sống có 2 mức học bổng, đó là những mức nào?": [
    "50% và 100%",
  ],
  "Ban Công tác Sinh viên sẽ tiếp nhận và giải đáp thắc mắc của sinh viên tại địa chỉ nào?": [
    "Chỉ tại các phòng 102 – 104 tòa nhà C1",
    "Chỉ qua Email: ctsv@hust.edu.vn",
    "Chỉ thông qua FB: www.fb.com/ctsv.hust.edu.vn",
  ],
  "Mục tiêu của việc đánh giá điểm rèn luyện mỗi kì đối với sinh viên": [
    "Cung cấp thông tin cho quá trình quản lý, hỗ trợ tổ chức các hoạt động hỗ trợ sinh viên phát triển toàn diện",
    "Thúc đẩy sinh viên tích cực rèn luyện để tăng khả năng thành công",
  ],
  "Nghỉ dài hạn do lý do bất khả kháng (ốm đau, điều trị dài ngày..) cần làm gì?": [
    "Báo với giảng viên quản lý và Nộp đơn xin nghỉ dài hạn theo hướng dẫn của Ban Công tác sinh viên",
  ],
  "Theo định hướng của Ban Giám đốc Đại học với sinh viên NĂM THỨ NHẤT, bạn nên làm gì?!": [
    "Làm quen với môi trường đại học; Xây dựng nền tảng học tập; Phát triển kỹ năng mềm, ngoại ngữ; Khám phá các cơ hội nghề nghiệp.",
  ],
  "Chính sách hỗ trợ vay vốn ngân hàng cho sinh viên là gì": [
    "Mức vay tối đa: 4 triệu đồng/ tháng x 10 tháng/năm học.",
  ],
  "Địa chỉ email của Văn phòng Đoàn Thanh niên là?": [
    "dtn@hust.edu.vn",
  ],
  "Đường link truy cập Hệ thống BK-Elearning là?": [
    "https://lms.hust.edu.vn",
  ],
  "Yêu cầu bắt buộc đối với sinh viên khi gửi email thắc mắc vấn đề như đăng ký học tập, chuyển điểm tương đương/thay thế, học phí... là?": [
    "Sử dụng email nhà trường cấp (..@sis.hust.edu.vn)",
  ],
  "Các dịch vụ tại thư viện Tạ Quang Bửu:": [
    "Đọc tại chỗ, mượn về nhà.",
    "Truy cập tài nguyên điện tử.",
    "Tiện ích khác (Phòng tự học, …)",
  ],
  "Hãy chọn các học bổng cho sinh viên của Đại học Bách khoa Hà Nội:": [
    "Học bổng Khuyến khích học tập",
    "Học bổng Trần Đại Nghĩa",
    "Học bổng Gắn kết Quê hương",
  ],
  "Địa chỉ của Cổng thông tin sinh viên?": [
    "https://ctt.hust.edu.vn/",
  ],
  'Trong "6 QUY TẮC VĂN HÓA GIAO TIẾP TRONG NHÀ TRƯỜNG VÀ MÔI TRƯỜNG MẠNG"  quy tắc thứ 6 là': [
    "Có ý thức, trách nhiệm bảo vệ danh tiếng và tài sản của Nhà trường.",
  ],
  "Mức cho vay tối đa đối với HSSV là:": [
    "4.000.000đ/tháng/sinh viên",
  ],
  "HSSV nào sau đây thuộc một trong các đối tượng được vay vốn?": [
    "HSSV có hoàn cảnh khó khăn sống trong hộ gia đình cư trú hợp pháp tại địa phương nơi cho vay.",
  ],
  "Sinh viên vi phạm hành vi “học thay hoặc nhờ người học thay” lần thứ 2 sẽ bị xử lý hình thức kỷ luật nào?": [
    "Khiển trách",
  ],
  "Sinh viên “tổ chức học hộ hoặc thi hộ” dưới mọi hình thức sẽ bị xử lý ra sao theo phụ lục của Quy chế CTSV mới ban hành?": [
    "Đình chỉ học tập 1 năm học",
  ],
  "Chương trình đào tạo thạc sĩ khác với chương trình kỹ sư chuyên sâu đặc thù ở điểm nào sau đây?": [
    "Thạc sĩ có định hướng nghiên cứu hàn lâm và phát triển, kỹ sư chuyên sâu nghề nghiệp",
  ],
  "Sinh viên “nhờ người khác vào phòng thi để thi thay” lần đầu tiên sẽ bị xử lý như thế nào theo phụ lục của Quy chế CTSV mới ban hành?": [
    "Đình chỉ học tập 1 năm học",
  ],
  "Điểm của học phần được tính dựa trên những yếu tố nào?": [
    "Điểm quá trình và điểm thi cuối kỳ",
  ],
  "Đâu là quy trình đánh giá kết quả điểm rèn luyện của sinh viên?": [
    "Thu thập, xác nhận tham gia hoạt động – Đánh giá kết quả điểm rèn luyện - Sử dụng kết quả điểm rèn luyện - Tự đánh giá kết quả điểm rèn luyện",
  ],
  "Việc đăng ký lớp học chính thức có ưu tiên cho đối tượng nào?": [
    "Sinh viên đã đăng ký học phần trước",
  ],
  "Quy chế công tác sinh viên đại học hệ chính quy của Đại học Bách khoa Hà Nội được ban hành kèm theo quyết định nào?": [
    "Quyết định số 2727/QĐ-ĐHBK",
  ],
  "Sinh viên bắt đầu được xem xét chuyển ngành từ khi nào?": [
    "Sau khi hoàn thành năm thứ nhất",
  ],
  "Địa chỉ bạn cần đến để được hỗ trợ, tư vấn về học tập và tâm lý khi gặp khó khăn là?": [
    "D8-403",
  ],
  "Trong các buổi nói chuyện của Ban Giám đốc đại học, hình ảnh chú CÁ HEO minh hoa cho định hướng phát triển sau tốt nghiệp": [
    "Trở thành nhà nghiên cứu",
  ],
  "Khi xin hoãn thi cuối kỳ, điểm của sinh viên sẽ được tính như thế nào?": [
    "Điểm sẽ được tính sau khi thi bù",
  ],
  "Trong phần nói chuyện của Ban Giám đốc đại học, hình ảnh chú CÁ VOI minh hoa cho định hướng phát triển sau tốt nghiệp": [
    "Trở thành chuyên gia, bậc thầy công nghệ",
  ],
  "Một sinh viên có điểm trung bình tích lũy là 3.74 và điểm rèn luyện là 70. Sinh viên này có đủ điều kiện để xin học bổng khuyến khích học tập loại nào?": [
    "Loại C",
  ],
  "Theo Quy chế CTSV mới ban hành, đơn vị nào chịu trách nhiệm chính trong việc tổ chức các hoạt động nghiên cứu khoa học (NCKH) cho sinh viên?": [
    "Ban Khoa học - Công nghệ",
  ],
  "Đăng ký học tập không phù hợp có thể dẫn đến hậu quả như thế nào?": [
    "Số tín chỉ nợ (nếu có) tăng dần chứ không giảm",
    "Chậm tiến độ",
    "Kết quả học tập kém",
  ],
  "Đối tượng được xét học bổng Trần Đại Nghĩa là những ai:": [
    "Sinh viên có hoàn cảnh khó khăn, có nghị lực vươn lên trong cuộc sống nhưng chưa nhận được nguồn hỗ trợ nào.",
  ],
  "Theo phụ lục của Quy chế CTSV mới ban hành, hành vi “nhờ làm hộ tiểu luận, đồ án, khóa luận tốt nghiệp” lần đầu tiên sẽ bị xử lý ở mức nào?": [
    "Đình chỉ học tập 1 năm học",
  ],
  "Sinh viên sẽ bị xem xét buộc thôi học nếu?": [
    "Bị cảnh cáo học tập mức 3 lần thứ hai",
  ],
  "Nếu sinh viên “dùng phương tiện kỹ thuật truyền tin để nhờ người khác làm hộ bài thi” lần đầu tiên, hình thức kỷ luật nào sẽ được áp dụng?": [
    "Nếu sinh viên “dùng phương tiện kỹ thuật truyền tin để nhờ người khác làm hộ bài thi” lần đầu tiên, hình thức kỷ luật nào sẽ được áp dụng?",
  ],
  "Sinh viên đạt thành tích xuất sắc trong học tập và nghiên cứu khoa học có thể nhận được phần thưởng nào?": [
    "Giấy khen và phần thưởng",
  ],
  "Quyền lợi nào dưới đây sinh viên được hưởng theo Quy chế CTSV mới ban hành?": [
    "Được sử dụng học liệu, thiết bị phục vụ học tập và nghiên cứu khoa học",
  ],
  "Theo định hướng của Ban Giám đốc Đại học với sinh viên NĂM THỨ TƯ, bạn nên làm gì?!": [
    "Hoàn thiện kỹ năng mềm và chuyên môn, ngoại ngữ, Đồ án tốt nghiệp, Tìm việc/ học bổng ĐH/ Quỹ đầu tư…",
  ],
  "Một số điều sinh viên cần ghi nhớ khi vào thư viện?": [
    "Chỉ được phép mang ba lô, cặp sách vào các phòng tự học",
    "Đọc kỹ hướng dẫn, nội quy trước khi sử dụng​",
    "Quét thẻ tại cổng bảo vệ",
    "Mang sách ra quầy thủ thư để mượn và kiểm tra tài khoản​ (Phòng mượn)",
  ],
  "Việc đánh giá mức độ hài lòng của sinh viên về chất lượng phục vụ của đơn vị quản ngành được thực hiện vào thời gian nào?": [
    "Hàng năm, không quy định thời gian cụ thể",
  ],
  "Theo Điều 14 của Quy chế CTSV mới ban hành, trách nhiệm của cố vấn học tập bao gồm việc nào dưới đây?": [
    "Tư vấn, hỗ trợ sinh viên xây dựng kế hoạch học tập phù hợp",
  ],
  "Nộp hồ sơ chế độ chính sách miễn giảm học phí tại đâu?": [
    "Ban Công tác sinh viên",
  ],
  "Điều kiện xét tuyển học bổng loại B:": [
    "GPA ≥ 3,2; Điểm RL ≥ 80",
  ],
  "Đâu là các ứng dụng Office 365 trong tài khoản được cấp cho sinh viên?": [
    "Outlook, Teams",
  ],
  "Một sinh viên có điểm trung bình tích lũy là 3.4 và điểm rèn luyện là 95. Sinh viên này có đủ điều kiện để xin học bổng khuyến khích học tập loại nào?": [
    "Loại B",
  ],
  "Những công việc sinh viên BẮT BUỘC phải làm trong học kỳ?": [
    "Đăng ký học tập",
    "Đóng học phí",
    "Kiểm tra giữa kỳ",
    "Thi học kỳ",
  ],
  "Chính sách hỗ trợ vay vốn ngân hàng cho sinh viên là gì:": [
    "Mức vay tối đa: 4 triệu đồng/ tháng x 10 tháng/năm học.",
  ],
};

const totalQuestions = Object.keys(answers).length;
console.log(`Tổng số câu hỏi: ${totalQuestions}`);

async function autoFillFormBasedOnQuestion() {
  const spans = document.querySelectorAll(".text-format-content");
  
  // Bắt ngoại lệ từ form
  const exep1 = document.querySelector(`[value="Kết luận 121, 126 và 127 của Trung ương và Bộ Chính trị"]`);
  const exep2 = document.querySelector(`[value='"Diệt giặc đói, giặc dốt, giặc ngoại xâm"']`);
  const exep3 = document.querySelector(`[value='"Tất cả đều phải theo kế hoạch"']`);
  const exep4 = document.querySelector(`[value*='Trong cơ quan, tổ chức, đơn vị khu vực nhà nước và doanh nghiệp, tổ chức khu vực']`);
  const exep5 = document.querySelector(`[value*='Sinh viên có thể tự lập kế hoạch học tập dựa trên "Kế hoạch học tập chuẩn"']`);
  const exep6 = document.querySelector(`[value='Cả 3 phương án trên']`);
  const exep7 = document.querySelector(`[value='GPA ≥ 3,2; Điểm RL ≥ 80 ']`)
  const exep8 = document.querySelector(`[value*='Đảm bảo công tác sinh viên phù hợp với chủ trương của Đảng']`)
  const exep9 = document.querySelector(`[value='Xem xét xử lý tương đương mức cảnh báo học tập mức 2']`)
  const exep10 = document.querySelector(`[value='2.07']`)
  const exep11 = document.querySelector(`[value*='Có ý thức, trách nhiệm']`)

  const clickOption = (element) => {
    try {
      if (element) {
        element.click();
        console.log('Clicked the option successfully.');
      } else {
        console.warn('Element not found.');
      }
    } catch (error) {
      console.error('Error occurred while clicking:', error);
    }
  };
  
  clickOption(exep1);
  clickOption(exep2);
  clickOption(exep3);
  clickOption(exep4);
  clickOption(exep5);
  clickOption(exep6);
  clickOption(exep7);
  clickOption(exep8);
  clickOption(exep9);
  clickOption(exep10);
  clickOption(exep11);

  spans.forEach((span) => {
    const questionText = span.innerText.trim().replace(/\s+/g, " ");

    if (answers[questionText]) {
      const answersList = Array.isArray(answers[questionText])
        ? answers[questionText]
        : [answers[questionText]];

      answersList.forEach((answer) => {
        const answerNormalized = answer.trim();

        const optioninputs = document.querySelectorAll(`[value="${answerNormalized}"]`);

        optioninputs.forEach((optioninput) => {
          if (!optioninput.checked && optioninput.value === answerNormalized) {
            optioninput.click();
            console.log(`Filled "${questionText}" with "${answerNormalized}"`);
          }
        });
      });
    }
  });
  
  const inputExep = document.querySelector('input[placeholder="Nhập câu trả lời của bạn"]');
  inputExep.value= 'https://ctsv.hust.edu.vn/#/so-tay-sv'
}

// Lắng nghe tín hiệu từ popup.js
chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === "fillForm") {
    console.log("Fill form action received");

    try {
      await autoFillFormBasedOnQuestion();
      alert("Filled success!!");
    } catch (error) {
      console.error("Error filling the form:", error);
    }
  }
});
