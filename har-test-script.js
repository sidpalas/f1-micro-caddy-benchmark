import { check, group, sleep } from 'k6';
import http from 'k6/http';

import { Rate } from "k6/metrics";

// A custom metric to track failure rates
var failureRate = new Rate("check_failure_rate");

// Version: 1.2
// Creator: WebInspector

export let options = {
	maxRedirects: 0,
	stages: [
        { target: 1600, duration: "1m" }
    ]
};

export default function() {

	group("page_1 - https://test.devopsdirective.com/posts/2020/03/always-on-minikube/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
			"params": {
				"headers": {
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "document",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/book.min.829f7602029a29a47bf1b0c9c4bb52982089a6d13558c9433d3c8b7e38c8b3b8.css",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "style",
					"accept": "text/css,*/*;q=0.1",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/images/minikube-port-forward.png",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/svg/menu.svg",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/static/images/macbook-air.jpg",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/images/mba-power.png",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "script",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/images/kubectl-get-nodes.png",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"sec-fetch-dest": "image",
					"accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"referer": "https://test.devopsdirective.com/posts/2020/03/always-on-minikube/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/fonts/roboto-v19-latin-regular.woff2",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"origin": "https://test.devopsdirective.com",
					"sec-fetch-dest": "font",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://test.devopsdirective.com/book.min.829f7602029a29a47bf1b0c9c4bb52982089a6d13558c9433d3c8b7e38c8b3b8.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/fonts/roboto-v19-latin-700.woff2",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"origin": "https://test.devopsdirective.com",
					"sec-fetch-dest": "font",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://test.devopsdirective.com/book.min.829f7602029a29a47bf1b0c9c4bb52982089a6d13558c9433d3c8b7e38c8b3b8.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/fonts/roboto-v19-latin-300italic.woff2",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"origin": "https://test.devopsdirective.com",
					"sec-fetch-dest": "font",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://test.devopsdirective.com/book.min.829f7602029a29a47bf1b0c9c4bb52982089a6d13558c9433d3c8b7e38c8b3b8.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "https://test.devopsdirective.com/fonts/roboto-mono-v6-latin-regular.woff2",
			"params": {
				"cookies": {
					"__cfduid": "d91e15da0b422c04177b349ccb389c8e11585092295"
				},
				"headers": {
					"origin": "https://test.devopsdirective.com",
					"sec-fetch-dest": "font",
					"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"referer": "https://test.devopsdirective.com/book.min.829f7602029a29a47bf1b0c9c4bb52982089a6d13558c9433d3c8b7e38c8b3b8.css",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);

		// check() returns false if any of the specified conditions fail
		let checkRes = check(res[0], {
			"http2 is used": (r) => r.proto === "HTTP/2.0",
			"status is 200": (r) => r.status === 200,
			"content is present": (r) => r.body.indexOf("Converting an Old MacBook Into an Always-On Personal Kubernetes Cluster") !== -1,
		});
	
		// We reverse the check() result since we want to count the failures
		failureRate.add(!checkRes);

		sleep(.1);
	});

}


