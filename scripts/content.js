// Danh sách các câu trả lời đã biết, mỗi câu có thể có nhiều đáp án đúng
const answers = {
  //đáp án pháp luật 2025.1
  "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?": [
    "Tôn trọng giảng viên, cán bộ và các sinh viên khác"
  ],
  "Hành vi xúc phạm danh dự giảng viên có thể dẫn đến hậu quả gì?": [
    "Kỷ luật từ cảnh cáo đến buộc thôi học"
  ],
  "Sinh viên bị mất xe máy trong bãi giữ xe của trường, ai chịu trách nhiệm?": [
    "Nhà trường, nếu có hợp đồng gửi xe"
  ],
  "Sinh viên có quyền chuyển trường trong trường hợp nào?": [
    "Đáp ứng điều kiện theo quy định của trường"
  ],
  "Vi phạm quyền sở hữu trí tuệ trong nghiên cứu (như sử dụng dữ liệu trái phép) có thể dẫn đến hậu quả gì đối với sinh viên?": [
    "Bị xử phạt dân sự, hành chính hoặc hình sự tùy mức độ"
  ],
  "Sinh viên có quyền gì khi phát hiện tài khoản giả mạo mình trên mạng?": [
    "Yêu cầu xóa tài khoản giả mạo"
  ],
  "Sinh viên tổ chức đua xe trái phép có thể bị phạt tù tối đa bao lâu?": [
    "7 năm"
  ],
  "Sinh viên lái xe máy không đội mũ bảo hiểm và gây tai nạn có thể bị xử lý theo tội gì?": [
    "Tội vi phạm quy định về giao thông (Điều 261)"
  ],
  "Sinh viên ký hợp đồng mua điện thoại trả góp nhưng không trả được nợ thì sao?": [
    "Phải chịu trách nhiệm dân sự theo hợp đồng"
  ],
  "Sinh viên sử dụng giấy tờ giả để vay tiền có thể bị xử lý theo tội gì?": [
    "Tội làm giả con dấu, tài liệu (Điều 341)"
  ],
  "Hành vi nào sau đây không bị cấm theo Luật An ninh mạng?": [
    "Chia sẻ tài liệu học tập trên Google Drive"
  ],
  "Sinh viên vay tiền ngân hàng để đóng học phí phải chịu lãi suất tối đa bao nhiêu?": [
    "Theo thỏa thuận, nhưng không vượt quá mức luật định"
  ],
  "Sinh viên có thể bị đình chỉ học tập tối đa bao lâu?": [
    "Vô thời hạn"
  ],
  "Theo Bộ luật Dân sự 2015, quyền nào sau đây thuộc về quyền nhân thân của sinh viên?": [
    "Quyền được bảo vệ danh dự, nhân phẩm"
  ],
  "Hợp đồng thuê nhà trọ giữa sinh viên và chủ nhà có thể chấm dứt khi nào?": [
    "Khi hết thời hạn hợp đồng hoặc theo thỏa thuận"
  ],
  "Theo Luật Phòng, chống tham nhũng 2018, mục tiêu chính của luật là gì?": [
    "Phòng ngừa, phát hiện, xử lý tham nhũng và các hành vi vi phạm pháp luật về phòng, chống tham nhũng"
  ],
  "Sinh viên bị bạn cùng phòng xúc phạm danh dự trên mạng xã hội có quyền gì?": [
    "Yêu cầu bồi thường thiệt hại về tinh thần"
  ],
  "Sinh viên photocopy toàn bộ sách giáo khoa để sử dụng trong học tập có vi phạm Luật Sở hữu trí tuệ không?": [
    "Có vi phạm quyền tác giả nếu không được phép của chủ sở hữu"
  ],
  "Sinh viên tàng trữ một lượng nhỏ ma túy để sử dụng cá nhân có thể bị phạt tù tối đa bao lâu?": [
    "B. 5 năm"
  ],
  "Ai có quyền quyết định thành lập trường đại học công lập?": [
    "Được tôn trọng và bảo vệ danh dự, nhân phẩm"
  ],
  "Sinh viên ký hợp đồng thuê nhà trọ phải tuân theo hình thức nào?": [
    "Có thể bằng văn bản hoặc lời nói, trừ trường hợp pháp luật yêu cầu công chứng"
  ],
  "Nếu sinh viên vay tiền bạn nhưng không trả đúng hạn, hậu quả pháp lý là gì?": [
    "Phải trả lãi suất theo thỏa thuận hoặc luật định"
  ],
  "Sinh viên uống rượu bia và gây rối ở ký túc xá có thể bị xử lý theo tội gì?": [
    "Tội gây rối trật tự công cộng (Điều 318)"
  ],
  "Sinh viên tốt nghiệp được cấp bằng theo hình thức nào?": [
    "Theo quy định của Bộ Giáo dục và Đào tạo"
  ],
  "Luật An ninh quốc gia 2004 quy định quyền nào của sinh viên khi phát hiện hành vi xâm phạm an ninh quốc gia?": [
    "Báo cáo cho cơ quan chức năng và được bảo vệ danh tính"
  ],
  "Trong nghiên cứu đại học, sáng chế từ đề tài nghiên cứu của sinh viên thuộc quyền sở hữu của ai?": [
    "Thuộc về tổ chức (trường đại học) nếu sử dụng tài nguyên trường"
  ],
  "Theo Luật An ninh mạng, ai có trách nhiệm bảo vệ thông tin cá nhân của sinh viên?": [
    "Nhà cung cấp dịch vụ và sinh viên"
  ],
  "Sinh viên có trách nhiệm gì khi sử dụng mạng xã hội?": [
    "Bảo vệ thông tin cá nhân của mình và người khác"
  ],
  "Sinh viên dưới 18 tuổi sử dụng ma túy trái phép có thể bị xử lý như thế nào?": [
    "Xử lý nhẹ hơn theo quy định cho người dưới 18 tuổi"
  ],
  "Nghĩa vụ nào sau đây là bắt buộc đối với sinh viên?": [
    "Tuân thủ nội quy, quy chế của cơ sở giáo dục"
  ],
  "Luật Giáo dục Đại học quy định gì về nghiên cứu khoa học?": [
    "Là quyền nhưng không bắt buộc đối với sinh viên"
  ],
  "Sinh viên cố ý làm hỏng tài sản của trường (như đập phá bàn ghế) có thể bị xử lý theo tội gì?": [
    "Tội hủy hoại tài sản (Điều 178)"
  ],
  "Sinh viên tải ứng dụng học tập từ nguồn không rõ ràng có nguy cơ gì?": [
    "Bị nhiễm mã độc, vi phạm Luật An ninh mạng"
  ],
  "Sinh viên có thể ủy quyền cho người khác làm gì?": [
    "Thay mặt nộp học phí"
  ],
  "Theo Luật Quốc phòng 2018, trong tình trạng khẩn cấp về quốc phòng, sinh viên có trách nhiệm gì?": [
    "Tham gia bảo vệ Tổ quốc theo lệnh huy động"
  ],
  "Hợp đồng thuê phòng trọ của sinh viên bị vô hiệu khi nào?": [
    "Khi sinh viên chưa đủ 18 tuổi và không có giám hộ đồng ý"
  ],
  "Hành vi nào sau đây của sinh viên bị cấm theo Luật Phòng, chống ma túy?": [
    "Tàng trữ một lượng nhỏ ma túy trong ký túc xá"
  ],
  "Hành vi nào của sinh viên có thể bị xử phạt theo Luật An ninh mạng?": [
    "Hack tài khoản mạng xã hội của bạn cùng lớp"
  ],
  "Theo Luật Phòng, chống tham nhũng, việc công khai thông tin tài sản của Lãnh đạo quản lý nhà trường nhằm mục đích gì?": [
    "Phòng ngừa tham nhũng bằng cách phát hiện tài sản bất minh bạch"
  ],
  "Hành vi nào sau đây vi phạm Luật An ninh mạng?": [
    "Chia sẻ phần mềm lậu trên nhóm sinh viên"
  ],
  "Luật An ninh mạng 2018 được Quốc hội thông qua vào ngày nào?": [
    "12/6/2018"
  ],
  "Sinh viên bị vu khống là gian lận thi cử có thể làm gì?": [
    "Báo công an để xử lý theo Điều 156"
  ],
  "Sinh viên tham gia huấn luyện GDQP&AN có thể được hưởng chính sách gì theo Luật Quốc phòng?": [
    "Ưu tiên xét tuyển việc làm sau tốt nghiệp"
  ],
  "Hành vi nào sau đây của sinh viên bị cấm theo Luật An ninh quốc gia 2004?": [
    "Tiết lộ bí mật nhà nước qua mạng xã hội"
  ],
  "Sinh viên tham gia nhóm chat phát tán thông tin chống phá nhà nước có thể chịu hậu quả gì?": [
    "Bị truy cứu trách nhiệm hình sự"
  ],
  "Sinh viên bị bạn cùng phòng đe dọa giết người có quyền làm gì?": [
    "Báo công an để xử lý theo Điều 133"
  ],
  "Sinh viên sử dụng ma túy bất hợp pháp có thể bị xử lý theo điều luật nào?": [
    "Điều 249 - Tội tàng trữ, sử dụng trái phép chất ma túy"
  ],
  "Sinh viên sử dụng ma túy trái phép có thể bị xử lý như thế nào?": [
    "Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự"
  ],
  "Hành vi nào sau đây của sinh viên bị cấm theo Luật An ninh mạng?": [
    "Đăng tin sai sự thật gây hoang mang dư luận"
  ],
  "Theo Luật, hành vi lạm dụng chức vụ để ưu tiên đăng ký môn học cho người thân của cán bộ trường là gì?": [
    "Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản"
  ],
  "Luật Phòng, chống ma túy 2021 được Quốc hội thông qua vào ngày nào?": [
    "30/3/2021"
  ],
  "Ai có thẩm quyền quyết định buộc thôi học sinh viên?": [
    "Hiệu trưởng/Giám đốc cơ sở giáo dục"
  ],
  "Theo Luật Sở hữu trí tuệ 2022, trường đại học có trách nhiệm gì liên quan đến sở hữu trí tuệ của sinh viên?": [
    "Hỗ trợ đăng ký và bảo vệ quyền sở hữu trí tuệ từ nghiên cứu"
  ],
  "Theo Luật Sở hữu trí tuệ 2022, quyền nào của tác giả không thể chuyển nhượng trong quá trình viết bài nghiên cứu khoa học?": [
    "Quyền nhân thân (như quyền đứng tên tác giả)"
  ],
  "Theo Luật An ninh mạng, thông tin cá nhân của sinh viên bao gồm gì?": [
    "Tên, ngày sinh, số CMND/CCCD, thông tin tài khoản ngân hàng"
  ],
  "Sinh viên bị đánh cắp tài khoản mạng xã hội nên làm gì đầu tiên?": [
    "Báo cáo cho nhà cung cấp dịch vụ để khóa tài khoản"
  ],
  "Sinh viên mua hàng trực tuyến nhưng nhận hàng lỗi có quyền gì?": [
    "Yêu cầu đổi hàng hoặc hoàn tiền"
  ],
  "Bộ luật Dân sự 2015 được Quốc hội thông qua vào ngày nào?": [
    "24/11/2015"
  ],
  "Sinh viên đánh bạn cùng lớp gây thương tích 15% có thể bị truy cứu theo tội gì?": [
    "Tội cố ý gây thương tích (Điều 134)"
  ],
  "Sinh viên có thể bị xử phạt bao nhiêu nếu đăng tin sai sự thật gây hoang mang?": [
    "Từ 10-20 triệu đồng (theo Nghị định 144/2021/NĐ-CP)"
  ],
  "Sinh viên có quyền được cung cấp thông tin gì từ trường?": [
    "Nội dung, chương trình đào tạo"
  ],
  "Luật Giáo dục Đại học 2018 được Quốc hội thông qua vào ngày nào?": [
    "19/11/2018"
  ],
  "Theo sửa đổi 2022 của Luật, quy định mới nào liên quan đến phòng chống tham nhũng trong giáo dục?": [
    "Mở rộng kiểm soát xung đột lợi ích cho cán bộ trường học"
  ],
  "Sinh viên có quyền tham gia hoạt động nào sau đây?": [
    "Tham gia nghiên cứu khoa học, hoạt động xã hội"
  ],
  "Theo Luật Quốc phòng 2018, sinh viên đại học có nghĩa vụ nào sau đây liên quan đến giáo dục quốc phòng?": [
    "Tham gia học tập, huấn luyện giáo dục quốc phòng và an ninh theo chương trình đào tạo"
  ],
  "Mục tiêu chính của Luật An ninh mạng 2018 là gì?": [
    "Bảo vệ an ninh quốc gia và quyền lợi người dùng trên không gian mạng"
  ],
  "Sinh viên dưới 18 tuổi phạm tội trộm cắp tài sản có thể bị xử lý như thế nào?": [
    "Xử lý nhẹ hơn theo quy định cho người dưới 18 tuổi"
  ],
  "Sinh viên sử dụng phần mềm học tập lậu trong nghiên cứu có thể bị xử phạt theo Luật Sở hữu trí tuệ như thế nào?": [
    "Phạt hành chính từ 3-5 triệu đồng đối với cá nhân"
  ],
  "Theo Luật Phòng, chống ma túy 2021, ma túy được định nghĩa là gì?": [
    "Chất gây nghiện, hướng thần và tiền chất dùng trái phép"
  ],
  "Sinh viên lừa bán vé sự kiện giả để chiếm đoạt tiền có thể bị xử lý theo tội gì?": [
    "Tội lừa đảo chiếm đoạt tài sản (Điều 174)"
  ],
  "Hình thức đào tạo nào không được quy định trong Luật Giáo dục Đại học?": [
    "Tự học không cần hướng dẫn"
  ],
  "Sinh viên vi phạm nội quy có thể chịu hình thức kỷ luật nào?": [
    "Cảnh cáo, đình chỉ, buộc thôi học"
  ],
  "Hành vi nào sau đây của sinh viên không cấu thành tội phạm?": [
    "Mượn xe máy của bạn và trả đúng hẹn"
  ],
  "Sinh viên sử dụng Wi-Fi trường học phải tuân thủ quy định gì?": [
    "Không thực hiện hành vi tấn công mạng hoặc phát tán mã độc"
  ],
  "Sinh viên có quyền khiếu nại về vấn đề gì?": [
    "Kết quả học tập hoặc kỷ luật"
  ],
  "Sinh viên phát tán video riêng tư của bạn cùng lớp có thể bị xử lý theo tội gì?": [
    "Tội làm nhục người khác (Điều 155)"
  ],
  "Sinh viên làm hỏng thiết bị phòng thí nghiệm phải chịu trách nhiệm gì?": [
    "Bồi thường thiệt hại theo giá trị tài sản"
  ],
  "Hành vi nhận hối lộ từ sinh viên để thay đổi điểm thi của giảng viên được coi là hành vi tham nhũng nào?": [
    "Nhận hối lộ"
  ],
  "Sinh viên phát hiện cán bộ trường cấp học bổng bất chính nên làm gì theo Luật Phòng, chống tham nhũng?": [
    "Báo cáo cho cơ quan có thẩm quyền để được bảo vệ"
  ],
  "Quyền sở hữu nhãn hiệu cho sản phẩm nghiên cứu (như ứng dụng di động học tập) thuộc về ai nếu sinh viên tự phát triển?": [
    "Thuộc sinh viên nếu tự đăng ký"
  ],
  "Theo Luật Phòng, chống ma túy, sinh viên cai nghiện ma túy có quyền gì?": [
    "Được hỗ trợ tư vấn, điều trị và tái hòa nhập cộng đồng"
  ],
  "Theo Luật Giáo dục Đại học, sinh viên có quyền nào liên quan đến học tập?": [
    "Được học tập, nghiên cứu trong môi trường bình đẳng, không phân biệt đối xử"
  ],
  "Sinh viên có quyền yêu cầu bảo vệ thông tin cá nhân trong trường hợp nào?": [
    "Khi trường công khai điểm thì mà không được đồng ý"
  ],
  "Sinh viên có quyền gì khi bị bạn cùng lớp vu khống?": [
    "Yêu cầu xin lỗi công khai và bồi thường"
  ],
  "Hành vi nào sau đây bị cấm đối với sinh viên?": [
    "Gian lận trong học tập, thi cử"
  ],
  "Sinh viên vi phạm trách nhiệm chấp hành nội quy có thể đối mặt với hình thức kỷ luật nào?": [
    "Bị cảnh cáo, đình chỉ hoặc buộc thôi học"
  ],
  "Sinh viên dưới 18 tuổi ký hợp đồng mua laptop cần điều kiện gì?": [
    "Phải có sự đồng ý của người giám hộ"
  ],
  "Hành vi sao chép nguyên văn luận văn của bạn để nộp bài có thể bị xử lý theo quy định nào của Luật Sở hữu trí tuệ?": [
    "Vi phạm quyền tác giả (đạo văn)"
  ],
  "Sinh viên làm mất tài liệu mượn của thư viện trường phải làm gì?": [
    "Bồi thường theo giá trị tài liệu"
  ],
  "Sinh viên tổ chức cờ bạc trong ký túc xá có thể bị xử lý theo tội gì?": [
    "Tội tổ chức đánh bạc (Điều 321)"
  ],
  "Sinh viên bị lừa đảo khi mua hàng trực tuyến nên làm gì?": [
    "Báo cáo cơ quan chức năng để xử lý"
  ],
  "Theo Luật Giáo dục Đại học, mục tiêu của giáo dục đại học là gì?": [
    "Đào tạo nguồn nhân lực chất lượng cao, nâng cao dân trí, bồi dưỡng nhân tài"
  ],
  "Sinh viên có quyền yêu cầu nhà cung cấp dịch vụ mạng làm gì?": [
    "Xóa thông tin sai sự thật về mình"
  ],
  "Theo Luật, cơ sở giáo dục đại học phải công khai thông tin gì?": [
    "Chất lượng đào tạo và điều kiện cơ sở vật chất"
  ],
  "Sinh viên tổ chức sử dụng ma túy trong ký túc xá có thể bị phạt tù tối đa bao lâu?": [
    "7 năm"
  ],
  "Sinh viên đăng ký bằng sáng chế cho ý tưởng nghiên cứu cá nhân cần đáp ứng điều kiện gì theo Luật?": [
    "Ý tưởng phải mới, có tính sáng tạo và áp dụng công nghiệp"
  ],
  "Sinh viên tham gia đánh nhau trong ký túc xá gây rối trật tự có thể bị xử lý theo tội gì?": [
    "Tội gây rối trật tự công cộng (Điều 318)"
  ],
  "Sinh viên có trách nhiệm gì trong phòng, chống tham nhũng theo Luật Phòng, chống tham nhũng 2018?": [
    "Tuyên truyền, giáo dục và báo cáo hành vi tham nhũng trong môi trường học tập"
  ],
  "Hậu quả pháp lý đối với sinh viên tham gia hối lộ giảng viên để qua môn là gì?": [
    "Có thể bị xử lý hình sự theo Bộ luật Hình sự nếu cấu thành tội đưa hối lộ"
  ],
  "Ai có quyền quyết định thành lập trường đại học công lập?": [
    "Thủ tướng Chính phủ"
  ],
  "Hành vi gian lận thi cử của sinh viên có thể bị xử lý theo điều luật nào?": [
    "Điều 356 - Hành vi gian lận trong thi cử"
  ],
  "Hành vi nào sau đây của sinh viên vi phạm Bộ luật Dân sự?": [
    "Đăng thông tin sai sự thật về giảng viên"
  ],
  "Sinh viên trộm cắp laptop của bạn cùng phòng có thể bị phạt tù tối đa bao lâu?": [
    "3 năm"
  ],
  "Sinh viên tham gia Đoàn Thanh niên có vai trò gì trong phòng chống tham nhũng theo Luật?": [
    "Tuyên truyền, giám sát và báo cáo tham nhũng trong trường học"
  ],
  "Sinh viên bị lộ thông tin cá nhân trên mạng có quyền gì?": [
    "Yêu cầu xóa thông tin cá nhân bị sử dụng trái phép"
  ],
  "Sinh viên phát hiện bạn cùng phòng sử dụng ma túy nên làm gì?": [
    "Báo cáo cho cơ quan công an hoặc nhà trường"
  ],
  "Sinh viên sử dụng mạng xã hội phải tuân thủ nguyên tắc nào?": [
    "Tôn trọng quyền, lợi ích hợp pháp của người khác"
  ],
  "Trách nhiệm nào sau đây của sinh viên liên quan đến việc bảo vệ tài sản trường học?": [
    "Sử dụng và bảo vệ tài sản công của cơ sở giáo dục đại học"
  ],
  "Sinh viên đăng bài xúc phạm danh dự giảng viên trên mạng có thể chịu hậu quả gì?": [
    "Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự"
  ],
  "Ai có trách nhiệm ban hành quy chế đào tạo của trường?": [
    "Hiệu trưởng/Giám đốc"
  ],
  "Sinh viên được hưởng chính sách miễn, giảm học phí trong trường hợp nào?": [
    "Thuộc đối tượng chính sách theo quy định"
  ],
  "Sinh viên bị chủ nhà trọ giữ chứng minh nhân dân trái phép có thể làm gì?": [
    "Yêu cầu trả lại và bồi thường thiệt hại"
  ],
  "Sinh viên mua ma túy qua mạng xã hội có thể bị xử lý theo tội gì?": [
    "Tội mua bán trái phép chất ma túy (Điều 251)"
  ],
  "Theo Luật Sở hữu trí tuệ 2022, ngoại lệ nào cho phép giảng viên trích dẫn tài liệu nghiên cứu mà không cần xin phép?": [
    "Trích dẫn với mục đích giảng dạy, nghiên cứu, không vì mục đích thương mại"
  ],
  "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?": [
    "Được cung cấp đầy đủ thông tin về chương trình đào tạo và quy chế học tập"
  ],
  "Sinh viên có thương tật nặng có được miễn học GDQP&AN theo Luật Quốc phòng không?": [
    "Được miễn nếu có giấy xác nhận y tế"
  ],
  "Sinh viên đăng bài xúc phạm danh dự giảng viên trên mạng có thể bị xử lý theo tội gì?": [
    "Tội làm nhục người khác (Điều 155)"
  ],
  "Theo Luật Phòng, chống ma túy, sinh viên có trách nhiệm gì trong phòng, chống ma túy?": [
    "Tuyên truyền, nâng cao nhận thức về tác hại ma túy"
  ],
  "Sinh viên có quyền từ chối giao dịch nào?": [
    "Giao dịch lừa đảo, không rõ ràng"
  ]
}

const totalQuestions = Object.keys(answers).length;
console.log(`Tổng số câu hỏi: ${totalQuestions}`);

async function autoFillFormBasedOnQuestion() {
  const inputExep = document.querySelector('input[placeholder="Nhập câu trả lời của bạn"]');
  if (inputExep) {
    inputExep.value = 'https://ctsv.hust.edu.vn/#/so-tay-sv';
  } else {
    console.error("Không tìm thấy ô nhập liệu!");
  }
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
