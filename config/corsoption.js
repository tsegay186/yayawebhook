const whitelist = ['http://localhost:3000', /* add yaya walet ip address here*/] // whitelisted yaya IP addresses + locale for development
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) { // Allow requests with null origin for testing
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['POST'] // Allow only POST requests
}

export default corsOptions