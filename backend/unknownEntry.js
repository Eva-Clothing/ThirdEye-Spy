// Require depandencies

// Import local depandencies
const Unknown = require("./mongoDB-models/unknown.model")

const saveUnknown = () => {
    const unknown = new Unknown({
        imageURL: "https://firebasestorage.googleapis.com/v0/b/thirdeye-spy2.appspot.com/o/images%2FeVheYCRYL3DcQHvryhZFKY.PNG?alt=media&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjljZTVlNmY1MzBiNDkwMTFiYjg0YzhmYWExZWM1NGM1MTc1N2I2NTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGhpcmRleWUtc3B5MiIsImF1ZCI6InRoaXJkZXllLXNweTIiLCJhdXRoX3RpbWUiOjE2MTIwMjIwNDEsInVzZXJfaWQiOiJLR3ZxUnZMRUJSUGN6eDUxUjdBS1J5SG0xSFMyIiwic3ViIjoiS0d2cVJ2TEVCUlBjeng1MVI3QUtSeUhtMUhTMiIsImlhdCI6MTYxMjAyMjA0MSwiZXhwIjoxNjEyMDI1NjQxLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3RAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.DUg6MdPaLR9RhNEar_jDnSpYEr9nXX8j2JPHiVUFPy_t9Yzaxlidy4Ot_kbnKe1MfdmuhakEk1tUWrq0SrUFScsvo7146FX4rl5ibfw_zhee-HEzAW1bfHXC9feYy6LRwn5ABGGCqTT8ROTi7ttRaG7oEUQ0TnfCfzhLnP1qJw4ubl5FVCs-JKoaBZJp5EiGTOz-37c4Pcy9oss0smuPA4s6vaSiR_to1RvPYRaRDKP0PTWHtGA1fMJx7byT8MAStJz_TEPxxZcJs5Mi9bqzX5G1Iq-lx20avGfCM9j6NW1Rhp1gkHo8Q9zxLdgfZf7ptM_pnVHlv18d_X9uXEtMUA",
        time: "Just now"
    })

    unknown.save((err, result) => {
        if(result && !err) {
            console.log(result);
        } else {
            console.log(err);
        }
    }) 
}

module.exports = saveUnknown