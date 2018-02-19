/* !Date:20.06.2017 Copyright ©2017-2018 JavaScript Code by Cătălin Anghel-Ursu @Madness2aMaze (https://codepen.io/Madness2aMaze)

- All Rights Reserved!

MIT License

Copyright (c) 2017-2018 Cătălin Anghel-Ursu (https://github.com/Madness2aMaze/Twitch.tv-Streamer-App)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

$(document).ready(function() {
  function toggleOffToOn() {
    $(".channels li p").removeClass("invisible");
    $("<audio></audio>").attr({
      src: "https://soundbible.com/mp3/light-switch-pull-chain-daniel_simon.mp3",
      volume: 0.5,
      autoplay: "autoplay"
    });

    //$(".digital").css("box-shadow", "inset 0px 0px 10px 2px red");
    $(".knob").removeClass("glow");

    //$("iframe").attr('src',"https://player.twitch.tv/?channel=vader&muted=true");
    $(".screen").css(
      "background-image",
      'url("https://media2.giphy.com/media/iF3M9gPPCdulq/giphy.gif")'
    );
    $(this).one("click", toggleOnToOff);
    $(".knob").css("transform", "rotate(0deg)");
    $(".toggle a").attr("title", "Turn it OFF")
    $("#s0").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=esl_sc2&muted=true"
      );
      $(".digital").css(
        "background-image",
        'url("https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg")'
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    $("#s1").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=vader&muted=true"
      );
      $(".digital").css(
        "background-image",
        'url("https://static-cdn.jtvnw.net/jtv_user_pictures/vader-profile_image-e591bfc7b87113ed-300x300.jpeg")'
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    $("#s2").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=fairlight_excalibur&muted=true"
      );
      $(".digital").css(
        "background-image",
        'url("https://static-cdn.jtvnw.net/jtv_user_pictures/fairlight_excalibur-profile_image-7f3f78df46862796-300x300.jpeg")'
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    $("#s3").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=freecodecamp&muted=true"
      );
      $(".digital").css(
        "background-image",
        'url("https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png")'
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    $("#s4").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=comster404&muted=true"
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    $("#s5").click(function() {
      $("iframe").attr(
        "src",
        "https://player.twitch.tv/?channel=beyondthesummit&muted=true"
      );
      $(".digital").css(
        "background-image",
        'url("https://static-cdn.jtvnw.net/jtv_user_pictures/beyondthesummit-profile_image-d3d31e2a3b0f1e0a-300x300.jpeg")'
      );
      $(".screen").css("background-image", 'url("")');
      $("#stream").removeClass("invisible");
    });

    //============== Successive api calls for all channels ================

    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/ESL_SC2",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/ESL_SC2",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(channel) {
              console.log(channel.stream);
              if (channel.stream == null) {
                $("#s0").html("Offline");
                $("#r0").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url: "https://api.twitch.tv/kraken/channels/ESL_SC2",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s0").html(data.status);
                    $("#L0").attr("href", data.url);
                    console.log(data);
                    $("#s0").click(function() {});
                  }
                });
              }
            }
          });
        } else {
          $("#s0").html("Channel disconnected");
          $("#r0").css("background", "#646455");
          $("#s0").css("color", "black");
          $("#s0").css("font-style", "italic");
        }
      }
    });

    //-----------------------------------------------------------

    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/Vader",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/Vader",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(channel) {
              console.log(channel.stream);
              if (channel.stream == null) {
                $("#s1").html("Offline");
                $("#r1").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url: "https://api.twitch.tv/kraken/channels/Vader",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s1").html(data.status);
                    $("#L1").attr("href", data.url);
                    console.log(data);
                  }
                });
              }
            }
          });
        } else {
          $("#s1").html("Channel disconnected");
          $("#r1").css("background", "#646455");
          $("#s1").css("color", "black");
          $("#s1").css("font-style", "italic");
        }
      }
    });

    //-----------------------------------------------------------

    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/Fairlight_Excalibur",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/Fairlight_Excalibur",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(channel) {
              console.log(channel.stream);
              if (channel.stream == null) {
                $("#s2").html("Offline");
                $("#r2").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url:
                  "https://api.twitch.tv/kraken/channels/Fairlight_Excalibur",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s2").html(data.status);
                    $("#L2").attr("href", data.url);
                    console.log(data);
                  }
                });
              }
            }
          });
        } else {
          $("#s2").html("Channel disconnected");
          $("#r2").css("background", "#646455");
          $("#s2").css("color", "black");
          $("#s2").css("font-style", "italic");
        }
      }
    });

    //-----------------------------------------------------------

    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/freecodecamp",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/freecodecamp",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(channel) {
              console.log(channel.stream);
              if (channel.stream == null) {
                $("#s3").html("Offline");
                $("#r3").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url: "https://api.twitch.tv/kraken/channels/freecodecamp",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s3").html(data.status);
                    $("#L3").attr("href", data.url);
                    console.log(data);
                  }
                });
              }
            }
          });
        } else {
          $("#s3").html("Channel disconnected");
          $("#r3").css("background", "#646455");
          $("#s3").css("color", "black");
          $("#s3").css("font-style", "italic");
        }
      }
    });

    //-----------------------------------------------------------
    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/Comster404",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/Comster404",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(streams) {
              console.log(streams.status);
              if (streams.stream == null) {
                $("#s4").html("Offline");
                $("#r4").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url: "https://api.twitch.tv/kraken/channels/Comster404",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s4").html(data.status);
                    $("#L4").attr("href", data.url);
                    //console.log(data);
                  }
                });
              }
            }
          });
        } else {
          $("#s4").html("Channel disconnected");
          $("#r4").css("background", "#646455");
          $("#s4").css("color", "black");
          $("#s4").css("font-style", "italic");
        }
      }
    });

    //-----------------------------------------------------------

    $.ajax({
      type: "GET",
      url: "https://wind-bow.gomix.me/twitch-api/users/BeyondTheSummit",
      dataType: "jsonp",
      success: function(user) {
        console.log(user);
        if (user.status !== 404) {
          $.ajax({
            type: "GET",
            url: "https://api.twitch.tv/kraken/streams/BeyondTheSummit",
            headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
            success: function(streams) {
              console.log(streams.status);
              if (streams.stream == null) {
                $("#s5").html("Offline");
                $("#r5").css("background", "#646455");
              } else {
                $.ajax({
                  type: "GET",
                  url: "https://api.twitch.tv/kraken/channels/BeyondTheSummit",
                  headers: { "Client-ID": "rjv4qsz3entze9s5069zc4qhlu37m7" },
                  success: function(data) {
                    $("#s5").html(data.status);
                    $("#L5").attr("href", data.url);
                    //console.log(data);
                  }
                });
              }
            }
          });
        } else {
          $("#s5").html("Channel disconnected");
          $("#r5").css("background", "#646455");
          $("#s5").css("color", "black");
          $("#s5").css("font-style", "italic");
        }
      }
    });

    //=======================================================================
  }
  function toggleOnToOff() {
    $("<audio></audio>").attr({
      src: "https://soundbible.com/mp3/light-switch-pull-chain-daniel_simon.mp3",
      volume: 0.5,
      autoplay: "autoplay"
    });
    $(".toggle a").attr("title", "Turn it ON!")

    //$(".digital").css("box-shadow", "inset 0px 0px 5px 2px rgb(127, 62, 51)");
    $(".digital").css("background-image", 'url("")');
    $(".screen").css("background-image", "");
    $(this).one("click", toggleOffToOn);
    $(".knob").css("transform", "rotate(-90deg)");
    $("#stream").addClass("invisible");
    $(".channels li p").addClass("invisible");
    $("iframe").attr("src", "");
    $(".knob").addClass("glow");
  }

  $(".toggle").one("click", toggleOffToOn);
});
