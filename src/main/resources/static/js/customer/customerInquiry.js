$(document).ready(function () {
    $("#customerInquiry").addClass("menuOn");

    const content = $('.content');
    content.css('top', '0');

    $('#addressEmailSelector').on('change', function() {
        $("#addressEmail").val(this.value);
    });

});

function sendEmail(){

    const fullEmail = $("#fullEmail");
    const idEmail = $("#idEmail");
    const addressEmail = $("#addressEmail");
    fullEmail.val(idEmail.val() +"@"+ addressEmail.val());

    const nameVal = $("#inputName").val();
    const companyNameVal = $("#inputCompanyName").val();
    const inquiryTitleVal = $("#inquiryTitle").val();
    const inquiryBodyVal = $("#inquiryBody").val();
    const fullEmailVal = fullEmail.val();

    const templateParams = {
        name: nameVal,
        companyName: companyNameVal,
        fullEmail: fullEmailVal,
        inquiryTitle: inquiryTitleVal,
        inquiryBody: inquiryBodyVal
    };

    emailjs.init("user_xEiJJbURzHCGkDn5NOrYv");
    emailjs.send('service_rw0xulz', 'template_lnrixhg', templateParams).then(function (response) {
        Swal.fire({
            title: '고객문의가 성공적으로 발송 되었습니다!',
            text: '빠른 시일내에 답변 드리겠습니다.',
            icon: 'success',
            confirmButtonText: '확인'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        })
    },function () {
        location.reload();
    })

}