<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <link rel=" shortcut icon" href="/resources/image/favicon/favicon.ico" style="user-select: auto;">
    <style type="text/css">
        @-ms-viewport {
            width: device-width
        }

        @-o-viewport {
            width: device-width
        }

        @viewport {
            width: device-width
        }
    </style>

    <title>sample</title>
    <link rel="stylesheet" href="/resources/css/fullpage/fullpage.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">


    <!--datetimePicker-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css"/>

    <link rel="stylesheet" href="/resources/css/index.css">
</head>

<body>

<!--jquery-->
<script type="text/javascript" src="/resources/js/jquery/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="/resources/js/jquery/jquery-ui.min.js"></script>

<!--kakao address search-->
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<!--datetimePicker-->
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.3/moment-with-locales.min.js "></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.0/locale/ko.js"></script>
<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js ">
</script>

<!--naverMap-->
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=otvrcq5unf">
</script>
<script type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=otvrcq5unf&submodules=geocoder"></script>

<!--swiper-->
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!--thisPage-->
<script type="text/javascript" src="/resources/js/index.js"></script>

<div class="background">
</div>

<!--swiper-->
<script>
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal', // 수직, 수평 수평 : vertical
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.next_btn',
            prevEl: '.prev_btn',
        },

    })
</script>

<!--address search API-->
<script>
    function sample3_execDaumPostcode(id_val) {
        var target = id_val + "Search";
        var val_box = id_val + "Point";
        var element_wrap = document.getElementById(target);

        // 현재 scroll 위치를 저장해놓는다.
        var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function (data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                //주소 정보를 해당 필드에 넣는다.
                document.getElementById(val_box).value = addr;

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_wrap.style.display = 'none';

                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll;

                $("#" + val_box).css("display", "inline-block");
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize: function (size) {
                element_wrap.style.height = size.height + 'px';
            },
            width: '100%',
            height: '100%'
        }).embed(element_wrap);

        // iframe을 넣은 element를 보이게 한다.
        element_wrap.style.display = 'block';
    }
</script>

<!--datePicker-->
<script>
    $(function () {
        $('#startDate').datetimepicker({
            widgetPositioning: {
                vertical: 'bottom'
            }
        });
    });

    $(function () {
        $('#endDate').datetimepicker({
            widgetPositioning: {
                vertical: 'bottom'
            }
        });
    });
</script>

<!--naver map API-->
<script>
    //map 설정
    var mapOptions = {
        center: new naver.maps.LatLng(37.22021228176814, 127.0181165710533),
        zoom: 16,
        minZoom: 16,
        maxZoom: 16,
        zoomControl: false,
        zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
        },
        mapTpyeControl: true
    }

    //map 생성
    var map = new naver.maps.Map('map', mapOptions);

    //map marker 생성
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.22021228176814, 127.0181165710533),
        map: map
    });

    //infoWindow
    var contentString = [
        '<div style="width:200px" class="map_info">',
        '   <h3 style="font-size:14px">주식회사 스마일관광여행사</h3>',
        '   <p style="font-size:11px">경기도 화성시 태안로 385-33</p>',
        '   <p style="font-size:11px">(황계동 152-128)</p>',
        '</div>'
    ].join('');

    var infoWindow = new naver.maps.InfoWindow({
        content: contentString
    });

    infoWindow.open(map, marker);
</script>
</body>
</html>