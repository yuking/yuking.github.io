$('.navsign').click(function() {
    change(this.id);
    $('#myModal').modal('show');
});

$('.sign').click(function() {
    if (this.id == $('.sign_unfocus').attr('id')) {
        change(this.id);
    }

});

function change(id) {
    switch (id) {
        case 'signin':
            $('#myCarousel').carousel('next');
            $('#myCarousel').carousel('pause');
            $('#switch_bottom').animate({ left: '0px' });
            $('#signin').removeClass('sign_unfocus').addClass('sign_focus');
            $('#signup').removeClass('sign_focus').addClass('sign_unfocus');
            break;
        case 'signup':
            $('#myCarousel').carousel('prev');
            $('#myCarousel').carousel('pause');
            $('#switch_bottom').animate({ left: '120px' });
            $('#signup').removeClass('sign_unfocus').addClass('sign_focus');
            $('#signin').removeClass('sign_focus').addClass('sign_unfocus');
            break;
        case 'navsignin':
            $('#signin_form').addClass('active');
            $('#signup_form').removeClass('active');
            $('#switch_bottom').animate({ left: '0px' });
            $('#signin').removeClass('sign_unfocus').addClass('sign_focus');
            $('#signup').removeClass('sign_focus').addClass('sign_unfocus');
            break;
        case 'navsignup':
            $('#signup_form').addClass('active');
            $('#signin_form').removeClass('active');
            $('#switch_bottom').animate({ left: '120px' });
            $('#signup').removeClass('sign_unfocus').addClass('sign_focus');
            $('#signin').removeClass('sign_focus').addClass('sign_unfocus');
            break;
    }
}

$('#login_submit').click(function() {
    var username = $('#username').val();
    var password = $('#password').val();
    if (username != '' && password != '') {
        $.getJSON('login', 'username=' + username + '&password=' + password, function(res) {
            if (res.status == 0) hideLoginArea(res.data.nickname);
            else alert(res.msg);
        });
        $('#myModal').modal('hide');
    } else if (username == '') {
        alert('请输入用户名');
    } else {
        alert('请输入密码');
    }
    return false;
});

function hideLoginArea(nickname) {
    $('#nav_nickname').text(nickname);
    $('#loginarea').hide();
    $('#userarea').show();
}

$('#nav_nickname').click(function() {
    
});

$('#nav_logout').click(function() {
    $('#userarea').hide();
    $('#loginarea').show();
    $('#nav_nickname').text('用户名');
});

$('#register_submit').click(function() {
    $('#myModal').modal('hide');
    return false;
});
