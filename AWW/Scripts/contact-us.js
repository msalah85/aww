var OnSuccess = function () {
    // refresh the parent window
    $("#Name").val('');
    $("#Email").val('');
    $("#Subject").val('');
    $("#Message").val('');

    var lastClass = $("#result").attr('class').split(' ').slice(-1);
    var strLastClass = lastClass.toString();
    var toAddClass = strLastClass.substring(0, strLastClass.length - 3);

    $("#result").removeClass().addClass("alert alert-success show").addClass(toAddClass);
    $("#result").fadeTo(2000, 500).slideUp(500, function () {
        $("#result").slideUp(500);
        $("#result").removeClass().addClass("alert alert-success hide").addClass(toAddClass);
    });
    showMessage('success', 'تم بنجاح:', messages.messageSuccessSent);

    // reset captcha
    $('.g-recaptcha-response').val('');
    grecaptcha.reset();
};

// validate captcha first
$('#btnsave').click(function (e) {
    var
        formEl = $(this).closest('form'), // contact form elemnt
        isValidRecaptcha = grecaptcha.getResponse(); // check captcha response.

    if (!validateForm(formEl)) {
        e.preventDefault();
        // show form validation error message.
        showMessage('danger', 'خطأ:', messages.formNotValidated);
        return;
    }

    if (isValidRecaptcha === '') {
        e.preventDefault();
        // show recaptcha error message.
        showMessage('danger', 'خطأ:', messages.reCaptchaFirst);
        return;
    }
});
