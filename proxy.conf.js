const PROXY_CONFIG = [
  {
   "context": ["/ws_api"],
   "target": "http://localhost:9000",
   "secure": false,
   "ws": true
  }
]

module.exports = PROXY_CONFIG;

