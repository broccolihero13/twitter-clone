$(document).ready(function() {
  var profileName = prompt('What is your profile Name?');
  var handle = prompt('What is your Twitter handle?');
    var submitOn = true;
    $('#profileName').html(profileName);
    $('#userName').html('@' + handle);
    $('#tweet-controls').hide();
    $('#dashboard #tweet-content .tweet-compose').on('focusin', function() {
        $('#tweet-controls').show('slide');
        $('#dashboard #tweet-content .tweet-compose').css('height', '150px')
    })
    $(document).on('keypress keydown keyup', function() {
        var characters = 140;
        if ($('.tweet-compose').val().length > 0) {
            characters = characters - $('.tweet-compose').val().length;
            $('#char-count').html(characters);
        }
        if (characters < 11) {
            $('#char-count').css('color', 'red');
        }
        if (characters > 10) {
            $('#char-count').css('color', 'black');
        }
        if (characters < 1) {
            $('#tweet-submit').css({
                "background-color": "rgba(33, 33, 33, 0.3)",
                "background-image": "linear-gradient(gray, black)"
            });
            submitOn = false;
        }
        if (characters > 0) {
            $('#tweet-submit').css({
                "background-color": "",
                "background-image": ""
            });
            submitOn = true;
        } else {
            $('#char-count').html(characters);
        }
    })
    $('#tweet-submit').on('click', function() {
        if (submitOn === true) {
            $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">' + profileName + '</strong><span class="username"> @' + handle +  '</span><p class="tweet-text">' + $('#dashboard #tweet-content .tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>')
            $('#dashboard #tweet-content .tweet-compose').val('');
        }
    })
})
