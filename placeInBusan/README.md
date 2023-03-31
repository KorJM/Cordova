<h1>2. MyApp (부산 관광지 소개 앱)</h1>
<img width="270" alt="스크린샷 2023-03-30 오후 10 21 30" src="https://user-images.githubusercontent.com/114234223/228849582-7097cb36-b123-4441-8fcb-370220e63d94.png">
jQuery : 1.11.1 <br>
jQuery-mobile : 1.4.5 <br>
cordova : 11.1.0<br>
tailwind css : 3.1.4 <br>
fancybox : 3.5.7
<br><br>
<img width="303" alt="스크린샷 2023-03-30 오후 11 27 04" src="https://user-images.githubusercontent.com/114234223/228868529-a11cc809-6468-4b18-9e0a-b3d017733b28.png"><br>
cordova plugin으로 splashscreen을 적용하였습니다.<br>
앱 실행 시 2초동안 splashscreen이 적용되고 이후 메인페이지로 넘어갑니다.<br><br>
![ezgif-5-95990ee0e8](https://user-images.githubusercontent.com/114234223/228880236-c0f9200d-62f0-40a3-968c-1599e65dd177.gif) <br>
js의 setInterval()를 사용해 자동 이미지 슬라이더를 만들었습니다.<br>
하단의 탭바는 스크롤 길이와 상관없이 화면 하단에 고정되도록 하였습니다.<br>
탭바의 기능으로는<br>
Home : 메인 페이지로 이동<br>
Chart : 통계 차트 팝업 <br>
돋보기 : 웹상에서는 구글 사이트가 팝업 형식으로 떴으나 모바일에선 브라우저를 넣는 과정에 실패해 구글 앱이 실행되는 기능입니다.<br>
Refresh : 새로고침<br>
Info : 개발 정보 팝업 <br><br>
<img width="306" alt="스크린샷 2023-03-30 오후 11 46 48" src="https://user-images.githubusercontent.com/114234223/228876555-34c4d928-08d6-4283-933b-e9a188c12878.png"><br>
탭바에서 chart누르면 부산 관광지 선호도 통계를 js chart로 그린 팝업이 생성됩니다.<br>
공공데이터포털에서 조사한 통계입니다.<br><br>
<img width="306" alt="스크린샷 2023-03-30 오후 11 47 02" src="https://user-images.githubusercontent.com/114234223/228877288-92eb6627-1072-49db-9553-6a349a1fed23.png"> <br>
info를 누르면 개발 정보를 적은 팝업이 생성됩니다.<br>
READ MORE ->을 누르면 현재 깃허브 사이트로 이동됩니다.<br><br>
<img width="308" alt="스크린샷 2023-03-31 오전 12 14 07" src="https://user-images.githubusercontent.com/114234223/228883006-3cd66f00-eceb-432f-88c2-4a1364f921f1.png">
 <br>
장소 사진을 클릭하면 해당 장소의 설명과 함께 사진이 첨부된 페이지로 넘어갑니다 <br>
이곳에서도 하단 탭바는 똑같이 작동합니다<br><br>
<img width="306" alt="스크린샷 2023-03-30 오후 11 48 50" src="https://user-images.githubusercontent.com/114234223/228881026-2c8d6b9b-014a-4581-8583-2e0d3616826e.png">
<br>컨텐츠를 넣는 div에 스크롤 기능을 추가하였습니다.<br><br>
<img width="306" alt="스크린샷 2023-03-30 오후 11 49 14" src="https://user-images.githubusercontent.com/114234223/228881268-ec3521ac-559f-43b9-bd65-92242a29b66c.png">
<br>fancybox를 사용하여 이미지 클릭 시 확대 팝업이 생성되도록 하였습니다.<br><br><br>------------------------------------------------------<br>
<작동 gif><br>
![ezgif-5-46d3925754](https://user-images.githubusercontent.com/114234223/228886733-22be2b60-ad50-4bc9-a928-13acb7ef740f.gif)
