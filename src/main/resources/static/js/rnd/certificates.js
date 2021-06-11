$(document).ready(function () {

    for (let i = 1; i<21; i++){
        textManager(i);
    }
});

function textManager(index) {
    let nowContent =  $('.content'+index);

    switch (index) {
        case 1: nowContent.text(_syNa4_);
        break;

        case 2: nowContent.text(_syNb4A_);
            break;

        case 3: nowContent.text(_syNb4B_);
            break;

        case 4: nowContent.text(_syG16A_);
            break;

        case 5: nowContent.text(_designRegistrationCertificateA_);
            break;

        case 6: nowContent.text(_designRegistrationCertificateB_);
            break;

        case 7: nowContent.text(_designPropagandaCard_);
            break;

        case 8:nowContent.text(_stdCodeMembershipCard_);
            break;

        case 9: nowContent.text(_patentMultiTap_);
            break;

        case 10: nowContent.text(_patentMultiTapcase_);
            break;

        case 11: nowContent.text(_patentConnectionTerminal_);
            break;

        case 12: nowContent.text(_designProspectiveCompany_);
            break;

        case 13: nowContent.text(_Nb3Usb_);
            break;

        case 14: nowContent.text(_brandRegistrationSupertab_);
            break;

        case 15: nowContent.text(_brandRegistrationCertificatePicoTap_);
            break;

        case 16: nowContent.text(_brandRegistrationCertificateMultiTap_);
            break;

        case 17: nowContent.text(_serviceTicketRegistrationSupertab_);
            break;

        case 18: nowContent.text(_serviceTableRegistrationCertificatePicoTab_);
            break;

        case 19: nowContent.text(_practicalModelRegistrationCertificate_);
            break;

        case 20: nowContent.text(_syNa3Usb_);
            break;


    }
}