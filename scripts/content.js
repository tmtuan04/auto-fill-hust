// Đáp án Quy chế kỳ 2026.1 (200 câu), mỗi câu có thể có nhiều đáp án đúng
// Nguồn đáp án tham khảo: https://www.facebook.com/sandrlH/posts/pfbid06WeS1cwPaN6S2RtmYufRVQCeiy7jBNQbwfaUNZ5dFg6dTcF64WQkuSrgm4GikKh2l
const answers = {
    "Sinh viên được điều động vào lực lượng vũ trang nghỉ học tạm thời thì thời gian nghỉ được tính như thế nào?":
        ["Không tính vào thời gian học chậm tiến độ"],
    "Văn bản pháp lý của Chính phủ quy định về chính sách học phí, miễn giảm học phí áp dụng cho năm học 2026-2027 tại ĐHBK Hà Nội là văn bản nào?":
        ["Nghị định 238/2025/NĐ-CP ngày 03/09/2025"],
    "Chính sách hỗ trợ phần chênh lệch học phí cho sinh viên diện Chế độ chính sách (CĐCS) KHÔNG áp dụng cho khối chương trình nào?":
        ["Chương trình thạc sĩ"],
    "Theo quy tắc quy đổi, chứng chỉ APTIS ESOL trình độ A2 (chỉ thể hiện 1 mức năng lực) được xếp vào bậc cơ sở nào trong Bảng quy đổi?":
        ["Bậc 2.1"],
    "Chứng chỉ tiếng Nhật JLPT trình độ N2 tương đương với Bậc mấy theo Khung 6 bậc?":
        ["Bậc 4"],
    "Mức điểm IELTS Academic đạt từ 8.5 đến 9.0 được Bảng 2.1 quy đổi tương đương Bậc mấy theo Khung 6 bậc?":
        ["Bậc 6 (CEFR C2)"],
    "Theo quy tắc quy đổi từ dải điểm thang 4 sang thang điểm 10 tương đương, điểm CPA từ 2,0 đến cận 2,5 tương ứng với dải điểm thang 10 nào?":
        ["5,5 đến cận 7,0"],
    "Kênh thanh toán học phí trực tuyến chính thức và an toàn dành cho sinh viên ĐHBK Hà Nội là gì?":
        ["Nộp trên Cổng thông tin sinh viên ctt.hust.edu.vn / app eHUST qua tài khoản ngân hàng liên kết"],
    "Sinh viên đăng ký học lại học phần đã đạt điểm D để cải thiện điểm CPA có phải đóng học phí không?":
        ["Phải đóng 100% học phí theo số TCHP đăng ký"],
    "Sinh viên K71 đăng ký học các lớp tiếng Anh tăng cường/dịch vụ ngoài giờ có phải nộp học phí không?":
        ["Phải nộp học phí theo quy định đối với lớp học phần dịch vụ/tăng cường"],
    "Để đạt Học bổng KKHT loại Xuất sắc (loại A), sinh viên cần đạt tiêu chuẩn GPA và điểm rèn luyện (ĐRL) học kỳ tối thiểu là bao nhiêu?":
        ["GPA ≥ 3,6 và ĐRL ≥ 90"],
    "Điều kiện học tập đối với sinh viên từ năm thứ hai trở đi để đăng ký Chương trình Vay vốn tín dụng ưu đãi STEM là gì?":
        ["Kết quả học tập trung bình (GPA) năm học liền trước đạt loại Giỏi trở lên (từ 3,2 trở lên)"],
    "Chuẩn ngoại ngữ đầu ra đối với Chương trình đào tạo Tiếng Hàn Khoa học và Công nghệ quy định ra sao?":
        ["Ngoại ngữ 1 (Tiếng Hàn) đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3"],
    "Sinh viên có quyền nộp đơn xin tự nguyện thôi học không và sau khi ra quyết định có được tiếp nhận trở lại không?":
        ["Được xin thôi học nhưng không được tiếp nhận trở lại"],
    "Học phí tại Đại học Bách khoa Hà Nội được tính dựa trên đơn vị đo lường nào?":
        ["Số tín chỉ học phí (TCHP) của các học phần đăng ký"],
    "Theo Quy chế đào tạo 2025, điều kiện trùng lặp nội dung chuyên môn tối thiểu giữa hai học phần để được xem là \"học phần tương đương\" là bao nhiêu?":
        ["80%"],
    "Mức học phí áp dụng đối với sinh viên quốc tế học các chương trình đào tạo bằng tiếng Anh được tính như thế nào?":
        ["Bằng 1,5 lần mức học phí quy định tương ứng"],
    "Sinh viên đã có quyết định buộc thôi học, nếu thi lại và trúng tuyển mới vào trường thì việc công nhận học phần cũ được xử lý ra sao?":
        ["Phải học lại toàn bộ chương trình, ngoại trừ học phần Giáo dục quốc phòng - an ninh đã được cấp chứng chỉ"],
    "Cổng thông tin chính thức hỗ trợ hướng nghiệp, tìm kiếm việc làm thêm và thực tập dành cho sinh viên Bách khoa có tên là gì?":
        ["Cổng thông tin HustWork (hustwork.hust.edu.vn)"],
    "Học phần \"Tiếng Pháp PFIEV 1\" (mã FL1801) có khối lượng thời lượng quy định là bao nhiêu?":
        ["4(2-4-0-8)"],
    "Quyết định ban hành Quy định về phân loại trình độ đầu vào và chuẩn ngoại ngữ K71 do lãnh đạo nào ký phê duyệt?":
        ["Phó Giám đốc GS.TS. Vũ Văn Yêm"],
    "Trường hợp nào sau đây KHÔNG thuộc diện xét cấp Học bổng Trần Đại Nghĩa?":
        ["Sinh viên bị kỷ luật từ mức cảnh cáo trở lên hoặc đã nhận học bổng khác trên 10 triệu đồng"],
    "Sinh viên mồ côi cả cha lẫn mẹ thuộc Nhóm 3 khi đăng ký Học bổng Trần Đại Nghĩa được hưởng mức học bổng là bao nhiêu?":
        ["100% học phí của các học phần trong chương trình đào tạo tại học kỳ xét"],
    "Học phần \"FL1132 Tiếng Anh cơ sở 2\" có thời lượng và số tín chỉ quy định là bao nhiêu?":
        ["3(3-0-0-6)"],
    "Học viên tốt nghiệp đại học ngành phù hợp khi theo học chương trình Thạc sĩ phải học bổ sung tối đa bao nhiêu tín chỉ?":
        ["Học bổ sung tối đa 15 tín chỉ"],
    "Quy đổi khối lượng học tập hệ đại học chính quy: 1 TCHT của học phần \"Thí nghiệm / Thực hành thông thường\" bằng bao nhiêu Tín chỉ học phí (TCHP)?":
        ["1,5 TCHP"],
    "Không gian sinh hoạt chung dành cho sinh viên nội trú Ký túc xá nằm tại tầng mấy của tòa nhà B10?":
        ["Tầng 5 - Tòa nhà B10"],
    "Sinh viên nộp chậm học phí học kỳ hè quá thời hạn quy định sẽ bị xử lý như thế nào?":
        ["Bị hủy kết quả đăng ký học phần trong học kỳ hè đó"],
    "Theo Bảng 2.1 Phụ lục II, chứng chỉ IELTS Academic đạt mức điểm 2.0 được quy đổi tương đương Bậc cơ sở nào?":
        ["Không được quy đổi"],
    "Hệ số học phí áp dụng đối với các lớp học lại tổ chức ngoài kế hoạch theo đề nghị của sinh viên có sĩ số dưới 10 sinh viên là bao nhiêu?":
        ["Hệ số 2,0"],
    "Sinh viên tham gia đầy đủ Tuần sinh hoạt công dân do Nhà trường tổ chức được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 6 điểm"],
    "Nhà trường có công nhận chứng chỉ tiếng Anh thi theo hình thức trực tuyến tại nhà (ví dụ: TOEFL iBT Home Edition) không?":
        ["Không công nhận các chứng chỉ tiếng Anh cấp trên cơ sở thi trực tuyến tại nhà"],
    "Sinh viên không thể dự thi cuối kỳ do bị ốm hoặc tai nạn có hồ sơ hợp lệ được hoãn thi (điểm I) và dự thi bù trong thời hạn tối đa bao lâu?":
        ["Trong thời hạn 2 học kỳ chính tiếp theo"],
    "Mức điểm đạt đối với các học phần thuộc chương trình đào tạo cử nhân và kỹ sư (ngoại trừ học phần tốt nghiệp) là từ mức điểm chữ nào?":
        ["Từ điểm D trở lên"],
    "Quy định về chương trình ngoại ngữ cơ bản K71 KHÔNG áp dụng cho đối tượng sinh viên nào?":
        ["Sinh viên ngành Ngôn ngữ Anh"],
    "Văn phòng làm việc của Hội Sinh viên Đại học Bách khoa Hà Nội đặt tại vị trí nào?":
        ["Phòng 106 - Nhà D4"],
    "Sinh viên thuộc Nhóm 3 trong đối tượng xét cấp Học bổng Trần Đại Nghĩa là ai?":
        ["Sinh viên mồ côi cả cha và mẹ, không có nguồn nuôi dưỡng và không thuộc diện miễn 100% HP do quá 22 tuổi"],
    "Học phí các học phần thuộc hệ Vừa làm vừa học hoặc Sau đại học được thực hiện tại cơ sở liên kết ngoài Đại học được tính bằng bao nhiêu % so với chương trình chuẩn?":
        ["Bằng 90% học phí chương trình chuẩn, cộng thêm kinh phí phối hợp đào tạo"],
    "Trong buổi bảo vệ Đồ án tốt nghiệp tại hội đồng, nếu có 1 thành viên hội đồng cho điểm dưới 5 thì điểm bảo vệ cuối kỳ của sinh viên được tính như thế nào?":
        ["Bị tính là điểm liệt và chỉ được ghi tối đa là 4,9 điểm"],
    "Sinh viên có hành vi vi phạm kỷ luật khi thi hộ hoặc nhờ thi hộ sẽ bị trừ bao nhiêu điểm rèn luyện?":
        ["Trừ 20 điểm"],
    "Sinh viên học cùng lúc hai chương trình đào tạo (bằng kép) cần lưu ý quy định gì về việc đăng ký tốt nghiệp?":
        ["Bắt buộc phải đăng ký tốt nghiệp đồng thời trong cùng một đợt cho cả hai CTĐT"],
    "Mức học phí/1 TCHP của Chương trình đào tạo Kỹ sư chuyên sâu Trí tuệ nhân tạo tạo sinh (GenAI) được tính bằng mức học phí của chương trình cử nhân nào?":
        ["Chương trình Khoa học dữ liệu và Trí tuệ nhân tạo (IT-E10)"],
    "Số điện thoại đường dây nóng (Hotline) chính thức của Tổ tư vấn và hỗ trợ sinh viên (SSU) là số nào?":
        ["024 3869 2942"],
    "Việc xác nhận Giấy vay vốn ngân hàng cho sinh viên được Ban Công tác sinh viên trả kết quả tại địa điểm nào?":
        ["Nhà B8"],
    "Địa chỉ văn phòng làm việc của Đoàn Thanh niên Đại học Bách khoa Hà Nội nằm tại phòng nào?":
        ["Phòng 208 - Tòa nhà C2"],
    "Kết quả bài thi kiểm tra tiếng Anh đầu khóa (HUST English Placement Test) đối với tân sinh viên K71 được sử dụng để làm gì?":
        ["Phân loại trình độ đầu vào, xếp lớp và xét miễn các học phần ngoại ngữ cơ bản"],
    "Theo hướng dẫn Quản lý tài chính cá nhân trong Sổ tay sinh viên, tỷ lệ 20% thu nhập hàng tháng được khuyên dành cho mục đích nào?":
        ["Dành cho tiết kiệm"],
    "Cơ quan nào chịu trách nhiệm đánh giá khả năng và mức độ ứng dụng thực tế của đề tài ĐATN trong quy trình xét cấp Học bổng \"Gắn kết quê hương\"?":
        ["Hội đồng chấm Đồ án tốt nghiệp"],
    "Trường hợp nào sau đây sinh viên KHÔNG được quyền đề nghị phúc tra hoặc khiếu nại điểm?":
        ["Bài thi trắc nghiệm trên máy tính"],
    "Địa chỉ Văn phòng Tổ tư vấn và hỗ trợ sinh viên (SSU) chuyên tư vấn tâm lý và hỗ trợ học tập nằm tại phòng nào?":
        ["Phòng 101 - Nhà C1"],
    "Mức Học bổng Chính phủ hỗ trợ hàng tháng đối với Học viên Thạc sĩ thuộc Chương trình đào tạo tài năng là bao nhiêu?":
        ["8.400.000 đồng / tháng"],
    "Quỹ học bổng Khuyến khích học tập (KKHT) được trích từ nguồn nào và chiếm tỷ lệ bao nhiêu?":
        ["Trích từ nguồn học phí, bằng 8% học phí của học kỳ lấy điểm xét cấp học bổng"],
    "Bảng quy đổi chứng chỉ ngoại ngữ ban hành kèm Quy định K71 có áp dụng cho sinh viên các khóa cũ (từ K70 trở về trước) không?":
        ["Áp dụng cho toàn bộ sinh viên các khóa đối với chứng chỉ cấp từ ngày quy định có hiệu lực; nếu mức mới khác cũ thì áp dụng mức cao hơn"],
    "Sinh viên đạt danh hiệu \"Sinh viên 5 tốt\" từ cấp Đại học trở lên được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 4 điểm"],
    "Sinh viên học cùng lúc hai chương trình phải đăng ký học chương trình thứ hai muộn nhất trước thời điểm xét tốt nghiệp chương trình thứ nhất là bao lâu?":
        ["Muộn nhất 02 năm trước thời điểm xét tốt nghiệp"],
    "Quy định về \"Học phần song hành\" áp dụng cho hai học phần A và B được hiểu như thế nào?":
        ["Sinh viên phải theo học học phần A trước hoặc học đồng thời với học phần B"],
    "Sinh viên đoạt giải trong các cuộc thi chính thức cấp Quốc gia hoặc Quốc tế được cộng tối đa bao nhiêu điểm rèn luyện ở Mục 5.3?":
        ["Cộng 20 điểm"],
    "Sinh viên không nộp đủ học phí đúng thời hạn quy định sẽ bị xử lý như thế nào?":
        ["Bị đình chỉ đăng ký học tập một học kỳ kế tiếp"],
    "Sau khi có quyết định công nhận tốt nghiệp, Nhà trường sẽ cấp bằng tốt nghiệp cho sinh viên trong thời hạn bao lâu?":
        ["Trong thời hạn 03 tháng"],
    "Điểm thay đổi quan trọng về cấu trúc học kỳ chính trong năm học từ Quy chế 2023 sang Quy chế 2025 là gì?":
        ["Bỏ chia đợt A và B, một năm học bao gồm hai học kỳ chính và một học kỳ hè"],
    "Đối với chương trình đào tạo Thạc sĩ, lớp học phần có quy mô dưới 5 học viên được xem xét tổ chức dưới hình thức nào?":
        ["Mở lớp dưới hình thức đồ án, khóa luận hoặc tiểu luận chuyên đề thay thế giờ lên lớp"],
    "Học phí của các lớp \"Học phần rút gọn\" (cho sinh viên học lại) được tính bằng bao nhiêu so với lớp bình thường?":
        ["Bằng 50%"],
    "Chuẩn ngoại ngữ đầu ra xét tốt nghiệp đối với các chương trình chất lượng cao ELITECH giảng dạy bằng tiếng Pháp là gì?":
        ["Chứng chỉ tiếng Pháp DELF B2 hoặc TCF tương đương"],
    "Mức học phí đối với các học phần học ở học kỳ hè được tính như thế nào so với học kỳ chính?":
        ["Bằng 1,0 lần mức học phí kỳ chính"],
    "Chứng chỉ tiếng Trung HSK 4 kết hợp HSKK trung cấp được Phụ lục VIII xếp vào Bậc mấy theo Khung 6 bậc?":
        ["Bậc 3"],
    "Trường hợp hai sinh viên có cùng điểm GPA ở cuối danh sách xét học bổng, tiêu chí ưu tiên nào được sử dụng để xếp hạng?":
        ["Ưu tiên sinh viên có điểm rèn luyện cao hơn"],
    "Trường hợp sinh viên có đơn xin nghỉ học tạm thời hoặc thôi học được chấp thuận trong 7 tuần đầu của học kỳ chính thì nghĩa vụ học phí là bao nhiêu?":
        ["Phải đóng 50% học phí của học kỳ đó"],
    "Khi đăng ký tốt nghiệp đại học, sinh viên được chọn số tín chỉ tích lũy so với yêu cầu của CTĐT như thế nào?":
        ["Chỉ chọn đủ hoặc không nhiều hơn 3 tín chỉ so với yêu cầu của chương trình"],
    "Kết quả xét duyệt Học bổng KKHT được công bố chậm nhất vào tuần học thứ mấy của học kỳ cấp học bổng?":
        ["Chậm nhất vào tuần học thứ 10"],
    "Theo Quy chế đào tạo 2025, sinh viên bị hạn chế khối lượng đăng ký học tập khi nào?":
        ["Khi bị cảnh báo học tập mức 1"],
    "Sau khi kết quả đánh giá điểm rèn luyện dự kiến được công bố, sinh viên có thời gian tối thiểu bao nhiêu ngày làm việc để nộp kiến nghị nếu có thắc mắc?":
        ["Kết quả dự kiến được công bố ít nhất 05 ngày làm việc trước khi chính thức công nhận để sinh viên kiến nghị"],
    "Sinh viên có hành vi nộp chứng chỉ ngoại ngữ giả mạo để gian lận chuẩn đầu ra sẽ chịu mức xử lý kỷ luật nào?":
        ["Bị đình chỉ học tập hoặc buộc thôi học tùy mức độ nghiêm trọng"],
    "Điểm CPA từ 3,2 đến cận 3,6 khi quy đổi sang dải điểm thang 10 tương đương có kết quả là bao nhiêu?":
        ["8,0 đến cận 9,0"],
    "Theo Quy chế đào tạo 2025, \"Lớp học phần rút gọn\" dành cho sinh viên học lại được mở khi đáp ứng những điều kiện nào?":
        ["Học lại ít nhất 02 lần chưa đạt, điểm quá trình từ 2,0 trở lên, sinh viên từ năm thứ 3 trở lên"],
    "Học bổng Trần Đại Nghĩa là học bổng của ĐHBK Hà Nội dành cho đối tượng sinh viên nào?":
        ["Sinh viên có hoàn cảnh kinh tế gia đình đặc biệt khó khăn, có ý chí vươn lên trong học tập"],
    "Chứng chỉ tiếng Anh quốc tế dùng để xét công nhận chuẩn đầu ra phải đảm bảo điều kiện thời hạn như thế nào?":
        ["Cấp trong vòng 2 năm tính đến thời điểm xét chuẩn ngoại ngữ đầu ra và còn hiệu lực"],
    "Nếu trung bình cộng điểm của người hướng dẫn và người phản biện đồ án tốt nghiệp cho dưới 5,0 thì sinh viên sẽ bị xử lý ra sao?":
        ["Không được phép tham gia bảo vệ và điểm bảo vệ tại hội đồng tính là 0 điểm"],
    "Chứng chỉ IELTS Academic đạt từ 7.0 đến 8.0 được quy đổi tương đương với Bậc mấy theo Phụ lục II Quy định ngoại ngữ K71?":
        ["Bậc 5"],
    "Sinh viên bị buộc thôi học do kết quả học tập yếu kém có quyền đề nghị chuyển sang hình thức đào tạo nào của Nhà trường?":
        ["Chuyển sang hình thức Vừa làm vừa học (VLVH)"],
    "Sinh viên được phép đăng ký học chương trình đào tạo thứ hai (bằng kép) sớm nhất khi nào?":
        ["Khi đã được xếp trình độ năm thứ hai của chương trình thứ nhất"],
    "Theo Quy chế đào tạo 2025 (sửa đổi), điểm liệt đối với học phần đồ án tốt nghiệp/khóa luận tốt nghiệp cử nhân, đồ án tốt nghiệp kỹ sư là bao nhiêu?":
        ["Dưới 5,0"],
    "Sinh viên thực hiện khai báo thông tin liên lạc và nơi cư trú đầy đủ theo yêu cầu của Đại học được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 4 điểm"],
    "Tân sinh viên đạt điểm bài kiểm tra HUST English Placement Test từ 475 đến dưới 545 điểm được xếp vào Nhóm trình độ nào?":
        ["Nhóm 4"],
    "Thời gian hưởng Học bổng Chính phủ tối đa cho sinh viên thuộc chương trình đào tạo Kỹ sư (từ 150 tín chỉ trở lên) là bao nhiêu năm?":
        ["Không quá 05 năm"],
    "Sinh viên đang học cùng lúc hai chương trình đào tạo sẽ bị dừng học chương trình thứ hai khi nào?":
        ["Khi bị cảnh báo học tập ở chương trình thứ nhất"],
    "Giá trị của Học bổng KKHT loại Xuất sắc (loại A) bằng bao nhiêu lần so với loại Khá (loại C)?":
        ["Bằng 1,5 lần"],
    "Sinh viên có cha hoặc mẹ bị tai nạn lao động hưởng trợ cấp thường xuyên được hưởng mức giảm học phí là bao nhiêu?":
        ["Giảm 50% học phí"],
    "Quy mô sức chứa tổng cộng của Ký túc xá Bách khoa hiện nay là bao nhiêu chỗ ở?":
        ["4.500 chỗ ở (gồm 8 tòa nhà 4-5 tầng)"],
    "Ký hiệu \"ĐK\" trong bảng danh mục học phần tiếng Anh cơ bản có ý nghĩa gì?":
        ["Sinh viên tự đăng ký học song hành với các học phần của CTĐT tại kỳ tương ứng nếu chưa học hoặc chưa được miễn"],
    "Học phí học phần \"Giáo dục Quốc phòng - An ninh\" được tính toán dựa trên đơn vị nào?":
        ["Tính theo số TCHP quy đổi của các học phần GDQP-AN"],
    "Yêu cầu về các kỹ năng đối với chứng chỉ tiếng Anh quốc tế được sử dụng để xét chuẩn ngoại ngữ đầu ra là gì?":
        ["Phải đánh giá đầy đủ 4 kỹ năng (Nghe, Nói, Đọc, Viết) và còn hiệu lực trong vòng 2 năm"],
    "Đối với Chương trình đào tạo chuẩn có chuẩn đầu ra là tiếng Anh, yêu cầu trình độ tiếng Anh tối thiểu khi xét tốt nghiệp là gì?":
        ["Có chứng chỉ tiếng Anh quy đổi tương đương từ Bậc 3 trở lên"],
    "Sinh viên nộp hồ sơ văn bản giấy đăng ký Học bổng Trần Đại Nghĩa tại đâu?":
        ["Phòng C1 - 102 (gặp cô Nghiêm Thị Kim Chi)"],
    "Sinh viên thuộc diện Cử tuyển nộp và nhận giấy xác nhận được hưởng học bổng chính sách tại đâu và vào thời gian nào?":
        ["Tại Phòng 102 - Nhà C1 vào đầu các học kỳ"],
    "Nếu sinh viên nộp đơn đề nghị rút học phần trong khoảng 7 tuần đầu của học kỳ chính và được giải quyết, mức học phí phải đóng là bao nhiêu?":
        ["Phải đóng 50% học phí của học phần đó"],
    "Chứng chỉ tiếng Pháp TCF quy đổi tương đương Bậc 3 (B1) yêu cầu điểm số TCF nằm trong khoảng nào?":
        ["300 - 399 điểm"],
    "Chứng chỉ tiếng Anh VSTEP trình độ B1 tương ứng với Bậc mấy trong Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam?":
        ["Bậc 3"],
    "Văn phòng Quản lý Ký túc xá Bách khoa và Trung tâm Dịch vụ & Hỗ trợ Bách khoa nằm tại đâu?":
        ["Tầng 1 - Nhà B9"],
    "Sau thời gian nào hàng ngày, sinh viên không được tự ý tụ tập tại các khu vực công cộng thuộc khuôn viên Nhà trường nếu không được phép?":
        ["Sau 21h00"],
    "Ứng dụng di động chính thức hỗ trợ sinh viên theo dõi Điểm rèn luyện, cập nhật minh chứng và đăng ký hoạt động ngoại khóa là gì?":
        ["App iCTSV"],
    "Chứng chỉ tiếng Hàn TOPIK 4 tương ứng với Bậc mấy trong Khung năng lực 6 bậc?":
        ["Bậc 4"],
    "Sinh viên là người dân tộc thiểu số rất ít người ở vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn được hưởng mức hỗ trợ học phí ra sao?":
        ["Miễn 100% học phí"],
    "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân thông thường (ngoài y tế và nghĩa vụ quân sự) cần đáp ứng điều kiện tối thiểu nào?":
        ["Đã học ít nhất một học kỳ tại trường"],
    "Khái niệm \"Học phần học trước\" khác với \"Học phần tiên quyết\" ở điểm cốt lõi nào?":
        ["Sinh viên chỉ cần đăng ký và học xong học phần A (có thể chưa đạt) là đã đủ điều kiện học học phần B"],
    "Sinh viên có được tự ý hủy lớp học phần ngoại ngữ cơ bản đã đăng ký học song hành trong học kỳ không?":
        ["Không được phép hủy, trừ trường hợp xin rút hoặc chủ động rút toàn bộ đăng ký học tập trong học kỳ"],
    "Việc nộp chứng chỉ ngoại ngữ quốc tế để quy đổi miễn học và công nhận chuẩn đầu ra được sinh viên thực hiện qua kênh nào?":
        ["Đăng ký trực tuyến trên hệ thống quản lý đào tạo (eHUST/QLDT) theo các đợt thông báo"],
    "Điều kiện về điểm CPA để sinh viên đại học đề nghị xét chuyển vào học Chương trình đào tạo Tài năng sau năm thứ hai là gì?":
        ["CPA ≥ 3,2"],
    "Số đợt xét tốt nghiệp đại học trong một năm theo Quy chế đào tạo 2025 được quy định là bao nhiêu đợt?":
        ["5 đợt"],
    "Mức học phí áp dụng đối với sinh viên nước ngoài tự chi trả kinh phí học tập được tính bằng bao nhiêu lần so với quy định chuẩn?":
        ["1,5 lần"],
    "Đối với học phần từ 2 tín chỉ trở lên, nếu sinh viên bị điểm quá trình là điểm liệt (dưới 3,0 hoặc dưới 5,0 tùy môn) thì điểm kết thúc học phần được tính ra sao?":
        ["Điểm học phần là điểm F"],
    "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi THPT yêu cầu điểm quy đổi thang 30 tối thiểu là bao nhiêu?":
        ["Từ 24/30 trở lên"],
    "Thời gian Ban Công tác sinh viên thông báo công khai kế hoạch đăng ký xét Học bổng Trao đổi sinh viên tối thiểu là bao lâu để người học chuẩn bị?":
        ["Tối thiểu 02 tuần"],
    "Sinh viên là con đẻ hoặc con nuôi hợp pháp của Người có công với cách mạng được hưởng mức hỗ trợ miễn giảm học phí là bao nhiêu?":
        ["Miễn 100% học phí"],
    "Các phòng Học nhóm dành cho sinh viên tại Thư viện Tạ Quang Bửu nằm từ phòng 501 đến phòng 508 thuộc tầng mấy?":
        ["Tầng 5 Thư viện Tạ Quang Bửu"],
    "Sinh viên nghỉ học tạm thời phải nộp đơn đề nghị tiếp nhận trở lại học chậm nhất vào thời điểm nào?":
        ["Chậm nhất 01 tuần trước khi bắt đầu học kỳ mới"],
    "Điều kiện về ngoại ngữ để sinh viên chương trình Việt - Pháp PFIEV được đăng ký nhận Phụ lục văn bằng kỹ sư của phía Pháp là gì?":
        ["Đạt tối thiểu DELF B1 và Chứng chỉ TOEIC quốc tế (Nghe & Đọc) đạt từ 600 điểm trở lên"],
    "Mức học phí học lại học phần đối với Nghiên cứu sinh trình độ Tiến sĩ được quy định cụ thể là bao nhiêu?":
        ["850.000 đồng / TCHP"],
    "Học viên thuộc chương trình tích hợp Cử nhân - Thạc sĩ được đăng ký học trước tối đa bao nhiêu tín chỉ thuộc CTĐT thạc sĩ khi còn ở giai đoạn cử nhân?":
        ["Tối đa 15 tín chỉ"],
    "Sinh viên từ K67 đến K70 (Nhóm 2) đăng ký Học bổng Trần Đại Nghĩa cần đạt mức GPA học kỳ 2025.2 tối thiểu là bao nhiêu?":
        ["GPA ≥ 2,0"],
    "Trường hợp ngoại lệ nào sinh viên đề nghị rút học phần mà KHÔNG phải đóng học phí?":
        ["Đề nghị rút trong tuần đầu tiên của học kỳ thứ 2"],
    "Chuẩn tiếng Anh đầu ra đối với sinh viên chương trình liên kết đào tạo với Đại học TROY (Hoa Kỳ) khi xét tốt nghiệp là gì?":
        ["Chứng chỉ IELTS Academic 6.0 trở lên (hoặc TOEFL iBT tương đương)"],
    "Quy định về việc quản lý và sử dụng Thẻ sinh viên khi vào trường như thế nào?":
        ["Phải đeo thẻ sinh viên; Tuyệt đối không cho người khác mượn hoặc mượn thẻ người khác; Không được cầm cố thẻ sinh viên"],
    "Pháp lệnh của Ủy ban Thường vụ Quốc hội quy định ưu đãi người có công với cách mạng được áp dụng trong xét miễn giảm học phí là văn bản nào?":
        ["Pháp lệnh số 02/2020/UBTVQH14 ngày 09/12/2020"],
    "Điều 22 Luật Giáo dục số 43/2019/QH14 nghiêm cấm các hành vi nào trong cơ sở giáo dục?":
        ["Xúc phạm nhân phẩm nhà giáo/người học; Xuyên tạc nội dung giáo dục; Gian lận trong học tập/thi; Hút thuốc, uống rượu bia, gây rối trật tự"],
    "Mức điểm trung bình tích lũy (CPA) tối thiểu sinh viên cần đạt khi xét công nhận tốt nghiệp đại học là bao nhiêu?":
        ["CPA ≥ 2,00"],
    "Đối với sinh viên Nhóm 4 (gặp tai nạn, rủi ro đột xuất), Học bổng Trần Đại Nghĩa hỗ trợ các mức tiền mặt cố định là bao nhiêu?":
        ["5 triệu đồng và 10 triệu đồng"],
    "Chuẩn Ngoại ngữ 2 bắt buộc đối với sinh viên ngành Ngôn ngữ Anh hoặc Tiếng Anh KHKT&CN khi xét tốt nghiệp tối thiểu đạt Bậc mấy?":
        ["Bậc 3"],
    "Sinh viên xin nghỉ học tạm thời vì lý do cá nhân sẽ bị xét buộc thôi học nếu tổng thời gian nghỉ vượt quá bao nhiêu học kỳ chính?":
        ["Nghỉ quá 04 học kỳ chính"],
    "Sinh viên đang chịu hình thức kỷ luật nào tại thời điểm xét học bổng KKHT sẽ KHÔNG được xét cấp học bổng?":
        ["Chịu hình thức kỷ luật từ mức Khiển trách trở lên"],
    "Mức Học bổng Chính phủ hỗ trợ hàng tháng cho Học viên Thạc sĩ ngành Vi mạch bán dẫn và các ngành Khoa học cơ bản là bao nhiêu?":
        ["8.400.000 đồng / tháng"],
    "Học phần \"FL1135 Tiếng Anh cơ sở 5\" có khối lượng thời lượng quy định là bao nhiêu?":
        ["3(3-0-0-6)"],
    "Quy mô lớp học phần tối thiểu đối với chương trình đào tạo thạc sĩ theo Quy chế 2025 được điều chỉnh thành bao nhiêu học viên?":
        ["5 học viên"],
    "Đối với Chương trình đào tạo Kỹ sư chuyên sâu Thiết kế vi mạch, mức học phí/1 TCHP được tính bằng mức học phí của chương trình cử nhân nào?":
        ["Cử nhân Kỹ thuật Điện tử - Viễn thông"],
    "Quy định về phương tiện giao thông di chuyển vào khuôn viên Trường Bách khoa như thế nào?":
        ["Xe đạp, xe máy, ô tô phải giảm tốc độ, quan sát và gửi xe đúng nơi quy định; xe taxi KHÔNG được vào trường"],
    "Theo Quy chế đào tạo, \"Học phần tiên quyết\" của một học phần B được hiểu như thế nào?":
        ["Sinh viên phải học xong học phần A và đạt điểm đạt trở lên mới được đăng ký học học phần B"],
    "Sinh viên được xét \"Miễn học\" học phần ngoại ngữ cơ bản sẽ được ghi ký hiệu điểm gì trên hệ thống?":
        ["Điểm R"],
    "Khối lượng học tập tối đa được xem xét công nhận và chuyển đổi tín chỉ từ một cơ sở đào tạo khác không được vượt quá bao nhiêu % khối lượng toàn khóa?":
        ["Không vượt quá 50%"],
    "Sinh viên không đáp ứng điều kiện phân loại trình độ ngoại ngữ đầu vào sẽ được xếp học như thế nào?":
        ["Được xếp học từ học phần đầu tiên của khối Ngoại ngữ cơ bản tương ứng"],
    "Sinh viên có kết quả học tập và rèn luyện của học kỳ trước đó đạt mức Giỏi (GPA ≥ 3.2, ĐRL ≥ 80) được cộng bao nhiêu điểm rèn luyện?":
        ["Cộng 4 điểm"],
    "Thời gian nghỉ học tạm thời tối đa cho phép đối với lý do cá nhân thông thường là bao nhiêu học kỳ chính?":
        ["04 học kỳ chính (và được tính vào thời gian chậm tiến độ)"],
    "Học viên cao học nghỉ học tạm thời vì lý do cá nhân thông thường được phép nghỉ thời gian tối đa là bao nhiêu?":
        ["Tối đa 12 tháng (và được tính vào thời gian học tập)"],
    "Tân sinh viên K71 đăng ký Học bổng Trần Đại Nghĩa (Nhóm 1) theo điểm thi Đánh giá tư duy (TSA) cần đạt điểm xét tuyển tối thiểu là bao nhiêu?":
        ["Từ 60,00/100 trở lên"],
    "Trong Bảng đánh giá điểm rèn luyện sinh viên, Tiêu chí 1 \"Chấp hành pháp luật và nội quy, quy chế của nhà trường\" có điểm cộng tối đa là bao nhiêu?":
        ["Tối đa 30 điểm"],
    "Sinh viên đăng ký học vượt quá số tín chỉ chuẩn quy định trong một học kỳ có được giảm đơn giá TCHP không?":
        ["Vẫn tính đúng đơn giá TCHP quy định của chương trình đào tạo"],
    "Điều kiện bắt buộc kể từ học kỳ 3 trở đi đối với sinh viên chưa học hoặc chưa được miễn các học phần ngoại ngữ cơ bản (NNCB) để được đăng ký môn khác là gì?":
        ["Bắt buộc phải đăng ký học song hành các học phần NNCB tương ứng ở mỗi kỳ"],
    "Chứng chỉ Aptis ESOL (đủ 4 kỹ năng) đạt trình độ B2 được quy đổi tương đương Bậc mấy?":
        ["Bậc 4"],
    "Sau khi bảo vệ thành công luận văn Thạc sĩ, học viên phải nộp quyển luận văn tốt nghiệp cho Thư viện Tạ Quang Bửu trong thời hạn bao nhiêu ngày?":
        ["Trong thời hạn 20 ngày kể từ ngày bảo vệ thành công"],
    "Sinh viên nghỉ học tạm thời do tai nạn hoặc điều trị bệnh dài ngày sẽ KHÔNG tính vào thời gian chậm tiến độ nếu tổng thời gian nghỉ không vượt quá bao nhiêu học kỳ?":
        ["04 học kỳ chính"],
    "Sinh viên đã hết thời gian học tập tối đa theo quy định nhưng chưa tốt nghiệp do thiếu môn GDQP-AN hoặc GDTC được gia hạn hoàn thiện trong thời gian tối đa bao lâu?":
        ["Trong thời hạn tối đa 03 năm kể từ khi hết thời hạn học tập"],
    "Địa chỉ phòng Mượn giáo trình học tập tại Thư viện Tạ Quang Bửu là phòng nào?":
        ["Phòng 111 Thư viện Tạ Quang Bửu"],
    "Chuẩn ngoại ngữ đầu ra đối với CTĐT Tiếng Anh Khoa học Kỹ thuật và Công nghệ là gì?":
        ["Ngoại ngữ 1 đạt tối thiểu Bậc 5, Ngoại ngữ 2 đạt tối thiểu Bậc 3"],
    "Mức Học bổng Chính phủ (Nghị định 179/2026/NĐ-CP) hỗ trợ hàng tháng cho sinh viên ngành Kỹ thuật then chốt & Công nghệ chiến lược là bao nhiêu?":
        ["5.500.000 đồng / tháng"],
    "Chứng chỉ Cambridge English Qualifications trình độ B2 First (FCE) đạt từ 160-179 điểm được quy đổi sang Bậc mấy?":
        ["Bậc 4"],
    "Trọng số của điểm thi cuối kỳ đối với học phần từ 2 tín chỉ trở lên được quy định nằm trong khoảng nào?":
        ["Từ 0,5 đến 0,8"],
    "Địa điểm tiếp nhận hồ sơ Chế độ chính sách và phát Giấy xác nhận ưu đãi giáo dục cho sinh viên là phòng nào?":
        ["Phòng 101 - Nhà B8"],
    "Điểm chữ \"W\" xuất hiện trong bảng điểm của sinh viên mang ý nghĩa gì?":
        ["Điểm học phần sinh viên đã đăng ký rút thành công trong thời gian quy định"],
    "Điều kiện học lực để sinh viên hết năm thứ nhất được xem xét chuyển sang học một chương trình đào tạo khác là gì?":
        ["CPA ≥ 2,5 (từ loại khá trở lên) và không bị cảnh báo học tập"],
    "Thời gian điều chỉnh đăng ký học phần bổ sung vào các lớp học phần đã mở ở đầu học kỳ chính kéo dài trong bao lâu?":
        ["Kéo dài trong 2 tuần đầu"],
    "Thời gian hưởng Học bổng Chính phủ tối đa cho người học thuộc chương trình đào tạo Cử nhân là bao nhiêu năm?":
        ["Không quá 04 năm"],
    "Hồ sơ đăng ký xét Học bổng Trần Đại Nghĩa bắt buộc phải có giấy tờ xác nhận của cơ quan nào?":
        ["Mẫu đơn đăng ký có xác nhận hoàn cảnh khó khăn của Ủy ban nhân dân địa phương nơi gia đình cư trú"],
    "Khi tham gia các sự kiện, hội họp trong nhà trường, sinh viên phải có mặt trước giờ khai mạc ít nhất bao nhiêu phút?":
        ["Trước 15 phút"],
    "Mức phí thực hiện lại 01 chuyên đề tiến sĩ đối với nghiên cứu sinh được quy định cụ thể là bao nhiêu?":
        ["2.200.000 đồng / chuyên đề"],
    "Nếu sinh viên học một học phần tiếng Anh cơ sở nhưng không đạt điểm kết thúc (bị điểm F), sinh viên phải xử lý ra sao?":
        ["Phải tự đăng ký học lại học phần đó ở các học kỳ tiếp theo"],
    "Sinh viên vi phạm quy chế thi từ mức cảnh cáo trở lên sẽ bị trừ bao nhiêu điểm rèn luyện (ĐRL)?":
        ["Trừ 10 điểm"],
    "Bài thi kiểm tra trình độ tiếng Anh đầu vào (Placement Test) do ĐHBK Hà Nội tổ chức có giá trị sử dụng trong thời gian bao lâu?":
        ["Chỉ có giá trị để phân loại trình độ đầu vào và xếp lớp học phần NNCB năm thứ nhất"],
    "Theo Thông tư số 40/2026/TT-BGDĐT được trích dẫn trong Sổ tay sinh viên, có bao nhiêu hình thức xử lý kỷ luật đối với sinh viên?":
        ["04 hình thức (Khiển trách, Cảnh cáo, Đình chỉ học tập có thời hạn, Buộc thôi học)"],
    "Các học phần Tiếng Anh cơ sở (NNCB) có được tính điểm vào GPA và CPA toàn khóa không?":
        ["Không tính vào GPA và CPA, chỉ ghi nhận điểm đạt (R) hoặc không đạt"],
    "Việc miễn giảm học phí cho sinh viên diện chế độ chính sách được thực hiện căn cứ theo văn bản quy định nào của Chính phủ?":
        ["Nghị định 238/2025/NĐ-CP"],
    "Sinh viên được cấp Học bổng Chính phủ theo Nghị định 179 có được đồng thời hưởng thêm chính sách học bổng khác từ nguồn ngân sách nhà nước không?":
        ["Không, chỉ được lựa chọn hưởng 01 chính sách học bổng từ nguồn ngân sách nhà nước"],
    "Trường hợp lớp học phần bị hủy do không đủ sĩ số tối thiểu theo quy định thì số tiền học phí sinh viên đã nộp xử lý ra sao?":
        ["Được hoàn trả hoặc trừ vào nghĩa vụ học phí của học kỳ tiếp theo"],
    "Trụ sở làm việc của Tổ hỗ trợ triển khai hệ thống iCTSV đặt tại vị trí nào trong trường?":
        ["Phòng 102 - Nhà D3-5"],
    "Sinh viên tự ý chuyển sang ngành học KHÔNG thuộc danh mục ưu tiên của Nghị định 179 sẽ bị xử lý học bổng ra sao?":
        ["Không tiếp tục được hưởng học bổng và phải hoàn trả kinh phí đã nhận thông qua cơ sở đào tạo"],
    "Địa điểm làm thủ tục và nhận Giấy xác nhận ưu đãi giáo dục đào tạo cho sinh viên diện Chế độ chính sách là phòng nào?":
        ["Phòng 102 - Nhà C1"],
    "Tiêu chuẩn về điểm rèn luyện (ĐRL) học kỳ tối thiểu để đạt Học bổng KKHT loại B (Giỏi) là bao nhiêu điểm?":
        ["ĐRL ≥ 80 điểm"],
    "Kết quả rèn luyện học kỳ đạt từ 80 điểm đến 89 điểm được xếp loại gì?":
        ["Loại Tốt"],
    "Mức điểm chữ \"P\" được áp dụng cho loại học phần nào trong chương trình đào tạo?":
        ["Các học phần chỉ yêu cầu đạt, không tính vào điểm trung bình học tập"],
    "Mức định mức cho vay tối đa theo Chương trình Vay vốn đối với sinh viên có hoàn cảnh khó khăn là bao nhiêu?":
        ["4.000.000đ / sinh viên / tháng"],
    "Quy đổi 1 TCHT học phần \"Thực tập tốt nghiệp\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?":
        ["2,5 TCHP"],
    "Sinh viên thuộc Nhóm 6 trong phân loại ngoại ngữ đầu vào sẽ nhận được quyền lợi gì?":
        ["Được miễn học toàn bộ các học phần Tiếng Anh cơ sở (từ FL1131 đến FL1135)"],
    "Ký hiệu điểm chữ \"X\" trong hệ thống quản lý học tập đại diện cho trạng thái nào?":
        ["Điểm học phần chưa hoàn thiện do thiếu dữ liệu đánh giá"],
    "Tiêu chuẩn xét Học bổng KKHT loại Khá (loại C) yêu cầu mức GPA và ĐRL tối thiểu là bao nhiêu?":
        ["GPA ≥ 2,5 và ĐRL ≥ 65"],
    "Quỹ học bổng Khuyến khích học tập (KKHT) KHÔNG xét cấp cho sinh viên đăng ký ít hơn bao nhiêu tín chỉ trong học kỳ cấp học bổng?":
        ["Đăng ký ít hơn 12 tín chỉ"],
    "Học phần \"FL1131 Tiếng Anh cơ sở 1\" có khối lượng thời lượng là bao nhiêu?":
        ["3(3-0-0-6)"],
    "Mức giá trị của Học bổng KKHT loại Giỏi (loại B) được tính như thế nào?":
        ["Bằng 1,2 lần mức học bổng loại Khá"],
    "Hành vi nào sau đây bị NGHIÊM CẤM đối với sinh viên trong giờ học trên lớp?":
        ["Tự ý ghi âm, ghi hình, chụp ảnh trong giờ học khi chưa được sự đồng ý của giáo viên"],
    "Học phí đối với các lớp Vừa làm vừa học (VLVH) có sĩ số từ 10 đến 14 sinh viên áp dụng hệ số nhân học phí là bao nhiêu?":
        ["Hệ số 1,5"],
    "Tổ tư vấn tâm lý sinh viên (tiền thân của Tổ tư vấn và hỗ trợ sinh viên SSU) được thành lập vào ngày tháng năm nào?":
        ["Ngày 26/03/2019"],
    "Theo Quy chế đào tạo 2025, điểm trung bình toàn khóa (CPA tốt nghiệp) cho chương trình Kỹ sư được tính như thế nào?":
        ["Chỉ tính dựa trên các học phần thuộc chương trình đào tạo kỹ sư đăng ký tốt nghiệp"],
    "Khung điểm CPA quy đổi sang xếp loại học lực \"Giỏi\" theo Quy chế đào tạo là bao nhiêu?":
        ["3,20 đến 3,59"],
    "Học bổng Chính phủ cấp cho người học được Nhà trường thực hiện chi trả theo định kỳ nào?":
        ["Chi trả định kỳ theo từng tháng dựa trên số tháng thực học"],
    "Quy đổi 1 TCHT học phần \"Lý thuyết / Bài tập\" hệ đại học chính quy tương ứng bằng bao nhiêu TCHP?":
        ["1,0 TCHP"],
    "Thời hạn Giám đốc Đại học ra quyết định công nhận tốt nghiệp và cấp bằng tốt nghiệp Thạc sĩ cho học viên đủ điều kiện là bao lâu?":
        ["Trong thời hạn 02 tháng tính từ thời điểm đáp ứng đủ điều kiện"],
    "Vị trí của Tiệm giặt là công cộng thuộc Ký túc xá Bách khoa được đặt ở đâu?":
        ["Nhà hồng xanh phía sau hội trường B6 (cạnh B7) - sát đường Trần Đại Nghĩa"],
    "Sinh viên không hoàn thành chương trình đào tạo Thạc sĩ được quyền đề nghị cấp chứng nhận các học phần đã tích lũy trong thời hạn bao lâu?":
        ["Trong thời hạn 5 năm kể từ ngày khóa học kết thúc"],
    "Quy tắc xếp bậc đối với chứng chỉ TOEIC 4 kỹ năng trong quy định công nhận ngoại ngữ K71 được tính dựa trên tiêu chí nào?":
        ["Mức quy đổi được xác định theo kỹ năng có mức quy đổi thấp nhất trong bốn kỹ năng"],
    "Sinh viên phải đăng ký tối thiểu bao nhiêu tín chỉ trong học kỳ lấy điểm xét học bổng để không bị loại (trừ HK1 năm thứ nhất)?":
        ["Tối thiểu 12 tín chỉ"],
    "Sinh viên là con đẻ của người hoạt động cách mạng trước ngày 01/01/1945 thuộc đối tượng hưởng chính sách học phí nào?":
        ["Miễn 100% học phí"],
    "Mức học phí áp dụng cho các lớp học phần tổ chức theo yêu cầu riêng của 01 sinh viên (lớp đặc biệt) do cấp nào quyết định?":
        ["Giám đốc Đại học Bách khoa Hà Nội quyết định"],
    "Chứng chỉ tiếng Trung HSK 6 kết hợp HSKK cao cấp tương ứng Bậc mấy trong Khung năng lực 6 bậc?":
        ["Bậc 6"],
    "Mức điểm rèn luyện (ĐRL) học kỳ 2025.2 tối thiểu đối với sinh viên Nhóm 2 đăng ký Học bổng Trần Đại Nghĩa là bao nhiêu điểm?":
        ["ĐRL ≥ 70 điểm"],
};


function normalizeText(text) {
    return String(text || "")
        .replace(/\u00a0/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}

/**
 * Find and click option by comparing value/label text in JS
 * (avoids CSS selector breakage with quotes/spaces).
 */
function clickOptionByAnswer(questionRoot, answerText) {
    const want = normalizeText(answerText);
    if (!want || !questionRoot) return false;

    const inputs = questionRoot.querySelectorAll(
        'input[type="radio"], input[type="checkbox"], input[value]',
    );

    for (const input of inputs) {
        const valueText = normalizeText(input.value);
        if (valueText && valueText === want) {
            if (!input.checked) input.click();
            return true;
        }
    }

    for (const input of inputs) {
        const label =
            (input.id && document.querySelector(`label[for="${CSS.escape(input.id)}"]`)) ||
            input.closest("label") ||
            input.parentElement;
        const labelText = normalizeText(label?.innerText || "");
        if (!labelText) continue;
        if (labelText === want || labelText.includes(want)) {
            if (!input.checked) input.click();
            return true;
        }
    }

    // Last resort: click any clickable node whose text matches the answer
    const candidates = questionRoot.querySelectorAll(
        "label, span, div, [role='radio'], [role='checkbox']",
    );
    for (const node of candidates) {
        if (node.querySelector("input")) continue; // prefer clicking the input path above
        const text = normalizeText(node.innerText);
        if (text === want) {
            node.click();
            return true;
        }
    }

    return false;
}

function autoFillFormBasedOnQuestion() {
    const matched = [];
    const failed = [];
    const unknown = [];

    const spans = document.querySelectorAll(".text-format-content");
    const seenQuestions = new Set();

    spans.forEach((span) => {
        const questionText = normalizeText(span.innerText);
        if (!questionText || seenQuestions.has(questionText)) return;
        seenQuestions.add(questionText);

        const answerEntry = answers[questionText];
        if (!answerEntry) {
            // Only report a short sample of unknowns to keep popup readable
            if (unknown.length < 8) unknown.push(questionText);
            return;
        }

        const answersList = Array.isArray(answerEntry)
            ? answerEntry
            : [answerEntry];
        const questionRoot = span.closest(
            'div[data-automation-id="questionItem"]',
        );
        if (!questionRoot) {
            failed.push(questionText);
            return;
        }

        let anyClicked = false;
        answersList.forEach((answer) => {
            if (clickOptionByAnswer(questionRoot, answer)) {
                anyClicked = true;
                console.log(`Filled "${questionText}" with "${normalizeText(answer)}"`);
            }
        });

        if (anyClicked) matched.push(questionText);
        else failed.push(questionText);
    });

    const status =
        matched.length > 0
            ? failed.length > 0
                ? "partial"
                : "ok"
            : spans.length === 0
              ? "error"
              : "partial";

    return {
        status,
        bankSize: Object.keys(answers).length,
        questionsOnPage: seenQuestions.size,
        matchedCount: matched.length,
        failedCount: failed.length,
        matched,
        failed,
        unknown,
        message:
            spans.length === 0
                ? "Không thấy câu hỏi trên trang. Hãy mở đúng Microsoft Forms rồi thử lại."
                : matched.length === 0
                  ? "Không khớp được câu nào. Form có thể đã đổi đề."
                  : `Đã điền ${matched.length}/${document.querySelectorAll('[data-automation-id="questionItem"]').length || seenQuestions.size} câu.`,
    };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action !== "fillForm") return false;

    try {
        const result = autoFillFormBasedOnQuestion();
        sendResponse(result);
    } catch (error) {
        console.error("Error filling the form:", error);
        sendResponse({
            status: "error",
            message: error instanceof Error ? error.message : "Lỗi không xác định",
            matchedCount: 0,
            failedCount: 0,
            matched: [],
            failed: [],
            unknown: [],
        });
    }

    return false;
});
