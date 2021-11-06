const navBtn = document.querySelector(".navBtn");
const sideBar = document.querySelector(".side-bar");
const filters = document.querySelector(".filters");
const videos = document.querySelector(".video-container");

navBtn.addEventListener("click", function(){
    sideBar.classList.toggle("active-sideBar");
    filters.classList.toggle("active-filters");
    videos.classList.toggle("active-video");
})

const mediaContents = [
    {
        thumbnail: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        avatarChanel: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        linkVideo: 'https://www.youtube.com/watch?v=a2Nr6bubN8Y',
        title: 'KIẾM KHÁCH SỐ 1 | THỎ BẢY MÀU',
        nameChanel: 'THỎ BẢY MÀU',
        views: '1,9 Tr lượt xem',
        times: '1 tuần trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/xypzmu5mMPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoUVEAWnnur4AjKHQXaDHYRSuHJg',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=xypzmu5mMPY',
        title: 'SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '136 Tr lượt xem',
        times: '7 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/psZ1g9fMfeo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5USlaxYg8GJdf92jT-yWY9aIOxw',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=psZ1g9fMfeo',
        title: 'SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/-vtBgNxMyZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUrypfLccake3a5NZEn4jgkojI3w',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=-vtBgNxMyZI',
        title: 'CHẠY NGAY ĐI (ONIONN REMIX)| RUN NOW (ONIONN REMIX) | SƠN TÙNG M-TP | Official Music Video',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/KKc_RMln5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOcBa3yyAadGHbRtHNv7cimOpbfA',
        avatarChanel: 'https://yt3.ggpht.com/Vai9EFHgVVYHlAax-zamzZUTqXV3pfBqxkHiMwafvtIwBDTTZfqKkiqoRmxT2I6bEJeL03AKgg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=KKc_RMln5UY',
        title: 'Đen - Lối Nhỏ ft. Phương Anh Đào (M/V)',
        nameChanel: 'Đen Vâu Oficial',
        views: '122 Tr lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Pkh8UtuejGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlEom4rIygiHjjwOiSd0at0nRFPg',
        avatarChanel: 'https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=Pkh8UtuejGw',
        title: 'Shawn Mendes, Camila Cabello - Señorita',
        nameChanel: 'Shawn Mendes',
        views: '1,3 T lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        avatarChanel: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        linkVideo: 'https://www.youtube.com/watch?v=a2Nr6bubN8Y',
        title: 'KIẾM KHÁCH SỐ 1 | THỎ BẢY MÀU',
        nameChanel: 'THỎ BẢY MÀU',
        views: '1,9 Tr lượt xem',
        times: '1 tuần trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/xypzmu5mMPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoUVEAWnnur4AjKHQXaDHYRSuHJg',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=xypzmu5mMPY',
        title: 'SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '136 Tr lượt xem',
        times: '7 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/psZ1g9fMfeo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5USlaxYg8GJdf92jT-yWY9aIOxw',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=psZ1g9fMfeo',
        title: 'SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/-vtBgNxMyZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUrypfLccake3a5NZEn4jgkojI3w',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=-vtBgNxMyZI',
        title: 'CHẠY NGAY ĐI (ONIONN REMIX)| RUN NOW (ONIONN REMIX) | SƠN TÙNG M-TP | Official Music Video',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/KKc_RMln5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOcBa3yyAadGHbRtHNv7cimOpbfA',
        avatarChanel: 'https://yt3.ggpht.com/Vai9EFHgVVYHlAax-zamzZUTqXV3pfBqxkHiMwafvtIwBDTTZfqKkiqoRmxT2I6bEJeL03AKgg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=KKc_RMln5UY',
        title: 'Đen - Lối Nhỏ ft. Phương Anh Đào (M/V)',
        nameChanel: 'Đen Vâu Oficial',
        views: '122 Tr lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Pkh8UtuejGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlEom4rIygiHjjwOiSd0at0nRFPg',
        avatarChanel: 'https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=Pkh8UtuejGw',
        title: 'Shawn Mendes, Camila Cabello - Señorita',
        nameChanel: 'Shawn Mendes',
        views: '1,3 T lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        avatarChanel: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        linkVideo: 'https://www.youtube.com/watch?v=a2Nr6bubN8Y',
        title: 'KIẾM KHÁCH SỐ 1 | THỎ BẢY MÀU',
        nameChanel: 'THỎ BẢY MÀU',
        views: '1,9 Tr lượt xem',
        times: '1 tuần trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/xypzmu5mMPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoUVEAWnnur4AjKHQXaDHYRSuHJg',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=xypzmu5mMPY',
        title: 'SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '136 Tr lượt xem',
        times: '7 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/psZ1g9fMfeo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5USlaxYg8GJdf92jT-yWY9aIOxw',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=psZ1g9fMfeo',
        title: 'SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/-vtBgNxMyZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUrypfLccake3a5NZEn4jgkojI3w',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=-vtBgNxMyZI',
        title: 'CHẠY NGAY ĐI (ONIONN REMIX)| RUN NOW (ONIONN REMIX) | SƠN TÙNG M-TP | Official Music Video',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/KKc_RMln5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOcBa3yyAadGHbRtHNv7cimOpbfA',
        avatarChanel: 'https://yt3.ggpht.com/Vai9EFHgVVYHlAax-zamzZUTqXV3pfBqxkHiMwafvtIwBDTTZfqKkiqoRmxT2I6bEJeL03AKgg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=KKc_RMln5UY',
        title: 'Đen - Lối Nhỏ ft. Phương Anh Đào (M/V)',
        nameChanel: 'Đen Vâu Oficial',
        views: '122 Tr lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Pkh8UtuejGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlEom4rIygiHjjwOiSd0at0nRFPg',
        avatarChanel: 'https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=Pkh8UtuejGw',
        title: 'Shawn Mendes, Camila Cabello - Señorita',
        nameChanel: 'Shawn Mendes',
        views: '1,3 T lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        avatarChanel: 'https://i.ytimg.com/vi/a2Nr6bubN8Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4sDUleWnKOgoCzUzJoSqDApR-Yg',
        linkVideo: 'https://www.youtube.com/watch?v=a2Nr6bubN8Y',
        title: 'KIẾM KHÁCH SỐ 1 | THỎ BẢY MÀU',
        nameChanel: 'THỎ BẢY MÀU',
        views: '1,9 Tr lượt xem',
        times: '1 tuần trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/xypzmu5mMPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoUVEAWnnur4AjKHQXaDHYRSuHJg',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=xypzmu5mMPY',
        title: 'SƠN TÙNG M-TP | MUỘN RỒI MÀ SAO CÒN | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '136 Tr lượt xem',
        times: '7 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/psZ1g9fMfeo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5USlaxYg8GJdf92jT-yWY9aIOxw',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=psZ1g9fMfeo',
        title: 'SƠN TÙNG M-TP | CHÚNG TA CỦA HIỆN TẠI | OFFICIAL MUSIC VIDEO',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/-vtBgNxMyZI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUrypfLccake3a5NZEn4jgkojI3w',
        avatarChanel: 'https://yt3.ggpht.com/ytc/AKedOLQUTCVb5f5qA8l-tqhkkOI_I4zJQ2Wu-6wTUyJTYg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=-vtBgNxMyZI',
        title: 'CHẠY NGAY ĐI (ONIONN REMIX)| RUN NOW (ONIONN REMIX) | SƠN TÙNG M-TP | Official Music Video',
        nameChanel: 'Sơn Tùng M-TP Official',
        views: '86 Tr lượt xem',
        times: '11 tháng trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/KKc_RMln5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOcBa3yyAadGHbRtHNv7cimOpbfA',
        avatarChanel: 'https://yt3.ggpht.com/Vai9EFHgVVYHlAax-zamzZUTqXV3pfBqxkHiMwafvtIwBDTTZfqKkiqoRmxT2I6bEJeL03AKgg=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=KKc_RMln5UY',
        title: 'Đen - Lối Nhỏ ft. Phương Anh Đào (M/V)',
        nameChanel: 'Đen Vâu Oficial',
        views: '122 Tr lượt xem',
        times: '2 năm trước'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Pkh8UtuejGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlEom4rIygiHjjwOiSd0at0nRFPg',
        avatarChanel: 'https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s88-c-k-c0x00ffffff-no-rj',
        linkVideo: 'https://www.youtube.com/watch?v=Pkh8UtuejGw',
        title: 'Shawn Mendes, Camila Cabello - Señorita',
        nameChanel: 'Shawn Mendes',
        views: '1,3 T lượt xem',
        times: '2 năm trước'
    },
]

const videoHTML = mediaContents.map(function(content, index){
    return `
        <div class="video">
            <div class="thumbnail">
                <a href="${content.linkVideo}">
                    <img src="${content.thumbnail} " alt="">
                </a>
            </div>
            <div class="content">
                <img src="${content.avatarChanel}" class="channel-icon" alt="">
                <div class="info">
                    <a href="${content.linkVideo}">
                        <h4 class="title">${content.title}</h4>
                    </a>
                    <p class="channel-name">${content.nameChanel}</p>
                    <span class="date">${content.views} &bull; ${content.times}</span>
                </div>
            </div>
        </div>
    `
})

videos.innerHTML = videoHTML.join('');

