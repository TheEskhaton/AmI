;(function(global){
	'use strict'
	var 

	regexps = {
            'Chrome': [ /Chrome\/(\S+)/ ],
            'Firefox': [ /Firefox\/(\S+)/ ],
            'MSIE': [ /MSIE (\S+);/ ],
            'Opera': [
                /Opera\/.*?Version\/(\S+)/,    
                /Opera\/(\S+)/                 
            ],
            'Safari': [ /Version\/(\S+).*?Safari\// ]
     },

	browserCheck = function(){
		if(typeof window !== 'undefined'){
			return true;
		}
		else{
			return false;
		}
	},
	osCheck = function(os){
		if(typeof navigator !== 'undefined'){
			return (navigator.platform.toUpperCase().indexOf(os)!==-1);
		}
		else if(typeof process !== 'undefined'){
			return (process.env.OS.toUpperCase().indexOf(os)!==-1);
		}
		else{
			return false;
		}
	},
	userAgentCheck = function(ua){
		if(typeof navigator === 'undefined'){
			return false;
		}
		else if(typeof navigator.userAgent  === 'undefined'){
			return false;
		}
		else {
			for (var i = regexps[ua].length - 1; i >= 0; i--) {
				if(navigator.userAgent.match(regexps[ua][i])){
					return true;
				}
			};
			return false;
		}
	},
	nodeCheck = function(){
		if(typeof module !== 'undefined'){
			return true;
		}
		else{
			return false;
		}
	},

	AmI = {
		browser : browserCheck(),
		node: nodeCheck(),
		/* user agent checks */
		firefox: userAgentCheck('Firefox'),
		chrome: userAgentCheck('Chrome'),
		opera: userAgentCheck('Opera'),
		ie: userAgentCheck('MSIE'),
		/* operating system checks */
		windows: osCheck('WIN'),
		linux: osCheck('LINUX'),
		mac: osCheck('MAC')
	};

	global.AmI = AmI;
	
})(this);

