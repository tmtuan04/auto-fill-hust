// Danh sách các câu trả lời đã biết, mỗi câu có thể có nhiều đáp án đúng
const answers = {
  "Đâu là một trong những trách nhiệm của sinh viên được quy định trong Quy chế?": [
    "Đóng học phí, bảo hiểm y tế và các khoản phí khác đầy đủ, đúng quy định."
  ],
  "Sinh viên có quyền khiếu nại về kết quả đánh giá rèn luyện hoặc các hình thức khen thưởng, kỷ luật lên đâu?": [
    "Giám đốc Đại học (qua Ban Công tác sinh viên)."
  ],
  "Nếu sinh viên không tham gia đánh giá điểm rèn luyện tại một học kỳ, kết quả rèn luyện của học kỳ đó sẽ bị xếp loại gì?": [
    "Kém."
  ],
  "Theo số liệu khảo sát, tỷ lệ sinh viên tại ĐHBK Hà Nội bị cảnh báo học tập là khoảng bao nhiêu?": [
    "Khoảng 9%."
  ],
  "Sinh viên bị xếp loại rèn luyện Yếu/Kém trong hai học kỳ liên tiếp sẽ phải đối mặt với hình thức xử lý nào?": [
    "Bị buộc thôi học"
  ],
  "Chương trình đào tạo (CTĐT) mới nào được giới thiệu trong Quy chế 2025, thuộc nhóm chương trình ELITECH?": [
    "Chương trình đào tạo Tài năng"
  ],
  "Hành vi \"Tổ chức đánh bạc\" lần đầu sẽ bị xử lý như thế nào?": [
    "Khiển trách và phải bồi thường."
  ],
  "Cán bộ Quản lý lớp sinh viên (QLLSV) có thể là những ai?": [
    "Cán bộ giảng dạy, cán bộ hành chính hoặc cán bộ kỹ thuật đang công tác tại đơn vị quản ngành."
  ],
  "Quy định nào về cấu trúc học kỳ chính đã được loại bỏ trong Quy chế 2025?": [
    "Một học kỳ chính có thể được chia thành 2 đợt A và B"
  ],
  "Sinh viên đã nhận học bổng KKHT trong một học kỳ có được xét cấp học bổng Trần Đại Nghĩa trong cùng học kỳ đó không?": [
    "Không, sinh viên đã nhận học bổng KKHT sẽ không được xét cấp học bổng Trần Đại Nghĩa"
  ],
  "Tham gia \"Sinh hoạt công dân\" do nhà trường tổ chức sẽ được ghi nhận bao nhiêu điểm rèn luyện?": [
    "6 điểm"
  ],
  "Vào năm 1967, Chính phủ đã quyết định tách hai khoa nào từ Trường Đại học Bách khoa Hà Nội để thành lập các trường đại học riêng?": [
    "Khoa Xây dựng và Khoa Mỏ - Địa chất"
  ],
  "Mục đích chính của Học bổng Trần Đại Nghĩa là gì?": [
    "Hỗ trợ sinh viên có hoàn cảnh kinh tế đặc biệt khó khăn và có kết quả học tập, rèn luyện tốt"
  ],
  "Việc tham gia khóa đào tạo kỹ năng nghề nghiệp, kỹ năng bổ trợ chuyên môn được cộng tối đa bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Theo thang điểm 100, sinh viên đạt từ 80 đến dưới 90 điểm rèn luyện sẽ được xếp loại gì?": [
    "Tốt"
  ],
  "Việc tham gia hiến máu nhân đạo do Đại học và các tổ chức hợp pháp phát động được cộng bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Tổ tư vấn và hỗ trợ sinh viên, nơi giúp sinh viên giải quyết các khó khăn về học tập và tâm lý, là một bộ phận trực thuộc đơn vị nào?": [
    "Ban Công tác sinh viên"
  ],
  "Quyền lợi nào sau đây KHÔNG phải của Cố vấn học tập?": [
    "Được quyết định miễn giảm các khoản phí cho sinh viên có hoàn cảnh khó khăn"
  ],
  "Quy định nào về việc buộc thôi học do không nộp học phí đã bị loại bỏ trong Quy chế 2025?": [
    "Buộc thôi học nếu bị đình chỉ lần thứ 2 liên tiếp do không nộp học phí"
  ],
  "Học phí của lớp học phần rút gọn được tính như thế nào?": [
    "Bằng 150% so với lớp học phần bình thường"
  ],
  "Thay đổi quan trọng nhất tại Điều 17 về \"Chuyển chương trình đào tạo\" là gì?": [
    "Bỏ quy định \"Không cho phép chuyển CTĐT đối với sinh viên đã học từ năm thứ hai trở đi\""
  ],
  "Theo Quy chế, vị trí của sinh viên trong Đại học Bách khoa Hà Nội là gì?": [
    "Là trung tâm các hoạt động giáo dục, đào tạo, nghiên cứu khoa học, đổi mới sáng tạo và khởi nghiệp."
  ],
  "Theo khảo sát, nhóm học phần nào được nhiều sinh viên đánh giá là \"trở ngại\" trong năm học đầu tiên?": [
    "Giải tích 1, Đại số, Triết học."
  ],
  "Đâu là Cổng thông tin việc làm trực tuyến chính thức của Đại học Bách khoa Hà Nội, nơi kết nối sinh viên với các nhà tuyển dụng?": [
    "work.hust.edu.vn"
  ],
  "Thời gian trả lời khiếu nại của sinh viên về kết quả đánh giá rèn luyện không được quá bao nhiêu ngày kể từ ngày nhận đơn?": [
    "7 ngày"
  ],
  "Trường Đại học Bách khoa Hà Nội được thành lập theo nghị định 147/NĐ vào ngày tháng năm nào?": [
    "06/03/1956"
  ],
  "Đâu là một trong các nội dung đánh giá kết quả rèn luyện của sinh viên?": [
    "Phẩm chất công dân, trách nhiệm và quan hệ với cộng đồng."
  ],
  "Khi có khiếu nại về kết quả rèn luyện, sinh viên có khoảng thời gian khiếu nại tối thiểu là bao nhiêu ngày?": [
    "7 ngày"
  ],
  "Khi cần trao đổi hoặc phản ánh công việc với giáo viên, cán bộ hay các đơn vị trong Trường, sinh viên phải sử dụng loại email nào?": [
    "Email do Đại học BKHN cấp."
  ],
  "Kết quả rèn luyện của sinh viên được phân loại \"Xuất sắc\" khi đạt mức điểm nào?": [
    "Từ 90 đến 100 điểm."
  ],
  "Công cụ nào được sử dụng để hỗ trợ thực hiện quy trình đánh giá kết quả rèn luyện cho sinh viên?": [
    "Hệ thống sổ tay công tác sinh viên trực tuyến (iCTSV)."
  ],
  "Theo Quy chế đào tạo 2025, đối tượng áp dụng nào được bổ sung rõ ràng vào định nghĩa \"người học\"?": [
    "Nghiên cứu sinh (NCS)"
  ],
  "Hình thức kỷ luật \"Khiển trách\" áp dụng đối với trường hợp nào?": [
    "Sinh viên có hành vi vi phạm lần đầu nhưng ở mức độ nhẹ."
  ],
  "Mức học bổng KKHT loại Giỏi bằng bao nhiêu lần mức học bổng loại Khá?": [
    "1.2 lần"
  ],
  "Triết lý cốt lõi mà mỗi người Bách khoa cần mang theo suốt đời là gì?": [
    "\"Trách nhiệm với Đất nước – Cam kết với Cộng đồng\""
  ],
  "Đâu là một trong những hành động được khuyên để nhận diện và phòng tránh lừa đảo tài chính?": [
    "Không cung cấp thông tin cá nhân khi chưa xác định chính xác website, ứng dụng và danh tính tư vấn viên."
  ],
  "Điều kiện để sinh viên được giao đề tài Đồ án/Khóa luận tốt nghiệp (ĐATN) theo Quy chế 2025 là gì?": [
    "Đảm bảo các điều kiện về học phần học trước, tiên quyết, song hành"
  ],
  "Theo Quy chế 2025, hai học phần được coi là tương đương khi có nội dung chuyên môn trùng lặp ở mức nào?": [
    "Tối thiểu 70%"
  ],
  "Tổ tư vấn tâm lý sinh viên, tiền thân của \"Điểm tựa yêu thương\", được thành lập chính thức vào ngày tháng năm nào?": [
    "19/03/2019"
  ],
  "\"Học phần tiên quyết\" được định nghĩa như thế nào trong Quy chế 2025?": [
    "Phải hoàn thành học phần A (với mức điểm đạt) mới được dự lớp học phần B"
  ],
  "Thông điệp chính mà Giám đốc Đại học Bách khoa Hà Nội gửi đến sinh viên trong năm học 2025-2026 là gì?": [
    "\"Học với đam mê – Sống có trách nhiệm\""
  ],
  "Trong lời kêu gọi gửi đến sinh viên, Giám đốc nhấn mạnh điều gì là nền tảng cho tinh thần sáng tạo và học tập hiệu quả?": [
    "Tự giác, kỷ luật và kiên trì"
  ],
  "Theo Quy chế, hành vi nào bị cấm trong khuôn viên Đại học?": [
    "Hút thuốc, uống rượu, bia trong khuôn viên Đại học."
  ],
  "Quy chế này áp dụng cho đối tượng nào tại Đại học Bách khoa Hà Nội?": [
    "Sinh viên đại học hệ chính quy văn bằng thứ nhất."
  ],
  "Quy định về công tác CVHT và QLLSV được áp dụng cho đối tượng nào tại ĐHBK Hà Nội?": [
    "Sinh viên hệ đại học chính quy văn bằng thứ nhất."
  ],
  "\"BKHUP Coworking Space\" được thành lập với mục đích chính là gì?": [
    "Là nơi làm việc, gặp gỡ, kết nối cho các nhóm nghiên cứu trẻ, nhà sáng chế, nhà đầu tư và doanh nghiệp."
  ],
  "Sinh viên có hành vi uống rượu, bia trong giờ học lần thứ ba sẽ bị xử lý kỷ luật như thế nào?": [
    "Đình chỉ học tập 1 học kỳ."
  ],
  "Hành vi nào sau đây bị nghiêm cấm nhằm bảo vệ cơ sở vật chất và môi trường của Nhà trường?": [
    "Tự ý viết vẽ, dán lên tường, bàn ghế trong phòng học, phòng ở ký túc xá và các khu vực khác."
  ],
  "Theo quy trình, ai là người chấm điểm rèn luyện cho sinh viên dựa trên kết quả tự đánh giá và minh chứng?": [
    "Lớp trưởng và ban cán sự lớp."
  ],
  "Khi cần giải quyết các vấn đề liên quan đến chương trình đào tạo, đăng ký học phần, lịch thi, sinh viên cần liên hệ với đơn vị nào?": [
    "Ban Đào tạo"
  ],
  "Theo quy định, Cố vấn học tập (CVHT) phải đáp ứng tiêu chuẩn nào sau đây?": [
    "Là giảng viên đang công tác tại đơn vị quản ngành, có chuyên môn cao, kinh nghiệm giảng dạy và nắm vững quy chế đào tạo."
  ],
  "Ban nào có chức năng thực hiện chiến lược truyền thông tuyển sinh và tư vấn hướng nghiệp cho học sinh phổ thông?": [
    "Ban Tuyển sinh – Hướng nghiệp"
  ],
  "Một trong những \"Tip\" được gợi ý để làm tốt vai trò CVHT và QLLSV là gì?": [
    "Chủ động lập kênh thông tin online (Zalo, Teams) với lớp và có lịch làm việc riêng với sinh viên học tập kém"
  ],
  "Đơn vị nào chịu trách nhiệm chính trong việc giám sát chung và đánh giá hiệu quả thực hiện công tác CVHT và QLLSV của các đơn vị trong toàn Đại học?": [
    "Ban Công tác sinh viên."
  ],
  "Số tín chỉ tối đa mà sinh viên không thuộc diện cảnh báo học tập được đăng ký trong một học kỳ chính là bao nhiêu?": [
    "24 TC"
  ],
  "Theo quy tắc ứng xử trên mạng xã hội, sinh viên không được đăng tải hay tham gia bình luận về những nội dung nào sau đây?": [
    "Các thông tin, hình ảnh ảnh hưởng xấu đến uy tín của Nhà trường.",
    "Các lời lẽ tục tĩu, chửi bậy hoặc kích động tập thể.",
    "Phàn nàn về chính sách, cá nhân với thái độ không xây dựng."
  ],
  "Quy chế 2025 quy định có bao nhiêu đợt xét tốt nghiệp đại học trong một năm?": [
    "4 đợt"
  ],
  "Học bổng Gắn kết quê hương có giá trị là bao nhiêu cho mỗi Đồ án tốt nghiệp được xét cấp?": [
    "10 triệu đồng"
  ],
  "Nếu GPA kỳ đánh giá cao hơn kỳ trước, sinh viên sẽ được cộng thêm bao nhiêu điểm cho sự nỗ lực trong học tập?": [
    "4 điểm"
  ],
  "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân (không phải ốm đau, tai nạn, quân sự) sẽ bị xét buộc thôi học nếu nghỉ quá bao nhiêu học kỳ chính?": [
    "2 học kỳ chính"
  ],
  "CVHT có quyền nào sau đây để hỗ trợ sinh viên?": [
    "Đề nghị các đơn vị chức năng hỗ trợ giải quyết kịp thời các khó khăn của người học."
  ],
  "Theo Quy chế 2025, việc hạn chế khối lượng học tập đối với sinh viên bị cảnh báo học tập được áp dụng khi nào?": [
    "Từ mức cảnh báo 2 trở lên và áp dụng cho cả năm học"
  ],
  "Một trong những giải pháp được đề xuất đối với sinh viên thuộc diện cảnh báo học tập là gì?": [
    "Việc đăng ký học tập cần có sự phối hợp với cố vấn học tập."
  ],
  "Tổng điểm tối đa cho tiêu chí \"Điểm tham gia hoạt động chính trị, xã hội, văn hoá, thể thao\" (TC3) là bao nhiêu?": [
    "25 điểm"
  ],
  "Ủy viên thường trực của Hội đồng khen thưởng và Hội đồng kỷ luật sinh viên là ai?": [
    "Trưởng ban Ban Công tác sinh viên."
  ],
  "Bác Hồ đã về thăm Trường Đại học Bách khoa Hà Nội bao nhiêu lần?": [
    "2 lần"
  ],
  "Khi học cùng lúc hai chương trình, các học phần chung giữa hai CTĐT sẽ được xử lý như thế nào cho CTĐT thứ hai?": [
    "Được công nhận và tính điểm cho cả CTĐT thứ hai"
  ],
  "Mức trừ điểm nặng nhất (-50 điểm) áp dụng cho hành vi vi phạm nào?": [
    "Vi phạm pháp luật thuộc nhóm tội danh hình sự."
  ],
  "Đối với sinh viên bị kỷ luật cảnh cáo, quyết định kỷ luật sẽ chấm dứt hiệu lực sau bao lâu nếu không tái phạm?": [
    "12 tháng."
  ],
  "Theo Quy chế 2025, định nghĩa \"Nghỉ học tạm thời\" là việc nghỉ học có hiệu lực từ bao lâu?": [
    "Từ 01 học kỳ trở lên"
  ],
  "Đạt danh hiệu \"Sinh viên 5 tốt\" từ cấp Đại học trở lên sẽ được ghi nhận bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Chức năng chính của Ban Công tác sinh viên là gì?": [
    "Quản lý, tư vấn và hỗ trợ người học, tổ chức các hoạt động xã hội"
  ],
  "Điểm chữ đặc biệt nào đã bị loại bỏ trong Quy chế 2025?": [
    "Điểm K (điểm học phần khi nghỉ học tạm thời)"
  ],
  "Mức điểm tối đa cho tiêu chí \"Điểm học tập\" (TC1) trong khung đánh giá là bao nhiêu?": [
    "25 điểm"
  ],
  "Tổng điểm tối đa cho tiêu chí \"Điểm ý thức công dân trong quan hệ cộng đồng\" (TC4) là bao nhiêu?": [
    "25 điểm"
  ],
  "Sinh viên \"Hiểu biết và chấp hành pháp luật của Nhà nước, quy định của nhà trường và nơi cư trú\" sẽ được cộng bao nhiêu điểm?": [
    "8 điểm"
  ],
  "Một trong các tiêu chí quan trọng để đánh giá hoạt động CVHT và QLLSV của đơn vị quản ngành là gì?": [
    "Mức độ hài lòng của sinh viên đối với công tác này."
  ],
  "Nội dung xử lý vi phạm đối với sinh viên trong Quy chế 2025 (Điều 20) có thay đổi lớn nào so với phiên bản 2023?": [
    "Chuyển các quy định chi tiết sang một văn bản riêng (Quy chế công tác sinh viên)"
  ],
  "Ban Khoa học & Công nghệ có nhiệm vụ chính là gì?": [
    "Quản lý, hỗ trợ các đơn vị và cá nhân trong hoạt động nghiên cứu và đổi mới sáng tạo"
  ],
  "Quy định về trang phục khi đến trường của sinh viên Bách khoa là gì?": [
    "Mặc trang phục giản dị, kín đáo, gọn gàng, lịch sự, phù hợp với môi trường học đường."
  ],
  "Học bổng Trần Đại Nghĩa có mấy mức và giá trị của các mức đó là bao nhiêu?": [
    "2 mức, tương ứng 50% và 100% học phí"
  ],
  "Sinh viên có điểm CPA từ bao nhiêu trở lên có thể đề nghị xét chuyển vào CTĐT Tài năng sau khi kết thúc năm thứ hai?": [
    "3.2"
  ],
  "Theo các nguồn tài liệu, ngoài việc tư vấn cho sinh viên, \"Điểm tựa yêu thương\" còn hướng đến đối tượng nào sau đây?": [
    "Giảng viên và cán bộ trong trường"
  ],
  "Điều kiện tối thiểu để sinh viên được xét cấp Học bổng Trao đổi sinh viên là gì?": [
    "Từ năm thứ 3, $CPA\ge3.2,$ ĐRL tích lũy $\ge80$"
  ],
  "Quỹ đầu tư mạo hiểm BKFund được xây dựng từ nguồn lực nào và có sứ mệnh chính là gì?": [
    "Từ mạng lưới Cựu sinh viên, nhằm đầu tư, ươm tạo các startup của cán bộ, sinh viên, cựu sinh viên."
  ],
  "Sinh viên thuộc diện được vay vốn tại Ngân hàng chính sách có thể nhận được định mức vay tối đa là bao nhiêu?": [
    "4.000.000đ/sinh viên/tháng."
  ],
  "Điểm đạt tối thiểu đối với học phần tốt nghiệp (Đồ án/Khóa luận tốt nghiệp Cử nhân) là điểm nào?": [
    "Điểm D+"
  ],
  "Sinh viên tham gia hỗ trợ công tác CVHT cần đáp ứng tiêu chuẩn nào?": [
    "Là sinh viên từ năm thứ 3 trở đi, có kết quả học tập và rèn luyện từ loại giỏi trở lên."
  ],
  "Cán bộ QLLSV có nhiệm vụ liên hệ với gia đình sinh viên trong trường hợp nào?": [
    "Khi sinh viên bị cảnh báo học tập, bị xử lý kỷ luật, đình chỉ hoặc buộc thôi học."
  ],
  "Hồ sơ quản lý quá trình học tập, rèn luyện của sinh viên KHÔNG bao gồm nội dung nào sau đây?": [
    "Thông tin tài chính cá nhân của gia đình sinh viên."
  ],
  "Theo Quy chế 2025, người học có được thi lại cuối kỳ cho các học phần bị điểm F không?": [
    "Không có lần thi lại đối với tất cả các hình thức đào tạo"
  ],
  "Điểm rèn luyện toàn khóa của sinh viên được tính như thế nào?": [
    "Là trung bình cộng của điểm rèn luyện tất cả các học kỳ."
  ],
  "Nguyên tắc cốt lõi nào trong quản lý ngân sách được nhấn mạnh cho sinh viên?": [
    "Luôn giữ cho chi tiêu nhỏ hơn thu nhập và tiết kiệm trước khi chi tiêu."
  ],
  "Trường hợp nào sau đây sinh viên sẽ KHÔNG được xét cấp học bổng KKHT?": [
    "Đăng ký học 5 tín chỉ tại học kỳ cấp học bổng"
  ],
  "Theo Bộ Quy tắc ứng xử, hành vi nào sau đây sinh viên không được phép thực hiện trong giờ học khi chưa có sự đồng ý của giáo viên?": [
    "Lên án những hành vi làm xấu đi mối quan hệ thầy – trò"
  ],
  "Nội dung giáo dục pháp luật đối với sinh viên tập trung vào các vấn đề nào?": [
    "Các quy chế về học tập và rèn luyện; pháp luật về phòng chống tội phạm, tệ nạn xã hội; Luật an ninh mạng; đảm bảo trật tự an toàn giao thông."
  ],
  "Sinh viên có hành vi đánh bạc lần thứ ba sẽ bị xử lý theo hình thức nào?": [
    "Đình chỉ học tập 1 năm học."
  ],
  "Hành vi nào sau đây sinh viên KHÔNG được làm?": [
    "Gian lận trong học tập, kiểm tra, thi cử như quay cóp, mang tài liệu không được phép vào phòng thi."
  ],
  "Theo Giám đốc, đâu KHÔNG phải là một trong bốn giá trị cốt lõi của người Bách khoa?": [
    "Kỷ luật"
  ],
  "Yếu tố nào dùng để giới hạn số tín chỉ đăng ký của sinh viên đã bị loại bỏ trong Quy chế 2025?": [
    "Tình trạng chưa đạt chuẩn ngoại ngữ theo trình độ năm học"
  ],
  "Khi nào sinh viên bị nâng hai mức cảnh báo học tập trong một học kỳ?": [
    "Khi có số TC không đạt trong học kỳ lớn hơn 16 hoặc tự ý bỏ học"
  ],
  "Theo Bộ Quy tắc ứng xử, sinh viên nên có thái độ như thế nào khi bạn bè có quan điểm hoặc lối sống khác biệt?": [
    "Biết lắng nghe và tôn trọng sự khác biệt của nhau."
  ],
  "Sinh viên có ý tưởng về khởi nghiệp và đổi mới sáng tạo có thể tìm kiếm sự hỗ trợ từ đơn vị nào?": [
    "Trung tâm Sáng tạo & Khởi nghiệp sinh viên"
  ],
  "Quy định đánh giá kết quả rèn luyện của sinh viên Đại học Bách khoa Hà Nội áp dụng cho đối tượng nào?": [
    "Sinh viên đại học hình thức đào tạo chính quy, không bao gồm lưu học sinh nước ngoài."
  ],
  "Theo Khung đánh giá năm học 2024-2025, sinh viên có điểm GPA 3.5 sẽ được bao nhiêu điểm rèn luyện ở mục kết quả học tập?": [
    "18 điểm"
  ],
  "Đơn vị nào chịu trách nhiệm cung cấp kết quả điểm học tập và danh sách cảnh báo học tập cho Ban Công tác Sinh viên?": [
    "Ban Đào tạo."
  ],
  "Sinh viên hỗ trợ công tác CVHT được hưởng quyền lợi nào sau đây?": [
    "Được cộng điểm rèn luyện vào cuối học kỳ nếu hoàn thành nhiệm vụ."
  ],
  "Đơn vị nào chịu trách nhiệm quản lý, vận hành và khai thác cơ sở vật chất, hạ tầng công nghệ thông tin và cảnh quan của Đại học?": [
    "Ban Cơ sở vật chất"
  ],
  "Yêu cầu trọng tâm đối với công tác CVHT và QLLSV là gì?": [
    "Tạo động lực học tập tích cực cho sinh viên."
  ],
  "Để đạt được Học bổng Khuyến khích học tập (KKHT) loại Xuất sắc, sinh viên cần đáp ứng điều kiện nào?": [
    "$GPA\ge3.6$ và Điểm rèn luyện học $k\dot{y}\ge90$ điểm"
  ],
  "Đại học Bách khoa Hà Nội đã được Nhà nước trao tặng Huân chương Hồ Chí Minh tổng cộng bao nhiêu lần?": [
    "2 lần"
  ],
  "Hình thức kỷ luật \"Buộc thôi học\" được áp dụng trong trường hợp nào?": [
    "Sinh viên đang trong thời gian bị đình chỉ học tập mà vẫn tiếp tục vi phạm kỷ luật hoặc vi phạm lần đầu nhưng có tính chất và mức độ đặc biệt nghiêm trọng."
  ],
  "Một sinh viên đang bị cảnh báo học tập mức 3 sẽ được hạ xuống mức 2 nếu đáp ứng điều kiện nào?": [
    "Có số TC không đạt trong học kỳ nhỏ hơn hoặc bằng 4"
  ],
  "Đâu KHÔNG phải là nhiệm vụ của một Cố vấn học tập (CVHT)?": [
    "Chủ trì họp lớp đánh giá kết quả rèn luyện của sinh viên."
  ],
  "Theo Thông tư 10/2016/TT-BGDĐT, vai trò của CVHT và QLLSV là gì?": [
    "Là cầu nối giữa Sinh viên với Nhà trường và gia đình."
  ],
  "Kết quả đánh giá rèn luyện của sinh viên được sử dụng vào mục đích nào sau đây?": [
    "Xét duyệt học bổng, xét khen thưởng, xét tham gia các hoạt động giao lưu, trao đổi sinh viên quốc tế."
  ],
  "Sinh viên học cùng lúc hai chương trình phải đăng ký tốt nghiệp như thế nào?": [
    "Đăng ký tốt nghiệp CTĐT thứ nhất trước, sau đó mới đến CTĐT thứ hai"
  ],
  "Sinh viên bị buộc thôi học trong trường hợp nào sau đây?": [
    "Bị cảnh báo học tập mức 3 lần thứ hai liên tiếp"
  ],
  "Kết quả đánh giá rèn luyện của sinh viên được công bố công khai bao lâu trước khi ban hành quyết định chính thức?": [
    "7 ngày"
  ],
  "Sinh viên nào được tặng danh hiệu “Sinh viên tốt nghiệp thủ khoa”?": [
    "Sinh viên đạt danh hiệu “Sinh viên tốt nghiệp xuất sắc” có kết quả học tập toàn khóa cao nhất của đơn vị quản ngành và không có học phần không đạt."
  ],
  "Nhiệm vụ nào sau đây thuộc về cán bộ QLLSV?": [
    "Kịp thời báo cáo lãnh đạo đơn vị về các sinh viên có kết quả học tập và rèn luyện yếu, kém."
  ],
  "Theo nguyên tắc quản lý chi tiêu hiệu quả được đề cập trong tài liệu, sinh viên nên phân bổ thu nhập của mình theo tỷ lệ nào?": [
    "50% cho chi tiêu thiết yếu, 30% cho hưởng thụ, 20% cho tiết kiệm."
  ],
  "Nhà trường đã đưa ra những cam kết nào để đồng hành cùng sinh viên trong năm học mới?": [
    "Đổi mới chương trình đào tạo, nâng cấp cơ sở vật chất, mở rộng hợp tác quốc "
  ],
  "Đại học Bách khoa Hà Nội đã vinh dự được Nhà nước trao tặng danh hiệu Anh hùng lao động trong thời kỳ đổi mới vào thời gian nào?": [
    "Tháng 8/2000"
  ],
  "Một cán bộ lớp hoàn thành xuất sắc nhiệm vụ được tập thể công nhận sẽ được cộng bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Sinh viên không bị cấm thi của tất cả các học phần trong kỳ học sẽ được cộng bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Nếu người hướng dẫn hoặc người phản biện cho điểm ĐATN dưới 5, sinh viên sẽ bị xử lý như thế nào?": [
    "Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng là 0 điểm"
  ],
  "Hành vi nào sau đây bị nghiêm cấm trong ứng xử với bạn bè, đặc biệt trên không gian mạng?": [
    "Sử dụng mạng xã hội để nói xấu, bôi nhọ hoặc kích động hận thù."
  ],
  "Theo sổ tay sinh viên 2025, sinh viên nên xây dựng một quỹ dự phòng với số tiền tối thiểu tương đương bao nhiêu tháng chỉ tiêu thiết yếu để sử dụng cho các trường hợp khẩn cấp như ốm đau, tai nạn?": [
    "3 tháng."
  ],
  "Trong trường hợp nào sinh viên có thể đề nghị rút học phần mà không phải đóng học phí cho học phần đó?": [
    "Rút học phần trong tuần đầu tiên của học kỳ 1"
  ],
  "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm?": [
    "-15 điểm"
  ],
  "Quy chế 2025 quy định điểm liệt đối với các học phần thông thường (không phải đồ án/khóa luận tốt nghiệp) là bao nhiêu?": [
    "Dưới 3 điểm"
  ],
  "Đâu là một trong những sứ mệnh chính của Tổ tư vấn và hỗ trợ sinh viên?": [
    "Hỗ trợ sinh viên gặp khó khăn về học tập và tâm lý, cải thiện phương pháp học và kỹ năng sống."
  ],
  "Việc tham gia chiến dịch tình nguyện \"mùa hè xanh\" được cộng bao nhiêu điểm?": [
    "6 điểm"
  ],
  "Đại diện cho lớp sinh viên là ai?": [
    "Ban cán sự lớp gồm lớp trưởng và tối đa 2 lớp phó."
  ],
  "Một trong những điều kiện để được xem xét mở \"lớp học phần rút gọn\" là gì?": [
    "Sinh viên đã học học phần đó ít nhất 02 lần nhưng chưa đạt"
  ],
  "Trường hợp nào sinh viên không được xét khen thưởng?": [
    "Sinh viên đang trong thời gian xem xét kỷ luật hoặc đang trong thời gian thi hành kỷ luật."
  ],
  "Đối với sinh viên bị kỷ luật khiển trách, quyết định kỷ luật sẽ chấm dứt hiệu lực sau bao lâu nếu không tái phạm?": [
    "3 tháng."
  ],
  "Hình thức tư vấn nào sau đây KHÔNG được liệt kê trong các chương trình của Tổ tư vấn và hỗ trợ sinh viên?": [
    "Tư vấn: Khởi nghiệp và đầu tư mạo hiểm"
  ],
  "Đơn vị nào là đầu mối, chủ trì hoạt động đánh giá kết quả rèn luyện cho sinh viên?": [
    "Ban Công tác Sinh viên"
  ],
  "Đâu là một trong những khó khăn mà cán bộ làm công tác CVHT và QLLSV thường gặp phải?": [
    "Hạn chế về mặt thời gian do đây là công tác kiêm nhiệm."
  ],
  "Khối lượng học tập tối thiểu đối với chương trình Tiến sĩ (dành cho người đã tốt nghiệp Thạc sĩ) theo Quy chế 2025 là bao nhiêu?": [
    "90 tín chỉ"
  ],
  "Đơn vị quản ngành cần thành lập bộ phận nào để tổ chức và điều phối hoạt động tư vấn cho người học?": [
    "Ban Cố vấn học tập."
  ],
  "Mức điểm tối đa cho tiêu chí \"Điểm về ý thức tổ chức kỷ luật\" (TC2) là bao nhiêu?": [
    "25 điểm"
  ],
  "Sinh viên đạt chứng chỉ ngoại ngữ tương đương TOEIC 600 điểm trở lên sẽ được cộng bao nhiêu điểm rèn luyện?": [
    "4 điểm"
  ],
  "Theo Phụ lục về khung xử lý kỷ luật, hành vi nhờ người khác vào phòng thi để thi thay hoặc vào phòng thi thay người khác lần đầu sẽ bị xử lý như thế nào?": [
    "Buộc thôi học."
  ],
  "Danh hiệu “Sinh viên xuất sắc năm học” được tặng cho sinh viên đáp ứng điều kiện nào?": [
    "Đồng thời có kết quả học tập và kết quả rèn luyện trung bình năm học đạt loại xuất sắc."
  ],
  "Sinh viên được hưởng quyền lợi nào sau đây theo Quy chế?": [
    "Được sử dụng học liệu, thiết bị và phương tiện phục vụ học tập, nghiên cứu khoa học theo quy định."
  ],
  "Hành vi thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?": [
    "-50 điểm"
  ],
  "Sinh viên có nhu cầu tư vấn trực tiếp có thể tìm đến Tổ tư vấn và hỗ trợ sinh viên (\"Điểm tựa yêu thương\") tại địa chỉ nào?": [
    "Phòng 101 - Nhà C1"
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

        const optioninputs = document.querySelectorAll(`[value*='${answerNormalized}']`); //fix trường hợp khi answerNormalized có chứa " "

        optioninputs.forEach((optioninput) => {
          if (!optioninput.checked && optioninput.value.includes(answerNormalized)) { //có 1 vài câu hỏi thừa dấu cách ở cuối, k dùng === được
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
