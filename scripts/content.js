// Danh sách các câu trả lời đã biết, mỗi câu có thể có nhiều đáp án đúng
const answers = {
  // đáp án quy chế 2025.1
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
    "Từ năm thứ 3, CPA ≥ 3.2, ĐRL tích lũy ≥ 80"
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
    "GPA ≥ 3.6 và Điểm rèn luyện học kỳ ≥ 90 điểm "
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
  "Theo sổ tay sinh viên 2025, sinh viên nên xây dựng một quỹ dự phòng với số tiền tối thiểu tương đương bao nhiêu tháng chi tiêu thiết yếu để sử dụng cho các trường hợp khẩn cấp như ốm đau, tai nạn?": [
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
  ],

  //đáp án pháp luật 2025.1
  "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?": [
    "Tôn trọng giảng viên, cán bộ và các sinh viên khác",
    "Được cung cấp đầy đủ thông tin về chương trình đào tạo và quy chế học tập"
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
  // "Ai có quyền quyết định thành lập trường đại học công lập?": [
  //   "Được tôn trọng và bảo vệ danh dự, nhân phẩm"
  // ],
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
    "Khi trường công khai điểm thi mà không được đồng ý"
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
    "Thủ tướng Chính phủ",
    "Được tôn trọng và bảo vệ danh dự, nhân phẩm"
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
  // "Theo Luật Giáo dục Đại học 2018, trách nhiệm nào sau đây là bắt buộc đối với sinh viên?": [
  //   "Được cung cấp đầy đủ thông tin về chương trình đào tạo và quy chế học tập"
  // ],
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
  const inputExep = document.querySelector('textarea[placeholder="Nhập câu trả lời của bạn"], textarea[placeholder="Enter your answer"]');
  if (inputExep) {
    inputExep.value = 'Thượng tôn pháp luật là việc coi pháp luật là chuẩn mực cao nhất trong xã hội, mọi người đều bình đẳng và phải tuân thủ pháp luật, không ai được đứng trên pháp luật. Là sinh viên, để trở thành công dân tốt, chúng ta cần học tập, rèn luyện ý thức chấp hành pháp luật, tôn trọng quyền và lợi ích hợp pháp của người khác, sống trung thực, có trách nhiệm, tích cực tham gia các hoạt động vì cộng đồng và góp phần xây dựng một xã hội văn minh, công bằng, kỷ cương.';
  } else {
    console.error("Không tìm thấy ô nhập liệu!");
  }
  const spans = document.querySelectorAll(".text-format-content");
  
  // // Bắt ngoại lệ từ form
  // const exep1 = document.querySelector(`[value="Kết luận 121, 126 và 127 của Trung ương và Bộ Chính trị"]`);
  // const exep2 = document.querySelector(`[value='"Diệt giặc đói, giặc dốt, giặc ngoại xâm"']`);
  // const exep3 = document.querySelector(`[value='"Tất cả đều phải theo kế hoạch"']`);
  // const exep4 = document.querySelector(`[value*='Trong cơ quan, tổ chức, đơn vị khu vực nhà nước và doanh nghiệp, tổ chức khu vực']`);
  // const exep5 = document.querySelector(`[value*='Sinh viên có thể tự lập kế hoạch học tập dựa trên "Kế hoạch học tập chuẩn"']`);
  // const exep6 = document.querySelector(`[value='Cả 3 phương án trên']`);
  // const exep7 = document.querySelector(`[value='GPA ≥ 3,2; Điểm RL ≥ 80 ']`)
  // const exep8 = document.querySelector(`[value*='Đảm bảo công tác sinh viên phù hợp với chủ trương của Đảng']`)
  // const exep9 = document.querySelector(`[value='Xem xét xử lý tương đương mức cảnh báo học tập mức 2']`)
  // const exep10 = document.querySelector(`[value='2.07']`)
  // const exep11 = document.querySelector(`[value*='Có ý thức, trách nhiệm']`)

  // const clickOption = (element) => {
  //   try {
  //     if (element) {
  //       element.click();
  //       console.log('Clicked the option successfully.');
  //     } else {
  //       console.warn('Element not found.');
  //     }
  //   } catch (error) {
  //     console.error('Error occurred while clicking:', error);
  //   }
  // };
  
  // clickOption(exep1);
  // clickOption(exep2);
  // clickOption(exep3);
  // clickOption(exep4);
  // clickOption(exep5);
  // clickOption(exep6);
  // clickOption(exep7);
  // clickOption(exep8);
  // clickOption(exep9);
  // clickOption(exep10);
  // clickOption(exep11);

  spans.forEach((span) => {
    const questionText = span.innerText.trim().replace(/\s+/g, " ");

    if (answers[questionText]) {
      const answersList = Array.isArray(answers[questionText])
        ? answers[questionText]
        : [answers[questionText]];

      const parrentDiv = span.closest('div[data-automation-id="questionItem"]');

      answersList.forEach((answer) => {
        const answerNormalized = answer.trim();

        //chỉ query trong câu hỏi, tránh trường hợp có nhiều đáp án giống nhau ở câu hỏi khác nhau
        const optioninputs = parrentDiv.querySelectorAll(`[value*='${answerNormalized}']`); //fix trường hợp khi answerNormalized có chứa " "

        optioninputs.forEach((optioninput) => {
          if (!optioninput.checked && optioninput.value.trim() == answerNormalized) { //có 1 vài đáp án thừa dấu cách ở cuối, cần trim() trước khi so sánh
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
